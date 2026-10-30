<?php
// backend/api/notifications/delete.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();
$id = (int)($input['id'] ?? $_GET['id'] ?? 0);

if ($id <= 0) {
    jsonError('Notification ID is required.', 400);
}

$db = Database::getConnection();
$stmt = $db->prepare("DELETE FROM notifications WHERE id = :id AND user_id = :uid");
$stmt->execute(['id' => $id, 'uid' => $userId]);

jsonSuccess('Notification deleted.');
