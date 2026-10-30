// frontend/src/components/UnsplashPickerModal.jsx
import React, { useState, useMemo } from 'react';
import { Search, X, Check, Sparkles, Image, ExternalLink, RefreshCw } from 'lucide-react';

export const UNSPLASH_COLLECTIONS = [
  // 1. Photography
  {
    id: 'p1',
    category: 'photography',
    categoryName: 'Photography',
    title: 'Urban Architectural Golden Hour',
    photographer: 'Ayan Farah',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    category: 'photography',
    categoryName: 'Photography',
    title: 'Cinematic High Fashion Portrait',
    photographer: 'Soren Astrup',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    category: 'photography',
    categoryName: 'Photography',
    title: 'Dramatic Coastal Waves & Skyline',
    photographer: 'Shifaaz shamheed',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    category: 'photography',
    categoryName: 'Photography',
    title: 'Street Photography In Black & White',
    photographer: 'Leroy Skalstad',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p5',
    category: 'photography',
    categoryName: 'Photography',
    title: 'Professional Mirrorless Camera Rig',
    photographer: 'Alexander Andrews',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80'
  },

  // 2. Graphic Design
  {
    id: 'g1',
    category: 'graphic-design',
    categoryName: 'Graphic Design',
    title: 'Modern Brand Identity & Visual Guide',
    photographer: 'Balázs Kétyi',
    url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'g2',
    category: 'graphic-design',
    categoryName: 'Graphic Design',
    title: 'Tactile Artisan Packaging & Mockup Kit',
    photographer: 'Patrik Michalicka',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'g3',
    category: 'graphic-design',
    categoryName: 'Graphic Design',
    title: 'Abstract 3D Geometric Gradient Fluid',
    photographer: 'Milad Fakurian',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'g4',
    category: 'graphic-design',
    categoryName: 'Graphic Design',
    title: 'Editorial Magazine Typographic Layout',
    photographer: 'Content Pixie',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'g5',
    category: 'graphic-design',
    categoryName: 'Graphic Design',
    title: 'Creative Stationery & Business Card Deck',
    photographer: 'Brandless',
    url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80'
  },

  // 3. UI/UX Design
  {
    id: 'u1',
    category: 'ui-ux-design',
    categoryName: 'UI/UX Design',
    title: 'Fintech Mobile Banking App UI Kit',
    photographer: 'Taras Shypka',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'u2',
    category: 'ui-ux-design',
    categoryName: 'UI/UX Design',
    title: 'Figma Design System & Component Library',
    photographer: 'Theme Photos',
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'u3',
    category: 'ui-ux-design',
    categoryName: 'UI/UX Design',
    title: 'SaaS Analytics Dashboard Wireframe',
    photographer: 'Luke Chesser',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'u4',
    category: 'ui-ux-design',
    categoryName: 'UI/UX Design',
    title: 'E-Commerce Mobile UX Prototype Flow',
    photographer: 'Daniel Korpai',
    url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=80'
  },

  // 4. Web Development
  {
    id: 'w1',
    category: 'web-development',
    categoryName: 'Web Development',
    title: 'Full-Stack Developer Dark Theme Workspace',
    photographer: 'Fotis Fotopoulos',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'w2',
    category: 'web-development',
    categoryName: 'Web Development',
    title: 'Modern React & JavaScript Code Editor',
    photographer: 'Lautaro Andreani',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'w3',
    category: 'web-development',
    categoryName: 'Web Development',
    title: 'Multi-Monitor Engineering Setup',
    photographer: 'Farzad Nazifi',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'w4',
    category: 'web-development',
    categoryName: 'Web Development',
    title: 'Cloud Database Architecture & DevOps',
    photographer: 'Taylor Vick',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80'
  },

  // 5. Content Creation
  {
    id: 'c1',
    category: 'content-creation',
    categoryName: 'Content Creation',
    title: 'Broadcast Studio Microphone & Acoustic Setup',
    photographer: 'CoWomen',
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2',
    category: 'content-creation',
    categoryName: 'Content Creation',
    title: 'Video Production Rig & Cinema Lights',
    photographer: 'Sam McGhee',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3',
    category: 'content-creation',
    categoryName: 'Content Creation',
    title: 'Creative Podcasting & Interview Booth',
    photographer: 'Austin Distel',
    url: 'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'c4',
    category: 'content-creation',
    categoryName: 'Content Creation',
    title: 'Social Media Content Desk & Vlog Kit',
    photographer: 'Kari Shea',
    url: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&auto=format&fit=crop&q=80'
  }
];

export const UnsplashPickerModal = ({
  isOpen,
  onClose,
  onSelectImage,
  defaultCategory = 'all',
  title = 'Select Photo from Unsplash'
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [customUrl, setCustomUrl] = useState('');

  const filteredImages = useMemo(() => {
    return UNSPLASH_COLLECTIONS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        !searchTerm.trim() ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.photographer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  if (!isOpen) return null;

  const handleChoose = (url) => {
    onSelectImage(url);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customUrl.trim()) {
      handleChoose(customUrl.trim());
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '860px', width: '92%', maxHeight: '88vh', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #1e143b 0%, #0d1330 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: '#6e25e8', padding: '8px', borderRadius: '10px', display: 'flex' }}>
              <Image size={20} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>{title}</h3>
              <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#cbd5e1' }}>
                High-resolution, royalty-free photography curated for your projects
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#ffffff',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Search & Categories Bar */}
        <div style={{ padding: '16px 24px', background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', marginBottom: '14px' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search by keywords, title, or photographer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '42px', borderRadius: '10px' }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'all', label: '🌟 All Creative' },
              { id: 'photography', label: '📷 Photography' },
              { id: 'graphic-design', label: '🎨 Graphic Design' },
              { id: 'ui-ux-design', label: '📱 UI/UX Design' },
              { id: 'web-development', label: '💻 Web Development' },
              { id: 'content-creation', label: '✨ Content Creator' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1.5px solid',
                  borderColor: selectedCategory === cat.id ? '#6e25e8' : '#e2e8f0',
                  background: selectedCategory === cat.id ? '#f5f0ff' : '#ffffff',
                  color: selectedCategory === cat.id ? '#6e25e8' : '#64748b',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid Body */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          background: '#f8fafc',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => handleChoose(img.url)}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1.5px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  group: 'card'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(110, 37, 232, 0.15)';
                  e.currentTarget.style.borderColor = '#6e25e8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={img.thumb}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {img.categoryName}
                  </span>
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <h4 style={{ margin: '0 0 2px', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {img.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.74rem', color: '#94a3b8' }}>
                    by {img.photographer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              <p>No photos matched your search.</p>
            </div>
          )}
        </div>

        {/* Modal Footer: Paste Custom URL Option */}
        <div style={{
          padding: '16px 24px',
          background: '#ffffff',
          borderTop: '1px solid #f1f5f9',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <form onSubmit={handleCustomSubmit} style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <input
              type="url"
              placeholder="Or paste any custom Unsplash photo URL..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="form-input"
              style={{ flex: 1, height: '40px', fontSize: '0.86rem' }}
            />
            <button
              type="submit"
              disabled={!customUrl.trim()}
              className="btn btn-primary btn-sm"
              style={{ padding: '0 18px', borderRadius: '8px' }}
            >
              Use Custom URL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
