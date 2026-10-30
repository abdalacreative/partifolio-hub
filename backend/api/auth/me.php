<?php
// backend/api/auth/me.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$db = Database::getConnection();

// Get unread notifications count
$stmt = $db->prepare("SELECT COUNT(*) FROM notifications WHERE user_id = :uid AND is_read = 0");
$stmt->execute(['uid' => $user['user_id']]);
$unreadNotifs = (int)$stmt->fetchColumn();

// Get unread messages count
$stmt = $db->prepare("SELECT COUNT(*) FROM messages WHERE receiver_id = :uid AND is_read = 0");
$stmt->execute(['uid' => $user['user_id']]);
$unreadMessages = (int)$stmt->fetchColumn();

$userData = formatUserResponse($user);
$userData['unread_notifications_count'] = $unreadNotifs;
$userData['unread_messages_count'] = $unreadMessages;

jsonSuccess('User profile fetched', ['user' => $userData]);
