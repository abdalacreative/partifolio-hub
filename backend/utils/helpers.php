<?php
// backend/utils/helpers.php

function jsonResponse(array $data, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function jsonSuccess(string $message = 'Success', array $data = [], int $statusCode = 200): void {
    jsonResponse([
        'success' => true,
        'message' => $message,
        'data'    => $data
    ], $statusCode);
}

function jsonError(string $message = 'Error', int $statusCode = 400, array $errors = []): void {
    jsonResponse([
        'success' => false,
        'message' => $message,
        'errors'  => $errors
    ], $statusCode);
}

function getJsonInput(): array {
    $raw = file_get_contents('php://input');
    if (empty($raw)) {
        return $_POST ?? [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function sanitizeString(?string $str): string {
    if ($str === null) return '';
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

function generateSecureToken(int $length = 32): string {
    return bin2hex(random_bytes($length));
}

function formatUserResponse(array $user): array {
    unset($user['password_hash']);
    return [
        'id'                   => (int)($user['id'] ?? $user['user_id'] ?? 0),
        'username'             => $user['username'] ?? '',
        'email'                => $user['email'] ?? '',
        'phone'                => $user['phone'] ?? '',
        'role'                 => $user['role'] ?? 'user',
        'status'               => $user['status'] ?? 'active',
        'is_profile_completed' => (bool)($user['is_profile_completed'] ?? 0),
        'full_name'            => $user['full_name'] ?? $user['username'] ?? '',
        'professional_title'   => $user['professional_title'] ?? '',
        'bio'                  => $user['bio'] ?? '',
        'location'             => $user['location'] ?? '',
        'profile_photo'        => $user['profile_photo'] ?: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
        'cover_photo'          => $user['cover_photo'] ?: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
        'website'              => $user['website'] ?? '',
        'whatsapp'             => $user['whatsapp'] ?? '',
        'facebook'             => $user['facebook'] ?? '',
        'instagram'            => $user['instagram'] ?? '',
        'tiktok'               => $user['tiktok'] ?? '',
        'experience'           => $user['experience'] ?? '',
        'education'            => $user['education'] ?? '',
        'portfolio_intro'      => $user['portfolio_intro'] ?? '',
        'created_at'           => $user['created_at'] ?? ''
    ];
}
