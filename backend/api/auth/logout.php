<?php
// backend/api/auth/logout.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$token = getAuthToken();
if ($token) {
    $db = Database::getConnection();
    $stmt = $db->prepare("DELETE FROM sessions WHERE token = :token");
    $stmt->execute(['token' => $token]);
}

jsonSuccess('Logged out successfully.');
