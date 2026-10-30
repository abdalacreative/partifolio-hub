<?php
// backend/api/notifications/read.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();
$db = Database::getConnection();

if (!empty($input['all'])) {
    $stmt = $db->prepare("UPDATE notifications SET is_read = 1 WHERE user_id = :uid");
    $stmt->execute(['uid' => $userId]);
    jsonSuccess('All notifications marked as read.');
}

$id = (int)($input['id'] ?? 0);
if ($id > 0) {
    $stmt = $db->prepare("UPDATE notifications SET is_read = 1 WHERE id = :id AND user_id = :uid");
    $stmt->execute(['id' => $id, 'uid' => $userId]);
    jsonSuccess('Notification marked as read.');
}

jsonError('Notification ID or all flag is required.', 400);
