<?php
// backend/api/messages/conversations.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$db = Database::getConnection();

// Fetch conversations
$stmt = $db->prepare("
    SELECT c.id as conversation_id, c.last_message, c.last_message_at,
           CASE WHEN c.user_one_id = :u1 THEN c.user_two_id ELSE c.user_one_id END as other_user_id,
           u.username as other_username,
           pr.full_name as other_full_name,
           pr.professional_title as other_title,
           pr.profile_photo as other_avatar,
           (
               SELECT COUNT(*) FROM messages 
               WHERE conversation_id = c.id AND receiver_id = :u2 AND is_read = 0
           ) as unread_count
    FROM conversations c
    JOIN users u ON u.id = (CASE WHEN c.user_one_id = :u3 THEN c.user_two_id ELSE c.user_one_id END)
    LEFT JOIN profiles pr ON pr.user_id = u.id
    WHERE c.user_one_id = :u4 OR c.user_two_id = :u5
    ORDER BY c.last_message_at DESC
");

$stmt->execute([
    'u1' => $userId,
    'u2' => $userId,
    'u3' => $userId,
    'u4' => $userId,
    'u5' => $userId
]);
$conversations = $stmt->fetchAll();

foreach ($conversations as &$c) {
    if (empty($c['other_avatar'])) {
        $c['other_avatar'] = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80';
    }
}

jsonSuccess('Conversations loaded', ['conversations' => $conversations]);
