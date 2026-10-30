<?php
// backend/api/social/comment.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$method = $_SERVER['REQUEST_METHOD'];
$input = getJsonInput();
$db = Database::getConnection();

if ($method === 'POST') {
    $postId = (int)($input['post_id'] ?? 0);
    $content = trim($input['content'] ?? '');

    if ($postId <= 0 || empty($content)) {
        jsonError('Post ID and comment text are required.', 422);
    }

    // Verify post
    $stmt = $db->prepare("SELECT user_id, title FROM posts WHERE id = :pid LIMIT 1");
    $stmt->execute(['pid' => $postId]);
    $post = $stmt->fetch();

    if (!$post) {
        jsonError('Post not found.', 404);
    }

    $stmt = $db->prepare("
        INSERT INTO comments (user_id, post_id, content)
        VALUES (:uid, :pid, :content)
    ");
    $stmt->execute([
        'uid'     => $userId,
        'pid'     => $postId,
        'content' => $content
    ]);
    $commentId = (int)$db->lastInsertId();

    $db->prepare("UPDATE posts SET comments_count = comments_count + 1 WHERE id = :pid")->execute(['pid' => $postId]);

    // Notify author
    if ((int)$post['user_id'] !== $userId) {
        $actorName = $user['full_name'] ?: $user['username'];
        $titleSnippet = mb_strimwidth($post['title'], 0, 30, '...');
        $msg = "{$actorName} commented on \"{$titleSnippet}\"";
        
        $db->prepare("
            INSERT INTO notifications (user_id, actor_id, type, post_id, message)
            VALUES (:uid, :actor, 'comment', :pid, :msg)
        ")->execute([
            'uid'   => (int)$post['user_id'],
            'actor' => $userId,
            'pid'   => $postId,
            'msg'   => $msg
        ]);
    }

    // Return new comment item
    $stmt = $db->prepare("
        SELECT c.id, c.user_id, c.content, c.created_at,
               u.username, pr.full_name, pr.profile_photo
        FROM comments c
        JOIN users u ON u.id = c.user_id
        LEFT JOIN profiles pr ON pr.user_id = u.id
        WHERE c.id = :cid
    ");
    $stmt->execute(['cid' => $commentId]);
    $newComment = $stmt->fetch();
    $newComment['is_own'] = true;

    jsonSuccess('Comment posted successfully!', ['comment' => $newComment], 201);
}

if ($method === 'PUT') {
    $commentId = (int)($input['comment_id'] ?? 0);
    $content = trim($input['content'] ?? '');

    if ($commentId <= 0 || empty($content)) {
        jsonError('Comment ID and updated content are required.', 422);
    }

    $stmt = $db->prepare("SELECT user_id FROM comments WHERE id = :cid LIMIT 1");
    $stmt->execute(['cid' => $commentId]);
    $comm = $stmt->fetch();

    if (!$comm) {
        jsonError('Comment not found.', 404);
    }
    if ((int)$comm['user_id'] !== $userId && $user['role'] !== 'admin') {
        jsonError('Unauthorized to edit this comment.', 403);
    }

    $stmt = $db->prepare("UPDATE comments SET content = :c, updated_at = NOW() WHERE id = :cid");
    $stmt->execute(['c' => $content, 'cid' => $commentId]);

    jsonSuccess('Comment updated successfully.');
}

if ($method === 'DELETE') {
    $commentId = (int)($input['comment_id'] ?? $_GET['comment_id'] ?? 0);
    if ($commentId <= 0) {
        jsonError('Comment ID is required.', 400);
    }

    $stmt = $db->prepare("SELECT user_id, post_id FROM comments WHERE id = :cid LIMIT 1");
    $stmt->execute(['cid' => $commentId]);
    $comm = $stmt->fetch();

    if (!$comm) {
        jsonError('Comment not found.', 404);
    }

    // Allow author of comment or admin
    if ((int)$comm['user_id'] !== $userId && $user['role'] !== 'admin') {
        jsonError('Unauthorized to delete this comment.', 403);
    }

    $db->prepare("DELETE FROM comments WHERE id = :cid")->execute(['cid' => $commentId]);
    $db->prepare("UPDATE posts SET comments_count = GREATEST(0, comments_count - 1) WHERE id = :pid")->execute(['pid' => $comm['post_id']]);

    jsonSuccess('Comment deleted.');
}

jsonError('Method not allowed', 405);
