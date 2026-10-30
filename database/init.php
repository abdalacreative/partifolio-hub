<?php
$host = '127.0.0.1';
$port = 3306;
$user = 'root';
$pass = '';

try {
    echo "Connecting to MySQL at $host:$port...\n";
    $pdo = new PDO("mysql:host=$host;port=$port;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    echo "Running partfoliohub.sql...\n";
    $schemaSql = file_get_contents(__DIR__ . '/database/partfoliohub.sql');
    $pdo->exec($schemaSql);
    echo "Schema imported successfully!\n";

    echo "Running seed.sql...\n";
    $seedSql = file_get_contents(__DIR__ . '/database/seed.sql');
    $pdo->exec($seedSql);
    echo "Seed data imported successfully!\n";

    // Verify
    $pdo->exec("USE `partfoliohub`");
    $stmt = $pdo->query("SELECT count(*) as count FROM users");
    $userCount = $stmt->fetch(PDO::FETCH_ASSOC)['count'];

    $stmt2 = $pdo->query("SELECT count(*) as count FROM posts");
    $postCount = $stmt2->fetch(PDO::FETCH_ASSOC)['count'];

    echo "Database ready! Users: $userCount, Posts: $postCount\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    exit(1);
}
