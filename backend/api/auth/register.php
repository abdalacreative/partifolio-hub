<?php
// backend/api/auth/register.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$input = getJsonInput();

$fullName = trim($input['full_name'] ?? '');
$username = trim($input['username'] ?? '');
$email = strtolower(trim($input['email'] ?? ''));
$phone = trim($input['phone'] ?? '');
$password = $input['password'] ?? '';
$confirmPassword = $input['confirm_password'] ?? '';
$terms = !empty($input['terms']);

$errors = [];

if (empty($fullName)) {
    $errors['full_name'] = 'Full name is required.';
} elseif (strlen($fullName) < 2 || strlen($fullName) > 100) {
    $errors['full_name'] = 'Full name must be between 2 and 100 characters.';
}

if (empty($username)) {
    $errors['username'] = 'Username is required.';
} elseif (!preg_match('/^[a-zA-Z0-9_]{3,30}$/', $username)) {
    $errors['username'] = 'Username must be 3-30 characters with letters, numbers, or underscores.';
}

if (empty($email)) {
    $errors['email'] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please provide a valid email address.';
}

if (empty($password)) {
    $errors['password'] = 'Password is required.';
} elseif (strlen($password) < 6) {
    $errors['password'] = 'Password must be at least 6 characters long.';
}

if ($password !== $confirmPassword) {
    $errors['confirm_password'] = 'Passwords do not match.';
}

if (!$terms) {
    $errors['terms'] = 'You must accept the Terms of Service and Privacy Policy.';
}

if (!empty($errors)) {
    jsonError('Validation failed', 422, $errors);
}

$db = Database::getConnection();

// Check unique username
$stmt = $db->prepare("SELECT id FROM users WHERE username = :username LIMIT 1");
$stmt->execute(['username' => $username]);
if ($stmt->fetch()) {
    jsonError('This username is already taken.', 409, ['username' => 'Username already in use']);
}

// Check unique email
$stmt = $db->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
$stmt->execute(['email' => $email]);
if ($stmt->fetch()) {
    jsonError('An account with this email already exists.', 409, ['email' => 'Email already registered']);
}

try {
    $db->beginTransaction();

    $hash = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $db->prepare("
        INSERT INTO users (username, email, password_hash, phone, role, status, is_profile_completed)
        VALUES (:username, :email, :hash, :phone, 'user', 'active', 0)
    ");
    $stmt->execute([
        'username' => $username,
        'email'    => $email,
        'hash'     => $hash,
        'phone'    => $phone
    ]);
    $userId = (int)$db->lastInsertId();

    // Create profile with date_of_birth and professional_title if provided
    $professionalTitle = trim($input['professional_title'] ?? 'Creative Creator');
    $birthDay = (int)($input['birth_day'] ?? 0);
    $birthMonth = (int)($input['birth_month'] ?? 0);
    $birthYear = (int)($input['birth_year'] ?? 0);
    $dateOfBirth = null;

    if ($birthYear >= 1920 && $birthMonth >= 1 && $birthMonth <= 12 && $birthDay >= 1 && $birthDay <= 31) {
        $dateOfBirth = sprintf('%04d-%02d-%02d', $birthYear, $birthMonth, $birthDay);
    } elseif (!empty($input['birth_date'])) {
        $dateOfBirth = date('Y-m-d', strtotime($input['birth_date']));
    }

    $stmt = $db->prepare("
        INSERT INTO profiles (user_id, full_name, professional_title, date_of_birth, is_public)
        VALUES (:user_id, :full_name, :professional_title, :date_of_birth, 1)
    ");
    $stmt->execute([
        'user_id'            => $userId,
        'full_name'          => $fullName,
        'professional_title' => $professionalTitle ?: 'Creative Creator',
        'date_of_birth'      => $dateOfBirth
    ]);

    // Create settings
    $stmt = $db->prepare("
        INSERT INTO settings (user_id)
        VALUES (:user_id)
    ");
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
        VALUES (:user_id, 'system', 'Welcome to PartfolioHub! Complete your profile to showcase your work.')
    ");
    $stmt->execute(['user_id' => $userId]);

    $db->commit();

    jsonSuccess('Account created successfully!', [
        'token' => $token,
        'user'  => [
            'id'                   => $userId,
            'username'             => $username,
            'email'                => $email,
            'phone'                => $phone,
            'role'                 => 'user',
            'full_name'            => $fullName,
            'is_profile_completed' => false
        ]
    ], 201);

} catch (Exception $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    jsonError('Registration failed: ' . $e->getMessage(), 500);
}
