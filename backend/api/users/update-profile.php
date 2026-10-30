<?php
// backend/api/users/update-profile.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();

$fullName = trim($input['full_name'] ?? $user['full_name'] ?? '');
$professionalTitle = trim($input['professional_title'] ?? $user['professional_title'] ?? '');
$bio = trim($input['bio'] ?? $user['bio'] ?? '');
$location = trim($input['location'] ?? $user['location'] ?? '');
$website = trim($input['website'] ?? $user['website'] ?? '');
$whatsapp = trim($input['whatsapp'] ?? $user['whatsapp'] ?? '');
$facebook = trim($input['facebook'] ?? $user['facebook'] ?? '');
$instagram = trim($input['instagram'] ?? $user['instagram'] ?? '');
$tiktok = trim($input['tiktok'] ?? $user['tiktok'] ?? '');
$experience = trim($input['experience'] ?? $user['experience'] ?? '');
$education = trim($input['education'] ?? $user['education'] ?? '');
$portfolioIntro = trim($input['portfolio_intro'] ?? $user['portfolio_intro'] ?? '');
$profilePhoto = trim($input['profile_photo'] ?? $user['profile_photo'] ?? '');
$coverPhoto = trim($input['cover_photo'] ?? $user['cover_photo'] ?? '');

$db = Database::getConnection();

$stmt = $db->prepare("
    UPDATE profiles
    SET full_name = :full_name,
        professional_title = :professional_title,
        bio = :bio,
        location = :location,
        website = :website,
        whatsapp = :whatsapp,
        facebook = :facebook,
        instagram = :instagram,
        tiktok = :tiktok,
        experience = :experience,
        education = :education,
        portfolio_intro = :portfolio_intro,
        profile_photo = :profile_photo,
        cover_photo = :cover_photo,
        updated_at = NOW()
    WHERE user_id = :uid
");

$stmt->execute([
    'full_name'          => $fullName,
    'professional_title' => $professionalTitle,
    'bio'                => $bio,
    'location'           => $location,
    'website'            => $website,
    'whatsapp'           => $whatsapp,
    'facebook'           => $facebook,
    'instagram'          => $instagram,
    'tiktok'             => $tiktok,
    'experience'         => $experience,
    'education'          => $education,
    'portfolio_intro'    => $portfolioIntro,
    'profile_photo'      => $profilePhoto,
    'cover_photo'        => $coverPhoto,
    'uid'                => $userId
]);

// Optionally update skills if passed
if (isset($input['skills']) && is_array($input['skills'])) {
    $stmt = $db->prepare("DELETE FROM user_skills WHERE user_id = :uid");
    $stmt->execute(['uid' => $userId]);

    $insertSkill = $db->prepare("
        INSERT INTO user_skills (user_id, skill_id, is_primary)
        VALUES (:uid, :sid, :pri)
    ");
    foreach ($input['skills'] as $index => $skill) {
        $skillId = is_array($skill) ? (int)($skill['id'] ?? 0) : (int)$skill;
        if ($skillId > 0) {
            $insertSkill->execute([
                'uid' => $userId,
                'sid' => $skillId,
                'pri' => ($index < 3) ? 1 : 0
            ]);
        }
    }
}

jsonSuccess('Profile updated successfully!');
