// frontend/src/pages/PostDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Heart, MessageSquare, Eye, Bookmark, Share2, Send, Trash2, Edit2, UserPlus, Check, ArrowLeft } from 'lucide-react';

export const PostDetailPage = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [submittingComment, setSubmittingComment] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.getPost(id);
        if (res.success && res.data?.post) {
          const p = res.data.post;
          setPost(p);
          setLiked(p.is_liked);
          setLikesCount(p.likes_count);
          setSaved(p.is_saved);
          setFollowing(p.is_following_creator);
          setComments(p.comments || []);
        }
      } catch (err) {
        showToast('Failed to load post', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleLike = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to like posts.', 'info');
      navigate('/login');
      return;
    }
    try {
      const res = await api.toggleLike(id);
      if (res.success) {
        setLiked(res.data.liked);
        setLikesCount(res.data.likes_count);
      }
    } catch (err) {
      showToast('Error liking post', 'error');
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to save bookmarks.', 'info');
      navigate('/login');
      return;
    }
    try {
      const res = await api.toggleSave(id);
      if (res.success) {
        setSaved(res.data.saved);
        showToast(res.message, 'success');
      }
    } catch (err) {
      showToast('Error saving post', 'error');
    }
  };

  const handleFollow = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to follow creators.', 'info');
      navigate('/login');
      return;
    }
    try {
      const res = await api.toggleFollow(post.user_id);
      if (res.success) {
        setFollowing(res.data.following);
        showToast(res.message, 'success');
      }
    } catch (err) {
      showToast('Follow error', 'error');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!', 'success');
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      showToast('Please log in to post a comment.', 'info');
      navigate('/login');
      return;
    }
    if (!commentText.trim()) return;

    setSubmittingComment(true);
    try {
      const res = await api.addComment(id, commentText.trim());
      if (res.success && res.data?.comment) {
        setComments((prev) => [...prev, res.data.comment]);
        setCommentText('');
        showToast('Comment posted!', 'success');
      }
    } catch (err) {
      showToast('Failed to submit comment', 'error');
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleSaveEditComment = async (commentId) => {
    if (!editingContent.trim()) return;
    try {
      const res = await api.editComment(commentId, editingContent.trim());
      if (res.success) {
        setComments((prev) => prev.map((c) => c.id === commentId ? { ...c, content: editingContent.trim() } : c));
        setEditingCommentId(null);
        showToast('Comment updated', 'success');
      }
    } catch (err) {
      showToast('Failed to update comment', 'error');
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const res = await api.deleteComment(commentId);
      if (res.success) {
        setComments((prev) => prev.filter((c) => c.id !== commentId));
        showToast('Comment deleted', 'success');
      }
    } catch (err) {
      showToast('Failed to delete comment', 'error');
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <p>Loading post details...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Post not found</h2>
        <Link to="/explore" className="btn btn-primary" style={{ marginTop: '16px' }}>Back to Explore</Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#f8fafc', padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Top Back Navigation */}
        <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          <ArrowLeft size={16} /> Back to Explore
        </Link>

        {/* Creator Info Header */}
        <div className="card" style={{ padding: '20px 28px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link to={`/profile/${post.username}`}>
              <img
                src={post.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                alt={post.full_name}
                style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }}
              />
            </Link>
            <div>
              <Link to={`/profile/${post.username}`}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)' }}>
                  {post.full_name || post.username}
                </h3>
              </Link>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                @{post.username} • {post.professional_title}
              </p>
            </div>
          </div>

          {user?.id !== post.user_id && (
            <button
              onClick={handleFollow}
              className={`btn btn-sm ${following ? 'btn-secondary' : 'btn-primary'}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {following ? <><Check size={14} color="var(--success)" /> Following</> : <><UserPlus size={14} /> Follow</>}
            </button>
          )}
        </div>

        {/* Main Post Card (Screen 08) */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '32px' }}>
          {/* Post Title & Category */}
          <div style={{ padding: '28px 32px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span className="badge badge-primary">{post.category_name}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Published on {new Date(post.created_at).toLocaleDateString()}
              </span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>
              {post.title}
            </h1>
          </div>

          {/* Media Images Gallery */}
          <div style={{ background: '#0b0f19', textAlign: 'center' }}>
            {post.media?.map((m, idx) => (
              <img
                key={m.id || idx}
                src={m.media_url}
                alt={`${post.title} showcase ${idx}`}
                style={{ width: '100%', maxHeight: '680px', objectFit: 'contain', margin: '0 auto' }}
              />
            ))}
          </div>

          {/* Actions Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 32px',
            borderBottom: '1px solid var(--border-light)',
            background: '#ffffff'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                onClick={handleLike}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: liked ? '#ef4444' : 'var(--text-main)',
                  cursor: 'pointer'
                }}
              >
                <Heart size={20} style={{ fill: liked ? '#ef4444' : 'none' }} />
                <span>{likesCount} Likes</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <MessageSquare size={19} />
                <span>{comments.length} Comments</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <Eye size={19} />
                <span>{post.views_count} Views</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handleSave}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: saved ? '#6366f1' : 'var(--text-muted)' }}
                title="Bookmark"
              >
                <Bookmark size={20} style={{ fill: saved ? '#6366f1' : 'none' }} />
              </button>
              <button
                onClick={handleShare}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                title="Share link"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Description & Tags */}
          <div style={{ padding: '28px 32px' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#334155', whiteSpace: 'pre-line', marginBottom: '24px' }}>
              {post.description}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {post.tags.map((t) => (
                  <span key={t.id || t.name} className="badge badge-neutral" style={{ padding: '6px 14px' }}>
                    #{t.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '24px' }}>
            Discussion ({comments.length})
          </h3>

          {/* Add Comment Input */}
          <form onSubmit={handleAddComment} style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <img
                src={user?.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                alt="My Avatar"
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <textarea
                  rows={2}
                  placeholder={isAuthenticated ? "Share feedback or start a discussion..." : "Please log in to leave a comment..."}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  disabled={!isAuthenticated}
                  className="form-textarea"
                  style={{ marginBottom: '10px' }}
                />
                <button
                  type="submit"
                  disabled={!isAuthenticated || submittingComment || !commentText.trim()}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Send size={14} /> Post Comment
                </button>
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {comments.map((c) => (
              <div key={c.id} style={{ display: 'flex', gap: '14px', paddingBottom: '20px', borderBottom: '1px solid var(--border-light)' }}>
                <img
                  src={c.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                  alt={c.full_name}
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                        {c.full_name || c.username}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {new Date(c.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    {c.is_own && (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => { setEditingCommentId(c.id); setEditingContent(c.content); }}
                          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteComment(c.id)}
                          style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  {editingCommentId === c.id ? (
                    <div>
                      <input
                        type="text"
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        className="form-input"
                        style={{ marginBottom: '8px' }}
                      />
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => handleSaveEditComment(c.id)} className="btn btn-primary btn-sm">Save</button>
                        <button onClick={() => setEditingCommentId(null)} className="btn btn-secondary btn-sm">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: '1.5' }}>
                      {c.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {comments.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px 0' }}>
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
