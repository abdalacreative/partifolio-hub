<?php
// backend/api/social/save.php
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

// Check if already saved
$stmt = $db->prepare("SELECT id FROM saved_posts WHERE user_id = :uid AND post_id = :pid LIMIT 1");
$stmt->execute(['uid' => $userId, 'pid' => $postId]);
$existing = $stmt->fetch();

$isSaved = false;
if ($existing) {
    $db->prepare("DELETE FROM saved_posts WHERE user_id = :uid AND post_id = :pid")->execute(['uid' => $userId, 'pid' => $postId]);
    $isSaved = false;
} else {
    $db->prepare("INSERT INTO saved_posts (user_id, post_id) VALUES (:uid, :pid)")->execute(['uid' => $userId, 'pid' => $postId]);
    $isSaved = true;
}

jsonSuccess($isSaved ? 'Post saved to bookmarks' : 'Post removed from bookmarks', [
    'saved' => $isSaved
]);
