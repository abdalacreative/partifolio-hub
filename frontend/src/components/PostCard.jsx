// frontend/src/components/PostCard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, MessageSquare, Eye, Bookmark, ExternalLink, Play } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const PostCard = ({ post, onPostUpdated }) => {
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(post.is_liked || false);
  const [likesCount, setLikesCount] = useState(post.likes_count || 0);
  const [saved, setSaved] = useState(post.is_saved || false);
  const [isLiking, setIsLiking] = useState(false);

  const getPostLink = () => {
    if (post.post_type === 'project') return `/project/${post.id}`;
    if (post.post_type === 'video') return `/post/${post.id}/video`;
    return `/post/${post.id}`;
  };

  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      showToast('Please log in to like posts.', 'info');
      navigate('/login');
      return;
    }

    if (isLiking) return;
    setIsLiking(true);

    try {
      const res = await api.toggleLike(post.id);
      if (res.success) {
        setLiked(res.data.liked);
        setLikesCount(res.data.likes_count);
        if (onPostUpdated) onPostUpdated();
      }
    } catch (err) {
      showToast('Could not update like status', 'error');
    } finally {
      setIsLiking(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      showToast('Please log in to save bookmarks.', 'info');
      navigate('/login');
      return;
    }

    try {
      const res = await api.toggleSave(post.id);
      if (res.success) {
        setSaved(res.data.saved);
        showToast(res.message, 'success');
      }
    } catch (err) {
      showToast('Could not save post', 'error');
    }
  };

  return (
    <div className="card card-hover post-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Media Preview Box */}
      <Link to={getPostLink()} style={{ position: 'relative', height: '210px', background: '#0f172a', overflow: 'hidden', display: 'block' }}>
        {(() => {
          const isVideo = post.post_type === 'video' || (post.cover_image && post.cover_image.endsWith('.mp4'));
          
          let coverSrc = post.cover_image;
          if (post.id === 25 || post.title?.includes('Lesson 01')) {
            coverSrc = '/assets/lesson_01_cover.jpg';
          } else if (post.id === 26 || post.title?.includes('Lesson 02')) {
            coverSrc = '/assets/lesson_02_cover.jpg';
          } else if (!coverSrc || coverSrc.endsWith('.mp4')) {
            coverSrc = post.thumbnail_url || 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80';
          }

          if (isVideo) {
            return (
              <div style={{ width: '100%', height: '100%', position: 'relative', background: '#0b0f19' }}>
                <img
                  src={coverSrc}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                    display: 'block'
                  }}
                  onError={(e) => {
                    if (post.id === 25) e.currentTarget.src = '/assets/lesson_01_cover.jpg';
                    else if (post.id === 26) e.currentTarget.src = '/assets/lesson_02_cover.jpg';
                  }}
                  className="post-thumbnail"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 15, 25, 0.7) 0%, rgba(11, 15, 25, 0.15) 50%, transparent 100%)',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6e25e8 0%, #9333ea 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 20px rgba(110, 37, 232, 0.65)',
                  border: '2px solid rgba(255, 255, 255, 0.9)',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(4px)'
                }}>
                  <Play size={20} style={{ fill: '#ffffff', marginLeft: '3px' }} />
                </div>
                <span style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(11, 15, 25, 0.85)',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  letterSpacing: '0.04em',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(4px)'
                }}>
                  {(post.category_slug === 'courses' || post.category_name === 'Courses') ? 'AE COURSE' : 'VIDEO'}
                </span>
              </div>
            );
          }

          return (
            <img
              src={coverSrc}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', transition: 'transform 0.4s ease', imageRendering: '-webkit-optimize-contrast' }}
              className="post-thumbnail"
            />
          );
        })()}

        {/* Badge Overlay */}
        <span
          className="badge"
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            textTransform: 'capitalize'
          }}
        >
          {post.post_type === 'video' && <Play size={10} style={{ fill: '#fff' }} />}
          {post.post_type}
        </span>

        {/* Category Badge */}
        {post.category_name && (
          <span
            className="badge badge-primary"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
            }}
          >
            {post.category_name}
          </span>
        )}
      </Link>

      {/* Body Content */}
      <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Creator Mini Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Link to={`/profile/${post.username}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={post.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                alt={post.full_name}
                style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-main)' }}>
                {post.full_name || post.username}
              </span>
            </Link>

            <button
              onClick={handleSave}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: saved ? '#6366f1' : '#94a3b8' }}
              title="Bookmark post"
            >
              <Bookmark size={16} style={{ fill: saved ? '#6366f1' : 'none' }} />
            </button>
          </div>

          {/* Title */}
          <Link to={getPostLink()}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: 'var(--text-main)',
              marginBottom: '6px',
              lineHeight: '1.35',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {post.title}
            </h4>
          </Link>

          {/* Description Snippet */}
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginBottom: '12px',
            lineHeight: '1.45',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {post.description}
          </p>
        </div>

        {/* Stats & Actions Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-light)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Like Button */}
            <button
              onClick={handleLike}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                color: liked ? '#ef4444' : 'var(--text-muted)',
                fontWeight: liked ? '600' : '400',
                cursor: 'pointer'
              }}
            >
              <Heart size={15} style={{ fill: liked ? '#ef4444' : 'none' }} />
              <span>{likesCount}</span>
            </button>

            {/* Comments Counter */}
            <Link to={getPostLink()} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
              <MessageSquare size={15} />
              <span>{post.comments_count || 0}</span>
            </Link>
          </div>

          {/* Views Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Eye size={14} />
            <span>{post.views_count || 0}</span>
          </div>
        </div>
      </div>

      <style>{`
        .post-card:hover .post-thumbnail {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
};
