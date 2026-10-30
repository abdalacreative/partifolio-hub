// frontend/src/pages/MyPostsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';
import { ConfirmModal } from '../components/ConfirmModal';
import {
  FileText,
  Eye,
  Heart,
  MessageSquare,
  Plus,
  Trash2,
  ExternalLink,
  Edit,
  Filter,
  Sparkles,
  Play
} from 'lucide-react';

export const MyPostsPage = () => {
  const { showToast } = useToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [postToDelete, setPostToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchMyPosts = async () => {
    setLoading(true);
    try {
      const res = await api.getMyPosts({
        status: statusFilter !== 'all' ? statusFilter : '',
        type: typeFilter !== 'all' ? typeFilter : '',
        limit: 50
      });
      if (res.success && res.data) {
        setPosts(res.data.posts || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Could not load your posts', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, [statusFilter, typeFilter]);

  const handleDelete = async () => {
    if (!postToDelete) return;
    setDeleting(true);
    try {
      const res = await api.deletePost(postToDelete.id);
      if (res.success) {
        showToast('Post removed successfully', 'success');
        setPosts((prev) => prev.filter((p) => p.id !== postToDelete.id));
      } else {
        showToast(res.message || 'Failed to delete post', 'error');
      }
    } catch (err) {
      showToast('Error removing post', 'error');
    } finally {
      setDeleting(false);
      setPostToDelete(null);
    }
  };

  const totalViews = posts.reduce((sum, p) => sum + (parseInt(p.views_count) || 0), 0);
  const totalLikes = posts.reduce((sum, p) => sum + (parseInt(p.likes_count) || 0), 0);
  const totalComments = posts.reduce((sum, p) => sum + (parseInt(p.comments_count) || 0), 0);

  return (
    <div>
      {/* Top Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            My Creative Works
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Manage, edit, monitor engagement, and publish new projects.
          </p>
        </div>

        <Link to="/create-post" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} />
          <span>Create New Post</span>
        </Link>
      </div>

      {/* Summary KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '28px'
      }}>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Total Showcases</span>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <FileText size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{posts.length}</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Total Views</span>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <Eye size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{totalViews}</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Likes Received</span>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
              <Heart size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{totalLikes}</div>
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Comments</span>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <MessageSquare size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{totalComments}</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Type pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['all', 'image', 'video', 'project'].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: typeFilter === type ? 'var(--primary)' : 'var(--bg-main)',
                color: typeFilter === type ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {type === 'all' ? 'All Types' : type + 's'}
            </button>
          ))}
        </div>

        {/* Status pills */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'published', 'draft'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: statusFilter === status ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: statusFilter === status ? 'var(--primary-light)' : '#ffffff',
                color: statusFilter === status ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {status === 'all' ? 'All Status' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Content Posts List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
          <p style={{ color: 'var(--text-muted)' }}>Loading your showcases...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <FileText size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>No posts found</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 20px' }}>
            You haven't created any posts matching the selected filters yet.
          </p>
          <Link to="/create-post" className="btn btn-primary">Create Your First Showcase</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {posts.map((post) => {
            const previewImage = post.thumbnail || (post.media && post.media[0]?.file_url) || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80';
            const detailUrl = post.post_type === 'project' ? `/project/${post.id}` : post.post_type === 'video' ? `/post/${post.id}/video` : `/post/${post.id}`;

            return (
              <div
                key={post.id}
                className="card card-hover"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '16px 20px'
                }}
              >
                {/* Thumbnail */}
                <Link to={detailUrl} style={{ position: 'relative', width: '110px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0, background: '#0f172a' }}>
                  <img
                    src={previewImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {post.post_type === 'video' && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                      <Play size={20} color="#fff" fill="#fff" />
                    </div>
                  )}
                </Link>

                {/* Info */}
                <div style={{ flex: '1 1 240px', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="badge badge-primary" style={{ textTransform: 'capitalize', fontSize: '0.75rem' }}>
                      {post.post_type}
                    </span>
                    <span className={`badge ${post.status === 'published' ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: '0.75rem' }}>
                      {post.status}
                    </span>
                    {post.category_name && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: '500' }}>
                        {post.category_name}
                      </span>
                    )}
                  </div>

                  <Link to={detailUrl} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {post.title}
                    </h3>
                  </Link>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Eye size={14} /> {post.views_count || 0} views
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Heart size={14} /> {post.likes_count || 0} likes
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MessageSquare size={14} /> {post.comments_count || 0} comments
                    </span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Link
                    to={detailUrl}
                    className="btn btn-secondary btn-sm"
                    title="View Showcase"
                    style={{ padding: '8px 12px' }}
                  >
                    <ExternalLink size={16} />
                  </Link>

                  <button
                    onClick={() => setPostToDelete(post)}
                    className="btn btn-secondary btn-sm"
                    title="Delete Post"
                    style={{ padding: '8px 12px', color: 'var(--danger)' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!postToDelete}
        title="Delete Showcase"
        message={`Are you sure you want to delete "${postToDelete?.title}"? This action cannot be undone.`}
        confirmText={deleting ? 'Deleting...' : 'Delete Permanently'}
        confirmVariant="danger"
        onConfirm={handleDelete}
        onCancel={() => setPostToDelete(null)}
      />
    </div>
  );
};
