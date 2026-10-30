// frontend/src/components/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Logo } from './Logo';
import {
  LayoutDashboard,
  User,
  PlusSquare,
  FileText,
  Compass,
  MessageSquare,
  Bell,
  BarChart3,
  Settings,
  LogOut,
  ShieldAlert,
  X
} from 'lucide-react';

export const Sidebar = ({ mobileOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Profile', path: '/my-profile', icon: User },
    { name: 'Create Post', path: '/create-post', icon: PlusSquare },
    { name: 'My Posts', path: '/my-posts', icon: FileText },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Messages', path: '/messages', icon: MessageSquare, badge: user?.unread_messages_count },
    { name: 'Notifications', path: '/notifications', icon: Bell, badge: user?.unread_notifications_count },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 105,
            backdropFilter: 'blur(2px)'
          }}
        />
      )}

      <aside className={`dashboard-sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Logo size="small" light={true} linkTo="/" />

          {mobileOpen && (
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '20px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={19} />
                <span style={{ flex: 1 }}>{item.name}</span>
                {item.badge > 0 && (
                  <span style={{
                    background: '#6366f1',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '2px 7px',
                    borderRadius: '12px'
                  }}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}

          {user?.role === 'admin' && (
            <NavLink
              to="/admin"
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              style={{ color: '#a78bfa', marginTop: '10px' }}
            >
              <ShieldAlert size={19} />
              <span>Admin Portal</span>
            </NavLink>
          )}
        </nav>

        {/* User Mini Profile & Logout */}
        <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <img
              src={user?.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
              alt={user?.full_name}
              style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <p style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {user?.full_name}
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                @{user?.username}
              </p>
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
              padding: '9px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: 'var(--radius-sm)',
              color: '#f87171',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      <style>{`
        .dashboard-sidebar {
          width: 260px;
          background: #0f172a;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: transform 0.3s ease;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          border-radius: var(--radius-md);
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }
        .sidebar-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          color: #818cf8;
          font-weight: 600;
          border-left: 3px solid #6366f1;
        }

        @media (max-width: 960px) {
          .dashboard-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            transform: translateX(-100%);
            z-index: 110;
          }
          .dashboard-sidebar.mobile-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
