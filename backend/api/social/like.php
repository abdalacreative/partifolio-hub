<?php
// backend/api/social/like.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();
$postId = (int)($input['post_id'] ?? 0);

if ($postId <= 0) {
    jsonError('Post ID is required.', 400);
}

$db = Database::getConnection();

// Check post
$stmt = $db->prepare("SELECT user_id, title FROM posts WHERE id = :pid LIMIT 1");
$stmt->execute(['pid' => $postId]);
$post = $stmt->fetch();

if (!$post) {
    jsonError('Post not found.', 404);
}

$postAuthorId = (int)$post['user_id'];

// Check if already liked
$stmt = $db->prepare("SELECT id FROM likes WHERE user_id = :uid AND post_id = :pid LIMIT 1");
$stmt->execute(['uid' => $userId, 'pid' => $postId]);
$existing = $stmt->fetch();

$isLiked = false;

if ($existing) {
    // Unlike
    $db->prepare("DELETE FROM likes WHERE user_id = :uid AND post_id = :pid")->execute(['uid' => $userId, 'pid' => $postId]);
    $db->prepare("UPDATE posts SET likes_count = GREATEST(0, likes_count - 1) WHERE id = :pid")->execute(['pid' => $postId]);
    $isLiked = false;
} else {
    // Like
    $db->prepare("INSERT INTO likes (user_id, post_id) VALUES (:uid, :pid)")->execute(['uid' => $userId, 'pid' => $postId]);
    $db->prepare("UPDATE posts SET likes_count = likes_count + 1 WHERE id = :pid")->execute(['pid' => $postId]);
    $isLiked = true;

    // Send notification if not own post
    if ($postAuthorId !== $userId) {
        $actorName = $user['full_name'] ?: $user['username'];
        $titleSnippet = mb_strimwidth($post['title'], 0, 30, '...');
        $msg = "{$actorName} liked your post \"{$titleSnippet}\"";
        
        $db->prepare("
            INSERT INTO notifications (user_id, actor_id, type, post_id, message)
            VALUES (:uid, :actor, 'like', :pid, :msg)
        ")->execute([
            'uid'   => $postAuthorId,
            'actor' => $userId,
            'pid'   => $postId,
            'msg'   => $msg
        ]);
    }
}

// Get updated count
$stmt = $db->prepare("SELECT likes_count FROM posts WHERE id = :pid");
$stmt->execute(['pid' => $postId]);
$newCount = (int)$stmt->fetchColumn();

jsonSuccess($isLiked ? 'Liked post' : 'Unliked post', [
    'liked'       => $isLiked,
    'likes_count' => $newCount
]);
