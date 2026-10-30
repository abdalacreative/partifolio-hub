<?php
// backend/api/admin/reports.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$admin = requireAdmin();
$db = Database::getConnection();

$status = trim($_GET['status'] ?? 'all');
$where = ["1=1"];
$params = [];

if (in_array($status, ['pending', 'reviewed', 'resolved', 'dismissed'])) {
    $where[] = "r.status = :status";
    $params['status'] = $status;
}

$whereSql = implode(' AND ', $where);

$stmt = $db->prepare("
    SELECT r.id, r.reporter_id, r.reported_user_id, r.post_id, r.comment_id,
           r.report_type, r.reason, r.details, r.status, r.resolution_notes, r.created_at,
           rep.username as reporter_username,
           rep_pr.full_name as reporter_name,
           rep_pr.profile_photo as reporter_avatar,
           target_u.username as target_username,
           target_pr.full_name as target_full_name,
           target_pr.profile_photo as target_avatar,
           p.title as post_title,
           p.post_type as post_type,
           (SELECT media_url FROM post_media WHERE post_id = p.id ORDER BY sort_order ASC LIMIT 1) as post_thumbnail,
           author_u.username as post_author_username,
           author_pr.full_name as post_author_name,
           c.content as comment_content
    FROM reports r
    JOIN users rep ON rep.id = r.reporter_id
    LEFT JOIN profiles rep_pr ON rep_pr.user_id = rep.id
    LEFT JOIN users target_u ON target_u.id = r.reported_user_id
    LEFT JOIN profiles target_pr ON target_pr.user_id = target_u.id
    LEFT JOIN posts p ON p.id = r.post_id
    LEFT JOIN users author_u ON author_u.id = p.user_id
    LEFT JOIN profiles author_pr ON author_pr.user_id = author_u.id
    LEFT JOIN comments c ON c.id = r.comment_id
    WHERE {$whereSql}
    ORDER BY r.created_at DESC
");
$stmt->execute($params);
$reports = $stmt->fetchAll();

jsonSuccess('Reports loaded', ['reports' => $reports]);
