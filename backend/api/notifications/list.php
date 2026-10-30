<?php
// backend/api/notifications/list.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$db = Database::getConnection();

$type = trim($_GET['type'] ?? 'all');
$where = ["n.user_id = :uid"];
$params = ['uid' => $userId];

if ($type !== 'all' && in_array($type, ['like', 'comment', 'follow', 'message'])) {
    $where[] = "n.type = :type";
    $params['type'] = $type;
}

$whereSql = implode(' AND ', $where);

$stmt = $db->prepare("
    SELECT n.id, n.type, n.post_id, n.message, n.is_read, n.created_at,
           u.username as actor_username,
           pr.full_name as actor_name,
           pr.profile_photo as actor_avatar
    FROM notifications n
    LEFT JOIN users u ON u.id = n.actor_id
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE {$whereSql}
    ORDER BY n.created_at DESC
    LIMIT 50
");
$stmt->execute($params);
$notifications = $stmt->fetchAll();

foreach ($notifications as &$item) {
    if (empty($item['actor_avatar'])) {
        $item['actor_avatar'] = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80';
    }
}

// Unread count
$unreadStmt = $db->prepare("SELECT COUNT(*) FROM notifications WHERE user_id = :uid AND is_read = 0");
$unreadStmt->execute(['uid' => $userId]);
$unreadCount = (int)$unreadStmt->fetchColumn();

jsonSuccess('Notifications loaded', [
    'notifications' => $notifications,
    'unread_count'  => $unreadCount
]);
