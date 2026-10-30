// frontend/src/pages/admin/AdminOverviewPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import {
  Users,
  FileText,
  Flag,
  CheckCircle,
  Eye,
  AlertTriangle,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  TrendingUp,
  UserCheck,
  ChevronRight
} from 'lucide-react';

export const AdminOverviewPage = () => {
  const { showToast } = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.getAdminStats();
        if (res.success && res.data) {
          setData(res.data);
        }
      } catch (err) {
        console.error(err);
        showToast('Failed to load admin stats', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = data?.stats || {};
  const recentUsers = data?.recent_users || [];
  const recentPosts = data?.recent_posts || [];

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '26px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0c1538', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Admin Dashboard
          </h1>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
            Platform overview, creator statistics, user governance, and content moderation.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#10b981',
            fontWeight: 800,
            fontSize: '0.78rem',
            padding: '5px 12px',
            borderRadius: '9999px',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}>
            ● Live System Operational
          </span>
        </div>
      </div>

      {/* 4 Stat Cards (Figma Screen Row 4: Total Users 2,450, Active Creators 1,250, Total Posts 4,890, Monthly Views 125K) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Total Users */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Total Users</span>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(110, 37, 232, 0.08)', color: '#6e25e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={19} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {(stats.total_users ?? 0).toLocaleString()}
          </div>
          <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 700 }}>
            Live platform users
          </span>
        </div>

        {/* Active Creators */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Active Creators</span>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.08)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCheck size={19} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {(stats.active_users ?? 0).toLocaleString()}
          </div>
          <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 700 }}>
            Active creator accounts
          </span>
        </div>

        {/* Total Posts */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Total Posts</span>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.08)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={19} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {(stats.total_posts ?? 0).toLocaleString()}
          </div>
          <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 700 }}>
            Published showcases
          </span>
        </div>

        {/* Monthly Views */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Total Views</span>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={19} />
            </div>
          </div>
          <div style={{ fontSize: '1.95rem', fontWeight: 900, color: '#0c1538', lineHeight: 1.1, marginBottom: '6px' }}>
            {stats.total_views != null
              ? (stats.total_views >= 1000 ? `${(stats.total_views / 1000).toFixed(1)}K` : stats.total_views.toLocaleString())
              : '0'}
          </div>
          <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 700 }}>
            Live content views
          </span>
        </div>
      </div>

      {/* Recent Users Table (Exact matching Figma screen: Users list with Avatar, Name, Title, Date, Status pill) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0c1538', margin: '0 0 4px' }}>
              Recent Users
            </h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.86rem' }}>
              Latest creators registered on PartfolioHub
            </p>
          </div>

          <Link
            to="/admin/users"
            style={{ fontSize: '0.86rem', color: '#6e25e8', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Manage All Users</span>
            <ChevronRight size={15} />
          </Link>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1.5px solid #edf2f7', color: '#64748b', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <th style={{ padding: '12px 16px' }}>Creator</th>
                <th style={{ padding: '12px 16px' }}>Specialization</th>
                <th style={{ padding: '12px 16px' }}>Role</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((u) => (
                <tr key={u.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={u.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                        alt={u.full_name}
                        style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontWeight: 800, color: '#0c1538' }}>{u.full_name || u.username}</div>
                        <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>@{u.username}</div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '14px 16px', color: '#475569', fontWeight: 600 }}>
                    {u.professional_title || 'Visual Creator'}
                  </td>

                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: u.role === 'admin' ? 'rgba(110, 37, 232, 0.1)' : 'rgba(2, 132, 199, 0.08)',
                      color: u.role === 'admin' ? '#6e25e8' : '#0284c7',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: '6px',
                      textTransform: 'capitalize'
                    }}>
                      {u.role}
                    </span>
                  </td>

                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: u.status === 'active' ? '#ecfdf5' : '#fef2f2',
                      color: u.status === 'active' ? '#10b981' : '#ef4444',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: '9999px'
                    }}>
                      ● {u.status}
                    </span>
                  </td>

                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <Link
                      to={`/profile/${u.username}`}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                    >
                      Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
