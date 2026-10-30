<?php
// backend/api/auth/reset-password.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$input = getJsonInput();
$token = trim($input['token'] ?? '');
$password = $input['password'] ?? '';
$confirmPassword = $input['confirm_password'] ?? '';

if (empty($token)) {
    jsonError('Reset token is required.', 422, ['token' => 'Token required']);
}
if (empty($password) || strlen($password) < 6) {
    jsonError('Password must be at least 6 characters.', 422, ['password' => 'Minimum 6 characters']);
}
if ($password !== $confirmPassword) {
    jsonError('Passwords do not match.', 422, ['confirm_password' => 'Passwords must match']);
}

$db = Database::getConnection();
$stmt = $db->prepare("
    SELECT id, email FROM password_resets
    WHERE token = :token AND is_used = 0 AND expires_at > NOW()
    LIMIT 1
");
$stmt->execute(['token' => $token]);
$reset = $stmt->fetch();

if (!$reset) {
    jsonError('Invalid or expired reset token. Please request a new one.', 400);
}

$newHash = password_hash($password, PASSWORD_BCRYPT);
$db->beginTransaction();

try {
    // Update user password
    $stmt = $db->prepare("UPDATE users SET password_hash = :hash WHERE email = :email");
    $stmt->execute([
        'hash'  => $newHash,
        'email' => $reset['email']
    ]);

    // Mark reset token used
    $stmt = $db->prepare("UPDATE password_resets SET is_used = 1 WHERE id = :id");
    $stmt->execute(['id' => $reset['id']]);

    // Invalidate old sessions for safety
    $stmt = $db->prepare("DELETE FROM sessions WHERE user_id = (SELECT id FROM users WHERE email = :email LIMIT 1)");
    $stmt->execute(['email' => $reset['email']]);

    $db->commit();
    jsonSuccess('Your password has been successfully reset! You can now log in with your new password.');
} catch (Exception $e) {
    $db->rollBack();
    jsonError('Failed to reset password: ' . $e->getMessage(), 500);
}
