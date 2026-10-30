// frontend/src/layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet, Navigate, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import {
  Shield,
  Users,
  Flag,
  LayoutDashboard,
  ArrowLeft,
  Menu,
  X,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Bell,
  Camera,
  Settings
} from 'lucide-react';

export const AdminLayout = () => {
  const { user, loading, isAuthenticated, isAdmin, logout, refreshUser } = useAuth();
  const { showToast } = useToast();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const navigate = useNavigate();

  const handleAdminAvatarUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingAvatar(true);
    try {
      const res = await api.uploadFile(file, 'avatars');
      if (res.success && res.data?.file_url) {
        await api.updateProfile({ profile_photo: res.data.file_url });
        if (refreshUser) await refreshUser();
        showToast('Admin profile photo updated successfully!', 'success');
      } else {
        showToast(res.message || 'Failed to upload photo', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Error uploading photo', 'error');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0f19', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner" style={{ margin: '0 auto 14px', borderTopColor: '#c084fc' }} />
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Verifying administrative credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  const navItems = [
    { to: '/admin', end: true, label: 'Overview', icon: LayoutDashboard },
    { to: '/admin/users', end: false, label: 'User Directory', icon: Users },
    { to: '/admin/reports', end: false, label: 'Content & Reports', icon: Flag }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Admin Sidebar */}
      <aside className={`admin-sidebar ${mobileOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)'
            }}>
              <Shield size={22} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Partfolio<span style={{ color: '#c084fc' }}>Hub</span>
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>
                ADMIN CONTROL CENTER
              </div>
            </div>
          </div>
          {mobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav style={{ padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0 12px 6px' }}>
            Main Governance
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={19} strokeWidth={2.2} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div style={{ margin: '16px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }} />

          <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0 12px 6px' }}>
            External Views
          </div>

          <Link
            to="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#94a3b8',
              padding: '10px 14px',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
          >
            <ArrowLeft size={16} />
            <span>Back to Creator App</span>
          </Link>

          <Link
            to="/"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#94a3b8',
              padding: '10px 14px',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
          >
            <ExternalLink size={16} />
            <span>Open Public Site</span>
          </Link>
        </nav>

        {/* Admin User Mini Card & Logout */}
        <div style={{
          padding: '16px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <img
              src={user?.profile_photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
              alt={user?.full_name}
              style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #7c3aed' }}
            />
            <div style={{ overflow: 'hidden', flex: 1 }}>
              <div style={{ color: '#ffffff', fontSize: '0.86rem', fontWeight: 800, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {user?.full_name || 'System Administrator'}
              </div>
              <div style={{ color: '#c084fc', fontSize: '0.74rem', fontWeight: 700 }}>
                Super Administrator
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#f87171',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <LogOut size={14} />
            <span>Logout Admin Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Admin Header */}
        <header style={{
          height: '68px',
          background: '#ffffff',
          borderBottom: '1px solid #edf2f7',
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 80,
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => setMobileOpen(true)}
              className="admin-menu-btn"
              style={{ display: 'none', background: 'none', border: 'none', color: '#0c1538', cursor: 'pointer' }}
            >
              <Menu size={22} />
            </button>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(124, 58, 237, 0.08)',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#7c3aed'
            }}>
              <ShieldCheck size={14} />
              <span>PLATFORM GOVERNANCE &amp; MODERATION</span>
            </div>
          </div>

          {/* Right Header Status & Admin Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#059669'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
              <span>ADMIN SESSION ACTIVE</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Profile Photo with quick-change trigger */}
              <div style={{ position: 'relative' }}>
                <img
                  src={user?.profile_photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
                  alt={user?.full_name}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #7c3aed',
                    display: 'block'
                  }}
                />
                <label
                  htmlFor="admin-header-avatar-upload"
                  title="Upload / Change Admin Photo"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#7c3aed',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: uploadingAvatar ? 'wait' : 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    border: '1.5px solid #ffffff'
                  }}
                >
                  <Camera size={10} />
                </label>
                <input
                  id="admin-header-avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAdminAvatarUpload}
                  disabled={uploadingAvatar}
                  style={{ display: 'none' }}
                />
              </div>

              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0c1538', lineHeight: 1.1 }}>
                  {user?.full_name || 'System Administrator'}
                </div>
                <Link
                  to="/settings"
                  style={{ fontSize: '0.72rem', color: '#7c3aed', fontWeight: 700, textDecoration: 'none' }}
                >
                  Edit Profile & Photo →
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Admin View */}
        <main style={{ flex: 1, padding: '32px', maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        .admin-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0b132e 0%, #070918 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .admin-nav-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(2px);
        }

        .admin-nav-item.active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(99, 102, 241, 0.25) 100%);
          border-left: 3.5px solid #a855f7;
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .admin-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            transform: translateX(-100%);
            z-index: 110;
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
          .admin-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
