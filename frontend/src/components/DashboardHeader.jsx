// frontend/src/components/DashboardHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, MessageSquare, Menu, Plus } from 'lucide-react';

export const DashboardHeader = ({ onToggleSidebar, onOpenSearch }) => {
  const { user } = useAuth();

  return (
    <header style={{
      height: '70px',
      background: '#ffffff',
      borderBottom: '1px solid var(--border-color)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 90
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onToggleSidebar}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
          className="header-menu-btn"
        >
          <Menu size={22} />
        </button>

        {/* Global Search Bar */}
        <div
          onClick={onOpenSearch}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            width: '320px',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.88rem'
          }}
          className="header-search-bar"
        >
          <Search size={16} />
          <span>Search posts, creators, skills...</span>
        </div>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link
          to="/create-post"
          className="btn btn-primary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} />
          <span className="create-btn-text">New Post</span>
        </Link>

        <Link
          to="/messages"
          style={{
            position: 'relative',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)'
          }}
        >
          <MessageSquare size={18} />
          {user?.unread_messages_count > 0 && (
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ef4444'
            }} />
          )}
        </Link>

        <Link
          to="/notifications"
          style={{
            position: 'relative',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)'
          }}
        >
          <Bell size={18} />
          {user?.unread_notifications_count > 0 && (
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ef4444'
            }} />
          )}
        </Link>

        <Link to="/my-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={user?.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
            alt={user?.full_name}
            style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--border-color)' }}
          />
          <div className="header-user-info" style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1.2' }}>{user?.full_name}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>@{user?.username}</span>
          </div>
        </Link>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .header-menu-btn { display: block !important; }
        }
        @media (max-width: 640px) {
          .header-search-bar { display: none !important; }
          .create-btn-text { display: none; }
          .header-user-info { display: none !important; }
        }
      `}</style>
    </header>
  );
};
