<?php
// backend/api/posts/my-posts.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];

$status = trim($_GET['status'] ?? 'all');
$type = trim($_GET['type'] ?? 'all');

$db = Database::getConnection();

$where = ["p.user_id = :uid"];
$params = ['uid' => $userId];

if ($status === 'published' || $status === 'draft') {
    $where[] = "p.status = :status";
    $params['status'] = $status;
}

if (in_array($type, ['image', 'video', 'project'])) {
    $where[] = "p.post_type = :type";
    $params['type'] = $type;
}

$whereSql = implode(' AND ', $where);

$stmt = $db->prepare("
    SELECT p.id, p.title, p.description, p.post_type, p.status, p.visibility,
           p.views_count, p.likes_count, p.comments_count, p.created_at, p.updated_at,
           c.name as category_name,
           (SELECT media_url FROM post_media WHERE post_id = p.id ORDER BY sort_order ASC LIMIT 1) as cover_image
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE {$whereSql}
    ORDER BY p.created_at DESC
");
$stmt->execute($params);
$posts = $stmt->fetchAll();

foreach ($posts as &$post) {
    if (empty($post['cover_image'])) {
        $post['cover_image'] = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80';
    }
}

jsonSuccess('User posts retrieved', ['posts' => $posts]);
