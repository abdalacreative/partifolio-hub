// frontend/src/pages/VideoPostPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Heart, MessageSquare, Eye, Bookmark, Share2, Send, Play, ArrowLeft, Check, UserPlus } from 'lucide-react';

export const VideoPostPage = () => {
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

  useEffect(() => {
    const fetchVideo = async () => {
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
        showToast('Failed to load video post', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [id]);

  const handleLike = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to like videos.', 'info');
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
      showToast('Error liking video', 'error');
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
      showToast('Error saving video', 'error');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Video link copied!', 'success');
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      showToast('Please log in to comment.', 'info');
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
      showToast('Failed to post comment', 'error');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return <div className="container" style={{ padding: '60px', textAlign: 'center' }}><p>Loading video player...</p></div>;
  }

  if (!post) {
    return <div className="container" style={{ padding: '60px', textAlign: 'center' }}><h2>Video not found</h2></div>;
  }

  const videoMedia = post.media?.find((m) => m.media_type === 'video' || (m.media_url && m.media_url.endsWith('.mp4')));
  let videoUrl = videoMedia?.media_url;
  if (!videoUrl) {
    if (post.id === 25 || post.title?.includes('Lesson 01')) videoUrl = '/assets/vedio/lesson 1.mp4';
    else if (post.id === 26 || post.title?.includes('Lesson 02')) videoUrl = '/assets/vedio/lesson 2.mp4';
    else if (post.id === 27 || post.title?.includes('Lesson 03')) videoUrl = '/assets/vedio/vedio editing.mp4';
    else if (post.cover_image?.endsWith('.mp4')) videoUrl = post.cover_image;
    else videoUrl = '/assets/vedio/vedio editing.mp4';
  }

  const posterImg = (post.id === 25 || post.title?.includes('Lesson 01')) 
    ? '/assets/lesson_01_cover.jpg' 
    : ((post.id === 26 || post.title?.includes('Lesson 02')) 
        ? '/assets/lesson_02_cover.jpg' 
        : (post.cover_image?.endsWith('.mp4') ? '' : post.cover_image));

  return (
    <div style={{ background: '#f8fafc', padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          <ArrowLeft size={16} /> Back to Explore
        </Link>

        {/* Video Player Box (Screen 09) */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', background: '#0b0f19', marginBottom: '24px', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ position: 'relative', width: '100%', maxHeight: '560px', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <video
              src={videoUrl}
              poster={posterImg}
              controls
              playsInline
              style={{ width: '100%', maxHeight: '560px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ padding: '24px 28px', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '14px' }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '8px' }}>{post.category_name}</span>
                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', marginTop: '4px' }}>
                  {post.title}
                </h1>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button
                  onClick={handleLike}
                  className="btn btn-secondary"
                  style={{ color: liked ? '#ef4444' : 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Heart size={18} style={{ fill: liked ? '#ef4444' : 'none' }} />
                  <span>{likesCount}</span>
                </button>

                <button onClick={handleSave} className="btn btn-secondary" style={{ color: saved ? '#6366f1' : 'inherit' }}>
                  <Bookmark size={18} style={{ fill: saved ? '#6366f1' : 'none' }} />
                </button>

                <button onClick={handleShare} className="btn btn-secondary">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.88rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '14px' }}>
              <span>{post.views_count} views</span>
              <span>•</span>
              <span>Published on {new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Creator Info & Description */}
        <div className="card" style={{ padding: '28px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <Link to={`/profile/${post.username}`} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={post.profile_photo || 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80'}
                alt={post.full_name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)' }}>{post.full_name || post.username}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>@{post.username} • {post.professional_title}</p>
              </div>
            </Link>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#334155', whiteSpace: 'pre-line', marginBottom: '20px' }}>
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {post.tags.map((t) => (
                <span key={t.id || t.name} className="badge badge-neutral">#{t.name}</span>
              ))}
            </div>
          )}
        </div>

        {/* Comments Section */}
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '20px' }}>
            Comments ({comments.length})
          </h3>

          <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
            <input
              type="text"
              placeholder={isAuthenticated ? "Write a comment..." : "Sign in to comment..."}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              disabled={!isAuthenticated}
              className="form-input"
            />
            <button type="submit" disabled={!isAuthenticated || submittingComment || !commentText.trim()} className="btn btn-primary">
              <Send size={15} />
            </button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {comments.map((c) => (
              <div key={c.id} style={{ display: 'flex', gap: '12px' }}>
                <img
                  src={c.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                  alt={c.full_name}
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div style={{ flex: 1, background: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.88rem' }}>{c.full_name || c.username}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(c.created_at).toLocaleDateString()}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#334155' }}>{c.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
