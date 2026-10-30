<?php
// backend/api/posts/create.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();

$title = trim($input['title'] ?? '');
$description = trim($input['description'] ?? '');
$categoryId = (int)($input['category_id'] ?? 0);
$postType = in_array($input['post_type'] ?? '', ['image', 'video', 'project']) ? $input['post_type'] : 'image';
$visibility = ($input['visibility'] ?? 'public') === 'private' ? 'private' : 'public';
$status = ($input['status'] ?? 'published') === 'draft' ? 'draft' : 'published';
$mediaUrls = $input['media_urls'] ?? [];
$tags = $input['tags'] ?? [];

// Project specific
$projectUrl = trim($input['project_url'] ?? '');
$githubUrl = trim($input['github_url'] ?? '');
$technologies = trim($input['technologies'] ?? '');
$projectGallery = $input['project_gallery'] ?? [];

$errors = [];
if (empty($title)) {
    $errors['title'] = 'Post title is required.';
}
if ($categoryId <= 0) {
    $errors['category_id'] = 'Please select a category.';
}
if (empty($mediaUrls) && $postType !== 'project') {
    $errors['media_urls'] = 'Please upload or provide at least one media file.';
}

if (!empty($errors)) {
    jsonError('Validation failed', 422, $errors);
}

$db = Database::getConnection();
$db->beginTransaction();

try {
    $stmt = $db->prepare("
        INSERT INTO posts (user_id, category_id, title, description, post_type, status, visibility)
        VALUES (:uid, :cid, :title, :desc, :ptype, :status, :vis)
    ");
    $stmt->execute([
        'uid'    => $userId,
        'cid'    => $categoryId,
        'title'  => $title,
        'desc'   => $description,
        'ptype'  => $postType,
        'status' => $status,
        'vis'    => $visibility
    ]);
    $postId = (int)$db->lastInsertId();

    // Insert Media
    if (!empty($mediaUrls) && is_array($mediaUrls)) {
        $insertMedia = $db->prepare("
            INSERT INTO post_media (post_id, media_url, media_type, sort_order)
            VALUES (:pid, :url, :type, :order)
        ");
        foreach ($mediaUrls as $idx => $url) {
            if (!empty($url)) {
                $mType = ($postType === 'video') ? 'video' : 'image';
                $insertMedia->execute([
                    'pid'   => $postId,
                    'url'   => $url,
                    'type'  => $mType,
                    'order' => $idx
                ]);
            }
        }
    }

    // Insert Project Details if project
    if ($postType === 'project') {
        $cover = !empty($mediaUrls[0]) ? $mediaUrls[0] : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80';
        $insertProj = $db->prepare("
            INSERT INTO projects (post_id, cover_image, project_url, github_url, technologies)
            VALUES (:pid, :cover, :purl, :ghurl, :tech)
        ");
        $insertProj->execute([
            'pid'   => $postId,
            'cover' => $cover,
            'purl'  => $projectUrl,
            'ghurl' => $githubUrl,
            'tech'  => $technologies
        ]);
        $projectId = (int)$db->lastInsertId();

        if (!empty($projectGallery) && is_array($projectGallery)) {
            $insertGallery = $db->prepare("
                INSERT INTO project_media (project_id, media_url, sort_order)
                VALUES (:prid, :url, :order)
            ");
            foreach ($projectGallery as $gIdx => $gUrl) {
                if (!empty($gUrl)) {
                    $insertGallery->execute([
                        'prid'  => $projectId,
                        'url'   => $gUrl,
                        'order' => $gIdx
                    ]);
                }
            }
        }
    }

    // Insert Tags
    if (!empty($tags) && is_array($tags)) {
        $findTag = $db->prepare("SELECT id FROM tags WHERE name = :name LIMIT 1");
        $createTag = $db->prepare("INSERT INTO tags (name, slug) VALUES (:name, :slug)");
        $linkTag = $db->prepare("INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (:pid, :tid)");

        foreach ($tags as $tagName) {
            $tagName = trim($tagName);
            if (empty($tagName)) continue;

            $findTag->execute(['name' => $tagName]);
            $tagId = (int)$findTag->fetchColumn();

            if ($tagId <= 0) {
                $slug = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $tagName));
                $createTag->execute(['name' => $tagName, 'slug' => $slug]);
                $tagId = (int)$db->lastInsertId();
            }

            $linkTag->execute(['pid' => $postId, 'tid' => $tagId]);
        }
    }

    $db->commit();
    jsonSuccess('Post published successfully!', ['post_id' => $postId], 201);
} catch (Exception $e) {
    $db->rollBack();
    jsonError('Failed to create post: ' . $e->getMessage(), 500);
}
