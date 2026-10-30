<?php
// backend/middleware/auth.php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/helpers.php';

function getAuthToken(): ?string {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if (empty($authHeader) && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    }
    
    if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        return $matches[1];
    }
    
    return $_COOKIE['auth_token'] ?? null;
}

function getAuthenticatedUser(bool $required = true): ?array {
    $token = getAuthToken();
    if (!$token) {
        if ($required) {
            jsonError('Authentication required. No token provided.', 401);
        }
        return null;
    }

    $db = Database::getConnection();
    $stmt = $db->prepare("
        SELECT s.user_id, s.expires_at, u.username, u.email, u.phone, u.role, u.status, u.is_profile_completed,
               p.full_name, p.professional_title, p.bio, p.location, p.profile_photo, p.cover_photo,
               p.website, p.whatsapp, p.facebook, p.instagram, p.tiktok, p.experience, p.education, p.portfolio_intro
        FROM sessions s
        JOIN users u ON u.id = s.user_id
        LEFT JOIN profiles p ON p.user_id = u.id
        WHERE s.token = :token AND s.expires_at > NOW()
        LIMIT 1
    ");
    $stmt->execute(['token' => $token]);
    $user = $stmt->fetch();

    if (!$user) {
        if ($required) {
            jsonError('Invalid or expired session. Please log in again.', 401);
        }
        return null;
    }

    if ($user['status'] === 'suspended') {
        jsonError('Your account has been suspended by an administrator.', 403);
    }

    if ($user['status'] === 'deactivated') {
        jsonError('Your account has been deactivated.', 403);
    }

    return $user;
}

function requireAdmin(): array {
    $user = getAuthenticatedUser(true);
    if ($user['role'] !== 'admin') {
        jsonError('Forbidden. Administrator access required.', 403);
    }
    return $user;
}
