<?php
// backend/api/users/profile.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$username = trim($_GET['username'] ?? '');
$userId = (int)($_GET['id'] ?? 0);

if (empty($username) && $userId <= 0) {
    jsonError('Username or user ID is required.', 400);
}

$currentViewer = getAuthenticatedUser(false);
$viewerId = $currentViewer ? (int)$currentViewer['user_id'] : 0;

$db = Database::getConnection();

if (!empty($username)) {
    $stmt = $db->prepare("SELECT id FROM users WHERE username = :u LIMIT 1");
    $stmt->execute(['u' => $username]);
    $userId = (int)$stmt->fetchColumn();
}

if ($userId <= 0) {
    jsonError('User not found.', 404);
}

// Fetch user + profile
$stmt = $db->prepare("
    SELECT u.id, u.username, u.email, u.phone, u.role, u.status, u.created_at as joined_date,
           p.full_name, p.professional_title, p.bio, p.location, p.profile_photo, p.cover_photo,
           p.website, p.whatsapp, p.facebook, p.instagram, p.tiktok, p.experience, p.education,
           p.portfolio_intro, p.is_public, p.show_email, p.show_phone
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
    WHERE u.id = :uid
    LIMIT 1
");
$stmt->execute(['uid' => $userId]);
$profile = $stmt->fetch();

if (!$profile) {
    jsonError('Profile not found.', 404);
}

// Stats
$stmt = $db->prepare("SELECT COUNT(*) FROM posts WHERE user_id = :uid AND status = 'published'");
$stmt->execute(['uid' => $userId]);
$postsCount = (int)$stmt->fetchColumn();

$stmt = $db->prepare("SELECT COUNT(*) FROM follows WHERE following_id = :uid");
$stmt->execute(['uid' => $userId]);
$followersCount = (int)$stmt->fetchColumn();

$stmt = $db->prepare("SELECT COUNT(*) FROM follows WHERE follower_id = :uid");
$stmt->execute(['uid' => $userId]);
$followingCount = (int)$stmt->fetchColumn();

$stmt = $db->prepare("
    SELECT COALESCE(SUM(p.likes_count), 0)
    FROM posts p
    WHERE p.user_id = :uid
");
$stmt->execute(['uid' => $userId]);
$totalLikes = (int)$stmt->fetchColumn();

// Fetch skills
$stmt = $db->prepare("
    SELECT s.id, s.name, s.slug, us.is_primary
    FROM user_skills us
    JOIN skills s ON s.id = us.skill_id
    WHERE us.user_id = :uid
    ORDER BY us.is_primary DESC, s.name ASC
");
$stmt->execute(['uid' => $userId]);
$skills = $stmt->fetchAll();

// Is current user following?
$isFollowing = false;
if ($viewerId > 0 && $viewerId !== $userId) {
    $stmt = $db->prepare("SELECT id FROM follows WHERE follower_id = :f AND following_id = :t LIMIT 1");
    $stmt->execute(['f' => $viewerId, 't' => $userId]);
    $isFollowing = (bool)$stmt->fetchColumn();
}

// Fetch user's posts
$stmt = $db->prepare("
    SELECT p.id, p.title, p.description, p.post_type, p.views_count, p.likes_count, p.comments_count, p.created_at,
           c.name as category_name, c.slug as category_slug,
           COALESCE(
               (SELECT media_url FROM post_media WHERE post_id = p.id AND media_type IN ('image', 'thumbnail') ORDER BY sort_order ASC LIMIT 1),
               (SELECT media_url FROM post_media WHERE post_id = p.id ORDER BY sort_order ASC LIMIT 1)
           ) as cover_image,
           (SELECT media_url FROM post_media WHERE post_id = p.id AND media_type = 'video' ORDER BY sort_order ASC LIMIT 1) as video_url,
           pr.project_url, pr.github_url, pr.technologies
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    LEFT JOIN projects pr ON pr.post_id = p.id
    WHERE p.user_id = :uid AND p.status = 'published'
    ORDER BY p.created_at DESC
");
$stmt->execute(['uid' => $userId]);
$posts = $stmt->fetchAll();

// Sanitize private fields if viewer is not the profile owner
if ($viewerId !== $userId) {
    if (empty($profile['show_email'])) {
        unset($profile['email']);
    }
    if (empty($profile['show_phone'])) {
        unset($profile['phone']);
    }
}

jsonSuccess('Profile fetched successfully', [
    'profile' => [
        'id'                 => (int)$profile['id'],
        'username'           => $profile['username'],
        'full_name'          => $profile['full_name'] ?: $profile['username'],
        'professional_title' => $profile['professional_title'] ?: 'Creative Creator',
        'bio'                => $profile['bio'] ?: '',
        'location'           => $profile['location'] ?: 'Global',
        'profile_photo'      => $profile['profile_photo'] ?: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
        'cover_photo'        => $profile['cover_photo'] ?: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
        'website'            => $profile['website'] ?: '',
        'whatsapp'           => $profile['whatsapp'] ?: '',
        'facebook'           => $profile['facebook'] ?: '',
        'instagram'          => $profile['instagram'] ?: '',
        'tiktok'             => $profile['tiktok'] ?: '',
        'experience'         => $profile['experience'] ?: 'Freelance',
        'education'          => $profile['education'] ?: '',
        'portfolio_intro'    => $profile['portfolio_intro'] ?: '',
        'joined_date'        => $profile['joined_date'],
        'is_following'       => $isFollowing,
        'is_own_profile'     => ($viewerId === $userId),
        'stats' => [
            'posts_count'     => $postsCount,
            'followers_count' => $followersCount,
            'following_count' => $followingCount,
            'total_likes'     => $totalLikes
        ],
        'skills' => $skills,
        'posts'  => $posts
    ]
]);
