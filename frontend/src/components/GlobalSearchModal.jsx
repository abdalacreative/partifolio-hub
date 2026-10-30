// frontend/src/components/GlobalSearchModal.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, User, FileText, Code2, Folder, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await api.search(query.trim());
        if (res.success) {
          setResults(res.data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (url) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-start', paddingTop: '80px' }}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', borderRadius: 'var(--radius-lg)' }}>
        {/* Search Input Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', borderBottom: '1px solid var(--border-color)' }}>
          <Search size={20} color="var(--primary)" />
          <input
            autoFocus
            type="text"
            placeholder="Search creators, posts, projects, skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              color: 'var(--text-main)',
              background: 'transparent'
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <X size={18} />
            </button>
          )}
        </div>

        {/* Results Container */}
        <div style={{ maxHeight: '450px', overflowY: 'auto', padding: '16px' }}>
          {loading && (
            <p style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>Searching platform...</p>
          )}

          {!loading && results && (
            <div>
              {/* Creators */}
              {results.creators?.length > 0 && (
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
                    Creators
                  </p>
                  {results.creators.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleSelect(`/profile/${c.username}`)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'background 0.15s'
                      }}
                      className="search-item-hover"
                    >
                      <img
                        src={c.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                        alt={c.full_name}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>{c.full_name}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>@{c.username} • {c.professional_title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects & Posts */}
              {(results.projects?.length > 0 || results.posts?.length > 0) && (
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
                    Posts & Projects
                  </p>
                  {[...(results.projects || []), ...(results.posts || [])].map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelect(p.post_type === 'project' ? `/project/${p.id}` : (p.post_type === 'video' ? `/post/${p.id}/video` : `/post/${p.id}`))}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer'
                      }}
                      className="search-item-hover"
                    >
                      <img
                        src={p.cover_image}
                        alt={p.title}
                        style={{ width: '42px', height: '42px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>{p.title}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>by {p.full_name || p.username} • {p.category_name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Categories & Skills */}
              {results.categories?.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
                    Categories
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {results.categories.map((cat) => (
                      <span
                        key={cat.id}
                        onClick={() => handleSelect(`/explore?category=${cat.slug}`)}
                        className="badge badge-primary"
                        style={{ cursor: 'pointer', padding: '6px 12px' }}
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {results.creators?.length === 0 && results.posts?.length === 0 && results.projects?.length === 0 && (
                <p style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                  No exact results found for "{query}". Try a different keyword.
                </p>
              )}
            </div>
          )}

          {!query && (
            <p style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Type to search creators, design portfolios, showreels, code repos and categories.
            </p>
          )}
        </div>
      </div>

      <style>{`
        .search-item-hover:hover {
          background: #f1f5f9;
        }
      `}</style>
    </div>
  );
};
