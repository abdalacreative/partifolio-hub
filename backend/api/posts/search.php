<?php
// backend/api/posts/search.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$query = trim($_GET['q'] ?? $_GET['query'] ?? '');
if (empty($query)) {
    jsonSuccess('Empty query', [
        'creators'   => [],
        'posts'      => [],
        'projects'   => [],
        'categories' => [],
        'skills'     => []
    ]);
}

$db = Database::getConnection();
$searchTerm = "%{$query}%";

// 1. Search Creators
$stmt = $db->prepare("
    SELECT u.id, u.username, pr.full_name, pr.professional_title, pr.profile_photo, pr.location,
           (SELECT COUNT(*) FROM follows WHERE following_id = u.id) as followers_count
    FROM users u
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE u.status = 'active' AND (u.username LIKE :q1 OR pr.full_name LIKE :q2 OR pr.professional_title LIKE :q3)
    LIMIT 6
");
$stmt->execute(['q1' => $searchTerm, 'q2' => $searchTerm, 'q3' => $searchTerm]);
$creators = $stmt->fetchAll();

// 2. Search Posts & Projects
$stmt = $db->prepare("
    SELECT p.id, p.title, p.post_type, p.views_count, p.likes_count, p.created_at,
           c.name as category_name,
           COALESCE(
               (SELECT media_url FROM post_media WHERE post_id = p.id AND media_type IN ('image', 'thumbnail') ORDER BY sort_order ASC LIMIT 1),
               (SELECT media_url FROM post_media WHERE post_id = p.id ORDER BY sort_order ASC LIMIT 1)
           ) as cover_image
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE p.status = 'published' AND p.visibility = 'public'
      AND (p.title LIKE :q1 OR p.description LIKE :q2)
    LIMIT 10
");
$stmt->execute(['q1' => $searchTerm, 'q2' => $searchTerm]);
$allPosts = $stmt->fetchAll();

$posts = [];
$projects = [];
foreach ($allPosts as $item) {
    if (empty($item['cover_image'])) {
        $item['cover_image'] = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80';
    }
    if ($item['post_type'] === 'project') {
        $projects[] = $item;
    } else {
        $posts[] = $item;
    }
}

// 3. Search Categories
$stmt = $db->prepare("SELECT id, name, slug, icon FROM categories WHERE name LIKE :q LIMIT 5");
$stmt->execute(['q' => $searchTerm]);
$categories = $stmt->fetchAll();

// 4. Search Skills
$stmt = $db->prepare("SELECT id, name, slug FROM skills WHERE name LIKE :q LIMIT 8");
$stmt->execute(['q' => $searchTerm]);
$skills = $stmt->fetchAll();

jsonSuccess('Search completed', [
    'query'      => $query,
    'creators'   => $creators,
    'posts'      => $posts,
    'projects'   => $projects,
    'categories' => $categories,
    'skills'     => $skills
]);
