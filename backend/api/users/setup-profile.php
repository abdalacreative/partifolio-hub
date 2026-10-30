<?php
// backend/api/users/setup-profile.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$user = getAuthenticatedUser(true);
$userId = (int)$user['user_id'];
$input = getJsonInput();

$fullName = trim($input['full_name'] ?? $user['full_name'] ?? '');
$professionalTitle = trim($input['professional_title'] ?? '');
$bio = trim($input['bio'] ?? '');
$location = trim($input['location'] ?? '');
$website = trim($input['website'] ?? '');
$whatsapp = trim($input['whatsapp'] ?? '');
$facebook = trim($input['facebook'] ?? '');
$instagram = trim($input['instagram'] ?? '');
$tiktok = trim($input['tiktok'] ?? '');
$experience = trim($input['experience'] ?? '');
$education = trim($input['education'] ?? '');
$portfolioIntro = trim($input['portfolio_intro'] ?? '');
$profilePhoto = trim($input['profile_photo'] ?? '');
$coverPhoto = trim($input['cover_photo'] ?? '');
$skills = $input['skills'] ?? [];

$db = Database::getConnection();
$db->beginTransaction();

try {
    // 1. Update Profile
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
            profile_photo = CASE WHEN :profile_photo != '' THEN :profile_photo ELSE profile_photo END,
            cover_photo = CASE WHEN :cover_photo != '' THEN :cover_photo ELSE cover_photo END,
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

    // 2. Mark User profile as completed
    $stmt = $db->prepare("UPDATE users SET is_profile_completed = 1 WHERE id = :uid");
    $stmt->execute(['uid' => $userId]);

    // 3. Attach skills
    if (!empty($skills) && is_array($skills)) {
        $stmt = $db->prepare("DELETE FROM user_skills WHERE user_id = :uid");
        $stmt->execute(['uid' => $userId]);

        $insertSkill = $db->prepare("
            INSERT INTO user_skills (user_id, skill_id, is_primary)
            VALUES (:uid, :sid, :pri)
            ON DUPLICATE KEY UPDATE is_primary = VALUES(is_primary)
        ");

        foreach ($skills as $index => $item) {
            $skillId = 0;
            if (is_numeric($item)) {
                $skillId = (int)$item;
            } elseif (is_string($item) && trim($item) !== '') {
                // Find or insert skill
                $find = $db->prepare("SELECT id FROM skills WHERE name = :name LIMIT 1");
                $find->execute(['name' => trim($item)]);
                $skillId = (int)$find->fetchColumn();
                if ($skillId <= 0) {
                    $slug = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', trim($item)));
                    $add = $db->prepare("INSERT INTO skills (name, slug) VALUES (:n, :s)");
                    $add->execute(['n' => trim($item), 's' => $slug]);
                    $skillId = (int)$db->lastInsertId();
                }
            } elseif (is_array($item) && isset($item['id'])) {
                $skillId = (int)$item['id'];
            }

            if ($skillId > 0) {
                $insertSkill->execute([
                    'uid' => $userId,
                    'sid' => $skillId,
                    'pri' => ($index < 3) ? 1 : 0
                ]);
            }
        }
    }

    $db->commit();
    jsonSuccess('Profile setup completed successfully! Welcome to your dashboard.');
} catch (Exception $e) {
    $db->rollBack();
    jsonError('Profile setup failed: ' . $e->getMessage(), 500);
}
