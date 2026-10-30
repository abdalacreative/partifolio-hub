<?php
// backend/api/admin/stats.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$admin = requireAdmin();
$db = Database::getConnection();

// Counters
$totalUsers = (int)$db->query("SELECT COUNT(*) FROM users")->fetchColumn();
$activeUsers = (int)$db->query("SELECT COUNT(*) FROM users WHERE status = 'active'")->fetchColumn();
$totalPosts = (int)$db->query("SELECT COUNT(*) FROM posts")->fetchColumn();
$totalProjects = (int)$db->query("SELECT COUNT(*) FROM posts WHERE post_type = 'project'")->fetchColumn();
$totalComments = (int)$db->query("SELECT COUNT(*) FROM comments")->fetchColumn();
$totalReports = (int)$db->query("SELECT COUNT(*) FROM reports")->fetchColumn();
$pendingReports = (int)$db->query("SELECT COUNT(*) FROM reports WHERE status = 'pending'")->fetchColumn();
$totalViews = (int)$db->query("SELECT COALESCE(SUM(views_count), 0) FROM posts")->fetchColumn();

// Recent Users
$stmt = $db->query("
    SELECT u.id, u.username, u.email, u.role, u.status, u.created_at,
           pr.full_name, pr.professional_title, pr.profile_photo
    FROM users u
    LEFT JOIN profiles pr ON pr.user_id = u.id
    ORDER BY u.created_at DESC
    LIMIT 6
");
$recentUsers = $stmt->fetchAll();

// Recent Posts
$stmt = $db->query("
    SELECT p.id, p.title, p.post_type, p.status, p.views_count, p.likes_count, p.created_at,
           c.name as category_name,
           u.username, pr.full_name
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    ORDER BY p.created_at DESC
    LIMIT 6
");
$recentPosts = $stmt->fetchAll();

// Activity breakdown
$typeBreakdown = $db->query("
    SELECT post_type, COUNT(*) as count 
    FROM posts 
    GROUP BY post_type
")->fetchAll();

jsonSuccess('Admin statistics loaded', [
    'stats' => [
        'total_users'     => $totalUsers,
        'active_users'    => $activeUsers,
        'total_posts'     => $totalPosts,
        'total_projects'  => $totalProjects,
        'total_comments'  => $totalComments,
        'total_reports'   => $totalReports,
        'pending_reports' => $pendingReports,
        'total_views'     => $totalViews
    ],
    'type_breakdown' => $typeBreakdown,
    'recent_users'   => $recentUsers,
    'recent_posts'   => $recentPosts
]);
