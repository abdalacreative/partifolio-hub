<?php
// backend/api/posts/get.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$postId = (int)($_GET['id'] ?? 0);
if ($postId <= 0) {
    jsonError('Invalid post ID.', 400);
}

$viewer = getAuthenticatedUser(false);
$viewerId = $viewer ? (int)$viewer['user_id'] : 0;

$db = Database::getConnection();

// Record view and increment views_count
$db->prepare("UPDATE posts SET views_count = views_count + 1 WHERE id = :id")->execute(['id' => $postId]);
$ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$db->prepare("INSERT INTO views (post_id, user_id, ip_address) VALUES (:pid, :uid, :ip)")->execute([
    'pid' => $postId,
    'uid' => $viewerId ?: null,
    'ip'  => $ip
]);

// Fetch post details
$stmt = $db->prepare("
    SELECT p.id, p.user_id, p.category_id, p.title, p.description, p.post_type,
           p.status, p.visibility, p.views_count, p.likes_count, p.comments_count, p.created_at, p.updated_at,
           c.name as category_name, c.slug as category_slug,
           u.username, pr.full_name, pr.professional_title, pr.profile_photo, pr.location,
           proj.project_url, proj.github_url, proj.technologies
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    LEFT JOIN projects proj ON proj.post_id = p.id
    WHERE p.id = :pid
    LIMIT 1
");
$stmt->execute(['pid' => $postId]);
$post = $stmt->fetch();

if (!$post) {
    jsonError('Post not found.', 404);
}

// Check visibility
if ($post['visibility'] === 'private' && $post['user_id'] !== $viewerId && ($viewer['role'] ?? '') !== 'admin') {
    jsonError('This post is private.', 403);
}

// Media
$mediaStmt = $db->prepare("SELECT id, media_url, media_type, sort_order FROM post_media WHERE post_id = :pid ORDER BY sort_order ASC");
$mediaStmt->execute(['pid' => $postId]);
$post['media'] = $mediaStmt->fetchAll();

// Project gallery screenshots if project
if ($post['post_type'] === 'project') {
    $projMediaStmt = $db->prepare("
        SELECT pm.media_url, pm.sort_order 
        FROM project_media pm 
        JOIN projects pr ON pr.id = pm.project_id 
        WHERE pr.post_id = :pid 
        ORDER BY pm.sort_order ASC
    ");
    $projMediaStmt->execute(['pid' => $postId]);
    $post['project_gallery'] = $projMediaStmt->fetchAll();
}

// Tags
$tagStmt = $db->prepare("
    SELECT t.id, t.name, t.slug 
    FROM post_tags pt 
    JOIN tags t ON t.id = pt.tag_id 
    WHERE pt.post_id = :pid
");
$tagStmt->execute(['pid' => $postId]);
$post['tags'] = $tagStmt->fetchAll();

// Comments
$commStmt = $db->prepare("
    SELECT c.id, c.user_id, c.content, c.created_at, c.updated_at,
           u.username, pr.full_name, pr.profile_photo
    FROM comments c
    JOIN users u ON u.id = c.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE c.post_id = :pid
    ORDER BY c.created_at ASC
");
$commStmt->execute(['pid' => $postId]);
$comments = $commStmt->fetchAll();

foreach ($comments as &$com) {
    $com['is_own'] = ($viewerId > 0 && (int)$com['user_id'] === $viewerId);
}
$post['comments'] = $comments;

// User like/save/follow status
$post['is_liked'] = false;
$post['is_saved'] = false;
$post['is_following_creator'] = false;
$post['is_own_post'] = ($viewerId > 0 && (int)$post['user_id'] === $viewerId);

if ($viewerId > 0) {
    $likeCheck = $db->prepare("SELECT id FROM likes WHERE user_id = :uid AND post_id = :pid LIMIT 1");
    $likeCheck->execute(['uid' => $viewerId, 'pid' => $postId]);
    $post['is_liked'] = (bool)$likeCheck->fetchColumn();

    $saveCheck = $db->prepare("SELECT id FROM saved_posts WHERE user_id = :uid AND post_id = :pid LIMIT 1");
    $saveCheck->execute(['uid' => $viewerId, 'pid' => $postId]);
    $post['is_saved'] = (bool)$saveCheck->fetchColumn();

    $followCheck = $db->prepare("SELECT id FROM follows WHERE follower_id = :f AND following_id = :t LIMIT 1");
    $followCheck->execute(['f' => $viewerId, 't' => (int)$post['user_id']]);
    $post['is_following_creator'] = (bool)$followCheck->fetchColumn();
}

jsonSuccess('Post fetched successfully', ['post' => $post]);
