// frontend/src/pages/ProjectDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Heart, MessageSquare, Eye, Bookmark, Share2, ExternalLink, Github, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await api.getPost(id);
        if (res.success && res.data?.post) {
          const p = res.data.post;
          setPost(p);
          setLiked(p.is_liked);
          setLikesCount(p.likes_count);
          setSaved(p.is_saved);
          setComments(p.comments || []);
        }
      } catch (err) {
        showToast('Failed to load project details', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleLike = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to like projects.', 'info');
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
      showToast('Error liking project', 'error');
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to bookmark.', 'info');
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
      showToast('Error saving project', 'error');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Project link copied!', 'success');
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      showToast('Please log in to leave feedback.', 'info');
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
      showToast('Error adding comment', 'error');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return <div className="container" style={{ padding: '60px', textAlign: 'center' }}><p>Loading project presentation...</p></div>;
  }

  if (!post) {
    return <div className="container" style={{ padding: '60px', textAlign: 'center' }}><h2>Project not found</h2></div>;
  }

  const coverImage = post.media?.[0]?.media_url || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80';

  return (
    <div style={{ background: '#f8fafc', padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          <ArrowLeft size={16} /> Back to Explore
        </Link>

        {/* Project Header Card (Screen 10) */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '32px' }}>
          {/* Hero Cover */}
          <div style={{ height: '380px', background: '#0f172a', position: 'relative' }}>
            <img src={coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />

            <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px', color: '#ffffff' }}>
              <span className="badge badge-primary" style={{ marginBottom: '10px' }}>{post.category_name}</span>
              <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' }}>
                {post.title}
              </h1>
            </div>
          </div>

          {/* Details & CTA Buttons Bar */}
          <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid var(--border-light)' }}>
            <Link to={`/profile/${post.username}`} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={post.profile_photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'}
                alt={post.full_name}
                style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>{post.full_name || post.username}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>@{post.username} • {post.professional_title}</p>
              </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {post.project_url && (
                <a
                  href={post.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <ExternalLink size={16} /> Live Preview
                </a>
              )}

              {post.github_url && (
                <a
                  href={post.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Github size={16} /> View Code
                </a>
              )}

              <button onClick={handleLike} className="btn btn-secondary" style={{ color: liked ? '#ef4444' : 'inherit' }}>
                <Heart size={16} style={{ fill: liked ? '#ef4444' : 'none' }} />
                <span>{likesCount}</span>
              </button>

              <button onClick={handleSave} className="btn btn-secondary" style={{ color: saved ? '#6366f1' : 'inherit' }}>
                <Bookmark size={16} style={{ fill: saved ? '#6366f1' : 'none' }} />
              </button>

              <button onClick={handleShare} className="btn btn-secondary">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Description & Tech Stack */}
          <div style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '14px' }}>Project Overview</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#334155', whiteSpace: 'pre-line', marginBottom: '28px' }}>
              {post.description}
            </p>

            {post.technologies && (
              <div style={{ marginBottom: '28px', padding: '18px 24px', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {post.technologies.split(',').map((tech, i) => (
                    <span key={i} className="badge badge-primary" style={{ padding: '6px 14px' }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery Screenshots */}
            {post.project_gallery && post.project_gallery.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Project Screenshots</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {post.project_gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img.media_url}
                      alt={`Screenshot ${i}`}
                      style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-color)' }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '20px' }}>
            Feedback & Reviews ({comments.length})
          </h3>

          <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
            <input
              type="text"
              placeholder={isAuthenticated ? "Leave feedback on this project..." : "Sign in to leave feedback..."}
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
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div style={{ flex: 1, background: 'var(--bg-main)', padding: '14px 18px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{c.full_name || c.username}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(c.created_at).toLocaleDateString()}</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#334155' }}>{c.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
