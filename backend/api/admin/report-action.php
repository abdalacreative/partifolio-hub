<?php
// backend/api/admin/report-action.php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Method not allowed', 405);
}

$admin = requireAdmin();
$adminId = (int)$admin['user_id'];
$input = getJsonInput();

$reportId = (int)($input['report_id'] ?? 0);
$action = $input['action'] ?? '';
$notes = trim($input['notes'] ?? '');

if ($reportId <= 0) {
    jsonError('Report ID is required.', 400);
}

$db = Database::getConnection();

$stmt = $db->prepare("SELECT * FROM reports WHERE id = :id LIMIT 1");
$stmt->execute(['id' => $reportId]);
$report = $stmt->fetch();

if (!$report) {
    jsonError('Report not found.', 404);
}

if ($action === 'resolve') {
    $stmt = $db->prepare("
        UPDATE reports 
        SET status = 'resolved', resolved_by = :aid, resolution_notes = :notes, updated_at = NOW() 
        WHERE id = :id
    ");
    $stmt->execute([
        'aid'   => $adminId,
        'notes' => $notes ?: 'Resolved by administrator',
        'id'    => $reportId
    ]);
    jsonSuccess('Report marked as resolved.');
}

if ($action === 'dismiss' || $action === 'reject' || $action === 'rejected') {
    $stmt = $db->prepare("
        UPDATE reports 
        SET status = 'dismissed', resolved_by = :aid, resolution_notes = :notes, updated_at = NOW() 
        WHERE id = :id
    ");
    $stmt->execute([
        'aid'   => $adminId,
        'notes' => $notes ?: 'Dismissed / rejected after review',
        'id'    => $reportId
    ]);
    jsonSuccess('Report dismissed / rejected.');
}

if ($action === 'in_review' || $action === 'review' || $action === 'reviewed') {
    $stmt = $db->prepare("
        UPDATE reports 
        SET status = 'reviewed', resolved_by = :aid, resolution_notes = :notes, updated_at = NOW() 
        WHERE id = :id
    ");
    $stmt->execute([
        'aid'   => $adminId,
        'notes' => $notes ?: 'Investigation currently in progress',
        'id'    => $reportId
    ]);
    jsonSuccess('Report marked as in review.');
}

if ($action === 'remove_content' || $action === 'delete_content') {
    $db->beginTransaction();
    try {
        if ($report['post_id']) {
            $db->prepare("DELETE FROM posts WHERE id = :pid")->execute(['pid' => $report['post_id']]);
        }
        if ($report['comment_id']) {
            $db->prepare("DELETE FROM comments WHERE id = :cid")->execute(['cid' => $report['comment_id']]);
        }

        $stmt = $db->prepare("
            UPDATE reports 
            SET status = 'resolved', resolved_by = :aid, resolution_notes = :notes, updated_at = NOW() 
            WHERE id = :id
        ");
        $stmt->execute([
            'aid'   => $adminId,
            'notes' => $notes ?: 'Content permanently removed and report resolved',
            'id'    => $reportId
        ]);

        $db->commit();
        jsonSuccess('Violating content removed and report resolved.');
    } catch (Exception $e) {
        $db->rollBack();
        jsonError('Failed to remove content: ' . $e->getMessage(), 500);
    }
}

if ($action === 'suspend_user') {
    $db->beginTransaction();
    try {
        if ($report['reported_user_id']) {
            $db->prepare("UPDATE users SET status = 'suspended' WHERE id = :uid")->execute(['uid' => $report['reported_user_id']]);
        }
        $stmt = $db->prepare("
            UPDATE reports 
            SET status = 'resolved', resolved_by = :aid, resolution_notes = :notes, updated_at = NOW() 
            WHERE id = :id
        ");
        $stmt->execute([
            'aid'   => $adminId,
            'notes' => $notes ?: 'Reported user suspended and report resolved',
            'id'    => $reportId
        ]);
        $db->commit();
        jsonSuccess('Violating user suspended and report resolved.');
    } catch (Exception $e) {
        $db->rollBack();
        jsonError('Failed to suspend user: ' . $e->getMessage(), 500);
    }
}

jsonError('Invalid moderation action.', 400);
