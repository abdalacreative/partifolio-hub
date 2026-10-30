// frontend/src/pages/admin/AdminUsersPage.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { ConfirmModal } from '../../components/ConfirmModal';
import {
  Users,
  Search,
  Shield,
  ShieldAlert,
  Ban,
  CheckCircle,
  Trash2,
  ExternalLink,
  MoreVertical,
  Pencil,
  X,
  Save,
  Key,
  Mail,
  Phone,
  AtSign,
  Briefcase,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminUsersPage = () => {
  const { showToast } = useToast();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total_pages: 1, total_users: 0 });

  const [targetUser, setTargetUser] = useState(null);
  const [confirmAction, setConfirmAction] = useState(null); // { type: 'delete' | 'status', newStatus?: string }

  // Edit User Modal State
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({
    full_name: '',
    username: '',
    email: '',
    phone: '',
    professional_title: '',
    location: '',
    bio: '',
    role: 'user',
    status: 'active',
    password: ''
  });
  const [savingEdit, setSavingEdit] = useState(false);

  const handleOpenEdit = (u) => {
    setEditingUser(u);
    setEditForm({
      full_name: u.full_name || '',
      username: u.username || '',
      email: u.email || '',
      phone: u.phone || '',
      professional_title: u.professional_title || '',
      location: u.location || '',
      bio: u.bio || '',
      role: u.role || 'user',
      status: u.status || 'active',
      password: ''
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingUser) return;
    setSavingEdit(true);
    try {
      const res = await api.adminUserAction(editingUser.id, 'edit_user', editForm);
      if (res.success) {
        showToast('User profile updated successfully!', 'success');
        setEditingUser(null);
        fetchUsers();
      } else {
        showToast(res.message || 'Failed to update user', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Error updating user profile', 'error');
    } finally {
      setSavingEdit(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await api.getAdminUsers({
        search,
        role: roleFilter,
        status: statusFilter,
        page,
        limit: 15
      });
      if (res.success && res.data) {
        setUsers(res.data.users || []);
        setPagination(res.data.pagination || { total_pages: 1, total_users: 0 });
      }
    } catch (err) {
      console.error(err);
      showToast('Could not fetch user list', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search, roleFilter, statusFilter, page]);

  const handleExecuteAction = async () => {
    if (!targetUser || !confirmAction) return;

    try {
      if (confirmAction.type === 'delete') {
        const res = await api.adminUserAction(targetUser.id, 'delete');
        if (res.success) {
          showToast(`User ${targetUser.username} removed`, 'success');
          fetchUsers();
        }
      } else if (confirmAction.type === 'status') {
        const res = await api.adminUserAction(targetUser.id, 'status', { status: confirmAction.newStatus });
        if (res.success) {
          showToast(`User status set to ${confirmAction.newStatus}`, 'success');
          fetchUsers();
        }
      } else if (confirmAction.type === 'role') {
        const res = await api.adminUserAction(targetUser.id, 'role', { role: confirmAction.newRole });
        if (res.success) {
          showToast(`User role updated to ${confirmAction.newRole}`, 'success');
          fetchUsers();
        }
      }
    } catch (err) {
      showToast('Failed to apply user management action', 'error');
    } finally {
      setTargetUser(null);
      setConfirmAction(null);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>
          User Directory & Moderation
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Manage member accounts, assign roles, enforce suspensions, and manage community access.
        </p>
      </div>

      {/* Filter / Search Bar */}
      <div className="card" style={{ padding: '20px 24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input
              type="text"
              placeholder="Search by username, full name, or email..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="input-control"
              style={{ paddingLeft: '42px', width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <select
              value={roleFilter}
              onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
              className="input-control"
              style={{ width: '150px' }}
            >
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              className="input-control"
              style={{ width: '150px' }}
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
            <p style={{ color: 'var(--text-muted)' }}>Retrieving user list...</p>
          </div>
        ) : users.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            No accounts match the current query criteria.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Member Profile</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Role</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Account Status</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Showcases</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700' }}>Joined</th>
                  <th style={{ padding: '16px 20px', fontWeight: '700', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={u.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                          alt={u.username}
                          style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <div>
                          <Link to={`/profile/${u.username}`} style={{ fontWeight: '700', color: 'var(--text-main)', textDecoration: 'none' }}>
                            {u.full_name || u.username}
                          </Link>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                            @{u.username} • {u.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <span className={`badge ${u.role === 'admin' ? 'badge-primary' : 'badge-secondary'}`} style={{ textTransform: 'capitalize' }}>
                        {u.role}
                      </span>
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <span className={`badge ${u.status === 'active' ? 'badge-success' : 'badge-danger'}`} style={{ textTransform: 'capitalize' }}>
                        {u.status}
                      </span>
                    </td>

                    <td style={{ padding: '16px 20px', fontWeight: '700', color: 'var(--text-main)' }}>
                      {u.posts_count || 0}
                    </td>

                    <td style={{ padding: '16px 20px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {new Date(u.created_at).toLocaleDateString()}
                    </td>

                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        {/* Edit User Button */}
                        <button
                          onClick={() => handleOpenEdit(u)}
                          className="btn btn-secondary btn-sm"
                          title="Edit User Info"
                          style={{
                            padding: '6px 10px',
                            color: '#6e25e8',
                            background: 'rgba(110, 37, 232, 0.08)',
                            border: '1px solid rgba(110, 37, 232, 0.2)'
                          }}
                        >
                          <Pencil size={15} />
                        </button>

                        {u.status === 'active' ? (
                          <button
                            onClick={() => {
                              setTargetUser(u);
                              setConfirmAction({ type: 'status', newStatus: 'suspended' });
                            }}
                            className="btn btn-secondary btn-sm"
                            title="Suspend Account"
                            style={{ padding: '6px 10px', color: 'var(--warning)' }}
                          >
                            <Ban size={15} />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setTargetUser(u);
                              setConfirmAction({ type: 'status', newStatus: 'active' });
                            }}
                            className="btn btn-secondary btn-sm"
                            title="Restore Account"
                            style={{ padding: '6px 10px', color: 'var(--success)' }}
                          >
                            <CheckCircle size={15} />
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setTargetUser(u);
                            setConfirmAction({ type: 'role', newRole: u.role === 'admin' ? 'user' : 'admin' });
                          }}
                          className="btn btn-secondary btn-sm"
                          title={u.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
                          style={{ padding: '6px 10px' }}
                        >
                          <Shield size={15} />
                        </button>

                        <button
                          onClick={() => {
                            setTargetUser(u);
                            setConfirmAction({ type: 'delete' });
                          }}
                          className="btn btn-secondary btn-sm"
                          title="Delete Account"
                          style={{ padding: '6px 10px', color: 'var(--danger)' }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={!!targetUser && !!confirmAction}
        title={
          confirmAction?.type === 'delete'
            ? 'Delete User Account'
            : confirmAction?.type === 'status'
            ? `${confirmAction.newStatus === 'suspended' ? 'Suspend' : 'Activate'} User`
            : 'Change User Role'
        }
        message={
          confirmAction?.type === 'delete'
            ? `Are you sure you want to permanently delete user @${targetUser?.username}? This will remove all their posts and profile data.`
            : confirmAction?.type === 'status'
            ? `Are you sure you want to change @${targetUser?.username}'s status to ${confirmAction?.newStatus}?`
            : `Are you sure you want to set @${targetUser?.username}'s role to ${confirmAction?.newRole}?`
        }
        confirmText="Confirm Action"
        confirmVariant={confirmAction?.type === 'delete' || confirmAction?.newStatus === 'suspended' ? 'danger' : 'primary'}
        onConfirm={handleExecuteAction}
        onCancel={() => { setTargetUser(null); setConfirmAction(null); }}
      />

      {/* Edit User Modal */}
      {editingUser && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '620px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8fafc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}>
                  {(editingUser.username || 'U')[0].toUpperCase()}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Edit Member Profile
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                    Updating credentials and public data for @{editingUser.username}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingUser(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.background = '#e2e8f0'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'none'; }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveEdit} style={{ overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editForm.full_name}
                    onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>

                {/* Username */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Username
                  </label>
                  <input
                    type="text"
                    value={editForm.username}
                    onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    placeholder="+25261..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Professional Title */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Professional Title / Headline
                  </label>
                  <input
                    type="text"
                    value={editForm.professional_title}
                    onChange={(e) => setEditForm({ ...editForm, professional_title: e.target.value })}
                    placeholder="e.g. Graphic Designer, Web Architect"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>

                {/* Location */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Location / City
                  </label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    placeholder="e.g. Mogadishu, Somalia"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Role */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Account Role
                  </label>
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="user">Regular User / Creator</option>
                    <option value="admin">System Administrator</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Account Status
                  </label>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="active">Active (Full Access)</option>
                    <option value="suspended">Suspended (Restricted)</option>
                    <option value="deactivated">Deactivated</option>
                  </select>
                </div>
              </div>

              {/* Reset Password Optional */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  New Password <span style={{ color: '#94a3b8', fontWeight: 400 }}>(leave empty to keep unchanged)</span>
                </label>
                <input
                  type="password"
                  value={editForm.password}
                  onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                  placeholder="Set a new password for this user"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                />
              </div>

              {/* Bio */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Biography / Summary
                </label>
                <textarea
                  rows={3}
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  placeholder="Short bio about the creator..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    outline: 'none',
                    background: '#ffffff',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '12px',
                paddingTop: '12px',
                borderTop: '1px solid #f1f5f9'
              }}>
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 20px', borderRadius: '10px', fontWeight: 700 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingEdit}
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 24px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)'
                  }}
                >
                  <Save size={16} />
                  <span>{savingEdit ? 'Saving Changes...' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
