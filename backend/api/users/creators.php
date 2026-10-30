<?php
// backend/api/users/creators.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$viewer = getAuthenticatedUser(false);
$viewerId = $viewer ? (int)$viewer['user_id'] : 0;

$search = trim($_GET['search'] ?? '');
$skill = trim($_GET['skill'] ?? '');
$category = trim($_GET['category'] ?? '');
$sort = trim($_GET['sort'] ?? 'latest');
$limit = min(50, max(1, (int)($_GET['limit'] ?? 12)));
$page = max(1, (int)($_GET['page'] ?? 1));
$offset = ($page - 1) * $limit;

$db = Database::getConnection();

$whereClauses = ["u.status = 'active'"];
$params = [];

if (!empty($search)) {
    $whereClauses[] = "(u.username LIKE :s1 OR p.full_name LIKE :s2 OR p.professional_title LIKE :s3 OR p.location LIKE :s4)";
    $params['s1'] = "%{$search}%";
    $params['s2'] = "%{$search}%";
    $params['s3'] = "%{$search}%";
    $params['s4'] = "%{$search}%";
}

if (!empty($skill)) {
    $whereClauses[] = "EXISTS (
        SELECT 1 FROM user_skills us
        JOIN skills s ON s.id = us.skill_id
        WHERE us.user_id = u.id AND (s.slug = :sk1 OR s.name LIKE :sk2)
    )";
    $params['sk1'] = $skill;
    $params['sk2'] = "%{$skill}%";
}

$whereSql = implode(' AND ', $whereClauses);

// Count total
$countStmt = $db->prepare("
    SELECT COUNT(*) 
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
    WHERE {$whereSql}
");
$countStmt->execute($params);
$total = (int)$countStmt->fetchColumn();

// Order logic: default latest so newly registered creators show up
$orderBy = "u.created_at DESC";
if ($sort === 'popular') {
    $orderBy = "followers_count DESC, u.created_at DESC";
}

// Fetch creators with followers count & posts count
$query = "
    SELECT u.id, u.username, u.created_at,
           p.full_name, p.professional_title, p.location, p.profile_photo, p.cover_photo, p.bio,
           (SELECT COUNT(*) FROM follows WHERE following_id = u.id) as followers_count,
           (SELECT COUNT(*) FROM posts WHERE user_id = u.id AND status = 'published') as posts_count
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
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
$creators = $stmt->fetchAll();

// Add skills & follow status for each creator
foreach ($creators as &$creator) {
    $cid = (int)$creator['id'];
    
    // Skills
    $skillStmt = $db->prepare("
        SELECT s.id, s.name, s.slug
        FROM user_skills us
        JOIN skills s ON s.id = us.skill_id
        WHERE us.user_id = :cid
        ORDER BY us.is_primary DESC
        LIMIT 4
    ");
    $skillStmt->execute(['cid' => $cid]);
    $creator['skills'] = $skillStmt->fetchAll();

    // Is viewer following?
    $creator['is_following'] = false;
    if ($viewerId > 0 && $viewerId !== $cid) {
        $fStmt = $db->prepare("SELECT id FROM follows WHERE follower_id = :f AND following_id = :t LIMIT 1");
        $fStmt->execute(['f' => $viewerId, 't' => $cid]);
        $creator['is_following'] = (bool)$fStmt->fetchColumn();
    }
}

jsonSuccess('Creators retrieved successfully', [
    'creators' => $creators,
    'pagination' => [
        'page'       => $page,
        'limit'      => $limit,
        'total'      => $total,
        'total_pages' => ceil($total / $limit)
    ]
]);
