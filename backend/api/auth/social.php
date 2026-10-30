<?php
// backend/api/auth/social.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$input = getJsonInput();

$provider = strtolower(trim($input['provider'] ?? ''));
$email = strtolower(trim($input['email'] ?? ''));
$fullName = trim($input['full_name'] ?? '');
$avatar = trim($input['avatar'] ?? '');
$providerId = trim($input['provider_id'] ?? '');

$validProviders = ['google', 'facebook', 'apple'];
if (!in_array($provider, $validProviders)) {
    jsonError('Invalid social provider. Supported: Google, Facebook, Apple.', 400);
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonError('A valid email address is required for social authentication.', 422, ['email' => 'Valid email is required']);
}

if (empty($fullName)) {
    // Generate fallback full name from email
    $parts = explode('@', $email);
    $fullName = ucwords(str_replace(['.', '_', '-'], ' ', $parts[0]));
}

$db = Database::getConnection();

try {
    // 1. Check if user already exists by email
    $stmt = $db->prepare("SELECT id, username, email, role, status, is_profile_completed FROM users WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $email]);
    $existingUser = $stmt->fetch();

    if ($existingUser) {
        if ($existingUser['status'] !== 'active') {
            jsonError('Your account has been ' . $existingUser['status'] . '. Please contact support.', 403);
        }

        $userId = (int)$existingUser['id'];

        // Update provider if not set
        $stmt = $db->prepare("UPDATE users SET auth_provider = :provider, provider_id = :pid WHERE id = :id AND (auth_provider IS NULL OR auth_provider = 'local')");
        $stmt->execute([
            'provider' => $provider,
            'pid'      => $providerId ?: null,
            'id'       => $userId
        ]);

        // Get profile details
        $stmt = $db->prepare("SELECT full_name, profile_photo FROM profiles WHERE user_id = :id LIMIT 1");
        $stmt->execute(['id' => $userId]);
        $profile = $stmt->fetch();

        // Create new session
        $token = generateSecureToken(32);
        $expiresAt = date('Y-m-d H:i:s', strtotime('+30 days'));
        $stmt = $db->prepare("
            INSERT INTO sessions (user_id, token, ip_address, user_agent, expires_at)
            VALUES (:user_id, :token, :ip, :ua, :expires)
        ");
        $stmt->execute([
            'user_id' => $userId,
            'token'   => $token,
            'ip'      => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
            'ua'      => $_SERVER['HTTP_USER_AGENT'] ?? 'Web',
            'expires' => $expiresAt
        ]);

        jsonSuccess('Welcome back! Signed in with ' . ucfirst($provider), [
            'token' => $token,
            'user'  => [
                'id'                   => $userId,
                'username'             => $existingUser['username'],
                'email'                => $existingUser['email'],
                'role'                 => $existingUser['role'],
                'full_name'            => $profile['full_name'] ?? $fullName,
                'profile_photo'        => $profile['profile_photo'] ?? null,
                'is_profile_completed' => (bool)$existingUser['is_profile_completed'],
                'auth_provider'        => $provider
            ]
        ]);
        exit;
    }

    // 2. User does not exist -> Register New Social User
    $db->beginTransaction();

    // Generate unique username
    $emailPrefix = preg_replace('/[^a-zA-Z0-9_]/', '', explode('@', $email)[0]);
    if (strlen($emailPrefix) < 3) {
        $emailPrefix = $provider . '_' . rand(100, 999);
    }
    $baseUsername = strtolower(substr($emailPrefix, 0, 20));
    $username = $baseUsername;
    $counter = 1;

    while (true) {
        $stmt = $db->prepare("SELECT id FROM users WHERE username = :u LIMIT 1");
        $stmt->execute(['u' => $username]);
        if (!$stmt->fetch()) {
            break;
        }
        $username = $baseUsername . '_' . rand(10, 999);
        $counter++;
        if ($counter > 20) {
            $username = $baseUsername . '_' . time();
            break;
        }
    }

    // Random secure password hash since authentication is via OAuth provider
    $randomSecret = bin2hex(random_bytes(16));
    $passwordHash = password_hash($randomSecret, PASSWORD_BCRYPT);

    $stmt = $db->prepare("
        INSERT INTO users (username, email, password_hash, role, status, is_profile_completed, auth_provider, provider_id)
        VALUES (:username, :email, :hash, 'user', 'active', 0, :provider, :pid)
    ");
    $stmt->execute([
        'username' => $username,
        'email'    => $email,
        'hash'     => $passwordHash,
        'provider' => $provider,
        'pid'      => $providerId ?: null
    ]);
    $userId = (int)$db->lastInsertId();

    // Default avatars based on provider if none given
    if (empty($avatar)) {
        if ($provider === 'google') {
            $avatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80';
        } elseif ($provider === 'facebook') {
            $avatar = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80';
        } else {
            $avatar = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80';
        }
    }

    // Create profile
    $stmt = $db->prepare("
        INSERT INTO profiles (user_id, full_name, professional_title, profile_photo, is_public)
        VALUES (:user_id, :full_name, 'Creative Talent', :photo, 1)
    ");
    $stmt->execute([
        'user_id'   => $userId,
        'full_name' => $fullName,
        'photo'     => $avatar
    ]);

    // Create settings
    $stmt = $db->prepare("INSERT INTO settings (user_id) VALUES (:user_id)");
    $stmt->execute(['user_id' => $userId]);

    // Create session token
    $token = generateSecureToken(32);
    $expiresAt = date('Y-m-d H:i:s', strtotime('+30 days'));
    $stmt = $db->prepare("
        INSERT INTO sessions (user_id, token, ip_address, user_agent, expires_at)
        VALUES (:user_id, :token, :ip, :ua, :expires)
    ");
    $stmt->execute([
        'user_id' => $userId,
        'token'   => $token,
        'ip'      => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
        'ua'      => $_SERVER['HTTP_USER_AGENT'] ?? 'Web',
        'expires' => $expiresAt
    ]);

    // Welcome notification
    $stmt = $db->prepare("
        INSERT INTO notifications (user_id, type, message)
        VALUES (:user_id, 'system', :msg)
    ");
    $stmt->execute([
        'user_id' => $userId,
        'msg'     => 'Welcome to PartfolioHub! You signed up successfully with ' . ucfirst($provider) . '.'
    ]);

    $db->commit();

    jsonSuccess('Account created and signed in with ' . ucfirst($provider) . '!', [
        'token' => $token,
        'user'  => [
            'id'                   => $userId,
            'username'             => $username,
            'email'                => $email,
            'role'                 => 'user',
            'full_name'            => $fullName,
            'profile_photo'        => $avatar,
            'is_profile_completed' => false,
            'auth_provider'        => $provider
        ]
    ], 201);

} catch (Exception $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    jsonError('Social authentication failed: ' . $e->getMessage(), 500);
}
