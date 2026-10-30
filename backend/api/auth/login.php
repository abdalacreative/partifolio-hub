<?php
// backend/api/auth/login.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$input = getJsonInput();
$login = trim($input['login'] ?? $input['email'] ?? $input['username'] ?? '');
$password = $input['password'] ?? '';
$remember = !empty($input['remember']);

if (empty($login)) {
    jsonError('Username or email is required.', 422, ['login' => 'Field is required']);
}
if (empty($password)) {
    jsonError('Password is required.', 422, ['password' => 'Password is required']);
}

$db = Database::getConnection();
$stmt = $db->prepare("
    SELECT u.id, u.username, u.email, u.phone, u.password_hash, u.role, u.status, u.is_profile_completed,
           p.full_name, p.professional_title, p.bio, p.location, p.profile_photo, p.cover_photo,
           p.website, p.whatsapp, p.facebook, p.instagram, p.tiktok, p.experience, p.education, p.portfolio_intro
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
    WHERE u.email = :login1 OR u.username = :login2
    LIMIT 1
");
$stmt->execute(['login1' => $login, 'login2' => $login]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    jsonError('Invalid credentials. Please verify your username/email and password.', 401);
}

if ($user['status'] === 'suspended') {
    jsonError('Your account has been suspended by an administrator. Please contact support.', 403);
}

if ($user['status'] === 'deactivated') {
    jsonError('This account has been deactivated.', 403);
}

// Generate session
$token = generateSecureToken(32);
$days = $remember ? 30 : 7;
$expiresAt = date('Y-m-d H:i:s', strtotime("+{$days} days"));

$stmt = $db->prepare("
    INSERT INTO sessions (user_id, token, ip_address, user_agent, expires_at)
    VALUES (:user_id, :token, :ip, :ua, :expires)
");
$stmt->execute([
    'user_id' => $user['id'],
    'token'   => $token,
    'ip'      => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
    'ua'      => $_SERVER['HTTP_USER_AGENT'] ?? 'Web',
    'expires' => $expiresAt
]);

jsonSuccess('Login successful!', [
    'token' => $token,
    'user'  => formatUserResponse($user)
]);
