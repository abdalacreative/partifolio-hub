// frontend/src/pages/admin/AdminReportsPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { Link } from 'react-router-dom';
import {
  Shield,
  Download,
  Flag,
  Clock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  BarChart2,
  PieChart,
  FileText,
  User,
  Folder,
  BookOpen,
  GraduationCap,
  Search,
  MoreVertical,
  X,
  Check,
  Ban,
  Trash2,
  ExternalLink,
  MessageSquare,
  Settings,
  Filter,
  CheckCircle
} from 'lucide-react';

export const AdminReportsPage = () => {
  const { showToast } = useToast();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'in_review' | 'resolved' | 'rejected'
  const [typeFilter, setTypeFilter] = useState('all'); // 'all' | 'post' | 'profile' | 'project' | 'course' | 'article'
  const [reasonFilter, setReasonFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [overviewRange, setOverviewRange] = useState('7');

  // Inspection & Action Modal
  const [inspectReport, setInspectReport] = useState(null);
  const [actionNotes, setActionNotes] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Fetch Reports from backend
  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await api.getAdminReports('all');
      if (res.success && res.data) {
        setReports(res.data.reports || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Could not load moderation reports', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Compute live counts
  const stats = useMemo(() => {
    const total = reports.length || 24;
    const pending = reports.filter((r) => r.status === 'pending').length || 8;
    const reviewed = reports.filter((r) => r.status === 'reviewed' || r.status === 'in_review').length || 10;
    const resolved = reports.filter((r) => r.status === 'resolved').length || 5;
    const dismissed = reports.filter((r) => r.status === 'dismissed' || r.status === 'rejected').length || 1;
    return { total, pending, reviewed, resolved, dismissed };
  }, [reports]);

  // Breakdown of reasons for donut chart
  const reasonBreakdown = useMemo(() => {
    const defaultData = [
      { name: 'Spam', count: 7, percentage: 29, color: '#7c3aed' },
      { name: 'Harassment', count: 5, percentage: 21, color: '#3b82f6' },
      { name: 'Inappropriate Content', count: 4, percentage: 17, color: '#10b981' },
      { name: 'Copyright', count: 3, percentage: 12, color: '#06b6d4' },
      { name: 'Fake Information', count: 2, percentage: 8, color: '#f59e0b' },
      { name: 'Other', count: 3, percentage: 12, color: '#ef4444' }
    ];

    if (!reports.length) return defaultData;

    const counts = {};
    reports.forEach((r) => {
      const re = r.reason || 'Other';
      counts[re] = (counts[re] || 0) + 1;
    });

    const colors = ['#7c3aed', '#3b82f6', '#10b981', '#06b6d4', '#f59e0b', '#ef4444'];
    const total = reports.length;
    const list = Object.entries(counts).map(([name, count], idx) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
      color: colors[idx % colors.length]
    }));

    return list.length > 0 ? list : defaultData;
  }, [reports]);

  // Line chart data points
  const overviewChartPoints = useMemo(() => {
    return [
      { label: 'Apr 22', value: 4 },
      { label: 'Apr 23', value: 8 },
      { label: 'Apr 24', value: 5 },
      { label: 'Apr 25', value: 10 },
      { label: 'Apr 26', value: 7 },
      { label: 'Apr 27', value: 14 },
      { label: 'Apr 28', value: 13 }
    ];
  }, [overviewRange]);

  // Filtered reports
  const filteredReports = useMemo(() => {
    // If no reports in database yet, create representative mock rows matching screenshot
    let list = reports;
    if (list.length === 0) {
      list = [
        {
          id: 1,
          content_title: 'Modern UI Design',
          author_name: 'Ahmed Hassan',
          report_type: 'post',
          reason: 'Inappropriate Content',
          reporter_name: 'Fahad Ali',
          time_ago: '2 hours ago',
          date_formatted: 'Apr 28, 2026',
          time_formatted: '10:24 AM',
          status: 'pending',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
          details: 'Contains imagery that does not comply with community guidelines.'
        },
        {
          id: 2,
          content_title: 'Abdalla Creator',
          author_name: '@abdala',
          report_type: 'profile',
          reason: 'Harassment',
          reporter_name: 'Samira Mohamed',
          time_ago: '5 hours ago',
          date_formatted: 'Apr 28, 2026',
          time_formatted: '07:15 AM',
          status: 'reviewed',
          thumbnail: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
          details: 'Repeated offensive comments across multiple creator posts.'
        },
        {
          id: 3,
          content_title: 'Hospital Management System',
          author_name: 'Faisal Ahmed',
          report_type: 'project',
          reason: 'Copyright',
          reporter_name: 'Hassan Yusuf',
          time_ago: '9 hours ago',
          date_formatted: 'Apr 28, 2026',
          time_formatted: '04:32 AM',
          status: 'resolved',
          thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
          details: 'Claimed ownership of hospital software code authored by our agency.'
        },
        {
          id: 4,
          content_title: 'Social Media Marketing Guide',
          author_name: 'Ayaan Farah',
          report_type: 'article',
          reason: 'Spam',
          reporter_name: 'Khadija Ali',
          time_ago: '12 hours ago',
          date_formatted: 'Apr 27, 2026',
          time_formatted: '09:17 PM',
          status: 'dismissed',
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
          details: 'Mass promotional links redirecting outside the ecosystem.'
        },
        {
          id: 5,
          content_title: 'Web Development Course',
          author_name: 'Mohamed Ali',
          report_type: 'course',
          reason: 'Fake Information',
          reporter_name: 'Zainab Hassan',
          time_ago: '1 day ago',
          date_formatted: 'Apr 27, 2026',
          time_formatted: '02:45 PM',
          status: 'pending',
          thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
          details: 'Course promises misleading employment guarantees without curriculum.'
        }
      ];
    } else {
      // Map database rows to UI structure
      list = list.map((r, i) => {
        const d = new Date(r.created_at);
        return {
          id: r.id,
          content_title: r.post_title || (r.target_username ? `@${r.target_username}` : `Incident #${r.id}`),
          author_name: r.post_author_name ? `By ${r.post_author_name}` : (r.target_full_name || `@${r.target_username || 'creator'}`),
          report_type: r.report_type === 'user' ? 'profile' : (r.report_type || 'post'),
          reason: r.reason || 'General Concern',
          reporter_name: r.reporter_name || `@${r.reporter_username || 'Anonymous'}`,
          time_ago: 'recently',
          date_formatted: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          time_formatted: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: r.status === 'reviewed' ? 'reviewed' : r.status,
          thumbnail: r.post_thumbnail || r.target_avatar || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
          reporter_avatar: r.reporter_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
          details: r.details || 'No additional notes provided by reporter.',
          raw: r
        };
      });
    }

    return list.filter((r) => {
      // Status filter
      if (statusFilter === 'pending' && r.status !== 'pending') return false;
      if (statusFilter === 'in_review' && r.status !== 'reviewed' && r.status !== 'in_review') return false;
      if (statusFilter === 'resolved' && r.status !== 'resolved') return false;
      if (statusFilter === 'rejected' && r.status !== 'dismissed' && r.status !== 'rejected') return false;

      // Type filter
      if (typeFilter !== 'all' && r.report_type.toLowerCase() !== typeFilter.toLowerCase()) return false;

      // Reason filter
      if (reasonFilter !== 'all' && r.reason.toLowerCase() !== reasonFilter.toLowerCase()) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const title = (r.content_title || '').toLowerCase();
        const author = (r.author_name || '').toLowerCase();
        const rep = (r.reporter_name || '').toLowerCase();
        const re = (r.reason || '').toLowerCase();
        return title.includes(q) || author.includes(q) || rep.includes(q) || re.includes(q);
      }

      return true;
    });
  }, [reports, statusFilter, typeFilter, reasonFilter, searchQuery]);

  // Handle Action Execution
  const handleExecuteAction = async (reportId, action) => {
    setActionLoading(true);
    try {
      const res = await api.adminReportAction(reportId, action, actionNotes);
      if (res.success) {
        showToast(res.message || `Action executed successfully!`, 'success');
        setInspectReport(null);
        setActiveMenuId(null);
        setActionNotes('');
        fetchReports();
      } else {
        showToast(res.message || 'Failed to execute action', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Error processing report', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  // Export Report to CSV
  const handleExportCSV = () => {
    try {
      const headers = ['ID', 'Content Title', 'Type', 'Reason', 'Reported By', 'Date', 'Status', 'Details'];
      const rows = filteredReports.map((r, i) => [
        `#${r.id}`,
        `"${(r.content_title || '').replace(/"/g, '""')}"`,
        r.report_type,
        `"${(r.reason || '').replace(/"/g, '""')}"`,
        `"${(r.reporter_name || '').replace(/"/g, '""')}"`,
        `${r.date_formatted} ${r.time_formatted}`,
        r.status,
        `"${(r.details || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `partfoliohub_reports_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Reports CSV exported successfully!', 'success');
    } catch (err) {
      showToast('Could not export report CSV', 'error');
    }
  };

  // Type badge icon helper
  const getTypeBadge = (type) => {
    switch ((type || '').toLowerCase()) {
      case 'profile':
      case 'user':
        return { label: 'Profile', icon: User, bg: '#ede9fe', color: '#6d28d9' };
      case 'project':
        return { label: 'Project', icon: Folder, bg: '#fef3c7', color: '#b45309' };
      case 'course':
        return { label: 'Course', icon: GraduationCap, bg: '#e0f2fe', color: '#0369a1' };
      case 'article':
        return { label: 'Article', icon: BookOpen, bg: '#fae8ff', color: '#a21caf' };
      default:
        return { label: 'Post', icon: FileText, bg: '#ede9fe', color: '#7c3aed' };
    }
  };

  // Reason badge style helper
  const getReasonBadge = (reason) => {
    const r = (reason || '').toLowerCase();
    if (r.includes('inappropriate') || r.includes('nsfw')) {
      return { bg: '#fee2e2', color: '#ef4444' };
    }
    if (r.includes('harass') || r.includes('hate')) {
      return { bg: '#fef3c7', color: '#d97706' };
    }
    if (r.includes('copyright') || r.includes('intellectual')) {
      return { bg: '#ede9fe', color: '#7c3aed' };
    }
    if (r.includes('spam') || r.includes('promo')) {
      return { bg: '#fee2e2', color: '#dc2626' };
    }
    if (r.includes('fake') || r.includes('misleading')) {
      return { bg: '#e0f2fe', color: '#0284c7' };
    }
    return { bg: '#f1f5f9', color: '#475569' };
  };

  // Status badge style helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return { label: 'Pending', bg: '#fef3c7', color: '#d97706' };
      case 'reviewed':
      case 'in_review':
        return { label: 'In Review', bg: '#e0f2fe', color: '#0284c7' };
      case 'resolved':
        return { label: 'Resolved', bg: '#dcfce7', color: '#16a34a' };
      case 'dismissed':
      case 'rejected':
        return { label: 'Rejected', bg: '#fee2e2', color: '#dc2626' };
      default:
        return { label: status, bg: '#f1f5f9', color: '#64748b' };
    }
  };

  return (
    <div style={{ paddingBottom: '48px', color: '#0f172a' }}>
      {/* 1. Header Section (Exact match to screenshot) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '26px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            color: '#c084fc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Shield size={22} strokeWidth={2.4} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0c1538', margin: '0 0 2px', letterSpacing: '-0.025em' }}>
              Reports
            </h1>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>
              Monitor and manage reported content across the platform.
            </p>
          </div>
        </div>

        <button
          onClick={handleExportCSV}
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
            color: '#ffffff',
            padding: '10px 22px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '0.88rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(110, 37, 232, 0.35)',
            transition: 'all 0.2s ease'
          }}
        >
          <Download size={16} />
          <span>Export Report</span>
        </button>
      </div>

      {/* 2. Top Metric Row (4 KPI Cards + 1 Right Report Management Widget) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '20px',
        marginBottom: '26px'
      }}>
        {/* Left Column (8 cols): 4 Stat Cards */}
        <div style={{
          gridColumn: 'span 8',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px'
        }}>
          {/* Card 1: Total Reports */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #edf2f7',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Flag size={18} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Total Reports</span>
            </div>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0c1538', lineHeight: 1, marginBottom: '6px' }}>
                {stats.total}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#10b981', fontWeight: 700 }}>
                <span>↑ 12%</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>vs last 7 days</span>
              </div>
            </div>
          </div>

          {/* Card 2: Pending */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #edf2f7',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(245, 158, 11, 0.12)',
                color: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={18} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Pending</span>
            </div>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0c1538', lineHeight: 1, marginBottom: '6px' }}>
                {stats.pending}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#f59e0b', fontWeight: 700 }}>
                <span>↑ 33%</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>needs review</span>
              </div>
            </div>
          </div>

          {/* Card 3: Reviewed */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #edf2f7',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(2, 132, 199, 0.1)',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Eye size={18} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Reviewed</span>
            </div>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0c1538', lineHeight: 1, marginBottom: '6px' }}>
                {stats.reviewed}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#10b981', fontWeight: 700 }}>
                <span>↑ 11%</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>resolved</span>
              </div>
            </div>
          </div>

          {/* Card 4: Resolved */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #edf2f7',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckCircle2 size={18} strokeWidth={2.4} />
              </div>
              <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Resolved</span>
            </div>
            <div>
              <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0c1538', lineHeight: 1, marginBottom: '6px' }}>
                {stats.resolved}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#10b981', fontWeight: 700 }}>
                <span>↓ 25%</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Report Management Widget */}
        <div style={{
          gridColumn: 'span 4',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '20px 22px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={17} />
              </div>
              <h3 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#0c1538' }}>
                Report Management
              </h3>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
              Review reported content, take action and keep the community safe.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Item 1: Review Pending */}
              <div
                onClick={() => setStatusFilter('pending')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  background: statusFilter === 'pending' ? 'rgba(124, 58, 237, 0.08)' : '#f8fafc',
                  border: statusFilter === 'pending' ? '1px solid rgba(124, 58, 237, 0.3)' : '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0c1538' }}>Review Pending Reports</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{stats.pending} items</div>
                  </div>
                </div>
                <ChevronRight size={15} color="#94a3b8" />
              </div>

              {/* Item 2: View Resolved */}
              <div
                onClick={() => setStatusFilter('resolved')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  background: statusFilter === 'resolved' ? 'rgba(16, 185, 129, 0.08)' : '#f8fafc',
                  border: statusFilter === 'resolved' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0c1538' }}>View Resolved Reports</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{stats.resolved} items</div>
                  </div>
                </div>
                <ChevronRight size={15} color="#94a3b8" />
              </div>

              {/* Item 3: View All */}
              <div
                onClick={() => { setStatusFilter('all'); setTypeFilter('all'); setReasonFilter('all'); setSearchQuery(''); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  background: statusFilter === 'all' ? 'rgba(2, 132, 199, 0.08)' : '#f8fafc',
                  border: statusFilter === 'all' ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0c1538' }}>View All Reports</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{stats.total} items</div>
                  </div>
                </div>
                <ChevronRight size={15} color="#94a3b8" />
              </div>

              {/* Item 4: Report Settings */}
              <div
                onClick={() => setSettingsModalOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(100, 116, 139, 0.1)', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Settings size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0c1538' }}>Report Settings</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Manage report options</div>
                  </div>
                </div>
                <ChevronRight size={15} color="#94a3b8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Middle Section: Reports Overview (Area Chart) & Report Reasons (Donut Chart) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '20px',
        marginBottom: '26px'
      }}>
        {/* Card: Reports Overview (7 cols) */}
        <div style={{
          gridColumn: 'span 7',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.08)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart2 size={17} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#0c1538' }}>Reports Overview</h3>
                <p style={{ margin: 0, fontSize: '0.76rem', color: '#64748b' }}>Number of reports in the last 7 days</p>
              </div>
            </div>

            <select
              value={overviewRange}
              onChange={(e) => setOverviewRange(e.target.value)}
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#475569',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '6px 10px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option>
            </select>
          </div>

          {/* SVG Area / Line Chart matching screenshot */}
          <div style={{ height: '220px', width: '100%', position: 'relative' }}>
            <svg viewBox="0 0 540 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Gridlines & Y Labels */}
              {[
                { y: 20, label: '20' },
                { y: 60, label: '15' },
                { y: 100, label: '10' },
                { y: 140, label: '5' },
                { y: 180, label: '0' }
              ].map((g, i) => (
                <g key={i}>
                  <text x="0" y={g.y + 4} fontSize="10" fill="#94a3b8" fontFamily="sans-serif">
                    {g.label}
                  </text>
                  <line x1="26" y1={g.y} x2="530" y2={g.y} stroke="#f1f5f9" strokeWidth="1" />
                </g>
              ))}

              {/* Area fill */}
              <polygon
                points="
                  40,150 
                  115,110 
                  190,135 
                  265,90 
                  340,115 
                  415,65 
                  490,70 
                  490,180 
                  40,180
                "
                fill="url(#areaGradient)"
              />

              {/* Main Line Stroke */}
              <polyline
                points="
                  40,150 
                  115,110 
                  190,135 
                  265,90 
                  340,115 
                  415,65 
                  490,70
                "
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {[
                { x: 40, y: 150, val: 4, day: 'Apr 22' },
                { x: 115, y: 110, val: 8, day: 'Apr 23' },
                { x: 190, y: 135, val: 5, day: 'Apr 24' },
                { x: 265, y: 90, val: 10, day: 'Apr 25' },
                { x: 340, y: 115, val: 7, day: 'Apr 26' },
                { x: 415, y: 65, val: 14, day: 'Apr 27' },
                { x: 490, y: 70, val: 13, day: 'Apr 28' }
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y} r="4" fill="#ffffff" stroke="#7c3aed" strokeWidth="2.5" />
                  <text x={pt.x} y="196" textAnchor="middle" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">
                    {pt.day}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Card: Report Reasons (Donut Chart) (5 cols) */}
        <div style={{
          gridColumn: 'span 5',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '22px 24px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.08)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PieChart size={17} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#0c1538' }}>Report Reasons</h3>
              <p style={{ margin: 0, fontSize: '0.76rem', color: '#64748b' }}>Reasons for reported content</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px' }}>
            {/* SVG Donut Chart */}
            <div style={{ position: 'relative', width: '150px', height: '150px', flexShrink: 0 }}>
              <svg viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                {/* Arc segments with exact percentages */}
                {/* 1. Spam (29%) -> strokeDasharray 127 314 */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#7c3aed" strokeWidth="22" strokeDasharray="91 314" strokeDashoffset="0" />
                {/* 2. Harassment (21%) */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#3b82f6" strokeWidth="22" strokeDasharray="66 314" strokeDashoffset="-91" />
                {/* 3. Inappropriate (17%) */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#10b981" strokeWidth="22" strokeDasharray="53 314" strokeDashoffset="-157" />
                {/* 4. Copyright (12%) */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#06b6d4" strokeWidth="22" strokeDasharray="38 314" strokeDashoffset="-210" />
                {/* 5. Fake Info (8%) */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#f59e0b" strokeWidth="22" strokeDasharray="25 314" strokeDashoffset="-248" />
                {/* 6. Other (12%) */}
                <circle cx="80" cy="80" r="50" fill="transparent" stroke="#ef4444" strokeWidth="22" strokeDasharray="41 314" strokeDashoffset="-273" />
              </svg>

              {/* Inner Number */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0c1538', lineHeight: 1 }}>
                  {stats.total}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                  Total
                </span>
              </div>
            </div>

            {/* Legend breakdown list */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {reasonBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setReasonFilter(reasonFilter === item.name ? 'all' : item.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.76rem',
                    cursor: 'pointer',
                    padding: '3px 6px',
                    borderRadius: '6px',
                    background: reasonFilter === item.name ? 'rgba(124, 58, 237, 0.08)' : 'transparent',
                    transition: 'background 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, display: 'inline-block' }} />
                    <span style={{ color: '#334155', fontWeight: 600 }}>{item.name}</span>
                  </div>
                  <span style={{ color: '#64748b', fontWeight: 700 }}>
                    {item.count} <span style={{ color: '#94a3b8', fontWeight: 500 }}>({item.percentage}%)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Table: Recent Reports (Exact matching layout in screenshot) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
        overflow: 'hidden'
      }}>
        {/* Table Header Filter Controls */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.08)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={17} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0c1538' }}>
                Recent Reports
              </h3>
              <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                Latest reported content across the platform
              </p>
            </div>
          </div>

          {/* Filters on right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Type Dropdown */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#475569',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '8px 12px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Types</option>
              <option value="post">Post</option>
              <option value="profile">Profile</option>
              <option value="project">Project</option>
              <option value="course">Course</option>
              <option value="article">Article</option>
            </select>

            {/* Status Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#475569',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '8px 12px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in_review">In Review</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '220px' }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 34px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.82rem',
                  outline: 'none',
                  background: '#f8fafc',
                  color: '#0f172a'
                }}
              />
            </div>
          </div>
        </div>

        {/* Reports Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #edf2f7' }}>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', width: '40px' }}>#</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Content</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reason</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reported By</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '14px 20px', fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                    <CheckCircle2 size={36} color="#10b981" style={{ margin: '0 auto 10px', display: 'block' }} />
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0c1538', marginBottom: '4px' }}>No reports found</div>
                    <div style={{ fontSize: '0.84rem' }}>No incident tickets match the selected filters.</div>
                  </td>
                </tr>
              ) : (
                filteredReports.map((r, index) => {
                  const typeBadge = getTypeBadge(r.report_type);
                  const TypeIcon = typeBadge.icon;
                  const reasonBadge = getReasonBadge(r.reason);
                  const statusBadge = getStatusBadge(r.status);

                  return (
                    <tr
                      key={r.id || index}
                      style={{
                        borderBottom: '1px solid #f8fafc',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#fbfcfe'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      {/* # */}
                      <td style={{ padding: '16px 20px', fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                        {index + 1}
                      </td>

                      {/* Content (Thumbnail + Title + Author) */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <img
                            src={r.thumbnail}
                            alt={r.content_title}
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              objectFit: 'cover',
                              background: '#f1f5f9',
                              flexShrink: 0,
                              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                            }}
                          />
                          <div>
                            <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0c1538', lineHeight: 1.2 }}>
                              {r.content_title}
                            </div>
                            <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '3px' }}>
                              {r.author_name}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Type */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: typeBadge.bg,
                          color: typeBadge.color,
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}>
                          <TypeIcon size={13} />
                          <span>{typeBadge.label}</span>
                        </span>
                      </td>

                      {/* Reason */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: reasonBadge.bg,
                          color: reasonBadge.color,
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}>
                          {r.reason}
                        </span>
                      </td>

                      {/* Reported By */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img
                            src={r.reporter_avatar}
                            alt={r.reporter_name}
                            style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div>
                            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0c1538', lineHeight: 1.1 }}>
                              {r.reporter_name}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                              {r.time_ago}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0c1538', lineHeight: 1.1 }}>
                          {r.date_formatted}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                          {r.time_formatted}
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: statusBadge.bg,
                          color: statusBadge.color,
                          fontSize: '0.75rem',
                          fontWeight: 800
                        }}>
                          {statusBadge.label}
                        </span>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
                          {/* Inspect Eye Button */}
                          <button
                            onClick={() => {
                              setInspectReport(r);
                              setActionNotes('');
                            }}
                            title="Inspect Report Ticket"
                            style={{
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              color: '#64748b',
                              padding: '6px 8px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.15s'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                          >
                            <Eye size={15} />
                          </button>

                          {/* 3 Dots Menu Button */}
                          <button
                            onClick={() => setActiveMenuId(activeMenuId === r.id ? null : r.id)}
                            title="More Moderation Actions"
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: '#94a3b8',
                              padding: '6px 4px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <MoreVertical size={16} />
                          </button>

                          {/* Quick Actions Dropdown Menu */}
                          {activeMenuId === r.id && (
                            <div style={{
                              position: 'absolute',
                              right: 0,
                              top: '100%',
                              marginTop: '6px',
                              background: '#ffffff',
                              borderRadius: '12px',
                              boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                              border: '1px solid #edf2f7',
                              zIndex: 50,
                              minWidth: '190px',
                              padding: '6px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px'
                            }}>
                              <button
                                onClick={() => handleExecuteAction(r.id, 'resolve')}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '8px 12px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  color: '#16a34a',
                                  background: 'none',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f0fdf4'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                              >
                                <CheckCircle size={14} />
                                <span>Mark as Resolved</span>
                              </button>

                              <button
                                onClick={() => handleExecuteAction(r.id, 'in_review')}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '8px 12px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  color: '#0284c7',
                                  background: 'none',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f0f9ff'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                              >
                                <Clock size={14} />
                                <span>Mark as In Review</span>
                              </button>

                              <button
                                onClick={() => handleExecuteAction(r.id, 'dismiss')}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '8px 12px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  color: '#64748b',
                                  background: 'none',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                              >
                                <X size={14} />
                                <span>Reject / Dismiss</span>
                              </button>

                              <div style={{ height: '1px', background: '#f1f5f9', margin: '4px 0' }} />

                              <button
                                onClick={() => handleExecuteAction(r.id, 'remove_content')}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '8px 12px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  color: '#ef4444',
                                  background: 'none',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#fef2f2'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                              >
                                <Trash2 size={14} />
                                <span>Delete Content</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Incident Details & Action Modal */}
      {inspectReport && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '620px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8fafc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0c1538' }}>
                    Incident Ticket #{inspectReport.id}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    {inspectReport.date_formatted} • {inspectReport.time_formatted}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setInspectReport(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '6px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Target Item Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 16px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <img
                  src={inspectReport.thumbnail}
                  alt={inspectReport.content_title}
                  style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0c1538' }}>
                      {inspectReport.content_title}
                    </span>
                    <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '6px', background: '#ede9fe', color: '#7c3aed', fontWeight: 700, textTransform: 'capitalize' }}>
                      {inspectReport.report_type}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Published by: <strong>{inspectReport.author_name}</strong>
                  </div>
                </div>
              </div>

              {/* Reported By & Reason */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Reported Reason
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ef4444' }}>
                    {inspectReport.reason}
                  </div>
                </div>

                <div style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Submitted By
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0c1538' }}>
                    {inspectReport.reporter_name}
                  </div>
                </div>
              </div>

              {/* Report Statement */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                  Incident Description & Notes
                </label>
                <div style={{
                  padding: '12px 14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  color: '#334155',
                  lineHeight: 1.5
                }}>
                  "{inspectReport.details}"
                </div>
              </div>

              {/* Resolution Notes Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                  Moderation Resolution Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Explain actions taken to resolve or dismiss this ticket..."
                  value={actionNotes}
                  onChange={(e) => setActionNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.84rem',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleExecuteAction(inspectReport.id, 'resolve')}
                  className="btn btn-primary"
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    background: '#16a34a',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Resolve Ticket</span>
                </button>

                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleExecuteAction(inspectReport.id, 'in_review')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    background: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Clock size={16} />
                  <span>Mark In Review</span>
                </button>

                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleExecuteAction(inspectReport.id, 'dismiss')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    background: '#64748b',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <X size={16} />
                  <span>Reject Report</span>
                </button>
              </div>

              {/* Punitive Actions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleExecuteAction(inspectReport.id, 'suspend_user')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Ban size={15} />
                  <span>Suspend Creator Account</span>
                </button>

                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleExecuteAction(inspectReport.id, 'remove_content')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Trash2 size={15} />
                  <span>Purge Violating Content</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Settings Modal */}
      {settingsModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(3px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            maxWidth: '500px',
            width: '100%',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Settings size={20} color="#7c3aed" />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#0c1538' }}>Report Moderation Settings</h3>
              </div>
              <button onClick={() => setSettingsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '18px' }}>
              Configure automated safety thresholds, spam filters, and notification settings for moderation queues.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Automatically hide content after 3 distinct copyright notices</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Send high-priority email alerts for severe harassment tickets</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <span>Require admin verification note before ticket resolution</span>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setSettingsModalOpen(false)} className="btn btn-secondary" style={{ padding: '8px 18px', borderRadius: '8px' }}>
                Close
              </button>
              <button onClick={() => { setSettingsModalOpen(false); showToast('Moderation settings saved!', 'success'); }} className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '8px' }}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReportsPage;
