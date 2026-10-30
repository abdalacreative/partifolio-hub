<?php
// backend/api/admin/users.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

$admin = requireAdmin();
$adminId = (int)$admin['user_id'];
$db = Database::getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $search = trim($_GET['search'] ?? '');
    $role = trim($_GET['role'] ?? '');
    $status = trim($_GET['status'] ?? '');
    $limit = min(100, max(1, (int)($_GET['limit'] ?? 15)));
    $page = max(1, (int)($_GET['page'] ?? 1));
    $offset = ($page - 1) * $limit;

    $where = ["1=1"];
    $params = [];

    if (!empty($search)) {
        $where[] = "(u.username LIKE :s1 OR u.email LIKE :s2 OR pr.full_name LIKE :s3)";
        $params['s1'] = "%{$search}%";
        $params['s2'] = "%{$search}%";
        $params['s3'] = "%{$search}%";
    }

    if (!empty($role) && in_array($role, ['user', 'admin'])) {
        $where[] = "u.role = :role";
        $params['role'] = $role;
    }

    if (!empty($status) && in_array($status, ['active', 'suspended', 'deactivated'])) {
        $where[] = "u.status = :status";
        $params['status'] = $status;
    }

    $whereSql = implode(' AND ', $where);

    $countStmt = $db->prepare("
        SELECT COUNT(*) FROM users u 
        LEFT JOIN profiles pr ON pr.user_id = u.id 
        WHERE {$whereSql}
    ");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetchColumn();

    $stmt = $db->prepare("
        SELECT u.id, u.username, u.email, u.phone, u.role, u.status, u.created_at,
               pr.full_name, pr.professional_title, pr.profile_photo, pr.bio, pr.location,
               (SELECT COUNT(*) FROM posts WHERE user_id = u.id) as posts_count
        FROM users u
        LEFT JOIN profiles pr ON pr.user_id = u.id
        WHERE {$whereSql}
        ORDER BY u.created_at DESC
        LIMIT :limit OFFSET :offset
    ");
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, $v);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $users = $stmt->fetchAll();

    jsonSuccess('Users loaded', [
        'users' => $users,
        'pagination' => [
            'page'        => $page,
            'limit'       => $limit,
            'total'       => $total,
            'total_pages' => ceil($total / $limit)
        ]
    ]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = getJsonInput();
    $targetId = (int)($input['user_id'] ?? 0);
    $action = $input['action'] ?? '';

    if ($targetId <= 0) {
        jsonError('Target user ID required.', 400);
    }

    // 1. Status Update
    if ($action === 'update_status' || $action === 'status') {
        $newStatus = in_array($input['status'] ?? '', ['active', 'suspended', 'deactivated']) ? $input['status'] : 'active';
        $stmt = $db->prepare("UPDATE users SET status = :status WHERE id = :id");
        $stmt->execute(['status' => $newStatus, 'id' => $targetId]);

        // Log action
        $db->prepare("
            INSERT INTO admin_logs (admin_id, action, target_type, target_id, details)
            VALUES (:aid, 'update_user_status', 'user', :tid, :det)
        ")->execute([
            'aid' => $adminId,
            'tid' => $targetId,
            'det' => "Status changed to {$newStatus}"
        ]);

        jsonSuccess("User status updated to {$newStatus}.");
    }

    // 2. Role Update
    if ($action === 'update_role' || $action === 'role') {
        $newRole = in_array($input['role'] ?? '', ['user', 'admin']) ? $input['role'] : 'user';
        $stmt = $db->prepare("UPDATE users SET role = :role WHERE id = :id");
        $stmt->execute(['role' => $newRole, 'id' => $targetId]);

        $db->prepare("
            INSERT INTO admin_logs (admin_id, action, target_type, target_id, details)
            VALUES (:aid, 'update_user_role', 'user', :tid, :det)
        ")->execute([
            'aid' => $adminId,
            'tid' => $targetId,
            'det' => "Role changed to {$newRole}"
        ]);

        jsonSuccess("User role updated to {$newRole}.");
    }

    // 3. Delete User
    if ($action === 'delete_user' || $action === 'delete') {
        if ($targetId === $adminId) {
            jsonError('You cannot delete your own admin account.', 400);
        }

        $stmt = $db->prepare("DELETE FROM users WHERE id = :id");
        $stmt->execute(['id' => $targetId]);

        $db->prepare("
            INSERT INTO admin_logs (admin_id, action, target_type, target_id, details)
            VALUES (:aid, 'delete_user', 'user', :tid, 'User account purged')
        ")->execute([
            'aid' => $adminId,
            'tid' => $targetId
        ]);

        jsonSuccess('User account successfully deleted.');
    }

    // 4. Edit User Information (Name, Username, Email, Phone, Title, Role, Status, Password)
    if ($action === 'edit_user' || $action === 'update_user' || $action === 'edit') {
        $username = trim($input['username'] ?? '');
        $email = trim($input['email'] ?? '');
        $phone = trim($input['phone'] ?? '');
        $fullName = trim($input['full_name'] ?? '');
        $professionalTitle = trim($input['professional_title'] ?? '');
        $bio = trim($input['bio'] ?? '');
        $location = trim($input['location'] ?? '');
        $newRole = in_array($input['role'] ?? '', ['user', 'admin']) ? $input['role'] : 'user';
        $newStatus = in_array($input['status'] ?? '', ['active', 'suspended', 'deactivated']) ? $input['status'] : 'active';
        $password = trim($input['password'] ?? '');

        if (empty($username) || empty($email)) {
            jsonError('Username and email are required.', 400);
        }

        // Validate username uniqueness
        $stmt = $db->prepare("SELECT id FROM users WHERE username = :u AND id != :id");
        $stmt->execute(['u' => $username, 'id' => $targetId]);
        if ($stmt->fetch()) {
            jsonError("Username '{$username}' is already taken.", 400);
        }

        // Validate email uniqueness
        $stmt = $db->prepare("SELECT id FROM users WHERE email = :e AND id != :id");
        $stmt->execute(['e' => $email, 'id' => $targetId]);
        if ($stmt->fetch()) {
            jsonError("Email '{$email}' is already in use by another user.", 400);
        }

        // Update users table
        if (!empty($password)) {
            $hashed = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $db->prepare("
                UPDATE users 
                SET username = :u, email = :e, phone = :ph, role = :r, status = :s, password_hash = :pwd
                WHERE id = :id
            ");
            $stmt->execute([
                'u' => $username,
                'e' => $email,
                'ph' => $phone,
                'r' => $newRole,
                's' => $newStatus,
                'pwd' => $hashed,
                'id' => $targetId
            ]);
        } else {
            $stmt = $db->prepare("
                UPDATE users 
                SET username = :u, email = :e, phone = :ph, role = :r, status = :s
                WHERE id = :id
            ");
            $stmt->execute([
                'u' => $username,
                'e' => $email,
                'ph' => $phone,
                'r' => $newRole,
                's' => $newStatus,
                'id' => $targetId
            ]);
        }

        // Upsert profiles table
        $profStmt = $db->prepare("
            INSERT INTO profiles (user_id, full_name, professional_title, bio, location)
            VALUES (:uid, :fn, :pt, :bio, :loc)
            ON DUPLICATE KEY UPDATE
                full_name = VALUES(full_name),
                professional_title = VALUES(professional_title),
                bio = VALUES(bio),
                location = VALUES(location)
        ");
        $profStmt->execute([
            'uid' => $targetId,
            'fn' => !empty($fullName) ? $fullName : $username,
            'pt' => $professionalTitle,
            'bio' => $bio,
            'loc' => $location
        ]);

        // Log edit
        $db->prepare("
            INSERT INTO admin_logs (admin_id, action, target_type, target_id, details)
            VALUES (:aid, 'edit_user', 'user', :tid, :det)
        ")->execute([
            'aid' => $adminId,
            'tid' => $targetId,
            'det' => "Updated user profile for @{$username}"
        ]);

        jsonSuccess('User profile details updated successfully.');
    }

    jsonError('Invalid action.', 400);
}
