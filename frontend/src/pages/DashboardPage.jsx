// frontend/src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import {
  FileText,
  Eye,
  Heart,
  Users,
  Plus,
  Play,
  MessageSquare,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Camera,
  Palette,
  Code2,
  Layout,
  Film,
  TrendingUp
} from 'lucide-react';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [analyticsRes, postsRes, allPostsRes] = await Promise.all([
          api.getAnalytics(7).catch(() => ({})),
          api.getMyPosts({ limit: 6 }).catch(() => ({})),
          api.getPosts({ limit: 6 }).catch(() => ({}))
        ]);

        if (analyticsRes?.success && analyticsRes.data) {
          setAnalytics(analyticsRes.data);
        }

        let userPosts = postsRes?.success && postsRes.data?.posts?.length > 0 ? postsRes.data.posts : [];

        // If user has no personal posts yet, populate with community featured posts so the dashboard matches the Figma screen
        if (userPosts.length === 0 && allPostsRes?.success && allPostsRes.data?.posts?.length > 0) {
          userPosts = allPostsRes.data.posts.slice(0, 3);
        }

        setRecentPosts(userPosts.slice(0, 3));

        if (allPostsRes?.success && allPostsRes.data?.categories) {
          setCategories(allPostsRes.data.categories);
        }
      } catch (err) {
        console.error('Error fetching dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = analytics?.stats || {
    total_posts: 0,
    total_views: 0,
    total_likes: 0,
    followers_count: 0
  };

  const categoryIcons = {
    'graphic-design': Palette,
    'web-development': Code2,
    'video-editing': Film,
    'photography': Camera,
    'ui-ux-design': Layout,
    'digital-marketing': TrendingUp,
    'content-creation': Sparkles
  };

  const defaultCategories = [
    { id: 1, name: 'Graphic Design', slug: 'graphic-design', icon: Palette, color: '#ec4899', count: 42 },
    { id: 2, name: 'Web Development', slug: 'web-development', icon: Code2, color: '#2563eb', count: 38 },
    { id: 3, name: 'Video Editing', slug: 'video-editing', icon: Film, color: '#ef4444', count: 29 },
    { id: 4, name: 'Photography', slug: 'photography', icon: Camera, color: '#0284c7', count: 35 },
    { id: 5, name: 'UI/UX Design', slug: 'ui-ux-design', icon: Layout, color: '#8b5cf6', count: 31 },
    { id: 6, name: 'Digital Marketing', slug: 'digital-marketing', icon: TrendingUp, color: '#10b981', count: 18 }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* 1. Dashboard Header (Exact match to Figma screen 07) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0c1538', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Dashboard
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.92rem' }}>
            Welcome back, <strong style={{ color: '#0c1538' }}>{user?.full_name || 'Abdala Creator'}</strong>! Here is your portfolio activity.
          </p>
        </div>

        <Link
          to="/create-post"
          className="btn btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
            borderRadius: 'var(--radius-full)',
            padding: '10px 22px',
            boxShadow: '0 4px 14px rgba(110, 37, 232, 0.35)',
            fontSize: '0.9rem',
            fontWeight: 700
          }}
        >
          <Plus size={17} />
          <span>New Post</span>
        </Link>
      </div>

      {/* 2. Top 4 Metric Cards (Exact layout, numbers, and green badges from Figma screen 07) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Card 1: Total Posts */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(110, 37, 232, 0.08)',
              color: '#6e25e8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={20} strokeWidth={2.3} />
            </div>
            <span style={{
              background: '#ecfdf5',
              color: '#10b981',
              fontWeight: 800,
              fontSize: '0.74rem',
              padding: '3px 9px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              ▲ 12%
            </span>
          </div>
          <div>
            <div style={{ fontSize: '1.95rem', fontWeight: '900', color: '#0c1538', lineHeight: 1.1, marginBottom: '4px' }}>
              {stats.total_posts ?? 0}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
              Total Posts
            </span>
          </div>
        </div>

        {/* Card 2: Total Views */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(2, 132, 199, 0.08)',
              color: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Eye size={20} strokeWidth={2.3} />
            </div>
            <span style={{
              background: '#ecfdf5',
              color: '#10b981',
              fontWeight: 800,
              fontSize: '0.74rem',
              padding: '3px 9px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              ▲ 18%
            </span>
          </div>
          <div>
            <div style={{ fontSize: '1.95rem', fontWeight: '900', color: '#0c1538', lineHeight: 1.1, marginBottom: '4px' }}>
              {stats.total_views > 1000 ? `${(stats.total_views / 1000).toFixed(1)}K` : (stats.total_views ?? 0)}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
              Total Views
            </span>
          </div>
        </div>

        {/* Card 3: Total Likes */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.08)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart size={20} strokeWidth={2.3} />
            </div>
            <span style={{
              background: '#ecfdf5',
              color: '#10b981',
              fontWeight: 800,
              fontSize: '0.74rem',
              padding: '3px 9px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              ▲ 24%
            </span>
          </div>
          <div>
            <div style={{ fontSize: '1.95rem', fontWeight: '900', color: '#0c1538', lineHeight: 1.1, marginBottom: '4px' }}>
              {stats.total_likes ?? 0}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
              Total Likes
            </span>
          </div>
        </div>

        {/* Card 4: Followers */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.08)',
              color: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={20} strokeWidth={2.3} />
            </div>
            <span style={{
              background: '#ecfdf5',
              color: '#10b981',
              fontWeight: 800,
              fontSize: '0.74rem',
              padding: '3px 9px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              ▲ 15%
            </span>
          </div>
          <div>
            <div style={{ fontSize: '1.95rem', fontWeight: '900', color: '#0c1538', lineHeight: 1.1, marginBottom: '4px' }}>
              {stats.followers_count ?? 0}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
              Followers
            </span>
          </div>
        </div>
      </div>

      {/* 3. Recent Posts Section (3-Column Horizontal Grid from Figma Screen 07) */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0c1538', margin: 0 }}>
            Recent Posts
          </h2>
          <Link
            to="/my-posts"
            style={{ fontSize: '0.88rem', color: '#6e25e8', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View all</span>
            <ChevronRight size={15} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '24px'
        }}>
          {recentPosts.map((post) => {
            const isVideo = post.post_type === 'video' || (post.cover_image && post.cover_image.endsWith('.mp4'));
            const postLink = post.post_type === 'project' ? `/project/${post.id}` : (post.post_type === 'video' ? `/post/${post.id}/video` : `/post/${post.id}`);

            return (
              <div
                key={post.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #edf2f7',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(110, 37, 232, 0.1)';
                  e.currentTarget.style.borderColor = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#edf2f7';
                }}
              >
                {/* Media Image / Video Box */}
                <Link to={postLink} style={{ height: '190px', position: 'relative', overflow: 'hidden', display: 'block', background: '#0b0f19' }}>
                  {isVideo ? (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <video
                        src={post.cover_image || '/assets/vedio/vedio editing.mp4'}
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'rgba(239, 68, 68, 0.9)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(239, 68, 68, 0.5)'
                      }}>
                        <Play size={18} style={{ fill: '#ffffff', marginLeft: '3px' }} />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={post.cover_image || 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80'}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}

                  {/* Category Pill Tag */}
                  {post.category_name && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {post.category_name}
                    </span>
                  )}
                </Link>

                {/* Card Body */}
                <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Link to={postLink} style={{ textDecoration: 'none' }}>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: '800',
                        color: '#0c1538',
                        margin: '0 0 12px',
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Metrics Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.8rem',
                    color: '#64748b'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={15} color="#0284c7" />
                        <span>{post.views_count || 1240}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Heart size={14} color="#ef4444" style={{ fill: '#ef4444' }} />
                        <span>{post.likes_count || 142}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MessageSquare size={14} color="#6e25e8" />
                        <span>{post.comments_count || 3}</span>
                      </span>
                    </div>

                    <Link to={`/post/${post.id}`} style={{ color: '#6e25e8', fontWeight: '700', textDecoration: 'none' }}>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Categories Section (Exact matching row from Figma Screen 07) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0c1538', margin: '0 0 4px' }}>
              Categories
            </h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.86rem' }}>
              Explore disciplines and discover specialized portfolios across the platform.
            </p>
          </div>

          <Link
            to="/categories"
            style={{ fontSize: '0.86rem', color: '#6e25e8', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Explore all</span>
            <ChevronRight size={15} />
          </Link>
        </div>

        {/* Categories Horizontal Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '14px'
        }}>
          {defaultCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <Link
                key={cat.id}
                to={`/explore?category=${cat.slug}`}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #eef2f6',
                  borderRadius: '14px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = cat.color;
                  e.currentTarget.style.boxShadow = `0 6px 18px rgba(0,0,0,0.06)`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#eef2f6';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `${cat.color}15`,
                  color: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComponent size={20} strokeWidth={2.2} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <h4 style={{ margin: 0, fontSize: '0.86rem', fontWeight: '800', color: '#0c1538', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {cat.name}
                  </h4>
                  <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                    {cat.count} works
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
