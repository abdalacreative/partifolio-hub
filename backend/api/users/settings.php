<?php
// backend/api/users/settings.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$db = Database::getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $db->prepare("
        SELECT s.*, p.show_email, p.show_phone, p.is_public
        FROM settings s
        LEFT JOIN profiles p ON p.user_id = s.user_id
        WHERE s.user_id = :uid
        LIMIT 1
    ");
    $stmt->execute(['uid' => $userId]);
    $settings = $stmt->fetch();

    if (!$settings) {
        $db->prepare("INSERT INTO settings (user_id) VALUES (:uid)")->execute(['uid' => $userId]);
        $settings = [
            'email_notifications'   => 1,
            'like_notifications'    => 1,
            'comment_notifications' => 1,
            'follow_notifications'  => 1,
            'message_notifications' => 1,
            'profile_visibility'    => 'public',
            'show_email'            => 0,
            'show_phone'            => 0,
            'is_public'             => 1
        ];
    }

    jsonSuccess('Settings retrieved', [
        'user' => [
            'id'       => $userId,
            'username' => $user['username'],
            'email'    => $user['email'],
            'phone'    => $user['phone'],
            'role'     => $user['role']
        ],
        'settings' => $settings
    ]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = getJsonInput();
    $action = $input['action'] ?? 'update_settings';

    if ($action === 'update_settings') {
        $emailNotif = isset($input['email_notifications']) ? (int)$input['email_notifications'] : 1;
        $likeNotif = isset($input['like_notifications']) ? (int)$input['like_notifications'] : 1;
        $commentNotif = isset($input['comment_notifications']) ? (int)$input['comment_notifications'] : 1;
        $followNotif = isset($input['follow_notifications']) ? (int)$input['follow_notifications'] : 1;
        $messageNotif = isset($input['message_notifications']) ? (int)$input['message_notifications'] : 1;
        $profileVis = ($input['profile_visibility'] ?? 'public') === 'private' ? 'private' : 'public';
        $showEmail = !empty($input['show_email']) ? 1 : 0;
        $showPhone = !empty($input['show_phone']) ? 1 : 0;

        $stmt = $db->prepare("
            INSERT INTO settings (user_id, email_notifications, like_notifications, comment_notifications, follow_notifications, message_notifications, profile_visibility)
            VALUES (:uid, :en, :ln, :cn, :fn, :mn, :pv)
            ON DUPLICATE KEY UPDATE
                email_notifications = VALUES(email_notifications),
                like_notifications = VALUES(like_notifications),
                comment_notifications = VALUES(comment_notifications),
                follow_notifications = VALUES(follow_notifications),
                message_notifications = VALUES(message_notifications),
                profile_visibility = VALUES(profile_visibility),
                updated_at = NOW()
        ");
        $stmt->execute([
            'uid' => $userId,
            'en'  => $emailNotif,
            'ln'  => $likeNotif,
            'cn'  => $commentNotif,
            'fn'  => $followNotif,
            'mn'  => $messageNotif,
            'pv'  => $profileVis
        ]);

        $stmt = $db->prepare("
            UPDATE profiles 
            SET show_email = :se, show_phone = :sp, is_public = :ip 
            WHERE user_id = :uid
        ");
        $stmt->execute([
            'se'  => $showEmail,
            'sp'  => $showPhone,
            'ip'  => ($profileVis === 'public' ? 1 : 0),
            'uid' => $userId
        ]);

        jsonSuccess('Settings updated successfully!');
    }

    if ($action === 'change_password') {
        $currentPassword = $input['current_password'] ?? '';
        $newPassword = $input['new_password'] ?? '';
        $confirmPassword = $input['confirm_password'] ?? '';

        if (empty($currentPassword) || empty($newPassword)) {
            jsonError('All password fields are required.', 422);
        }
        if (strlen($newPassword) < 6) {
            jsonError('New password must be at least 6 characters.', 422);
        }
        if ($newPassword !== $confirmPassword) {
            jsonError('New passwords do not match.', 422);
        }

        $stmt = $db->prepare("SELECT password_hash FROM users WHERE id = :uid");
        $stmt->execute(['uid' => $userId]);
        $hash = $stmt->fetchColumn();

        if (!password_verify($currentPassword, $hash)) {
            jsonError('Current password is incorrect.', 400);
        }

        $newHash = password_hash($newPassword, PASSWORD_BCRYPT);
        $stmt = $db->prepare("UPDATE users SET password_hash = :h WHERE id = :uid");
        $stmt->execute(['h' => $newHash, 'uid' => $userId]);

        jsonSuccess('Password updated successfully!');
    }

    if ($action === 'update_account') {
        $username = trim($input['username'] ?? '');
        $email = strtolower(trim($input['email'] ?? ''));
        $phone = trim($input['phone'] ?? '');

        if (!empty($username) && !preg_match('/^[a-zA-Z0-9_]{3,30}$/', $username)) {
            jsonError('Username format is invalid.', 422);
        }
        if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            jsonError('Email format is invalid.', 422);
        }

        // Check conflicts
        if (!empty($username)) {
            $stmt = $db->prepare("SELECT id FROM users WHERE username = :u AND id != :uid");
            $stmt->execute(['u' => $username, 'uid' => $userId]);
            if ($stmt->fetch()) {
                jsonError('Username is already taken by another account.', 409);
            }
        }
        if (!empty($email)) {
            $stmt = $db->prepare("SELECT id FROM users WHERE email = :e AND id != :uid");
            $stmt->execute(['e' => $email, 'uid' => $userId]);
            if ($stmt->fetch()) {
                jsonError('Email is already registered by another account.', 409);
            }
        }

        $stmt = $db->prepare("
            UPDATE users
            SET username = COALESCE(NULLIF(:u, ''), username),
                email = COALESCE(NULLIF(:e, ''), email),
                phone = :p
            WHERE id = :uid
        ");
        $stmt->execute([
            'u'   => $username,
            'e'   => $email,
            'p'   => $phone,
            'uid' => $userId
        ]);

        jsonSuccess('Account details updated!');
    }

    if ($action === 'deactivate_account') {
        $password = $input['password'] ?? '';
        $stmt = $db->prepare("SELECT password_hash FROM users WHERE id = :uid");
        $stmt->execute(['uid' => $userId]);
        $hash = $stmt->fetchColumn();

        if (!password_verify($password, $hash)) {
            jsonError('Password verification failed.', 400);
        }

        $stmt = $db->prepare("UPDATE users SET status = 'deactivated' WHERE id = :uid");
        $stmt->execute(['uid' => $userId]);

        $db->prepare("DELETE FROM sessions WHERE user_id = :uid")->execute(['uid' => $userId]);

        jsonSuccess('Account deactivated.');
    }

    jsonError('Invalid action specified', 400);
}
