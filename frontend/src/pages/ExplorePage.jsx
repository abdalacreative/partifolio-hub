// frontend/src/pages/ExplorePage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { PostCard } from '../components/PostCard';
import { CreatorCard } from '../components/CreatorCard';
import { Search, Filter, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedType, setSelectedType] = useState('all');
  const [sort, setSort] = useState('trending');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total_pages: 1 });

  useEffect(() => {
    const fetchExplore = async () => {
      setLoading(true);
      try {
        const [postsRes, creatorsRes] = await Promise.all([
          api.getPosts({
            category: selectedCategory !== 'all' ? selectedCategory : '',
            type: selectedType !== 'all' ? selectedType : '',
            sort,
            search,
            page,
            limit: 12
          }),
          api.getCreators({ limit: 4 })
        ]);

        if (postsRes.success) {
          setPosts(postsRes.data.posts || []);
          setCategories(postsRes.data.categories || []);
          setPagination(postsRes.data.pagination || { total_pages: 1 });
        }
        if (creatorsRes.success) {
          setCreators(creatorsRes.data.creators || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExplore();
  }, [selectedCategory, selectedType, sort, search, page]);

  return (
    <div style={{ background: '#f8fafc', padding: '40px 0 80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '10px' }}>
            Explore Creative Work
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Discover exceptional designs, apps, and productions crafted by community creators.
          </p>
        </div>

        {/* Search & Sort Controls Bar (Screen 11) */}
        <div className="card" style={{ padding: '20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search portfolios, keywords, tech stacks..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="form-input"
                style={{ paddingLeft: '40px' }}
              />
            </div>

            {/* Type Selector Tabs */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {['all', 'project', 'image', 'video'].map((t) => (
                <button
                  key={t}
                  onClick={() => { setSelectedType(t); setPage(1); }}
                  className={`btn btn-sm ${selectedType === t ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ textTransform: 'capitalize' }}
                >
                  {t === 'all' ? 'All Types' : `${t}s`}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="form-select"
              style={{ width: 'auto', minWidth: '150px' }}
            >
              <option value="trending">🔥 Trending</option>
              <option value="most_liked">❤️ Most Liked</option>
              <option value="most_viewed">👁️ Most Viewed</option>
              <option value="latest">✨ Latest</option>
            </select>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <button
              onClick={() => { setSelectedCategory('all'); setPage(1); }}
              className={`badge ${selectedCategory === 'all' ? 'badge-primary' : 'badge-neutral'}`}
              style={{ padding: '8px 16px', fontSize: '0.85rem', cursor: 'pointer', border: 'none' }}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => { setSelectedCategory(c.slug); setPage(1); }}
                className={`badge ${selectedCategory === c.slug ? 'badge-primary' : 'badge-neutral'}`}
                style={{ padding: '8px 16px', fontSize: '0.85rem', cursor: 'pointer', border: 'none' }}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Creators Highlights Bar (Screen 11) */}
        {creators.length > 0 && selectedCategory === 'all' && page === 1 && !search && (
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '18px' }}>
              Trending Creators
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {creators.map((c) => (
                <CreatorCard key={c.id} creator={c} />
              ))}
            </div>
          </div>
        )}

        {/* Main Posts Feed Grid */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '18px' }}>
          Portfolio Showcase ({posts.length} results)
        </h3>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <p>Loading curated showcase...</p>
          </div>
        ) : posts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>No posts found matching the selected filters.</p>
            <button onClick={() => { setSelectedCategory('all'); setSelectedType('all'); setSearch(''); }} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {pagination.total_pages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="btn btn-secondary btn-sm"
            >
              Previous
            </button>
            <span style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '0.88rem', fontWeight: '600' }}>
              Page {page} of {pagination.total_pages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(pagination.total_pages, p + 1))}
              disabled={page >= pagination.total_pages}
              className="btn btn-secondary btn-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
