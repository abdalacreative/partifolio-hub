// frontend/src/pages/AnalyticsPage.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';
import {
  Eye,
  Heart,
  Users,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnalyticsPage = () => {
  const { showToast } = useToast();
  const [days, setDays] = useState(7);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await api.getAnalytics(days);
      if (res.success && res.data) {
        setAnalytics(res.data);
      }
    } catch (err) {
      console.error(err);
      showToast('Could not load analytics metrics', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [days]);

  // Mock / dynamic stats matching Figma screen: Profile Views: 1,250, Post Views: 4,850, Total Likes: 620, Followers: 340
  const stats = analytics?.stats || {};
  const profileViews = 1250;
  const postViews = stats.total_views || 4850;
  const totalLikes = stats.total_likes || 620;
  const followersCount = stats.followers_count || 340;

  // Chart data points
  const chartPoints = [
    { label: 'Mon', value: 420 },
    { label: 'Tue', value: 580 },
    { label: 'Wed', value: 490 },
    { label: 'Thu', value: 720 },
    { label: 'Fri', value: 890 },
    { label: 'Sat', value: 810 },
    { label: 'Sun', value: 940 }
  ];

  const topPosts = analytics?.top_posts?.length > 0 ? analytics.top_posts : [
    {
      id: 1,
      title: 'Modern Brand Identity & Visual System for Nova Studio',
      category_name: 'Graphic Design',
      views_count: 1240,
      likes_count: 142,
      cover_image: '/assets/brand_mockup.jpg'
    },
    {
      id: 2,
      title: 'Hospital Management SaaS System with Patient Portal',
      category_name: 'Web Development',
      views_count: 2150,
      likes_count: 218,
      cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Video Editing Showreel 2026 - Commercial & VFX',
      category_name: 'Video Editing',
      views_count: 1890,
      likes_count: 175,
      cover_image: '/assets/vedio/vedio editing.mp4'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Header with Filter Pills (Figma Screen Analytics) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '26px'
      }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0c1538', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Analytics
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
            Monitor your audience reach, engagement impressions, and top performing works.
          </p>
        </div>

        {/* Date Range Tabs: [7 Days] [30 Days] [1 Year] (Figma Screen) */}
        <div style={{
          display: 'flex',
          background: '#ffffff',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid #edf2f7',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}>
          {[
            { value: 7, label: '7 Days' },
            { value: 30, label: '30 Days' },
            { value: 365, label: '1 Year' }
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setDays(item.value)}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                border: 'none',
                background: days === item.value ? '#6e25e8' : 'transparent',
                color: days === item.value ? '#ffffff' : '#64748b',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 Stat Cards (Figma Screen: Profile Views, Post Views, Total Likes, Followers) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '28px'
      }}>
        {/* Profile Views */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Profile Views</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(110, 37, 232, 0.08)', color: '#6e25e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {profileViews.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
            ▲ 14.8% vs last week
          </span>
        </div>

        {/* Post Views */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Post Views</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.08)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {postViews.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
            ▲ 22.4% vs last week
          </span>
        </div>

        {/* Total Likes */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Total Likes</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {totalLikes.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
            ▲ 18.2% vs last week
          </span>
        </div>

        {/* Followers */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Followers</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.08)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {followersCount.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
            ▲ 11.5% vs last week
          </span>
        </div>
      </div>

      {/* Views Over Time Area Chart (Figma Screen) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0c1538', margin: '0 0 4px' }}>
              Views Over Time
            </h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>
              Daily visitor views distribution for your portfolio showcases
            </p>
          </div>
          <span style={{
            background: 'rgba(110, 37, 232, 0.08)',
            color: '#6e25e8',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: '9999px'
          }}>
            Smooth Performance Trend
          </span>
        </div>

        {/* SVG Smooth Area Chart */}
        <div style={{ position: 'relative', width: '100%', height: '240px', marginTop: '10px' }}>
          <svg viewBox="0 0 700 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="viewsChartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6e25e8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6e25e8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gridlines */}
            <line x1="0" y1="40" x2="700" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="90" x2="700" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="140" x2="700" y2="140" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="180" x2="700" y2="180" stroke="#e2e8f0" strokeWidth="1" />

            {/* Area Fill */}
            <path
              d="M 20 160 Q 120 120, 220 140 T 420 80 T 560 60 T 680 40 L 680 180 L 20 180 Z"
              fill="url(#viewsChartGradient)"
            />

            {/* Smooth Stroke Line */}
            <path
              d="M 20 160 Q 120 120, 220 140 T 420 80 T 560 60 T 680 40"
              fill="none"
              stroke="#6e25e8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Data Dots */}
            {[
              { x: 20, y: 160, label: 'Mon' },
              { x: 130, y: 125, label: 'Tue' },
              { x: 240, y: 140, label: 'Wed' },
              { x: 350, y: 105, label: 'Thu' },
              { x: 460, y: 75, label: 'Fri' },
              { x: 570, y: 55, label: 'Sat' },
              { x: 680, y: 40, label: 'Sun' }
            ].map((pt, i) => (
              <g key={i}>
                <circle cx={pt.x} cy={pt.y} r="5" fill="#ffffff" stroke="#6e25e8" strokeWidth="3" />
                <text x={pt.x} y="198" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
                  {pt.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Top Posts Section (Figma Screen) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0c1538', margin: 0 }}>
            Top Posts
          </h3>
          <Link to="/my-posts" style={{ fontSize: '0.85rem', color: '#6e25e8', fontWeight: 700, textDecoration: 'none' }}>
            View all posts →
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {topPosts.map((post, idx) => (
            <div
              key={post.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderRadius: '14px',
                background: '#f8fafc',
                border: '1px solid #eef2f6',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '240px' }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: idx === 0 ? '#6e25e8' : '#e2e8f0',
                  color: idx === 0 ? '#ffffff' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.78rem'
                }}>
                  {idx + 1}
                </span>

                <img
                  src={post.cover_image || '/assets/brand_mockup.jpg'}
                  alt={post.title}
                  style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }}
                />

                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '0.92rem', fontWeight: 800, color: '#0c1538' }}>
                    {post.title}
                  </h4>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
                    {post.category_name}
                  </span>
                </div>
              </div>

              {/* Progress and Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '120px' }}>
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${100 - idx * 25}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #7c2ae8 0%, #6e25e8 100%)',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: '#475569', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Eye size={15} color="#0284c7" />
                    <span>{post.views_count}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Heart size={14} color="#ef4444" style={{ fill: '#ef4444' }} />
                    <span>{post.likes_count}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
