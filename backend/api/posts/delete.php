<?php
// backend/api/posts/delete.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();

$postId = (int)($input['id'] ?? $_GET['id'] ?? 0);
if ($postId <= 0) {
    jsonError('Post ID is required.', 400);
}

$db = Database::getConnection();

// Check existence & ownership
$stmt = $db->prepare("SELECT user_id FROM posts WHERE id = :id LIMIT 1");
$stmt->execute(['id' => $postId]);
$post = $stmt->fetch();

if (!$post) {
    jsonError('Post not found.', 404);
}

if ((int)$post['user_id'] !== $userId && $user['role'] !== 'admin') {
    jsonError('Unauthorized. You can only delete your own posts.', 403);
}

// Delete post (cascading deletes will clean media, tags, likes, comments, projects)
$stmt = $db->prepare("DELETE FROM posts WHERE id = :id");
$stmt->execute(['id' => $postId]);

jsonSuccess('Post deleted successfully.');
