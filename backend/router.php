<?php
// backend/router.php
// Front controller for PHP built-in web server

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Serve static upload files directly if found
if (strpos($uri, '/uploads/') === 0) {
    $filePath = __DIR__ . $uri;
    if (file_exists($filePath) && is_file($filePath)) {
        $ext = pathinfo($filePath, PATHINFO_EXTENSION);
        $mimes = [
            'jpg'  => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png'  => 'image/png',
            'webp' => 'image/webp',
            'mp4'  => 'video/mp4',
            'webm' => 'video/webm'
        ];
        header('Content-Type: ' . ($mimes[strtolower($ext)] ?? 'application/octet-stream'));
        header('Access-Control-Allow-Origin: *');
        readfile($filePath);
        exit;
    }
}

// Route API requests
$cleanUri = preg_replace('#^/api/#', '', $uri);
$cleanUri = rtrim($cleanUri, '/');

// Check if direct file exists under backend/api/
$script = __DIR__ . '/api/' . $cleanUri;
if (file_exists($script) && is_file($script)) {
    require $script;
    exit;
}

if (file_exists($script . '.php') && is_file($script . '.php')) {
    require $script . '.php';
    exit;
}

// Also check direct path under backend/
$directFile = __DIR__ . $uri;
if (file_exists($directFile) && is_file($directFile)) {
    return false; // let built-in server serve it
}

// Default 404 for API
http_response_code(404);
header('Content-Type: application/json');
echo json_encode([
    'success' => false,
    'message' => "Endpoint not found: {$uri}"
]);
