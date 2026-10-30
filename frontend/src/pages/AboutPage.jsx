// frontend/src/pages/AboutPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Rocket,
  Play,
  PlayCircle,
  Pause,
  X,
  CheckCircle2,
  User,
  CloudUpload,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Folder,
  Briefcase,
  Star,
  Target,
  Eye,
  ArrowRight,
  Sparkles,
  Info,
  Globe,
  Image as ImageIcon,
  Video,
  Zap,
  BarChart2,
  Heart,
  RotateCcw,
  Film,
  Compass,
  Check,
  Code2,
  Palette,
  Send,
  SlidersHorizontal,
  ChevronRight,
  ExternalLink,
  Laptop,
  Volume2,
  VolumeX,
  Maximize
} from 'lucide-react';

export const AboutPage = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Continuous Rapid Counter Loop (Matching Home Page)
  const [statCreators, setStatCreators] = useState(0);
  const [statPortfolios, setStatPortfolios] = useState(0);
  const [statProjects, setStatProjects] = useState(0);
  const [statTrust, setStatTrust] = useState(0);

  useEffect(() => {
    const target1 = 1000;
    const target2 = 500;
    const target3 = 200;
    const target4 = 100;
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

        setStatCreators(Math.round(target1 * easeOut));
        setStatPortfolios(Math.round(target2 * easeOut));
        setStatProjects(Math.round(target3 * easeOut));
        setStatTrust(Math.round(target4 * easeOut));

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

  // Video Tour Player State
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(75);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [videoMode, setVideoMode] = useState('system'); // 'system' | 'custom'
  const [customUrl, setCustomUrl] = useState('');
  const [activeCustomVideo, setActiveCustomVideo] = useState('');

  const totalDuration = 75; // 75 seconds fallback duration

  // System Scenes
  const scenes = [
    {
      id: 0,
      startTime: 0,
      endTime: 15,
      title: '1. Platform Overview (Landing & Hero)',
      badge: 'Platform Overview',
      subtitle: 'Welcome to PartfolioHub — The premier modern ecosystem where creators showcase their work to a global audience.',
      icon: Compass
    },
    {
      id: 1,
      startTime: 15,
      endTime: 30,
      title: '2. Explore Portfolios (Discover Work)',
      badge: 'Portfolio Showcase',
      subtitle: 'Browse top featured projects across Graphic Design, Web Development, Video Editing, and System Engineering.',
      icon: Folder
    },
    {
      id: 2,
      startTime: 30,
      endTime: 45,
      title: '3. Creator Profile (CV & Badges)',
      badge: 'Creator CV & Badges',
      subtitle: 'Every creator gets a dedicated professional profile showcasing verified badges, skills, projects, and direct contact avenues.',
      icon: User
    },
    {
      id: 3,
      startTime: 45,
      endTime: 60,
      title: '4. Create & Upload (Publish Work)',
      badge: 'Publish New Work',
      subtitle: 'Publish new projects in seconds with high-res media, live links, video demonstrations, tags, and detailed narratives.',
      icon: CloudUpload
    },
    {
      id: 4,
      startTime: 60,
      endTime: 75,
      title: '5. Direct Messaging & Client Deals',
      badge: 'Client Deals & Chat',
      subtitle: 'Connect directly with clients and collaborators, negotiate contracts, and close opportunities seamlessly inside the platform.',
      icon: MessageSquare
    }
  ];

  // Active scene based on currentTime
  const currentSceneIndex = scenes.findIndex(
    (s) => currentTime >= s.startTime && currentTime < s.endTime
  );
  const activeScene = scenes[currentSceneIndex !== -1 ? currentSceneIndex : 0];

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Replay from start
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Mute / Unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  // Scrubber click
  const handleScrubberClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const targetDuration = videoDuration || totalDuration || 1;
    const newTime = percentage * targetDuration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  // Change playback speed
  const changePlaybackSpeed = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  // Jump to specific scene
  const jumpToScene = (startTime) => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();
    }
    setCurrentTime(startTime);
    setIsPlaying(true);
  };

  // Pause video when modal is closed
  useEffect(() => {
    if (!videoModalOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [videoModalOpen]);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle custom URL submit
  const handleLoadCustomVideo = (e) => {
    e.preventDefault();
    if (customUrl.trim()) {
      let url = customUrl.trim();
      // If youtube watch link, convert to embed
      if (url.includes('youtube.com/watch?v=')) {
        const id = url.split('v=')[1]?.split('&')[0];
        url = `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        url = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
      setActiveCustomVideo(url);
    }
  };

  return (
    <div className="about-page-wrapper">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (DARK FUTURISTIC GLOWING THEME)           */}
      {/* ========================================================= */}
      <section className="about-hero-section">
        <div className="about-hero-glow-left" />
        <div className="about-hero-glow-right" />

        <div className="container about-hero-container">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <Users size={16} strokeWidth={2.4} className="about-badge-icon" />
              <span>About PartfolioHub</span>
            </div>

            <h1 className="about-hero-title">
              The Hub for Creativity
              <span className="about-title-highlight"> &amp; Opportunities</span>
            </h1>

            <p className="about-hero-desc">
              PartfolioHub is a cutting-edge platform empowering creative talents to showcase their skills, publish portfolios, and connect with career-defining jobs, projects, and client collaborations.
            </p>

            <div className="about-hero-actions">
              <Link to="/register" className="about-btn-primary">
                <Rocket size={18} strokeWidth={2.4} />
                <span>Get Started</span>
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>

              <button
                type="button"
                onClick={() => {
                  setVideoModalOpen(true);
                  setIsPlaying(true);
                  setCurrentTime(0);
                }}
                className="about-btn-secondary"
              >
                <PlayCircle size={20} strokeWidth={2.2} />
                <span>Watch System Tour</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Floating Cards */}
          <div className="about-hero-visual-wrap">
            <div className="about-hero-workspace-card">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80"
                alt="PartfolioHub Creator at Workstation"
                className="about-hero-main-img"
              />
              <div className="about-hero-img-overlay" />

              {/* Floating Card 1: Creator Profile */}
              <div className="about-float-card about-float-profile">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                  alt="Abdala Creator"
                  className="about-profile-avatar"
                />
                <div className="about-profile-info">
                  <h4>Abdala Creator</h4>
                  <p>Web Developer</p>
                </div>
                <button className="about-profile-follow-btn">Follow</button>
              </div>

              {/* Floating Card 2: Stats */}
              <div className="about-float-card about-float-stats">
                <div className="about-stats-iconbox">
                  <BarChart2 size={18} strokeWidth={2.5} color="#00d2ff" />
                </div>
                <div>
                  <h4>Build Portfolio</h4>
                  <p>Showcase your skills to the world</p>
                </div>
              </div>

              {/* Floating Dock: Media Categories */}
              <div className="about-float-dock">
                <div className="about-dock-item" title="Website">
                  <Globe size={16} strokeWidth={2.2} color="#00d2ff" />
                  <span>Website</span>
                </div>
                <div className="about-dock-item" title="Image">
                  <ImageIcon size={16} strokeWidth={2.2} color="#ec4899" />
                  <span>Image</span>
                </div>
                <div className="about-dock-item" title="Video">
                  <Video size={16} strokeWidth={2.2} color="#f97316" />
                  <span>Video</span>
                </div>
                <div className="about-dock-item" title="Skills">
                  <Zap size={16} strokeWidth={2.2} color="#a855f7" />
                  <span>Skills</span>
                </div>
              </div>

              {/* Floating Card 3: Feedback Notification */}
              <div className="about-float-card about-float-feedback">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
                  alt="Ayuun Ali"
                  className="about-feedback-avatar"
                />
                <div className="about-feedback-text">
                  <div className="about-feedback-header">
                    <h4>Ayuun Ali</h4>
                  </div>
                  <p>
                    Absolutely stunning work! Thank you for sharing your creative talent.
                    <Heart size={13} fill="#a855f7" color="#a855f7" style={{ display: 'inline', marginLeft: '5px' }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION 2: WHY PARTFOLIOHUB & CORE CAPABILITIES        */}
      {/* ========================================================= */}
      <section className="about-features-section">
        <div className="container about-features-container">
          {/* Left Column: What is PartfolioHub? */}
          <div className="about-what-is-col">
            <div className="about-section-sub-badge">
              <Info size={15} strokeWidth={2.4} color="#6e25e8" />
              <span>Why PartfolioHub?</span>
            </div>

            <h2 className="about-what-title">
              What is <span className="about-brand-color">PartfolioHub?</span>
            </h2>

            <p className="about-what-desc">
              PartfolioHub is a next-generation digital ecosystem connecting talented creators, job seekers, clients, and forward-thinking enterprises. It enables you to:
            </p>

            <ul className="about-checklist">
              <li>
                <div className="about-check-icon">
                  <CheckCircle2 size={20} strokeWidth={2.5} color="#6e25e8" />
                </div>
                <span>Build and customize your verified professional profile</span>
              </li>
              <li>
                <div className="about-check-icon">
                  <CheckCircle2 size={20} strokeWidth={2.5} color="#6e25e8" />
                </div>
                <span>Publish multimedia portfolios (images, videos, links, and skill tags)</span>
              </li>
              <li>
                <div className="about-check-icon">
                  <CheckCircle2 size={20} strokeWidth={2.5} color="#6e25e8" />
                </div>
                <span>Share your creative mastery with an international audience</span>
              </li>
              <li>
                <div className="about-check-icon">
                  <CheckCircle2 size={20} strokeWidth={2.5} color="#6e25e8" />
                </div>
                <span>Discover high-impact career opportunities, freelance gigs, and contracts</span>
              </li>
              <li>
                <div className="about-check-icon">
                  <CheckCircle2 size={20} strokeWidth={2.5} color="#6e25e8" />
                </div>
                <span>Network directly with creators, clients, and creative directors</span>
              </li>
            </ul>
          </div>

          {/* Right Column: 6 Capabilities Cards Grid */}
          <div className="about-capabilities-col">
            <div className="about-section-sub-badge">
              <Sparkles size={15} strokeWidth={2.4} color="#6e25e8" />
              <span>System Capabilities</span>
            </div>

            <h2 className="about-capabilities-title">What the Platform Offers</h2>

            <div className="about-cards-grid">
              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <User size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Profile Creation</h3>
                  <p>Register effortlessly and build your standout creator portfolio CV.</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <CloudUpload size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Upload Portfolio</h3>
                  <p>Publish project images, video demos, links, and detailed skill tags.</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <MessageSquare size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Views &amp; Feedback</h3>
                  <p>Attract client views, community likes, and constructive testimonials.</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <Users size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Collaboration &amp; Deals</h3>
                  <p>Communicate directly with hiring managers, agencies, and fellow talent.</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <ShieldCheck size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Trust &amp; Verification</h3>
                  <p>Earn verified badges that validate your authentic identity and talent.</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="about-feature-circle-icon">
                  <Smartphone size={22} strokeWidth={2.3} color="#ffffff" />
                </div>
                <div className="about-feature-box-content">
                  <h3>Mobile &amp; Desktop</h3>
                  <p>Fully responsive architecture optimized across smartphones, tablets, and desktop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 3: METRICS, MISSION & VISION                   */}
      {/* ========================================================= */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-header">
            <div className="about-section-sub-badge">
              <BarChart2 size={15} strokeWidth={2.4} color="#6e25e8" />
              <span>Platform Impact</span>
            </div>
          </div>

          <div className="about-metrics-row">
            <div className="about-metric-card">
              <div className="about-metric-icon">
                <Users size={24} strokeWidth={2.4} color="#6e25e8" />
              </div>
              <div className="about-metric-meta">
                <h3 className="about-metric-value">{statCreators}+</h3>
                <p className="about-metric-label">Registered Creators</p>
              </div>
            </div>

            <div className="about-metric-card">
              <div className="about-metric-icon">
                <Folder size={24} strokeWidth={2.4} color="#6e25e8" />
              </div>
              <div className="about-metric-meta">
                <h3 className="about-metric-value">{statPortfolios}+</h3>
                <p className="about-metric-label">Portfolios Published</p>
              </div>
            </div>

            <div className="about-metric-card">
              <div className="about-metric-icon">
                <Briefcase size={24} strokeWidth={2.4} color="#6e25e8" />
              </div>
              <div className="about-metric-meta">
                <h3 className="about-metric-value">{statProjects}+</h3>
                <p className="about-metric-label">Jobs &amp; Projects</p>
              </div>
            </div>

            <div className="about-metric-card">
              <div className="about-metric-icon">
                <Star size={24} strokeWidth={2.4} fill="#6e25e8" color="#6e25e8" />
              </div>
              <div className="about-metric-meta">
                <h3 className="about-metric-value">{statTrust}%</h3>
                <p className="about-metric-label">Trust &amp; Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about-mission-grid">
            <div className="about-mission-photo-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Creator working on laptop"
                className="about-mission-photo"
              />
              <div className="about-mission-photo-gradient" />
              <div className="about-handwriting-overlay">
                <span className="about-script-skills">Your Skills</span>
                <span className="about-script-future">Your Future</span>
              </div>
            </div>

            <div className="about-mission-cards-col">
              <div className="about-pillar-box">
                <div className="about-pillar-icon-box">
                  <Target size={24} strokeWidth={2.4} color="#6e25e8" />
                </div>
                <div className="about-pillar-body">
                  <h4>Our Mission</h4>
                  <p>To cultivate an empowered digital creator ecosystem where talent meets limitless opportunity, skill growth, and continuous advancement.</p>
                </div>
              </div>

              <div className="about-pillar-box">
                <div className="about-pillar-icon-box">
                  <Eye size={24} strokeWidth={2.4} color="#6e25e8" />
                </div>
                <div className="about-pillar-body">
                  <h4>Our Vision</h4>
                  <p>To establish PartfolioHub as the leading global bridge uniting creativity, high-caliber craftsmanship, and career success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CALL TO ACTION BANNER                                  */}
      {/* ========================================================= */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-banner">
            <div className="about-cta-left">
              <div className="about-cta-rocket-badge">
                <Rocket size={26} strokeWidth={2.3} color="#ffffff" />
              </div>
              <div className="about-cta-texts">
                <h2>Join PartfolioHub Today</h2>
                <p>Build your profile, showcase your best work, and unlock high-impact opportunities.</p>
              </div>
            </div>

            <div className="about-cta-right">
              <Link to="/register" className="about-cta-white-btn">
                <Rocket size={18} strokeWidth={2.3} color="#6e25e8" />
                <span>Get Started</span>
                <ArrowRight size={17} strokeWidth={2.3} color="#6e25e8" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CINEMATIC 1080p SYSTEM TOUR VIDEO & WALKTHROUGH MODAL  */}
      {/* ========================================================= */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-box about-video-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="about-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="about-live-pulse-badge">
                  <span className="about-live-dot" />
                  <span>TOUR VIDEO</span>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.28rem', fontWeight: 900, color: '#0c1538' }}>
                    PartfolioHub System Tour &amp; Walkthrough (HD)
                  </h3>
                  <p style={{ margin: '3px 0 0', fontSize: '0.8rem', color: '#64748b' }}>
                    Watch how the platform works step-by-step through our interactive virtual player
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="about-modal-close"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Video Body */}
            <div className="about-modal-video-body">
              {/* Mode Selector Tabs */}
              <div className="about-video-mode-nav">
                <button
                  type="button"
                  onClick={() => {
                    setVideoMode('system');
                    setIsPlaying(true);
                  }}
                  className={`about-mode-btn ${videoMode === 'system' ? 'active' : ''}`}
                >
                  <Laptop size={16} />
                  <span>🖥️ System Walkthrough (PartfolioHub Tour)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVideoMode('custom')}
                  className={`about-mode-btn ${videoMode === 'custom' ? 'active' : ''}`}
                >
                  <ExternalLink size={16} />
                  <span>🔗 Custom Video Player (YouTube / MP4)</span>
                </button>
              </div>

              {/* ---------------- MODE A: DYNAMIC PARTFOLIOHUB SYSTEM VIDEO ---------------- */}
              {videoMode === 'system' && (
                <div className="about-system-cinema-frame">
                  {/* Top Video Overlay Bar */}
                  <div className="about-cinema-topbar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="about-cinema-quality">1080p FHD 60FPS</span>
                      <span className="about-cinema-scene-tag">{activeScene.badge}</span>
                    </div>
                    <div className="about-cinema-timer">
                      {formatTime(currentTime)} / {formatTime(totalDuration)}
                    </div>
                  </div>

                  {/* REAL VIDEO PLAYER (from public/assets/vedio/vedio about.mp4) */}
                  <div className="about-real-video-screen">
                    <video
                      ref={videoRef}
                      src="/assets/vedio/vedio%20about.mp4"
                      className="about-system-real-video"
                      playsInline
                      controls
                      autoPlay
                      onTimeUpdate={() => {
                        if (videoRef.current) {
                          setCurrentTime(videoRef.current.currentTime);
                        }
                      }}
                      onLoadedMetadata={() => {
                        if (videoRef.current && videoRef.current.duration) {
                          setVideoDuration(videoRef.current.duration);
                        }
                      }}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    />

                    {/* Subtitle Voiceover Bar at Bottom of Video */}
                    <div className="about-cinema-voiceover">
                      <p>{activeScene.subtitle}</p>
                    </div>
                  </div>

                  {/* Custom Controls Bar */}
                  <div className="about-cinema-controls">
                    {/* Play/Pause */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="about-control-btn"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Replay */}
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="about-control-btn"
                      title="Replay from start"
                    >
                      <RotateCcw size={16} />
                    </button>

                    {/* Volume Mute/Unmute */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="about-control-btn"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    {/* Scrubber Progress Bar */}
                    <div
                      className="about-scrubber-track"
                      onClick={handleScrubberClick}
                    >
                      <div
                        className="about-scrubber-fill"
                        style={{
                          width: `${(videoDuration || totalDuration) > 0 ? (currentTime / (videoDuration || totalDuration)) * 100 : 0}%`
                        }}
                      />
                    </div>

                    {/* Time Counter */}
                    <span className="about-control-time">
                      {formatTime(currentTime)} / {formatTime(videoDuration || totalDuration)}
                    </span>

                    {/* Speed Selector */}
                    <div className="about-speed-selector">
                      {[1, 1.25, 1.5, 2].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => changePlaybackSpeed(s)}
                          className={`about-speed-btn ${playbackSpeed === s ? 'active' : ''}`}
                        >
                          {s}x
                        </button>
                      ))}
                    </div>

                    {/* Fullscreen Button */}
                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="about-control-btn"
                      title="Fullscreen"
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- MODE B: CUSTOM YOUTUBE / MP4 VIDEO ---------------- */}
              {videoMode === 'custom' && (
                <div className="about-custom-video-wrap">
                  <form onSubmit={handleLoadCustomVideo} className="about-custom-video-form">
                    <input
                      type="text"
                      placeholder="Enter YouTube URL (e.g., https://youtube.com/watch?v=...) or MP4 video link..."
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      className="about-custom-input"
                    />
                    <button type="submit" className="about-custom-play-btn">
                      <Play size={16} />
                      <span>Play Video</span>
                    </button>
                  </form>

                  {activeCustomVideo ? (
                    <div className="about-custom-player-box">
                      {activeCustomVideo.includes('youtube.com') ? (
                        <iframe
                          src={activeCustomVideo}
                          title="Custom Video Player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="about-custom-iframe"
                        />
                      ) : (
                        <video
                          src={activeCustomVideo}
                          controls
                          autoPlay
                          playsInline
                          className="about-custom-video-el"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="about-custom-empty-state">
                      <Film size={40} color="#8b5cf6" />
                      <h4>Paste the video link you wish to watch</h4>
                      <p>Paste any YouTube URL or direct MP4 video link to stream it smoothly inside the platform.</p>
                    </div>
                  )}
                </div>
              )}

              {/* ---------------- INTERACTIVE CHAPTERS SELECTOR ---------------- */}
              <div className="about-tour-chapters-wrap">
                <div className="about-tour-header-row">
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#0c1538' }}>
                    System Tour Chapters &amp; Interactive Sections:
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#6e25e8', fontWeight: 700 }}>
                    Click any chapter to jump directly
                  </span>
                </div>

                <div className="about-chapter-buttons-grid">
                  {scenes.map((s) => {
                    const IconComp = s.icon;
                    const isActive = activeScene.id === s.id && videoMode === 'system';
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setVideoMode('system');
                          jumpToScene(s.startTime);
                        }}
                        className={`about-chapter-tab-btn ${isActive ? 'active' : ''}`}
                      >
                        <div className="about-chapter-tab-icon">
                          <IconComp size={16} color={isActive ? '#ffffff' : '#6e25e8'} />
                        </div>
                        <div style={{ textAlign: 'left', flex: 1, overflow: 'hidden' }}>
                          <div className="about-chapter-tab-title">{s.title}</div>
                          <div className="about-chapter-tab-badge">{s.badge}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Modal Footer Links */}
                <div className="about-modal-actions-row">
                  <Link
                    to="/register"
                    onClick={() => setVideoModalOpen(false)}
                    className="about-modal-btn-register"
                  >
                    <Rocket size={16} />
                    <span>Create Your Profile (Sign Up)</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    to="/explore"
                    onClick={() => setVideoModalOpen(false)}
                    className="about-modal-btn-explore"
                  >
                    <Compass size={16} />
                    <span>Explore Portfolios</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SCOPED STYLES                                             */}
      {/* ========================================================= */}
      <style>{`
        .about-page-wrapper {
          width: 100%;
          background: #ffffff;
          overflow-x: hidden;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
        }

        /* ---------------- HERO SECTION ---------------- */
        .about-hero-section {
          background-color: #030614;
          background-image: 
            radial-gradient(ellipse at 15% 10%, rgba(59, 130, 246, 0.16) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 25%, rgba(124, 58, 237, 0.22) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 85px 0 100px;
          border-bottom: 1px solid rgba(124, 58, 237, 0.2);
        }

        .about-hero-glow-left {
          position: absolute;
          top: 0;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-glow-right {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-container {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 50px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.18);
          border: 1px solid rgba(147, 197, 253, 0.3);
          color: #c084fc;
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .about-badge-icon {
          color: #a855f7;
        }

        .about-hero-title {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .about-title-highlight {
          display: block;
          color: #00d2ff;
          text-shadow: 0 0 24px rgba(0, 210, 255, 0.4);
        }

        .about-hero-desc {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: 34px;
        }

        .about-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 800;
          padding: 14px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);
          border: 1px solid rgba(196, 181, 253, 0.35);
          transition: all 0.25s ease;
        }

        .about-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.75);
          filter: brightness(1.08);
        }

        .about-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 14px 26px;
          border-radius: 9999px;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .about-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        /* Hero Right Visual Mockup */
        .about-hero-visual-wrap {
          position: relative;
        }

        .about-hero-workspace-card {
          position: relative;
          border-radius: 24px;
          overflow: visible;
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(124, 58, 237, 0.25);
        }

        .about-hero-main-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .about-hero-img-overlay {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(3, 6, 20, 0.2) 0%, rgba(3, 6, 20, 0.65) 100%);
          pointer-events: none;
        }

        /* Floating Overlays */
        .about-float-card {
          position: absolute;
          background: rgba(16, 22, 51, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.55);
          border-radius: 16px;
          padding: 12px 16px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: floatSlow 5s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .about-float-profile {
          top: -24px;
          left: 10%;
          background: #ffffff;
          border-color: #ffffff;
          color: #0c1538;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }

        .about-profile-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }

        .about-profile-info h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0;
        }

        .about-profile-info p {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0;
        }

        .about-profile-follow-btn {
          background: #6e25e8;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          border: none;
          padding: 6px 16px;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .about-profile-follow-btn:hover {
          background: #5919c4;
        }

        .about-float-stats {
          top: -20px;
          right: -15px;
          color: #ffffff;
          animation-delay: -2s;
        }

        .about-stats-iconbox {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.15);
          border: 1px solid rgba(0, 210, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-float-stats h4 {
          font-size: 0.88rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .about-float-stats p {
          font-size: 0.74rem;
          color: #94a3b8;
          margin: 2px 0 0;
        }

        .about-float-dock {
          position: absolute;
          left: -20px;
          top: 32%;
          background: rgba(11, 16, 40, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(124, 58, 237, 0.4);
          border-radius: 16px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          z-index: 4;
        }

        .about-dock-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-dock-item:hover {
          background: rgba(124, 58, 237, 0.25);
          color: #ffffff;
          transform: translateX(3px);
        }

        .about-float-feedback {
          bottom: -20px;
          right: 5%;
          background: #ffffff;
          border-color: #ffffff;
          color: #0c1538;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          max-width: 340px;
          animation-delay: -3.5s;
        }

        .about-feedback-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .about-feedback-text h4 {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0;
        }

        .about-feedback-text p {
          font-size: 0.79rem;
          color: #475569;
          margin: 3px 0 0;
          line-height: 1.4;
        }

        /* ---------------- SECTION 2 ---------------- */
        .about-features-section {
          padding: 95px 0 85px;
          background: #ffffff;
        }

        .about-features-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 65px;
          align-items: flex-start;
        }

        .about-section-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: #f5f0ff;
          border: 1px solid #ebdcfc;
          color: #6e25e8;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .about-what-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #0c1538;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .about-brand-color {
          color: #6e25e8;
        }

        .about-what-desc {
          font-size: 0.96rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 26px;
        }

        .about-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-checklist li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.93rem;
          font-weight: 600;
          color: #1e293b;
        }

        .about-check-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .about-capabilities-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #0c1538;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .about-feature-box {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .about-feature-box:hover {
          border-color: #6e25e8;
          box-shadow: 0 10px 28px rgba(110, 37, 232, 0.1);
          transform: translateY(-3px);
        }

        .about-feature-circle-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
        }

        .about-feature-box-content h3 {
          font-size: 1.02rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 6px;
          letter-spacing: -0.015em;
        }

        .about-feature-box-content p {
          font-size: 0.83rem;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }

        /* ---------------- SECTION 3 ---------------- */
        .about-stats-section {
          padding: 70px 0 95px;
          background: #fbfbfe;
          border-top: 1px solid #ede8f8;
        }

        .about-stats-header {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .about-metrics-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }

        .about-metric-card {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .about-metric-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(110, 37, 232, 0.08);
          border-color: #d8b4fe;
        }

        .about-metric-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #f5f0ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-metric-value {
          font-size: 1.7rem;
          font-weight: 900;
          color: #0c1538;
          line-height: 1.15;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
        }

        .about-metric-label {
          font-size: 0.82rem;
          color: #64748b;
          margin: 0;
          font-weight: 600;
        }

        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 28px;
          align-items: center;
        }

        .about-mission-photo-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          height: 250px;
        }

        .about-mission-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-mission-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(12, 21, 56, 0.3) 0%, rgba(110, 37, 232, 0.5) 100%);
        }

        .about-handwriting-overlay {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: rotate(-3deg);
          pointer-events: none;
        }

        .about-script-skills {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .about-script-future {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-left: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .about-mission-cards-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-pillar-box {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 24px 26px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }

        .about-pillar-box:hover {
          border-color: #6e25e8;
          box-shadow: 0 10px 26px rgba(110, 37, 232, 0.08);
          transform: translateY(-2px);
        }

        .about-pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f5f0ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-pillar-body h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 6px;
        }

        .about-pillar-body p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        /* ---------------- SECTION 4 ---------------- */
        .about-cta-section {
          padding: 0 0 85px;
          background: #fbfbfe;
        }

        .about-cta-banner {
          background: linear-gradient(135deg, #090e29 0%, #151a4a 50%, #201956 100%);
          border-radius: 22px;
          padding: 38px 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
          box-shadow: 0 20px 50px rgba(12, 21, 56, 0.35), 0 0 35px rgba(110, 37, 232, 0.2);
          border: 1px solid rgba(147, 197, 253, 0.2);
          position: relative;
          overflow: hidden;
        }

        .about-cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(110, 37, 232, 0.4) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-cta-left {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .about-cta-rocket-badge {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5);
        }

        .about-cta-texts h2 {
          font-size: 1.65rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .about-cta-texts p {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin: 0;
        }

        .about-cta-right {
          position: relative;
          z-index: 2;
        }

        .about-cta-white-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #6e25e8;
          font-size: 0.96rem;
          font-weight: 800;
          padding: 13px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
        }

        .about-cta-white-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 26px rgba(255, 255, 255, 0.3);
          background: #f8f6fd;
        }

        /* ---------------- VIDEO CINEMA MODAL ---------------- */
        .about-video-modal {
          max-width: 880px;
          width: 95%;
          max-height: 92vh;
          overflow-y: auto;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6), 0 0 60px rgba(110, 37, 232, 0.3);
          border: 1px solid rgba(110, 37, 232, 0.25);
        }

        .about-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid #ede8f8;
          background: #ffffff;
        }

        .about-live-pulse-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
        }

        .about-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: pulseDot 1.4s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .about-modal-close {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .about-modal-close:hover {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
          transform: rotate(90deg);
        }

        .about-modal-video-body {
          padding: 20px 24px 26px;
          background: #ffffff;
        }

        /* Mode Selector */
        .about-video-mode-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .about-mode-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-mode-btn:hover {
          border-color: #c084fc;
          color: #0c1538;
        }

        .about-mode-btn.active {
          background: #f5f0ff;
          border-color: #6e25e8;
          color: #6e25e8;
          box-shadow: 0 2px 10px rgba(110, 37, 232, 0.15);
        }

        /* Cinema Virtual System Player */
        .about-system-cinema-frame {
          background: #030614;
          border-radius: 18px;
          border: 1.5px solid rgba(124, 58, 237, 0.4);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(110, 37, 232, 0.25);
          overflow: hidden;
          margin-bottom: 22px;
          position: relative;
        }

        .about-cinema-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: rgba(12, 21, 56, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-cinema-quality {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          background: #10b981;
          color: #ffffff;
        }

        .about-cinema-scene-tag {
          font-size: 0.78rem;
          color: #c084fc;
          font-weight: 700;
        }

        .about-cinema-timer {
          font-family: monospace;
          font-size: 0.84rem;
          color: #ffffff;
          font-weight: 700;
        }

        .about-real-video-screen {
          position: relative;
          width: 100%;
          min-height: 400px;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .about-system-real-video {
          width: 100%;
          max-height: 520px;
          display: block;
          object-fit: contain;
          background: #000000;
        }

        .about-virtual-screen {
          min-height: 380px;
          background: linear-gradient(180deg, #070d24 0%, #030614 100%);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 18px 20px 65px;
        }

        .animate-fade-in {
          animation: fadeInScreen 0.4s ease-out;
        }

        @keyframes fadeInScreen {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Virtual UI Elements inside Screen */
        .about-virtual-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .about-virtual-logo-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6e25e8;
          box-shadow: 0 0 10px #6e25e8;
        }

        .about-virtual-nav-links {
          display: flex;
          gap: 14px;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        /* Scene 1: Hero */
        .about-virtual-hero-content {
          text-align: center;
          max-width: 500px;
          margin: 15px auto 0;
        }

        .about-virtual-pill {
          display: inline-block;
          font-size: 0.78rem;
          padding: 4px 14px;
          border-radius: 9999px;
          background: rgba(110, 37, 232, 0.25);
          color: #c084fc;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .about-virtual-hero-content h2 {
          font-size: 1.85rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .about-virtual-hero-content p {
          font-size: 0.88rem;
          color: #94a3b8;
          margin-bottom: 18px;
        }

        .about-virtual-hero-stats-row {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .about-virtual-stat-mini {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .about-virtual-stat-mini strong {
          color: #ffffff;
          font-size: 1.1rem;
          display: block;
        }

        /* Scene 2: Explore */
        .about-explore-filter-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          overflow-x: auto;
        }

        .about-filter-chip {
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.76rem;
          font-weight: 600;
        }

        .about-filter-chip.active {
          background: #6e25e8;
          color: #ffffff;
        }

        .about-virtual-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .about-vcard {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .about-vcard-img {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-vcard-meta {
          padding: 10px 12px;
        }

        .about-vcard-meta h4 {
          font-size: 0.82rem;
          color: #ffffff;
          margin: 0 0 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .about-vcard-meta p {
          font-size: 0.72rem;
          color: #94a3b8;
          margin: 0 0 6px;
        }

        .about-vcard-likes {
          font-size: 0.7rem;
          color: #ec4899;
          font-weight: 700;
        }

        /* Scene 3: Profile */
        .about-vprofile-banner {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .about-vprofile-avatar-wrap {
          position: relative;
        }

        .about-vprofile-avatar-wrap img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #6e25e8;
        }

        .about-vprofile-verified {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #10b981;
          color: #ffffff;
          font-size: 0.65rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-vprofile-header-meta h3 {
          font-size: 1.05rem;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .about-vprofile-header-meta p {
          font-size: 0.78rem;
          color: #94a3b8;
          margin: 0 0 8px;
        }

        .about-vprofile-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .about-vprofile-tags span {
          background: rgba(110, 37, 232, 0.2);
          color: #c084fc;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        .about-vprofile-hire-btn {
          margin-left: auto;
          background: #6e25e8;
          color: #ffffff;
          border: none;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .about-vprofile-stats-strip {
          display: flex;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 12px;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .about-vprofile-stats-strip strong {
          color: #ffffff;
          font-size: 1.1rem;
        }

        /* Scene 4: Create Post */
        .about-vcreate-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 18px;
        }

        .about-vcreate-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .about-vcreate-header h4 {
          margin: 0;
          font-size: 0.95rem;
        }

        .about-vcreate-dropzone {
          border: 2px dashed rgba(110, 37, 232, 0.5);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          background: rgba(110, 37, 232, 0.06);
          margin-bottom: 14px;
        }

        .about-vcreate-dropzone p {
          color: #cbd5e1;
          font-size: 0.82rem;
          margin: 8px 0 6px;
        }

        .about-drop-badge {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .about-vcreate-fields {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .about-vfield {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        .about-vfield strong {
          color: #ffffff;
          display: block;
        }

        .about-vcreate-success-toast {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
        }

        /* Scene 5: Messaging */
        .about-vchat-window {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 16px;
        }

        .about-vchat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 14px;
          color: #ffffff;
        }

        .about-vchat-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .about-contract-pill {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .about-vchat-messages {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .about-msg-incoming {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 14px 14px 14px 2px;
          max-width: 80%;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .about-msg-outgoing {
          background: #6e25e8;
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 14px 14px 2px 14px;
          max-width: 80%;
          margin-left: auto;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .about-msg-deal {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
          font-size: 0.8rem;
          margin-top: 6px;
        }

        /* Voiceover subtitle */
        .about-cinema-voiceover {
          position: absolute;
          bottom: 12px;
          left: 16px;
          right: 16px;
          background: rgba(12, 17, 43, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(124, 58, 237, 0.4);
          padding: 10px 16px;
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.84rem;
          font-weight: 600;
          line-height: 1.4;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .about-cinema-voiceover p {
          margin: 0;
        }

        /* Scrubber & Controls */
        .about-cinema-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(12, 21, 56, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-control-btn:hover {
          background: #6e25e8;
          border-color: #6e25e8;
          transform: scale(1.08);
        }

        .about-scrubber-track {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          cursor: pointer;
          position: relative;
        }

        .about-scrubber-fill {
          height: 100%;
          background: linear-gradient(90deg, #6e25e8 0%, #00d2ff 100%);
          border-radius: 9999px;
          transition: width 0.1s linear;
        }

        .about-control-time {
          font-family: monospace;
          font-size: 0.78rem;
          color: #cbd5e1;
        }

        .about-speed-selector {
          display: flex;
          gap: 4px;
        }

        .about-speed-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
          cursor: pointer;
        }

        .about-speed-btn.active {
          background: #6e25e8;
          color: #ffffff;
          border-color: #6e25e8;
        }

        /* Custom video input wrap */
        .about-custom-video-wrap {
          margin-bottom: 22px;
        }

        .about-custom-video-form {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }

        .about-custom-input {
          flex: 1;
          height: 44px;
          padding: 0 16px;
          border-radius: 10px;
          border: 1.5px solid #cbd5e1;
          font-size: 0.9rem;
          outline: none;
        }

        .about-custom-input:focus {
          border-color: #6e25e8;
        }

        .about-custom-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #6e25e8;
          color: #ffffff;
          border: none;
          padding: 0 20px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .about-custom-player-box {
          width: 100%;
          height: 380px;
          background: #000000;
          border-radius: 14px;
          overflow: hidden;
        }

        .about-custom-iframe, .about-custom-video-el {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .about-custom-empty-state {
          background: #f8fafc;
          border: 2px dashed #cbd5e1;
          border-radius: 14px;
          padding: 40px 20px;
          text-align: center;
          color: #64748b;
        }

        .about-custom-empty-state h4 {
          color: #0c1538;
          margin: 12px 0 6px;
        }

        /* Chapters Layout */
        .about-tour-chapters-wrap {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-tour-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .about-chapter-buttons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .about-chapter-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .about-chapter-tab-btn:hover {
          background: #f5f0ff;
          border-color: #c084fc;
          transform: translateY(-2px);
        }

        .about-chapter-tab-btn.active {
          background: #f5f0ff;
          border-color: #6e25e8;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.15);
        }

        .about-chapter-tab-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #ede8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .about-chapter-tab-btn.active .about-chapter-tab-icon {
          background: #6e25e8;
        }

        .about-chapter-tab-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #0c1538;
          line-height: 1.25;
        }

        .about-chapter-tab-badge {
          font-size: 0.72rem;
          font-weight: 600;
          color: #6e25e8;
          margin-top: 2px;
        }

        .about-modal-actions-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 10px;
          flex-wrap: wrap;
        }

        .about-modal-btn-register {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%);
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 800;
          padding: 10px 22px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.35);
          transition: all 0.2s ease;
        }

        .about-modal-btn-register:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(110, 37, 232, 0.55);
        }

        .about-modal-btn-explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #334155;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .about-modal-btn-explore:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
          color: #0f172a;
        }

        /* ---------------- RESPONSIVE BREAKPOINTS ---------------- */
        @media (max-width: 1024px) {
          .about-hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-features-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .about-metrics-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-mission-grid {
            grid-template-columns: 1fr;
          }
          .about-virtual-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .about-hero-title {
            font-size: 2.4rem;
          }
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
          .about-metrics-row {
            grid-template-columns: 1fr;
          }
          .about-chapter-buttons-grid {
            grid-template-columns: 1fr;
          }
          .about-float-dock {
            display: none;
          }
          .about-float-feedback {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 16px;
          }
          .about-float-profile {
            left: 2%;
          }
          .about-cta-banner {
            padding: 30px 22px;
            flex-direction: column;
            align-items: flex-start;
          }
          .about-cta-left {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
