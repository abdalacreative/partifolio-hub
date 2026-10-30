// frontend/src/pages/CategoriesPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Palette,
  Code2,
  Film,
  Camera,
  Smartphone,
  Megaphone,
  FileText,
  GraduationCap,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  Zap,
  Eye,
  Check
} from 'lucide-react';

// 3D Isometric Purple Cube Component matching the screenshot's floating gems
const FloatingCube = ({ size = 32, style = {}, rotation = 0, className = '' }) => {
  const cubeId = `cube-${size}-${rotation}-${Math.floor(Math.random() * 10000)}`;
  return (
    <div
      className={`cat-floating-cube ${className}`}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        filter: 'drop-shadow(0 14px 24px rgba(110, 37, 232, 0.4))',
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'none',
        zIndex: 1,
        '--base-rot': `${rotation}deg`,
        ...style
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${cubeId}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <linearGradient id={`${cubeId}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id={`${cubeId}-right`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#581c87" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>
        </defs>
        {/* Top Face */}
        <polygon points="50,15 86,35 50,55 14,35" fill={`url(#${cubeId}-top)`} />
        {/* Left Face */}
        <polygon points="14,35 50,55 50,88 14,68" fill={`url(#${cubeId}-left)`} />
        {/* Right Face */}
        <polygon points="50,55 86,35 86,68 50,88" fill={`url(#${cubeId}-right)`} />
      </svg>
    </div>
  );
};

// 8 Verified Categories Matching the Screenshot Exactly
const CATEGORIES_DATA = [
  {
    id: 1,
    slug: 'graphic-design',
    title: 'Graphic Design',
    creatorsCount: 1200,
    creatorsFormatted: '1.2K Creators',
    projectsCount: 3400,
    projectsFormatted: '3.4K Projects',
    description: 'Logos, branding, illustrations, print design and more.',
    icon: Palette,
    image: '/assets/graphic_designer_showcase.jpg',
    popularRank: 2
  },
  {
    id: 2,
    slug: 'web-development',
    title: 'Web Development',
    creatorsCount: 1800,
    creatorsFormatted: '1.8K Creators',
    projectsCount: 5200,
    projectsFormatted: '5.2K Projects',
    description: 'Web apps, websites, front-end, back-end and full stack.',
    icon: Code2,
    image: '/assets/web_developer_showcase.jpg',
    popularRank: 1
  },
  {
    id: 3,
    slug: 'video-editing',
    title: 'Video Editing',
    creatorsCount: 980,
    creatorsFormatted: '980 Creators',
    projectsCount: 2800,
    projectsFormatted: '2.8K Projects',
    description: 'Video editing, motion graphics, trailer & cinematic videos.',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80',
    popularRank: 3
  },
  {
    id: 4,
    slug: 'photography',
    title: 'Photography',
    creatorsCount: 760,
    creatorsFormatted: '760 Creators',
    projectsCount: 2100,
    projectsFormatted: '2.1K Projects',
    description: 'Portraits, nature, product, events and lifestyle.',
    icon: Camera,
    image: '/assets/photography_nikon_outdoor.jpg',
    popularRank: 4
  },
  {
    id: 5,
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    creatorsCount: 640,
    creatorsFormatted: '640 Creators',
    projectsCount: 1800,
    projectsFormatted: '1.8K Projects',
    description: 'User research, wireframes, prototypes and interfaces.',
    icon: Smartphone,
    image: '/assets/uiux_taskpal_productivity.jpg',
    popularRank: 5
  },
  {
    id: 6,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    creatorsCount: 520,
    creatorsFormatted: '520 Creators',
    projectsCount: 1500,
    projectsFormatted: '1.5K Projects',
    description: 'SEO, social media, content marketing and ads.',
    icon: Megaphone,
    image: '/assets/digital_marketing_analytics_metrics.png',
    popularRank: 6
  },
  {
    id: 7,
    slug: 'content-creation',
    title: 'Content Creation',
    creatorsCount: 480,
    creatorsFormatted: '480 Creators',
    projectsCount: 1200,
    projectsFormatted: '1.2K Projects',
    description: 'Blogging, copywriting, social media and storytelling.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80',
    popularRank: 7
  },
  {
    id: 8,
    slug: 'courses',
    title: 'Courses',
    creatorsCount: 320,
    creatorsFormatted: '320 Creators',
    projectsCount: 980,
    projectsFormatted: '980 Projects',
    description: 'Online courses, tutorials, workshops and training.',
    icon: GraduationCap,
    image: '/assets/lesson_01_cover.jpg',
    popularRank: 8
  }
];

// Popular Skills Tags from Screenshot
const POPULAR_SKILLS = [
  'React',
  'Next.js',
  'JavaScript',
  'PHP',
  'MySQL',
  'UI/UX',
  'Figma',
  'Photoshop',
  'Illustrator',
  'Video Editing',
  'SEO',
  'Digital Marketing'
];

export const CategoriesPage = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('Most Popular');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sorting Handler
  const sortedCategories = [...CATEGORIES_DATA].sort((a, b) => {
    if (sortOption === 'Most Popular') {
      return a.popularRank - b.popularRank;
    }
    if (sortOption === 'Most Creators') {
      return b.creatorsCount - a.creatorsCount;
    }
    if (sortOption === 'Most Projects') {
      return b.projectsCount - a.projectsCount;
    }
    if (sortOption === 'Alphabetical (A - Z)') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const handleCategoryClick = (slug) => {
    navigate(`/explore?category=${slug}`);
  };

  const handleSkillClick = (skill) => {
    navigate(`/explore?search=${encodeURIComponent(skill)}`);
  };

  return (
    <div className="cat-page-wrapper">
      <div className="cat-container">

        {/* ========================================================
            HERO BANNER (Discover Talent in Every Category)
        ======================================================== */}
        <section className="cat-hero-banner">
          {/* Ambient Lighting & Glow */}
          <div className="cat-hero-glow" />

          {/* Floating Animated 3D Purple Cubes */}
          <FloatingCube size={54} rotation={-18} className="cat-cube-anim-1" style={{ top: '12%', left: '46%' }} />
          <FloatingCube size={72} rotation={25} className="cat-cube-anim-2" style={{ top: '48%', left: '44%' }} />
          <FloatingCube size={38} rotation={12} className="cat-cube-anim-3" style={{ top: '78%', right: '18%' }} />
          <FloatingCube size={34} rotation={-35} className="cat-cube-anim-4" style={{ top: '20%', right: '4%' }} />

          <div className="cat-hero-grid">
            {/* Left Content */}
            <div className="cat-hero-content">
              {/* Badge */}
              <div className="cat-hero-badge">
                <span className="cat-hero-badge-icon">
                  <Sparkles size={14} color="#6e25e8" />
                </span>
                <span>Explore Categories</span>
              </div>

              {/* Title */}
              <h1 className="cat-hero-title">
                Discover Talent in <br />
                Every <span className="cat-hero-highlight">Category</span>
              </h1>

              {/* Subtitle */}
              <p className="cat-hero-desc">
                Browse through different categories and find amazing creators, projects and skills that match your interests.
              </p>
            </div>

            {/* Right Showcase: Floating Visual Cards with Physics Animations */}
            <div className="cat-hero-showcase">
              {/* Card 1: Web Developer (Top Left tilted, Animated) */}
              <div className="cat-float-card cat-card-web">
                <div className="cat-float-card-img-wrap">
                  <img
                    src="/assets/web_developer_showcase.jpg"
                    alt="Abdullaahi Maxamed - Web Developer Showcase"
                    className="cat-float-card-img"
                  />
                </div>
                <div className="cat-float-badge">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Developer Avatar"
                    className="cat-float-avatar"
                  />
                  <div className="cat-float-info">
                    <span className="cat-float-title">Web Developer</span>
                    <span className="cat-float-stat">
                      <Eye size={12} style={{ marginRight: '3px', opacity: 0.8 }} />
                      15k+ Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Graphic Designer (Center Foreground tilted, Animated) */}
              <div className="cat-float-card cat-card-graphic">
                <div className="cat-float-card-img-wrap">
                  <img
                    src="/assets/graphic_designer_showcase.jpg"
                    alt="Abdullaahi Maxamed - Graphic Designer Showcase"
                    className="cat-float-card-img"
                  />
                </div>
                <div className="cat-float-badge">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                    alt="Designer Avatar"
                    className="cat-float-avatar"
                  />
                  <div className="cat-float-info">
                    <span className="cat-float-title">Graphic Designer</span>
                    <span className="cat-float-stat">
                      <Eye size={12} style={{ marginRight: '3px', opacity: 0.8 }} />
                      12k+ Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: PartfolioHub Logo Card (Requested Image 2, Animated) */}
              <div className="cat-float-card cat-card-brand">
                <div className="cat-brand-box">
                  <img
                    src="/assets/logo.png"
                    alt="PartfolioHub Official Logo"
                    className="cat-brand-logo-img"
                  />
                </div>
              </div>

              {/* Card 4: Photography Preview Card (Far Right, Animated) */}
              <div className="cat-float-card cat-card-photo">
                <img
                  src="/assets/photography_sunset_horizon.jpg"
                  alt="Photography Camera Sunset"
                  className="cat-float-card-img"
                />
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================
            ALL CATEGORIES (Header & 8 Cards Grid)
        ======================================================== */}
        <section className="cat-section">
          {/* Header Row */}
          <div className="cat-section-header">
            <div className="cat-header-text">
              <h2 className="cat-section-title">All Categories</h2>
              <p className="cat-section-subtitle">
                Choose a category and explore talented creators, amazing projects and inspiring work.
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="cat-sort-container">
              <button
                type="button"
                className="cat-sort-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                <SlidersHorizontal size={17} className="cat-sort-icon" />
                <span>{sortOption}</span>
                <ChevronDown size={16} className={`cat-chevron ${dropdownOpen ? 'rotate' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="cat-sort-dropdown">
                  {['Most Popular', 'Most Creators', 'Most Projects', 'Alphabetical (A - Z)'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`cat-sort-item ${sortOption === opt ? 'active' : ''}`}
                      onClick={() => {
                        setSortOption(opt);
                        setDropdownOpen(false);
                      }}
                    >
                      <span>{opt}</span>
                      {sortOption === opt && <Check size={14} color="#6e25e8" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 8 Categories Grid */}
          <div className="cat-grid">
            {sortedCategories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="cat-card"
                  style={{ animationDelay: `${index * 0.06}s` }}
                  onClick={() => handleCategoryClick(cat.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryClick(cat.slug);
                    }
                  }}
                >
                  {/* Top Row: Icon & Preview Thumbnail */}
                  <div className="cat-card-top">
                    <div className="cat-icon-box">
                      <IconComponent size={22} color="#ffffff" strokeWidth={2.4} />
                    </div>
                    <div className="cat-card-thumb-wrap">
                      <img src={cat.image} alt={cat.title} className="cat-card-thumb" />
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="cat-card-body">
                    <h3 className="cat-card-title">{cat.title}</h3>
                    <div className="cat-card-stats">
                      <span>{cat.creatorsFormatted}</span>
                      <span className="cat-bullet">•</span>
                      <span>{cat.projectsFormatted}</span>
                    </div>
                    <p className="cat-card-desc">{cat.description}</p>
                  </div>

                  {/* Bottom Row: Arrow Button */}
                  <div className="cat-card-footer">
                    <button
                      type="button"
                      className="cat-arrow-btn"
                      aria-label={`Explore ${cat.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(cat.slug);
                      }}
                    >
                      <ArrowRight size={17} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* ========================================================
            POPULAR SKILLS SECTION
        ======================================================== */}
        <section className="cat-skills-card">
          <div className="cat-skills-header">
            <div className="cat-skills-left">
              <div className="cat-skills-iconbox">
                <Zap size={22} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="cat-skills-title">Popular Skills</h3>
                <p className="cat-skills-sub">
                  Discover the most in-demand skills in the community.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="cat-skills-viewall"
              onClick={() => navigate('/explore')}
            >
              <span>View All Skills</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Skill Pills */}
          <div className="cat-skills-pills">
            {POPULAR_SKILLS.map((skill) => (
              <button
                key={skill}
                type="button"
                className="cat-skill-pill"
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

      </div>

      {/* Scoped Dynamic Animations and Styles */}
      <style>{`
        .cat-page-wrapper {
          background-color: #f8faff;
          min-height: 100vh;
          padding-bottom: 70px;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0c1538;
          animation: catPageEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes catPageEntrance {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ================= HERO BANNER ================= */
        .cat-hero-banner {
          position: relative;
          background: linear-gradient(135deg, #fbfaff 0%, #f4f6fe 50%, #eff2ff 100%);
          border-radius: 28px;
          padding: 56px 56px 48px;
          margin-top: 24px;
          margin-bottom: 48px;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -10px rgba(110, 37, 232, 0.05);
        }

        .cat-hero-glow {
          position: absolute;
          top: -20%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.16) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          animation: catGlowPulse 8s ease-in-out infinite alternate;
        }

        @keyframes catGlowPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.65;
          }
          100% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        /* Floating 3D Cubes Bobbing Animations */
        .cat-cube-anim-1 {
          animation: floatCubeA 6s ease-in-out infinite;
        }
        .cat-cube-anim-2 {
          animation: floatCubeB 7.5s ease-in-out infinite 0.5s;
        }
        .cat-cube-anim-3 {
          animation: floatCubeA 6.8s ease-in-out infinite 1.2s;
        }
        .cat-cube-anim-4 {
          animation: floatCubeB 5.8s ease-in-out infinite 0.3s;
        }

        @keyframes floatCubeA {
          0%, 100% {
            transform: translateY(0px) rotate(var(--base-rot));
          }
          50% {
            transform: translateY(-16px) rotate(calc(var(--base-rot) + 5deg));
          }
        }

        @keyframes floatCubeB {
          0%, 100% {
            transform: translateY(0px) rotate(var(--base-rot));
          }
          50% {
            transform: translateY(-20px) rotate(calc(var(--base-rot) - 6deg));
          }
        }

        .cat-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.15fr;
          align-items: center;
          gap: 36px;
          position: relative;
          z-index: 2;
        }

        /* Left Hero Content */
        .cat-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f3ebff;
          border: 1px solid rgba(110, 37, 232, 0.2);
          color: #6e25e8;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
          box-shadow: 0 2px 8px rgba(110, 37, 232, 0.08);
          transition: transform 0.2s ease;
        }

        .cat-hero-badge:hover {
          transform: translateY(-2px);
        }

        .cat-hero-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: catSpinSparkle 4s linear infinite;
        }

        @keyframes catSpinSparkle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg); }
        }

        .cat-hero-title {
          font-size: clamp(2.3rem, 3.8vw, 3.3rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.18;
          color: #0c1538;
          margin-bottom: 18px;
        }

        .cat-hero-highlight {
          color: #6e25e8;
          background: linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cat-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #64748b;
          max-width: 470px;
        }

        /* Right Hero Showcase Cards Composition */
        .cat-hero-showcase {
          position: relative;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-float-card {
          position: absolute;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 20px 45px -8px rgba(15, 23, 42, 0.16);
          border: 3.5px solid #ffffff;
          transition: box-shadow 0.3s ease, filter 0.3s ease;
        }

        .cat-float-card:hover {
          box-shadow: 0 28px 56px -6px rgba(110, 37, 232, 0.3);
          filter: brightness(1.02);
          z-index: 10 !important;
        }

        /* Web Developer Card (Floating Motion) */
        .cat-card-web {
          top: 4px;
          left: 2%;
          width: 275px;
          height: 185px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: floatWebCard 6.2s ease-in-out infinite;
        }

        @keyframes floatWebCard {
          0%, 100% {
            transform: rotate(-5deg) translateY(0px);
          }
          50% {
            transform: rotate(-3.5deg) translateY(-12px);
          }
        }

        /* Graphic Designer Card (Center Foreground Floating Motion) */
        .cat-card-graphic {
          bottom: 6px;
          left: 28%;
          width: 290px;
          height: 195px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 24px 50px -6px rgba(110, 37, 232, 0.24);
          animation: floatGraphicCard 7s ease-in-out infinite 0.6s;
        }

        @keyframes floatGraphicCard {
          0%, 100% {
            transform: rotate(3deg) translateY(0px);
          }
          50% {
            transform: rotate(4.8deg) translateY(-14px);
          }
        }

        /* Branding card with Official Logo (Floating Motion) */
        .cat-card-brand {
          top: 0px;
          left: 50%;
          width: 175px;
          height: 130px;
          z-index: 2;
          background: #ffffff;
          border: 3.5px solid #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 40px -6px rgba(110, 37, 232, 0.22);
          animation: floatBrandCard 5.8s ease-in-out infinite 1.1s;
        }

        @keyframes floatBrandCard {
          0%, 100% {
            transform: rotate(10deg) translateY(0px) scale(1);
          }
          50% {
            transform: rotate(8deg) translateY(-10px) scale(1.03);
          }
        }

        .cat-brand-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 10px;
        }

        .cat-brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .cat-card-brand:hover .cat-brand-logo-img {
          transform: scale(1.08);
        }

        /* Photography Card (Floating Motion) */
        .cat-card-photo {
          top: 15px;
          right: 2%;
          width: 148px;
          height: 118px;
          z-index: 2;
          overflow: hidden;
          animation: floatPhotoCard 6.6s ease-in-out infinite 1.6s;
        }

        @keyframes floatPhotoCard {
          0%, 100% {
            transform: rotate(-4deg) translateY(0px);
          }
          50% {
            transform: rotate(-2deg) translateY(-11px);
          }
        }

        .cat-float-card-img-wrap {
          width: 100%;
          flex: 1;
          overflow: hidden;
          position: relative;
          background-color: #0c1538;
        }

        .cat-float-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .cat-float-card:hover .cat-float-card-img {
          transform: scale(1.06);
        }

        .cat-float-badge {
          background: #ffffff;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .cat-float-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 1.5px solid #6e25e8;
        }

        .cat-float-info {
          display: flex;
          flex-direction: column;
        }

        .cat-float-title {
          font-size: 0.78rem;
          font-weight: 750;
          color: #0c1538;
          line-height: 1.2;
        }

        .cat-float-stat {
          font-size: 0.68rem;
          color: #64748b;
          display: flex;
          align-items: center;
          margin-top: 1px;
        }

        /* ================= ALL CATEGORIES SECTION ================= */
        .cat-section {
          margin-bottom: 40px;
        }

        .cat-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 26px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cat-section-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #0c1538;
          margin: 0 0 6px 0;
        }

        .cat-section-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
        }

        /* Sort Button & Dropdown */
        .cat-sort-container {
          position: relative;
        }

        .cat-sort-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 9px 16px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .cat-sort-btn:hover {
          border-color: #cbd5e1;
          background: #fafafa;
          transform: translateY(-1px);
        }

        .cat-sort-icon {
          color: #64748b;
        }

        .cat-chevron {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }

        .cat-chevron.rotate {
          transform: rotate(180deg);
        }

        .cat-sort-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          width: 190px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
          padding: 6px;
          z-index: 50;
          animation: catFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes catFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-sort-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease;
        }

        .cat-sort-item:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        .cat-sort-item.active {
          color: #6e25e8;
          font-weight: 700;
          background: #f5f0ff;
        }

        /* 8-Card Responsive Grid */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        /* Category Card */
        .cat-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #edf2f7;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          position: relative;
          animation: catCardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes catCardEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: #a855f7;
          box-shadow: 0 20px 42px -8px rgba(110, 37, 232, 0.16);
        }

        /* Top row inside card */
        .cat-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .cat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #6e25e8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.28);
          flex-shrink: 0;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
        }

        .cat-card:hover .cat-icon-box {
          transform: scale(1.12) rotate(6deg);
          box-shadow: 0 8px 20px rgba(110, 37, 232, 0.45);
        }

        .cat-card-thumb-wrap {
          width: 104px;
          height: 72px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          background-color: #f1f5f9;
        }

        .cat-card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .cat-card:hover .cat-card-thumb {
          transform: scale(1.12);
        }

        /* Middle Content */
        .cat-card-body {
          flex: 1;
        }

        .cat-card-title {
          font-size: 1.12rem;
          font-weight: 750;
          color: #0c1538;
          margin: 0 0 5px 0;
          letter-spacing: -0.015em;
          transition: color 0.2s ease;
        }

        .cat-card:hover .cat-card-title {
          color: #6e25e8;
        }

        .cat-card-stats {
          font-size: 0.8rem;
          font-weight: 600;
          color: #8da1bf;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 9px;
        }

        .cat-bullet {
          font-size: 0.75rem;
          color: #cbd5e1;
        }

        .cat-card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 16px 0;
          min-height: 40px;
        }

        /* Bottom Row & Arrow Button */
        .cat-card-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .cat-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f5f0ff;
          color: #6e25e8;
          border: 1px solid rgba(110, 37, 232, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cat-card:hover .cat-arrow-btn,
        .cat-arrow-btn:hover {
          background: #6e25e8;
          color: #ffffff;
          transform: translateX(4px) scale(1.08);
          box-shadow: 0 6px 18px rgba(110, 37, 232, 0.45);
        }

        /* ================= POPULAR SKILLS ================= */
        .cat-skills-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #edf2f7;
          padding: 26px 32px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          margin-bottom: 40px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cat-skills-card:hover {
          box-shadow: 0 8px 24px rgba(110, 37, 232, 0.06);
        }

        .cat-skills-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cat-skills-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cat-skills-iconbox {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #6e25e8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.28);
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .cat-skills-card:hover .cat-skills-iconbox {
          transform: rotate(10deg);
        }

        .cat-skills-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 2px 0;
          letter-spacing: -0.015em;
        }

        .cat-skills-sub {
          font-size: 0.86rem;
          color: #64748b;
          margin: 0;
        }

        .cat-skills-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: #6e25e8;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: gap 0.2s ease, color 0.2s ease;
          padding: 6px 10px;
        }

        .cat-skills-viewall:hover {
          gap: 10px;
          color: #581c87;
        }

        .cat-skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cat-skill-pill {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 9999px;
          padding: 8px 20px;
          font-size: 0.86rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cat-skill-pill:hover {
          background: #f5f0ff;
          border-color: #c4b5fd;
          color: #6e25e8;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 6px 16px rgba(110, 37, 232, 0.16);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1100px) {
          .cat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cat-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cat-hero-showcase {
            height: 300px;
          }
          .cat-card-graphic {
            left: 20%;
          }
        }

        @media (max-width: 680px) {
          .cat-grid {
            grid-template-columns: 1fr;
          }
          .cat-hero-banner {
            padding: 36px 24px;
          }
          .cat-hero-title {
            font-size: 2.1rem;
          }
          .cat-hero-showcase {
            display: none;
          }
          .cat-skills-card {
            padding: 20px;
          }
          .cat-skills-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoriesPage;
