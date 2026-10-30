<?php
// backend/api/posts/update.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();

$postId = (int)($input['id'] ?? 0);
if ($postId <= 0) {
    jsonError('Post ID is required.', 400);
}

$db = Database::getConnection();

// Verify ownership or admin
$stmt = $db->prepare("SELECT user_id, post_type FROM posts WHERE id = :id LIMIT 1");
$stmt->execute(['id' => $postId]);
$post = $stmt->fetch();

if (!$post) {
    jsonError('Post not found.', 404);
}

if ((int)$post['user_id'] !== $userId && $user['role'] !== 'admin') {
    jsonError('You do not have permission to update this post.', 403);
}

$title = trim($input['title'] ?? '');
$description = trim($input['description'] ?? '');
$categoryId = (int)($input['category_id'] ?? 0);
$status = in_array($input['status'] ?? '', ['published', 'draft']) ? $input['status'] : null;
$visibility = in_array($input['visibility'] ?? '', ['public', 'private']) ? $input['visibility'] : null;

$updateSql = "
    UPDATE posts 
    SET title = COALESCE(NULLIF(:title, ''), title),
        description = :desc,
        category_id = CASE WHEN :cid > 0 THEN :cid ELSE category_id END,
        status = COALESCE(:status, status),
        visibility = COALESCE(:vis, visibility),
        updated_at = NOW()
    WHERE id = :id
";
$stmt = $db->prepare($updateSql);
$stmt->execute([
    'title'  => $title,
    'desc'   => $description,
    'cid'    => $categoryId,
    'status' => $status,
    'vis'    => $visibility,
    'id'     => $postId
]);

// If project, update project URLs
if ($post['post_type'] === 'project') {
    $projectUrl = trim($input['project_url'] ?? '');
    $githubUrl = trim($input['github_url'] ?? '');
    $technologies = trim($input['technologies'] ?? '');

    $stmt = $db->prepare("
        UPDATE projects
        SET project_url = :purl, github_url = :ghurl, technologies = :tech, updated_at = NOW()
        WHERE post_id = :pid
    ");
    $stmt->execute([
        'purl' => $projectUrl,
        'ghurl' => $githubUrl,
        'tech' => $technologies,
        'pid'  => $postId
    ]);
}

jsonSuccess('Post updated successfully!');
