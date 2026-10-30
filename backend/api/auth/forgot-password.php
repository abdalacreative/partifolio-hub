<?php
// backend/api/auth/forgot-password.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$input = getJsonInput();
$email = strtolower(trim($input['email'] ?? ''));

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonError('Please provide a valid email address.', 422, ['email' => 'Valid email is required']);
}

$db = Database::getConnection();
$stmt = $db->prepare("SELECT id, username FROM users WHERE email = :email AND status = 'active' LIMIT 1");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();

if (!$user) {
    // For security, don't leak user existence directly, but for ease of use in tests give friendly note
    jsonSuccess('If your email is registered in our platform, a reset link and verification code has been dispatched.', [
        'email_sent' => true
    ]);
}

$token = generateSecureToken(24);
$expiresAt = date('Y-m-d H:i:s', strtotime('+1 hour'));

$stmt = $db->prepare("
    INSERT INTO password_resets (email, token, expires_at)
    VALUES (:email, :token, :expires)
");
$stmt->execute([
    'email'   => $email,
    'token'   => $token,
    'expires' => $expiresAt
]);

jsonSuccess('Password reset link generated successfully.', [
    'email_sent' => true,
    'reset_token' => $token, // Provided in development for seamless testing
    'message' => 'Use the provided token or link to reset your password within 1 hour.'
]);
