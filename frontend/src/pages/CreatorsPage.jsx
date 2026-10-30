// frontend/src/pages/CreatorsPage.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { CreatorCard } from '../components/CreatorCard';
import { Search, Users, Sparkles, Filter, MapPin, Briefcase } from 'lucide-react';

export const CreatorsPage = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total_pages: 1, total_creators: 0 });

  const popularSkills = ['React', 'Figma', 'UI/UX', 'Node.js', 'Python', 'Tailwind', 'Video Editing', '3D Blender', 'Photography', 'Graphic Design'];

  const fetchCreators = async () => {
    setLoading(true);
    try {
      const res = await api.getCreators({
        search,
        skill: selectedSkill,
        page,
        limit: 12
      });

      if (res.success && res.data) {
        setCreators(res.data.creators || []);
        setPagination(res.data.pagination || { total_pages: 1, total_creators: 0 });
      }
    } catch (err) {
      console.error('Error loading creators:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCreators();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, selectedSkill, page]);

  return (
    <div style={{ background: '#f8fafc', minHeight: '85vh', padding: '40px 0 80px' }}>
      <div className="container">
        {/* Header Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #0b0f19 0%, #1e1b4b 60%, #31104b 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          padding: '44px 32px',
          marginBottom: '36px',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99, 102, 241, 0.25)', border: '1px solid rgba(129, 140, 248, 0.4)', padding: '6px 14px', borderRadius: 'var(--radius-full)', marginBottom: '16px' }}>
              <Sparkles size={16} color="#818cf8" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#c7d2fe' }}>Discover Elite Talent</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.2', marginBottom: '12px' }}>
              Connect with Inspiring <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creators & Designers</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Explore talented professionals, freelancers, software engineers, and digital artists showcase their works and portfolios across the globe.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="card" style={{ padding: '20px 24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input
                type="text"
                placeholder="Search by creator name, title, or location..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="input-control"
                style={{ paddingLeft: '42px', width: '100%' }}
              />
            </div>

            {/* Quick Skill Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', maxWidth: '100%', paddingBottom: '4px' }}>
              <button
                onClick={() => { setSelectedSkill(''); setPage(1); }}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedSkill === '' ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: selectedSkill === '' ? 'var(--primary-light)' : '#ffffff',
                  color: selectedSkill === '' ? 'var(--primary)' : 'var(--text-muted)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                All Skills
              </button>
              {popularSkills.map((sk) => (
                <button
                  key={sk}
                  onClick={() => { setSelectedSkill(sk === selectedSkill ? '' : sk); setPage(1); }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: selectedSkill === sk ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                    background: selectedSkill === sk ? 'var(--primary-light)' : '#ffffff',
                    color: selectedSkill === sk ? 'var(--primary)' : 'var(--text-muted)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {sk}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Creators Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
            <p style={{ color: 'var(--text-muted)' }}>Discovering creators...</p>
          </div>
        ) : creators.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <Users size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>No creators found</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>
              Try adjusting your search query or skill filter to find other active community creators.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}>
              {creators.map((c) => (
                <CreatorCard key={c.id} creator={c} onFollowToggled={fetchCreators} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.total_pages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                  className="btn btn-secondary btn-sm"
                >
                  Previous
                </button>
                <span style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Page {page} of {pagination.total_pages}
                </span>
                <button
                  disabled={page >= pagination.total_pages}
                  onClick={() => setPage(page + 1)}
                  className="btn btn-secondary btn-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
