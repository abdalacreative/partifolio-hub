// frontend/src/pages/NotificationsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import {
  Bell,
  Heart,
  MessageSquare,
  UserPlus,
  Trash2,
  CheckCheck,
  Check,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const NotificationsPage = () => {
  const { refreshUser } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await api.getNotifications(filterType);
      if (res.success && res.data) {
        setNotifications(res.data.notifications || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Could not load notifications', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [filterType]);

  const handleMarkAllRead = async () => {
    try {
      const res = await api.markNotificationRead(null, true);
      if (res.success) {
        setNotifications((prev) => prev.map((n) => ({ ...n, is_read: 1 })));
        refreshUser();
        showToast('All notifications marked as read', 'success');
      }
    } catch (err) {
      showToast('Failed to update notifications', 'error');
    }
  };

  const handleMarkOneRead = async (id) => {
    try {
      await api.markNotificationRead(id, false);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: 1 } : n))
      );
      refreshUser();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.deleteNotification(id);
      if (res.success) {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        refreshUser();
      }
    } catch (err) {
      showToast('Could not delete notification', 'error');
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}><Heart size={18} /></div>;
      case 'comment':
        return <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)' }}><MessageSquare size={18} /></div>;
      case 'follow':
        return <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}><UserPlus size={18} /></div>;
      default:
        return <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}><Bell size={18} /></div>;
    }
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Notifications
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Stay updated with applause, new followers, feedback, and messages.
          </p>
        </div>

        {notifications.some((n) => !n.is_read) && (
          <button
            onClick={handleMarkAllRead}
            className="btn btn-secondary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <CheckCheck size={16} />
            <span>Mark all as read</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="card" style={{ padding: '12px 16px', marginBottom: '24px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        {[
          { id: 'all', label: 'All' },
          { id: 'likes', label: 'Likes' },
          { id: 'comments', label: 'Comments' },
          { id: 'follows', label: 'Followers' },
          { id: 'messages', label: 'Messages' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id)}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: filterType === tab.id ? 'var(--primary)' : 'transparent',
              color: filterType === tab.id ? '#ffffff' : 'var(--text-muted)',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
          <p style={{ color: 'var(--text-muted)' }}>Checking notifications...</p>
        </div>
      ) : notifications.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <Bell size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>No notifications found</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '360px', margin: '0 auto' }}>
            When creators like your posts, leave comments, or start following you, you'll see them here.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((n) => {
            const isUnread = !n.is_read;
            const targetUrl = n.post_id ? `/post/${n.post_id}` : n.sender_username ? `/profile/${n.sender_username}` : null;

            return (
              <div
                key={n.id}
                className="card card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: isUnread ? '#f5f7ff' : '#ffffff',
                  borderLeft: isUnread ? '4px solid var(--primary)' : '1px solid var(--border-color)'
                }}
              >
                {getNotificationIcon(n.type)}

                {/* Avatar if exists */}
                {n.sender_avatar && (
                  <img
                    src={n.sender_avatar}
                    alt={n.sender_name || 'Creator'}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                )}

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                    <strong style={{ fontWeight: '700' }}>{n.sender_name || n.title || 'Someone'}</strong>{' '}
                    {n.message || n.content}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px', display: 'inline-block' }}>
                    {new Date(n.created_at).toLocaleString()}
                  </span>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {targetUrl && (
                    <Link
                      to={targetUrl}
                      onClick={() => handleMarkOneRead(n.id)}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 12px' }}
                    >
                      <ExternalLink size={14} />
                      <span style={{ fontSize: '0.8rem' }}>View</span>
                    </Link>
                  )}

                  {isUnread && (
                    <button
                      onClick={() => handleMarkOneRead(n.id)}
                      className="btn btn-outline btn-sm"
                      title="Mark as read"
                      style={{ padding: '6px 10px' }}
                    >
                      <Check size={14} />
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(n.id)}
                    className="btn btn-secondary btn-sm"
                    title="Delete notification"
                    style={{ padding: '6px 10px', color: 'var(--text-light)' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
