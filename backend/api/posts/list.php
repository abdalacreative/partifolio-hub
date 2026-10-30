<?php
// backend/api/posts/list.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$viewer = getAuthenticatedUser(false);
$viewerId = $viewer ? (int)$viewer['user_id'] : 0;

$category = trim($_GET['category'] ?? '');
$type = trim($_GET['type'] ?? '');
$sort = trim($_GET['sort'] ?? 'trending');
$search = trim($_GET['search'] ?? '');
$tag = trim($_GET['tag'] ?? '');
$limit = min(50, max(1, (int)($_GET['limit'] ?? 12)));
$page = max(1, (int)($_GET['page'] ?? 1));
$offset = ($page - 1) * $limit;

$db = Database::getConnection();

$where = ["p.status = 'published'", "p.visibility = 'public'"];
$userIdFilter = isset($_GET['user_id']) ? (int)$_GET['user_id'] : 0;
if ($userIdFilter > 0) {
    $where[] = "p.user_id = :filter_user_id";
    $params['filter_user_id'] = $userIdFilter;
}

if (!empty($category) && $category !== 'all') {
    if (is_numeric($category)) {
        $where[] = "p.category_id = :cat_id";
        $params['cat_id'] = (int)$category;
    } else {
        $where[] = "c.slug = :cat_slug";
        $params['cat_slug'] = $category;
    }
}

if (!empty($type) && in_array($type, ['image', 'video', 'project'])) {
    $where[] = "p.post_type = :ptype";
    $params['ptype'] = $type;
}

if (!empty($tag)) {
    $where[] = "EXISTS (
        SELECT 1 FROM post_tags pt
        JOIN tags t ON t.id = pt.tag_id
        WHERE pt.post_id = p.id AND (t.slug = :tag_slug OR t.name = :tag_name)
    )";
    $params['tag_slug'] = $tag;
    $params['tag_name'] = $tag;
}

if (!empty($search)) {
    $where[] = "(p.title LIKE :s1 OR p.description LIKE :s2 OR u.username LIKE :s3 OR pr.full_name LIKE :s4)";
    $params['s1'] = "%{$search}%";
    $params['s2'] = "%{$search}%";
    $params['s3'] = "%{$search}%";
    $params['s4'] = "%{$search}%";
}

$whereSql = implode(' AND ', $where);

// Sorting logic
$orderBy = "p.created_at DESC";
switch ($sort) {
    case 'popular':
    case 'trending':
        $orderBy = "(p.likes_count * 2 + p.views_count + p.comments_count * 3) DESC, p.created_at DESC";
        break;
    case 'most_liked':
        $orderBy = "p.likes_count DESC, p.created_at DESC";
        break;
    case 'most_viewed':
        $orderBy = "p.views_count DESC, p.created_at DESC";
        break;
    case 'latest':
    default:
        $orderBy = "p.created_at DESC";
        break;
}

// Count total
$countQuery = "
    SELECT COUNT(*) 
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE {$whereSql}
";
$countStmt = $db->prepare($countQuery);
$countStmt->execute($params);
$total = (int)$countStmt->fetchColumn();

// Fetch posts
$query = "
    SELECT p.id, p.user_id, p.category_id, p.title, p.description, p.post_type,
           p.views_count, p.likes_count, p.comments_count, p.created_at,
           c.name as category_name, c.slug as category_slug,
           u.username, pr.full_name, pr.professional_title, pr.profile_photo,
           COALESCE(
               (SELECT media_url FROM post_media WHERE post_id = p.id AND media_type IN ('image', 'thumbnail') ORDER BY sort_order ASC LIMIT 1),
               (SELECT media_url FROM post_media WHERE post_id = p.id ORDER BY sort_order ASC LIMIT 1)
           ) as cover_image,
           (SELECT media_url FROM post_media WHERE post_id = p.id AND media_type = 'video' ORDER BY sort_order ASC LIMIT 1) as video_url,
           proj.project_url, proj.github_url, proj.technologies
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    LEFT JOIN projects proj ON proj.post_id = p.id
    WHERE {$whereSql}
    ORDER BY {$orderBy}
    LIMIT :limit OFFSET :offset
";

$stmt = $db->prepare($query);
foreach ($params as $key => $val) {
    $stmt->bindValue($key, $val);
}
$stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$posts = $stmt->fetchAll();

// Augment posts with like/save status and tags
foreach ($posts as &$post) {
    $pid = (int)$post['id'];
    
    // Fallback cover image if none
    if (empty($post['cover_image'])) {
        $post['cover_image'] = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80';
    }

    // Tags
    $tagStmt = $db->prepare("
        SELECT t.id, t.name, t.slug 
        FROM post_tags pt 
        JOIN tags t ON t.id = pt.tag_id 
        WHERE pt.post_id = :pid 
        LIMIT 5
    ");
    $tagStmt->execute(['pid' => $pid]);
    $post['tags'] = $tagStmt->fetchAll();

    // Like & Save status for viewer
    $post['is_liked'] = false;
    $post['is_saved'] = false;

    if ($viewerId > 0) {
        $likeCheck = $db->prepare("SELECT id FROM likes WHERE user_id = :uid AND post_id = :pid LIMIT 1");
        $likeCheck->execute(['uid' => $viewerId, 'pid' => $pid]);
        $post['is_liked'] = (bool)$likeCheck->fetchColumn();

        $saveCheck = $db->prepare("SELECT id FROM saved_posts WHERE user_id = :uid AND post_id = :pid LIMIT 1");
        $saveCheck->execute(['uid' => $viewerId, 'pid' => $pid]);
        $post['is_saved'] = (bool)$saveCheck->fetchColumn();
    }
}

// Fetch all categories for pill navigation
$catStmt = $db->query("SELECT id, name, slug, icon FROM categories ORDER BY display_order ASC");
$allCategories = $catStmt->fetchAll();

jsonSuccess('Posts retrieved successfully', [
    'posts'      => $posts,
    'categories' => $allCategories,
    'pagination' => [
        'page'        => $page,
        'limit'       => $limit,
        'total'       => $total,
        'total_pages' => ceil($total / $limit)
    ]
]);
