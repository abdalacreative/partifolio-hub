<?php
// backend/api/messages/messages.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$otherUserId = (int)($_GET['user_id'] ?? 0);
$conversationId = (int)($_GET['conversation_id'] ?? 0);

if ($otherUserId <= 0 && $conversationId <= 0) {
    jsonError('User ID or Conversation ID required.', 400);
}

$db = Database::getConnection();

// Find conversation if otherUserId provided
if ($otherUserId > 0) {
    $u1 = min($userId, $otherUserId);
    $u2 = max($userId, $otherUserId);
    $stmt = $db->prepare("SELECT id FROM conversations WHERE user_one_id = :u1 AND user_two_id = :u2 LIMIT 1");
    $stmt->execute(['u1' => $u1, 'u2' => $u2]);
    $conversationId = (int)$stmt->fetchColumn();
} else {
    // Verify viewer belongs to conversation
    $stmt = $db->prepare("SELECT user_one_id, user_two_id FROM conversations WHERE id = :cid LIMIT 1");
    $stmt->execute(['cid' => $conversationId]);
    $convo = $stmt->fetch();
    if (!$convo || ((int)$convo['user_one_id'] !== $userId && (int)$convo['user_two_id'] !== $userId)) {
        jsonError('Conversation not found or unauthorized.', 404);
    }
    $otherUserId = ((int)$convo['user_one_id'] === $userId) ? (int)$convo['user_two_id'] : (int)$convo['user_one_id'];
}

// Fetch other user profile details
$otherUser = null;
if ($otherUserId > 0) {
    $stmt = $db->prepare("
        SELECT u.id, u.username, pr.full_name, pr.professional_title, pr.profile_photo, pr.location
        FROM users u
        LEFT JOIN profiles pr ON pr.user_id = u.id
        WHERE u.id = :uid
        LIMIT 1
    ");
    $stmt->execute(['uid' => $otherUserId]);
    $otherUser = $stmt->fetch();
}

$messages = [];
if ($conversationId > 0) {
    // Mark messages as read
    $db->prepare("
        UPDATE messages 
        SET is_read = 1, read_at = NOW() 
        WHERE conversation_id = :cid AND receiver_id = :uid AND is_read = 0
    ")->execute(['cid' => $conversationId, 'uid' => $userId]);

    // Fetch messages
    $stmt = $db->prepare("
        SELECT id, sender_id, receiver_id, message_text, is_read, created_at
        FROM messages
        WHERE conversation_id = :cid
        ORDER BY created_at ASC
    ");
    $stmt->execute(['cid' => $conversationId]);
    $messages = $stmt->fetchAll();
}

jsonSuccess('Messages loaded', [
    'conversation_id' => $conversationId,
    'other_user'      => $otherUser,
    'messages'        => $messages
]);
