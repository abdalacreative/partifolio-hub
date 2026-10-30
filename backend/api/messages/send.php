<?php
// backend/api/messages/send.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$senderId = (int)$user['user_id'];
$input = getJsonInput();

$receiverId = (int)($input['receiver_id'] ?? 0);
$messageText = trim($input['message'] ?? $input['message_text'] ?? '');

if ($receiverId <= 0 || empty($messageText)) {
    jsonError('Receiver ID and message content are required.', 422);
}

if ($receiverId === $senderId) {
    jsonError('Cannot send messages to yourself.', 400);
}

$db = Database::getConnection();

// Check receiver exists
$stmt = $db->prepare("SELECT id, username FROM users WHERE id = :id AND status = 'active' LIMIT 1");
$stmt->execute(['id' => $receiverId]);
$receiver = $stmt->fetch();

if (!$receiver) {
    jsonError('Recipient not found or unavailable.', 404);
}

$u1 = min($senderId, $receiverId);
$u2 = max($senderId, $receiverId);

$db->beginTransaction();

try {
    // 1. Get or create conversation
    $stmt = $db->prepare("SELECT id FROM conversations WHERE user_one_id = :u1 AND user_two_id = :u2 LIMIT 1");
    $stmt->execute(['u1' => $u1, 'u2' => $u2]);
    $convoId = (int)$stmt->fetchColumn();

    if ($convoId <= 0) {
        $stmt = $db->prepare("
            INSERT INTO conversations (user_one_id, user_two_id, last_message, last_message_at)
            VALUES (:u1, :u2, :msg, NOW())
        ");
        $stmt->execute(['u1' => $u1, 'u2' => $u2, 'msg' => $messageText]);
        $convoId = (int)$db->lastInsertId();
    } else {
        $stmt = $db->prepare("
            UPDATE conversations
            SET last_message = :msg, last_message_at = NOW(), updated_at = NOW()
            WHERE id = :cid
        ");
        $stmt->execute(['msg' => $messageText, 'cid' => $convoId]);
    }

    // 2. Insert message
    $stmt = $db->prepare("
        INSERT INTO messages (conversation_id, sender_id, receiver_id, message_text, is_read)
        VALUES (:cid, :sender, :receiver, :msg, 0)
    ");
    $stmt->execute([
        'cid'      => $convoId,
        'sender'   => $senderId,
        'receiver' => $receiverId,
        'msg'      => $messageText
    ]);
    $msgId = (int)$db->lastInsertId();

    // 3. Notify receiver
    $senderName = $user['full_name'] ?: $user['username'];
    $snippet = mb_strimwidth($messageText, 0, 35, '...');
    $stmt = $db->prepare("
        INSERT INTO notifications (user_id, actor_id, type, message)
        VALUES (:uid, :actor, 'message', :msg)
    ");
    $stmt->execute([
        'uid'   => $receiverId,
        'actor' => $senderId,
        'msg'   => "{$senderName} sent you a message: \"{$snippet}\""
    ]);

    $db->commit();

    jsonSuccess('Message sent successfully', [
        'message' => [
            'id'              => $msgId,
            'conversation_id' => $convoId,
            'sender_id'       => $senderId,
            'receiver_id'     => $receiverId,
            'message_text'    => $messageText,
            'is_read'         => 0,
            'created_at'      => date('Y-m-d H:i:s')
        ]
    ], 201);
} catch (Exception $e) {
    $db->rollBack();
    jsonError('Failed to send message: ' . $e->getMessage(), 500);
}
