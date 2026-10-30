<?php
// backend/api/upload.php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);

if (empty($_FILES['file'])) {
    jsonError('No file provided for upload.', 400);
}

$file = $_FILES['file'];
if ($file['error'] !== UPLOAD_ERR_OK) {
    jsonError('Upload failed with error code: ' . $file['error'], 400);
}

$targetCategory = $_POST['category'] ?? 'posts';
$allowedCategories = ['avatars', 'covers', 'posts', 'videos'];
if (!in_array($targetCategory, $allowedCategories)) {
    $targetCategory = 'posts';
}

$allowedMimes = [
    'image/jpeg' => 'jpg',
    'image/jpg'  => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
    'video/mp4'  => 'mp4',
    'video/webm' => 'webm'
];

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($file['tmp_name']);

if (!isset($allowedMimes[$mime])) {
    jsonError('Invalid file type. Allowed formats: JPG, PNG, WEBP, MP4, WEBM.', 415);
}

$ext = $allowedMimes[$mime];
$maxSize = (strpos($mime, 'video/') === 0) ? 50 * 1024 * 1024 : 15 * 1024 * 1024;

if ($file['size'] > $maxSize) {
    jsonError('File size exceeds the allowed limit.', 413);
}

$safeFilename = bin2hex(random_bytes(16)) . '.' . $ext;
$targetDir = __DIR__ . '/../uploads/' . $targetCategory;

if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

$destPath = $targetDir . '/' . $safeFilename;

if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    jsonError('Failed to save uploaded file.', 500);
}

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? '127.0.0.1:8000';
$url = "/uploads/{$targetCategory}/{$safeFilename}";

jsonSuccess('File uploaded successfully', [
    'url'       => $url,
    'full_url'  => $protocol . $host . $url,
    'filename'  => $safeFilename,
    'mime_type' => $mime,
    'size'      => $file['size']
], 201);
