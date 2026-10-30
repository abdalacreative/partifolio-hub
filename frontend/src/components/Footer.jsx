// frontend/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  ArrowRight,
  Users,
  CloudUpload,
  Target,
  Home,
  User,
  LayoutGrid,
  MessageSquare,
  Bell,
  HelpCircle,
  ShieldCheck,
  Code2,
  Laptop,
  Palette,
  Play,
  Wand2,
  BarChart3,
  Lightbulb,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Globe,
  Link2
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="hub-footer-wrapper">
      {/* Background ambient lighting and cosmic glow */}
      <div className="hub-footer-glow-top" />
      <div className="hub-footer-glow-right" />

      {/* Main Container */}
      <div className="hub-footer-container">
        {/* 4-COLUMN MAIN GRID */}
        <div className="hub-footer-grid">

          {/* ================= COLUMN 1: BRAND & KEY HIGHLIGHTS ================= */}
          <div className="hub-footer-col hub-footer-brand-col">
            {/* Logo */}
            <Link to="/" className="hub-footer-logo-link">
              <svg
                width="42"
                height="42"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hub-footer-logo-svg"
              >
                <defs>
                  <linearGradient id="footerLogoPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <linearGradient id="footerLogoNavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0b132e" />
                    <stop offset="100%" stopColor="#1e295d" />
                  </linearGradient>
                  <linearGradient id="footerLogoFacetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                {/* 1. Dark Navy 3D Left Base */}
                <path d="M36 24 L36 54 L18 72 L18 36 C18 28 25 24 36 24 Z" fill="url(#footerLogoNavyGradient)" />
                {/* 2. Deep Navy Bottom Edge Facet */}
                <path d="M36 54 L50 72 L36 86 L18 72 Z" fill="#030718" />
                {/* 3. Main Outer P Loop */}
                <path d="M36 22 C36 22 52 18 68 24 C82 30 85 46 82 58 C78 72 66 76 50 76 L50 86 L36 86 Z" fill="url(#footerLogoPurpleGradient)" />
                {/* 4. Left 3D Door Fold Flap */}
                <path d="M36 24 L50 34 L36 54 Z" fill="url(#footerLogoFacetGradient)" />
                {/* 5. Silhouette inside the loop */}
                <circle cx="55" cy="37" r="7.2" fill="#030718" />
                <path d="M44 53 C44 46.5 48.5 44.5 55 44.5 C61.5 44.5 66 46.5 66 53 Z" fill="#030718" />
              </svg>
              <span className="hub-footer-logo-title">
                <span className="hub-brand-white">Partfolio</span>
                <span className="hub-brand-purple">Hub</span>
              </span>
            </Link>

            {/* Tagline */}
            <div className="hub-footer-tagline">
              <span>Share your creativity </span>
              <span className="hub-purple-text">with the world.</span>
            </div>

            {/* Description */}
            <p className="hub-footer-desc">
              PartfolioHub is a modern platform empowering creators to build profiles, showcase their portfolios, and unlock career opportunities.
            </p>

            {/* 3 Steps / Highlights */}
            <div className="hub-feature-list">
              {/* Feature 1 */}
              <div className="hub-feature-item">
                <div className="hub-feature-iconbox hub-blue-box">
                  <Users size={20} strokeWidth={2.4} color="#ffffff" />
                </div>
                <div className="hub-feature-meta">
                  <span className="hub-feature-title">Join Now</span>
                  <span className="hub-feature-sub">Create a free account</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="hub-feature-item">
                <div className="hub-feature-iconbox hub-blue-box">
                  <CloudUpload size={20} strokeWidth={2.4} color="#ffffff" />
                </div>
                <div className="hub-feature-meta">
                  <span className="hub-feature-title">Showcase</span>
                  <span className="hub-feature-sub">Upload your portfolio</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="hub-feature-item">
                <div className="hub-feature-iconbox hub-blue-box">
                  <Target size={20} strokeWidth={2.4} color="#ffffff" />
                </div>
                <div className="hub-feature-meta">
                  <span className="hub-feature-title">Get Opportunities</span>
                  <span className="hub-feature-sub">Connect with clients & peers</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link to="/register" className="hub-cta-btn">
              <Rocket size={18} strokeWidth={2.3} color="#ffffff" />
              <span>Get Started</span>
              <ArrowRight size={17} strokeWidth={2.3} color="#ffffff" />
            </Link>
          </div>

          {/* ================= COLUMN 2: NAVIGATION ================= */}
          <div className="hub-footer-col">
            <div className="hub-col-header">
              <span className="hub-header-icon-wrapper">
                <Link2 size={21} strokeWidth={2.6} className="hub-nav-chain-icon" />
              </span>
              <h3>Navigation</h3>
            </div>

            <ul className="hub-links-list">
              <li>
                <Link to="/" className="hub-nav-link">
                  <Home size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/creators" className="hub-nav-link">
                  <User size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hub-nav-link">
                  <LayoutGrid size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Portfolios</span>
                </Link>
              </li>
              <li>
                <Link to="/creators" className="hub-nav-link">
                  <Users size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Creators</span>
                </Link>
              </li>
              <li>
                <Link to="/messages" className="hub-nav-link">
                  <MessageSquare size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="hub-nav-link">
                  <Bell size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <a href="mailto:info@portfoliohub.com?subject=Support%20Request" className="hub-nav-link">
                  <HelpCircle size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Help &amp; Support</span>
                </a>
              </li>
              <li>
                <Link to="/terms" className="hub-nav-link">
                  <ShieldCheck size={18} strokeWidth={2.1} className="hub-nav-icon" />
                  <span>Terms &amp; Privacy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 3: CATEGORIES ================= */}
          <div className="hub-footer-col">
            <div className="hub-col-header">
              <span className="hub-header-icon-wrapper">
                <LayoutGrid size={21} strokeWidth={2.6} className="hub-cat-grid-icon" />
              </span>
              <h3>Categories</h3>
            </div>

            <ul className="hub-links-list hub-categories-list">
              <li>
                <Link to="/explore?category=web-development" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#00d2ff' }}>
                    <Code2 size={19} strokeWidth={2.4} />
                  </span>
                  <span>Website Development</span>
                </Link>
              </li>
              <li>
                <Link to="/explore?category=system-development" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#b26bf8' }}>
                    <Laptop size={19} strokeWidth={2.4} />
                  </span>
                  <span>System Development</span>
                </Link>
              </li>
              <li>
                <Link to="/explore?category=graphic-design" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#f43f9a' }}>
                    <Palette size={19} strokeWidth={2.4} />
                  </span>
                  <span>Graphic Design</span>
                </Link>
              </li>
              <li>
                <Link to="/explore?category=video-editing" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#ff7a29' }}>
                    <Play size={17} strokeWidth={2.4} fill="#ff7a29" />
                  </span>
                  <span>Video Editing</span>
                </Link>
              </li>
              <li>
                <Link to="/explore?category=motion-graphics" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#00e5a3' }}>
                    <Wand2 size={19} strokeWidth={2.4} />
                  </span>
                  <span>Motion Graphics</span>
                </Link>
              </li>
              <li>
                <Link to="/explore?category=digital-marketing" className="hub-cat-link">
                  <span className="hub-cat-icon-badge" style={{ color: '#f5b014' }}>
                    <BarChart3 size={19} strokeWidth={2.4} />
                  </span>
                  <span>Digital Marketing</span>
                </Link>
              </li>
            </ul>

            {/* Glowing Callout Badge Box */}
            <Link to="/create-post" className="hub-callout-card">
              <div className="hub-callout-icon-circle">
                <Lightbulb size={22} strokeWidth={2.2} color="#ffffff" />
              </div>
              <div className="hub-callout-text">
                <div>Showcase your creative skills</div>
                <div>and become a global creator!</div>
              </div>
              <ChevronRight size={18} strokeWidth={2.4} className="hub-callout-arrow" />
            </Link>
          </div>

          {/* ================= COLUMN 4: CONTACT US & FOLLOW US ================= */}
          <div className="hub-footer-col">
            <div className="hub-col-header">
              <span className="hub-header-icon-wrapper">
                <Mail size={21} strokeWidth={2.4} className="hub-contact-mail-icon" />
              </span>
              <h3>Contact Us</h3>
            </div>

            {/* Contact Items */}
            <div className="hub-contact-list">
              <div className="hub-contact-item">
                <MapPin size={19} strokeWidth={2.2} className="hub-contact-icon" />
                <span>Mogadishu, Somalia</span>
              </div>
              <a href="mailto:info@portfoliohub.com" className="hub-contact-item hub-contact-interactive">
                <Mail size={19} strokeWidth={2.2} className="hub-contact-icon" />
                <span>info@portfoliohub.com</span>
              </a>
              <a href="tel:0610734604" className="hub-contact-item hub-contact-interactive hub-contact-phone">
                <Phone size={19} strokeWidth={2.2} className="hub-contact-icon" />
                <strong>0610734604</strong>
              </a>
              <a href="https://www.portfoliohub.com" target="_blank" rel="noreferrer" className="hub-contact-item hub-contact-interactive">
                <Globe size={19} strokeWidth={2.2} className="hub-contact-icon" />
                <span>www.portfoliohub.com</span>
              </a>
            </div>

            {/* Divider */}
            <div className="hub-contact-divider" />

            {/* Follow Us */}
            <div className="hub-follow-title">Follow Us</div>
            <div className="hub-social-icons">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19KxQX3pxa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-btn hub-social-fb"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-btn hub-social-x"
                title="Follow on X"
                aria-label="X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-btn hub-social-ig"
                title="Follow on Instagram (@abdala14564)"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@abdala.creator"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-btn hub-social-tt"
                title="Follow on TikTok (@abdala.creator)"
                aria-label="TikTok"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c.14-.14.27-.29.39-.45V9.48a8.16 8.16 0 0 0 5.38 2.05v-3.53a4.83 4.83 0 0 1 0-1.31z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hub-social-btn hub-social-yt"
                title="Subscribe on YouTube"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Handwritten Slogan with Underline Stroke */}
            <div className="hub-signature-slogan">
              <span className="hub-script-text">Build · Showcase · Grow</span>
              <svg className="hub-script-swoosh" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 12 C 45 4, 105 5, 150 14"
                  stroke="url(#scriptSwooshGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="scriptSwooshGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="hub-footer-bottom">
          <div className="hub-bottom-left">
            <span>&copy; 2026 PartfolioHub. All rights reserved.</span>
            <span className="hub-bottom-divider">|</span>
            <span className="hub-bottom-motto">Your creativity is your future.</span>
          </div>

          <div className="hub-bottom-right">
            <ShieldCheck size={17} strokeWidth={2.2} className="hub-bottom-shield" />
            <Link to="/privacy" className="hub-bottom-link">Privacy Policy</Link>
            <span className="hub-bottom-divider">|</span>
            <Link to="/terms" className="hub-bottom-link">Terms of Service</Link>
            <span className="hub-bottom-divider">|</span>
            <Link to="/admin/login" className="hub-bottom-link" style={{ color: '#a78bfa', fontWeight: '600' }}>Admin Portal</Link>
          </div>
        </div>
      </div>

      {/* Decorative Glowing Bottom Curves / Waves */}
      <div className="hub-bottom-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 60 C 240 110, 480 30, 720 70 C 960 110, 1200 20, 1440 65 L 1440 120 L 0 120 Z"
            fill="url(#bottomWaveGradient1)"
            opacity="0.35"
          />
          <path
            d="M0 80 C 300 20, 600 110, 900 40 C 1140 0, 1320 80, 1440 90 L 1440 120 L 0 120 Z"
            fill="url(#bottomWaveGradient2)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="bottomWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="bottomWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="60%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        /* Wrapper & Cosmic Theme */
        .hub-footer-wrapper {
          background-color: #030614;
          background-image: 
            radial-gradient(ellipse at 15% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, rgba(79, 70, 229, 0.18) 0%, transparent 70%);
          color: #94a3b8;
          position: relative;
          overflow: hidden;
          padding-top: 60px;
          padding-bottom: 24px;
          border-top: 1px solid rgba(124, 58, 237, 0.22);
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
        }

        .hub-footer-glow-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.8) 50%, transparent 100%);
          pointer-events: none;
        }

        .hub-footer-glow-right {
          position: absolute;
          top: 10%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hub-footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* 4 Column Layout */
        .hub-footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.9fr 1.15fr 1.1fr;
          gap: 38px;
          margin-bottom: 48px;
        }

        /* Brand Column (Col 1) */
        .hub-footer-logo-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .hub-footer-logo-svg {
          flex-shrink: 0;
          filter: drop-shadow(0 0 16px rgba(124, 58, 237, 0.5));
          transition: transform 0.25s ease;
        }

        .hub-footer-logo-link:hover .hub-footer-logo-svg {
          transform: scale(1.06);
        }

        .hub-footer-logo-title {
          font-size: 1.75rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          display: flex;
          align-items: baseline;
        }

        .hub-brand-white {
          color: #ffffff;
        }

        .hub-brand-purple {
          color: #9333ea;
          margin-left: 1px;
          text-shadow: 0 0 14px rgba(147, 51, 234, 0.5);
        }

        .hub-footer-tagline {
          font-size: 1.05rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .hub-purple-text {
          color: #b26bf8;
          text-shadow: 0 0 12px rgba(178, 107, 248, 0.4);
        }

        .hub-footer-desc {
          font-size: 0.86rem;
          line-height: 1.65;
          color: #8fa0be;
          margin-bottom: 22px;
          max-width: 360px;
        }

        /* 3 Micro Features */
        .hub-feature-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 26px;
        }

        .hub-feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.2s ease;
        }

        .hub-feature-item:hover {
          transform: translateX(3px);
        }

        .hub-feature-iconbox {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hub-blue-box {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45);
          border: 1px solid rgba(147, 197, 253, 0.2);
        }

        .hub-feature-item:hover .hub-feature-iconbox {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.7);
        }

        .hub-feature-meta {
          display: flex;
          flex-direction: column;
        }

        .hub-feature-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .hub-feature-sub {
          font-size: 0.8rem;
          color: #8da1bf;
          line-height: 1.3;
          margin-top: 2px;
        }

        /* CTA Button */
        .hub-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 800;
          padding: 13px 26px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55);
          border: 1px solid rgba(196, 181, 253, 0.35);
          transition: all 0.25s ease;
          width: fit-content;
        }

        .hub-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 28px rgba(99, 102, 241, 0.75);
          filter: brightness(1.08);
        }

        /* Column Headers */
        .hub-col-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }

        .hub-col-header h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0;
        }

        .hub-header-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hub-nav-chain-icon {
          color: #8b5cf6;
          transform: rotate(-45deg);
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        .hub-cat-grid-icon {
          color: #8b5cf6;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        .hub-contact-mail-icon {
          color: #8b5cf6;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        /* Navigation List */
        .hub-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .hub-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a4b3cd;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-nav-icon {
          color: #8da1bf;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .hub-nav-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .hub-nav-link:hover .hub-nav-icon {
          color: #a855f7;
          filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.7));
        }

        /* Categories List */
        .hub-categories-list {
          gap: 13px;
          margin-bottom: 22px;
        }

        .hub-cat-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a4b3cd;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-cat-icon-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .hub-cat-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .hub-cat-link:hover .hub-cat-icon-badge {
          transform: scale(1.15);
          filter: drop-shadow(0 0 8px currentColor);
        }

        /* Bottom Callout Banner Card */
        .hub-callout-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.5) 0%, rgba(19, 21, 56, 0.5) 100%);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 14px;
          padding: 12px 14px;
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          margin-top: 10px;
        }

        .hub-callout-card:hover {
          background: linear-gradient(135deg, rgba(46, 38, 115, 0.65) 0%, rgba(29, 31, 84, 0.65) 100%);
          border-color: rgba(147, 51, 234, 0.65);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
          transform: translateY(-2px);
        }

        .hub-callout-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid rgba(139, 92, 246, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c084fc;
        }

        .hub-callout-text {
          font-size: 0.77rem;
          font-weight: 600;
          color: #e2e8f0;
          line-height: 1.35;
          flex: 1;
        }

        .hub-callout-arrow {
          color: #818cf8;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .hub-callout-card:hover .hub-callout-arrow {
          transform: translateX(3px);
          color: #ffffff;
        }

        /* Contact Us Column */
        .hub-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 22px;
        }

        .hub-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
        }

        .hub-contact-interactive {
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-contact-interactive:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .hub-contact-phone strong {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .hub-contact-icon {
          color: #818cf8;
          flex-shrink: 0;
        }

        .hub-contact-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 18px;
        }

        .hub-follow-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }

        /* Social Icons */
        .hub-social-icons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .hub-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(30, 58, 138, 0.28);
          border: 1px solid rgba(99, 102, 241, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .hub-social-btn:hover {
          background: #6366f1;
          border-color: #818cf8;
          box-shadow: 0 0 16px rgba(99, 102, 241, 0.7);
          transform: translateY(-3px);
        }

        .hub-social-fb:hover {
          background: #1877f2 !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 16px rgba(24, 119, 242, 0.7) !important;
        }

        .hub-social-x:hover {
          background: #000000 !important;
          border-color: #64748b !important;
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.3) !important;
        }

        .hub-social-ig:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
          border-color: #ec4899 !important;
          box-shadow: 0 0 16px rgba(236, 72, 153, 0.7) !important;
        }

        .hub-social-tt:hover {
          background: #000000 !important;
          border-color: #00f2fe !important;
          box-shadow: -2px 0 12px rgba(254, 44, 85, 0.8), 2px 0 12px rgba(0, 242, 254, 0.8) !important;
        }

        .hub-social-yt:hover {
          background: #ff0000 !important;
          border-color: #ef4444 !important;
          box-shadow: 0 0 16px rgba(255, 0, 0, 0.7) !important;
        }

        /* Handwriting Signature Slogan */
        .hub-signature-slogan {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 4px;
        }

        .hub-script-text {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          transform: rotate(-1.5deg);
        }

        .hub-script-swoosh {
          width: 140px;
          height: 18px;
          margin-top: -6px;
          margin-left: 28px;
          filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.6));
        }

        /* Bottom Bar */
        .hub-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.84rem;
          color: #7b8fa8;
          position: relative;
          z-index: 3;
        }

        .hub-bottom-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hub-bottom-divider {
          color: rgba(255, 255, 255, 0.15);
        }

        .hub-bottom-motto {
          color: #94a3b8;
        }

        .hub-bottom-right {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hub-bottom-shield {
          color: #818cf8;
          margin-right: -6px;
        }

        .hub-bottom-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .hub-bottom-link:hover {
          color: #ffffff;
        }

        /* Bottom Wave Curves */
        .hub-bottom-waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          pointer-events: none;
          z-index: 1;
        }

        .hub-bottom-waves svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .hub-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 680px) {
          .hub-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hub-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .hub-bottom-left, .hub-bottom-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .hub-bottom-divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};
