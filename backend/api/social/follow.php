<?php
// backend/api/social/follow.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$followerId = (int)$user['user_id'];
$input = getJsonInput();
$targetId = (int)($input['user_id'] ?? 0);

if ($targetId <= 0) {
    jsonError('Target user ID is required.', 400);
}

if ($targetId === $followerId) {
    jsonError('You cannot follow yourself.', 400);
}

$db = Database::getConnection();

// Check target user
$stmt = $db->prepare("SELECT id, username FROM users WHERE id = :id AND status = 'active' LIMIT 1");
$stmt->execute(['id' => $targetId]);
$targetUser = $stmt->fetch();

if (!$targetUser) {
    jsonError('Creator not found.', 404);
}

// Check existing follow
$stmt = $db->prepare("SELECT id FROM follows WHERE follower_id = :f AND following_id = :t LIMIT 1");
$stmt->execute(['f' => $followerId, 't' => $targetId]);
$existing = $stmt->fetch();

$isFollowing = false;

if ($existing) {
    // Unfollow
    $db->prepare("DELETE FROM follows WHERE follower_id = :f AND following_id = :t")->execute(['f' => $followerId, 't' => $targetId]);
    $isFollowing = false;
} else {
    // Follow
    $db->prepare("INSERT INTO follows (follower_id, following_id) VALUES (:f, :t)")->execute(['f' => $followerId, 't' => $targetId]);
    $isFollowing = true;

    // Send notification
    $followerName = $user['full_name'] ?: $user['username'];
    $db->prepare("
        INSERT INTO notifications (user_id, actor_id, type, message)
        VALUES (:uid, :actor, 'follow', :msg)
    ")->execute([
        'uid'   => $targetId,
        'actor' => $followerId,
        'msg'   => "{$followerName} started following your portfolio"
    ]);
}

// Get updated follower count
$stmt = $db->prepare("SELECT COUNT(*) FROM follows WHERE following_id = :t");
$stmt->execute(['t' => $targetId]);
$followersCount = (int)$stmt->fetchColumn();

jsonSuccess($isFollowing ? 'Followed creator' : 'Unfollowed creator', [
    'following'       => $isFollowing,
    'followers_count' => $followersCount
]);
