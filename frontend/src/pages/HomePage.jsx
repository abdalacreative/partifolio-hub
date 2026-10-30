// frontend/src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Palette,
  Code2,
  Film,
  Camera,
  Layout,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Eye,
  Heart,
  GraduationCap,
  Play,
  X,
  Clock,
  BookOpen
} from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Logo } from '../components/Logo';

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Continuous Non-Stop Rapid Counter Loop ("marna yey istaagin maanta oo dhan ha iska socdaano sxb")
  const [countCreators, setCountCreators] = useState(0);
  const [countProjects, setCountProjects] = useState(0);

  // Active Video Modal State for Courses
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [countVisitors, setCountVisitors] = useState(0);

  useEffect(() => {
    const target1 = 10;
    const target2 = 50;
    const target3 = 100;
    const duration = 1400; // 1.4s rapid run
    const steps = 30;
    const intervalTime = duration / steps;
    let currentStep = 0;
    let isPaused = false;

    const counterInterval = setInterval(() => {
      if (!isPaused) {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCountCreators(Math.round(target1 * easeOut));
        setCountProjects(Math.round(target2 * easeOut));
        setCountVisitors(Math.round(target3 * easeOut));

        if (currentStep >= steps) {
          isPaused = true;
          setTimeout(() => {
            currentStep = 0;
            isPaused = false;
          }, 700); // Brief peak pause, then seamlessly counts up again non-stop!
        }
      }
    }, intervalTime);

    return () => clearInterval(counterInterval);
  }, []);

  // 8 Popular Categories with exact purple logo branding (#6e25e8)
  const categoriesList = [
    { id: 1, title: 'Graphic Design', slug: 'graphic-design', icon: Palette },
    { id: 2, title: 'Web Development', slug: 'web-development', icon: Code2 },
    { id: 3, title: 'Video Editing', slug: 'video-editing', icon: Film },
    { id: 4, title: 'Photography', slug: 'photography', icon: Camera },
    { id: 5, title: 'UI/UX Design', slug: 'ui-ux-design', icon: Layout },
    { id: 6, title: 'Digital Marketing', slug: 'digital-marketing', icon: TrendingUp },
    { id: 7, title: 'Content Creation', slug: 'content-creation', icon: Sparkles },
    { id: 8, title: 'Courses', slug: 'courses', icon: GraduationCap }
  ];

  // Course Lessons Data
  const courseLessons = [
    {
      id: 25,
      lessonNum: 'Lesson 01',
      title: 'Lesson 01: After Effects Interface',
      subtitle: 'After Effects Interface',
      badge: 'After Effects • Beginner to Pro',
      description: 'Baro interface-ka barnaamijka Adobe After Effects, panels-ka shaqada, composition viewer, timeline-ka, iyo qalabka aasaasiga ah ee animation-ka.',
      cover: '/assets/lesson_01_cover.jpg',
      video: '/assets/vedio/lesson 1.mp4',
      duration: '18 mins',
      author: 'Abdala Creator',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
      tag: 'Interface Layout'
    },
    {
      id: 26,
      lessonNum: 'Lesson 02',
      title: 'Lesson 02: Creating Workspace',
      subtitle: 'Creating Workspace',
      badge: 'After Effects • Practical Workflow',
      description: 'Baro sida loo habeeyo loona kaydsado dynamic workspace kuu gaar ah oo kuu sahlaya inaad si degdeg ah oo hufan ugu samayso visual effects iyo motion graphics.',
      cover: '/assets/lesson_02_cover.jpg',
      video: '/assets/vedio/lesson 2.mp4',
      duration: '15 mins',
      author: 'Abdala Creator',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
      tag: 'Custom Panels'
    },
    {
      id: 27,
      lessonNum: 'Lesson 03',
      title: 'Lesson 03: Professional Video Editing & Motion',
      subtitle: 'Video Editing & Motion',
      badge: 'Premiere & AE • Advanced Masterclass',
      description: 'Baro farsamooyinka casriga ah ee video editing, motion design, cinematic cuts, transitions, iyo color grading xirfadeed.',
      cover: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
      video: '/assets/vedio/vedio editing.mp4',
      duration: '22 mins',
      author: 'Abdala Creator',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
      tag: 'Cinematic Motion'
    }
  ];

  // Featured & Recent Creators (Fetched dynamically from database)
  const [featuredCreators, setFeaturedCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const res = await api.getCreators({ limit: 8, sort: 'latest' });
        if (res.success && res.data?.creators?.length > 0) {
          const mapped = res.data.creators.map((c) => ({
            id: c.id,
            username: c.username,
            full_name: c.full_name || c.username,
            role: c.professional_title || 'Creative Talent',
            location: c.location || 'Somalia',
            avatar: c.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
            following: c.is_following || false
          }));
          setFeaturedCreators(mapped);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchCreators();
  }, []);

  const handleFollowToggle = async (creatorId, index) => {
    if (!isAuthenticated) {
      showToast('Please sign in to follow creators.', 'info');
      navigate('/login');
      return;
    }

    try {
      const res = await api.toggleFollow(creatorId);
      if (res.success) {
        setFeaturedCreators((prev) =>
          prev.map((c, i) => (i === index ? { ...c, following: res.data.following } : c))
        );
        showToast(res.message, 'success');
      }
    } catch (e) {
      showToast('Follow action failed', 'error');
    }
  };

  return (
    <div style={{ background: '#f8fafc', color: '#0c1538', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION (Matching Screen 01 Exactly) */}
      <section style={{
        background: 'radial-gradient(circle at 75% 35%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 65%), radial-gradient(circle at 20% 75%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), #070918',
        color: '#ffffff',
        padding: '90px 0 110px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            {/* Left Column Text */}
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
                fontWeight: '900',
                lineHeight: '1.12',
                letterSpacing: '-0.035em',
                color: '#ffffff',
                marginBottom: '4px'
              }}>
                Showcase Your Skills
              </h1>

              <h2 style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
                fontWeight: '900',
                lineHeight: '1.12',
                letterSpacing: '-0.035em',
                background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #7c2ae8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '22px'
              }}>
                Build Your Future
              </h2>

              <p style={{
                color: '#cbd5e1',
                fontSize: '1.08rem',
                lineHeight: '1.7',
                marginBottom: '38px',
                maxWidth: '520px'
              }}>
                PartfolioHub is a platform where creative people, developers, designers, and professionals share their work, skills and services. Create your portfolio, connect with others, and grow your career.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  to={isAuthenticated ? "/create-post" : "/register"}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 32px',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 26px rgba(110, 37, 232, 0.45)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/creators"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '15px 30px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                >
                  Explore Creators
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Composite matching Image 1 */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Radial Purple Backlight Glow */}
              <div style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(110, 37, 232, 0.45) 0%, transparent 70%)',
                filter: 'blur(45px)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              {/* Composition Wrapper */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '470px',
                zIndex: 2
              }}>
                {/* 1. Main Background Card: Creative Designer Working at Computer */}
                <div style={{
                  position: 'relative',
                  width: '92%',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  background: '#0c1538',
                  border: '1.5px solid rgba(167, 139, 250, 0.32)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 45px rgba(110, 37, 232, 0.3)',
                  transition: 'transform 0.4s ease'
                }}>
                  <img
                    src="/assets/hero_designer.jpg"
                    alt="Creative Designer"
                    style={{
                      width: '100%',
                      height: '340px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 65%, rgba(7, 9, 24, 0.75) 100%)'
                  }} />
                </div>

                {/* 2. Top-Right Floating Neon Sparkle Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '4%',
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'rgba(110, 37, 232, 0.45)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(167, 139, 250, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 25px rgba(110, 37, 232, 0.85)',
                  animation: 'floatSlow1 3.5s ease-in-out infinite'
                }}>
                  <Sparkles size={20} />
                </div>

                {/* 3. Floating Foreground Card (Right): Brand Identity 3D Device */}
                <div style={{
                  position: 'absolute',
                  right: '-16px',
                  bottom: '18px',
                  width: '215px',
                  borderRadius: '18px',
                  background: '#ffffff',
                  boxShadow: '0 22px 48px rgba(0, 0, 0, 0.6), 0 0 35px rgba(110, 37, 232, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  overflow: 'hidden',
                  zIndex: 10,
                  animation: 'floatSlow2 4.8s ease-in-out infinite alternate'
                }}>
                  <img
                    src="/assets/brand_identity_bis_market.png"
                    alt="Brand Identity Showcase"
                    style={{
                      width: '100%',
                      height: '140px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                  />
                  <div style={{
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#ffffff'
                  }}>
                    <div>
                      <h6 style={{ fontSize: '0.86rem', fontWeight: '800', color: '#0c1538', margin: 0 }}>
                        Brand Identity
                      </h6>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>
                        Graphic Design
                      </span>
                    </div>

                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: '#0c1538',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
                    </div>
                  </div>
                </div>

                {/* 4. Floating Badge (Left): Creative Designer Profile Card */}
                <div style={{
                  position: 'absolute',
                  left: '-20px',
                  bottom: '75px',
                  background: '#ffffff',
                  color: '#0c1538',
                  padding: '9px 15px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  zIndex: 9,
                  animation: 'floatSlow1 4s ease-in-out infinite'
                }}>
                  <img
                    src="/assets/hero_designer.jpg"
                    alt="Creative Designer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <h5 style={{ fontSize: '0.88rem', fontWeight: '800', margin: 0, color: '#0c1538' }}>
                      Creative Designer
                    </h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                      <span><Eye size={12} style={{ verticalAlign: 'middle', color: '#6e25e8' }} /> 15k</span>
                      <span><Heart size={12} style={{ verticalAlign: 'middle', color: '#ef4444' }} /> 3.1k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES (7 Cards with Logo Purple Icons) */}
      <section style={{ padding: '75px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0c1538', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                Popular Categories
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                Explore work from professional creatives: developers, designers, and professionals share their work.
              </p>
            </div>

            <Link
              to="/explore"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#6e25e8',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 7 Category Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px'
          }}>
            {categoriesList.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to={`/explore?category=${cat.slug}`}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #ede8f8',
                    borderRadius: '18px',
                    padding: '26px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 8px rgba(110, 37, 232, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#6e25e8';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(110, 37, 232, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#ede8f8';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(110, 37, 232, 0.03)';
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(110, 37, 232, 0.08)',
                    color: '#6e25e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    transition: 'all 0.2s ease'
                  }}>
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <span style={{
                    fontSize: '0.88rem',
                    fontWeight: '800',
                    color: '#0c1538',
                    lineHeight: '1.3'
                  }}>
                    {cat.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2B. FEATURED COURSES & VIDEO LESSONS (After Effects Series) */}
      <section id="courses-section" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #fbfaff 0%, #f4f0ff 100%)', borderTop: '1px solid #ede8f8', borderBottom: '1px solid #ede8f8', position: 'relative', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-120px', right: '-100px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(110, 37, 232, 0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-100px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(110, 37, 232, 0.1)',
                border: '1px solid rgba(110, 37, 232, 0.25)',
                color: '#6e25e8',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '10px'
              }}>
                <GraduationCap size={16} strokeWidth={2.4} />
                <span>Creative Masterclasses &amp; Video Courses</span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0c1538', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                Featured Motion Design Courses
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.98rem' }}>
                Baro Adobe After Effects oo si toos ah u daawo casharrada interface-ka iyo dhisidda workspace xirfadeed.
              </p>
            </div>

            <Link
              to="/explore?category=courses"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#6e25e8',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '0.9rem',
                padding: '12px 22px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(110, 37, 232, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 26px rgba(110, 37, 232, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(110, 37, 232, 0.35)';
              }}
            >
              <span>Daawo Dhammaan Courses</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* 3 Course Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            {courseLessons.map((course) => (
              <div
                key={course.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #ede8f8',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 18px rgba(110, 37, 232, 0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(110, 37, 232, 0.16)';
                  e.currentTarget.style.borderColor = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(110, 37, 232, 0.05)';
                  e.currentTarget.style.borderColor = '#ede8f8';
                }}
              >
                {/* Cover Image with Glowing Play Button */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    background: '#0b0f19',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveCourseModal(course)}
                >
                  <img
                    src={course.cover}
                    alt={course.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />

                  {/* Dark gradient */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.1) 50%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Play Button */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6e25e8 0%, #9333ea 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 0 25px rgba(110, 37, 232, 0.8), 0 4px 15px rgba(0,0,0,0.5)',
                    border: '2.5px solid rgba(255, 255, 255, 0.9)',
                    transition: 'transform 0.25s ease'
                  }}>
                    <Play size={22} style={{ fill: '#ffffff', marginLeft: '3px' }} />
                  </div>

                  {/* Tag Chip Top Left */}
                  <span style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(11, 15, 25, 0.85)',
                    color: '#00d2ff',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.04em',
                    border: '1px solid rgba(0, 210, 255, 0.35)',
                    backdropFilter: 'blur(6px)'
                  }}>
                    {course.lessonNum}
                  </span>

                  {/* Duration Chip Bottom Right */}
                  <span style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    background: 'rgba(11, 15, 25, 0.85)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#6e25e8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {course.badge}
                    </span>
                    <span style={{
                      fontSize: '0.72rem',
                      background: '#f1f5f9',
                      color: '#475569',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}>
                      {course.tag}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: '#0c1538',
                    marginBottom: '8px',
                    lineHeight: '1.35'
                  }}>
                    {course.title}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#64748b',
                    lineHeight: '1.55',
                    marginBottom: '18px',
                    flex: 1
                  }}>
                    {course.description}
                  </p>

                  {/* Instructor & Action */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid #f1f5f9'
                  }}>
                    <Link
                      to="/profile/abdala"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '9px',
                        textDecoration: 'none'
                      }}
                    >
                      <img
                        src={course.authorAvatar}
                        alt={course.author}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #ede8f8'
                        }}
                      />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0c1538' }}>
                        {course.author}
                      </span>
                    </Link>

                    <button
                      onClick={() => setActiveCourseModal(course)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(110, 37, 232, 0.08)',
                        color: '#6e25e8',
                        border: '1px solid rgba(110, 37, 232, 0.25)',
                        padding: '8px 14px',
                        borderRadius: '9px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#6e25e8';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(110, 37, 232, 0.08)';
                        e.currentTarget.style.color = '#6e25e8';
                      }}
                    >
                      <Play size={13} fill="currentColor" />
                      <span>Watch Lesson</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player for Courses */}
      {activeCourseModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#0b0f19',
            borderRadius: '22px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            width: '100%',
            maxWidth: '920px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#0f172a'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  background: '#6e25e8',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '5px'
                }}>
                  {activeCourseModal.lessonNum}
                </span>
                <h4 style={{ margin: 0, color: '#ffffff', fontSize: '1.05rem', fontWeight: 800 }}>
                  {activeCourseModal.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
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

            {/* Video Player */}
            <div style={{ width: '100%', maxHeight: '520px', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video
                src={activeCourseModal.video}
                poster={activeCourseModal.cover}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain' }}
              />
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              background: '#0f172a'
            }}>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Casharka waxaa diyaariyay: </span>
                <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>{activeCourseModal.author}</strong>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    const idx = courseLessons.findIndex(c => c.id === activeCourseModal.id);
                    const nextIdx = (idx + 1) % courseLessons.length;
                    setActiveCourseModal(courseLessons[nextIdx]);
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#ffffff', background: 'rgba(255, 255, 255, 0.1)' }}
                >
                  Next Lesson →
                </button>
                <Link
                  to={`/post/${activeCourseModal.id}/video`}
                  className="btn btn-primary btn-sm"
                  style={{ background: '#6e25e8', color: '#ffffff' }}
                >
                  Open Dedicated Player Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. FEATURED CREATORS (Matching Image 1) */}
      <section style={{ padding: '75px 0', background: '#f8f5ff' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0c1538', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                Featured Creators
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                Trend-setters & pioneers: Find and connect with top talent on our platform.
              </p>
            </div>

            <Link
              to="/creators"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#6e25e8',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 4 Creators Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {featuredCreators.map((creator, idx) => (
              <div
                key={creator.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ede8f8',
                  borderRadius: '20px',
                  padding: '28px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(110, 37, 232, 0.05)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(110, 37, 232, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(110, 37, 232, 0.05)';
                }}
              >
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <img
                    src={creator.avatar}
                    alt={creator.full_name}
                    style={{
                      width: '86px',
                      height: '86px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #ede8f8'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    background: '#6e25e8',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '22px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #ffffff'
                  }}>
                    <CheckCircle2 size={13} fill="#6e25e8" color="#ffffff" />
                  </div>
                </div>

                <Link
                  to={`/profile/${creator.username}`}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#0c1538',
                    textDecoration: 'none',
                    marginBottom: '4px'
                  }}
                >
                  {creator.full_name}
                </Link>

                <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: '500', marginBottom: '6px' }}>
                  {creator.role}
                </p>

                <p style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  marginBottom: '18px'
                }}>
                  <MapPin size={13} />
                  {creator.location}
                </p>

                <button
                  onClick={() => handleFollowToggle(creator.id, idx)}
                  style={{
                    width: '100%',
                    maxWidth: '140px',
                    padding: '9px 20px',
                    borderRadius: 'var(--radius-full)',
                    background: creator.following ? '#ede8f8' : 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                    color: creator.following ? '#6e25e8' : '#ffffff',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: creator.following ? 'none' : '0 4px 14px rgba(110, 37, 232, 0.35)'
                  }}
                >
                  {creator.following ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM HORIZONTAL BANNER (Matching Image 3 Exactly) */}
      <section style={{
        background: '#070918',
        padding: '75px 0 95px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Ambient Violet Halo */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '280px',
          background: 'radial-gradient(ellipse, rgba(110, 37, 232, 0.35) 0%, transparent 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          {/* Panoramic Horizontal Banner Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(12, 16, 45, 0.96) 0%, rgba(20, 14, 52, 0.96) 50%, rgba(28, 14, 62, 0.96) 100%)',
            border: '1.5px solid rgba(167, 139, 250, 0.25)',
            borderRadius: '26px',
            padding: '42px 48px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), 0 0 50px rgba(110, 37, 232, 0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '36px'
          }}>
            {/* Column 1: Left Headline, Description & CTA */}
            <div style={{ flex: '1 1 300px', maxWidth: '380px' }}>
              <h2 style={{
                fontSize: 'clamp(1.9rem, 2.8vw, 2.5rem)',
                fontWeight: '900',
                color: '#ffffff',
                lineHeight: '1.15',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Turn Your Passion
              </h2>
              <h2 style={{
                fontSize: 'clamp(1.9rem, 2.8vw, 2.5rem)',
                fontWeight: '900',
                color: '#c084fc',
                lineHeight: '1.15',
                letterSpacing: '-0.03em',
                margin: '2px 0 16px 0'
              }}>
                Into Opportunity
              </h2>

              <p style={{
                color: '#cbd5e1',
                fontSize: '0.92rem',
                lineHeight: '1.6',
                marginBottom: '26px'
              }}>
                Join PartfolioHub and get discovered by clients, collaborators, and opportunities around the world.
              </p>

              <Link
                to={isAuthenticated ? "/create-post" : "/register"}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(110, 37, 232, 0.55)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Create Your Portfolio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Column 2: Middle Desk Setup with Floating 3D Logo */}
            <div style={{
              position: 'relative',
              flex: '0 1 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.65)'
              }}>
                <img
                  src="/assets/banner_workspace.jpg"
                  alt="PartfolioHub Workspace"
                  style={{
                    width: '300px',
                    height: '185px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, rgba(110, 37, 232, 0.2) 0%, rgba(7, 9, 24, 0.4) 100%)'
                }} />
              </div>

              {/* Floating 3D Logo ("P") Emblem Badge */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                padding: '12px',
                borderRadius: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(110, 37, 232, 0.9), 0 8px 24px rgba(0, 0, 0, 0.5)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                animation: 'floatSlow1 3s ease-in-out infinite'
              }}>
                <Logo size="small" light={true} linkTo="" showText={false} />
              </div>
            </div>

            {/* Column 3: Right Horizontal Stats Bar (10K+ | 50K+ | 100K+) with Rapid Speed */}
            <div style={{
              flex: '1 1 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px'
            }}>
              {/* Stat 1: 10K+ Active Creators */}
              <div style={{ textAlign: 'center', minWidth: '95px' }}>
                <div style={{
                  fontSize: 'clamp(2rem, 3vw, 2.45rem)',
                  fontWeight: '900',
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1
                }}>
                  <span>{countCreators}K</span>
                  <span style={{ color: '#c084fc' }}>+</span>
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  marginTop: '8px',
                  whiteSpace: 'nowrap'
                }}>
                  Active Creators
                </div>
              </div>

              {/* Vertical Divider */}
              <div style={{ width: '1px', height: '48px', background: 'rgba(255, 255, 255, 0.18)' }} />

              {/* Stat 2: 50K+ Projects Shared */}
              <div style={{ textAlign: 'center', minWidth: '95px' }}>
                <div style={{
                  fontSize: 'clamp(2rem, 3vw, 2.45rem)',
                  fontWeight: '900',
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1
                }}>
                  <span>{countProjects}K</span>
                  <span style={{ color: '#c084fc' }}>+</span>
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  marginTop: '8px',
                  whiteSpace: 'nowrap'
                }}>
                  Projects Shared
                </div>
              </div>

              {/* Vertical Divider */}
              <div style={{ width: '1px', height: '48px', background: 'rgba(255, 255, 255, 0.18)' }} />

              {/* Stat 3: 100K+ Monthly Visitors */}
              <div style={{ textAlign: 'center', minWidth: '95px' }}>
                <div style={{
                  fontSize: 'clamp(2rem, 3vw, 2.45rem)',
                  fontWeight: '900',
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1
                }}>
                  <span>{countVisitors}K</span>
                  <span style={{ color: '#c084fc' }}>+</span>
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  marginTop: '8px',
                  whiteSpace: 'nowrap'
                }}>
                  Monthly Visitors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes floatSlow1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatSlow2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};
