// frontend/src/components/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ size = 'medium', light = false, linkTo = '/', showText = true }) => {
  const iconSizes = {
    small: { icon: 34, text: '1.2rem', gap: '9px' },
    medium: { icon: 42, text: '1.4rem', gap: '11px' },
    large: { icon: 56, text: '1.9rem', gap: '14px' }
  };

  const current = iconSizes[size] || iconSizes.medium;

  const content = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: current.gap, textDecoration: 'none' }}>
      {/* 3D Geometric P Logo Emblem exactly matching the logo file */}
      <svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 4px 12px rgba(110, 37, 232, 0.35))' }}
      >
        <defs>
          <linearGradient id="logoPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8435f5" />
            <stop offset="50%" stopColor="#6e25e8" />
            <stop offset="100%" stopColor="#5414d4" />
          </linearGradient>
          <linearGradient id="logoNavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c1538" />
            <stop offset="100%" stopColor="#14214f" />
          </linearGradient>
          <linearGradient id="logoFacetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9a52f8" />
            <stop offset="100%" stopColor="#6e25e8" />
          </linearGradient>
        </defs>

        {/* 1. Dark Navy 3D Left Base */}
        <path
          d="M36 24 L36 54 L18 72 L18 36 C18 28 25 24 36 24 Z"
          fill="url(#logoNavyGradient)"
        />

        {/* 2. Deep Navy Bottom Edge Facet */}
        <path
          d="M36 54 L50 72 L36 86 L18 72 Z"
          fill="#070c22"
        />

        {/* 3. Main Outer P Loop (Vibrant Brand Purple) */}
        <path
          d="M36 22 C36 22 52 18 68 24 C82 30 85 46 82 58 C78 72 66 76 50 76 L50 86 L36 86 Z"
          fill="url(#logoPurpleGradient)"
        />

        {/* 4. Left 3D Door Fold Flap */}
        <path
          d="M36 24 L50 34 L36 54 Z"
          fill="url(#logoFacetGradient)"
        />

        {/* 5. Person Silhouette inside the P loop */}
        {/* Head */}
        <circle cx="55" cy="37" r="7.2" fill={light ? '#ffffff' : '#0c1538'} />

        {/* Shoulders */}
        <path
          d="M44 53 C44 46.5 48.5 44.5 55 44.5 C61.5 44.5 66 46.5 66 53 Z"
          fill={light ? '#ffffff' : '#0c1538'}
        />
      </svg>

      {/* Brand Name Typography matching the logo: PartfolioHub */}
      {showText && (
        <span
          style={{
            fontSize: current.text,
            fontWeight: '900',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            display: 'inline-flex',
            alignItems: 'baseline'
          }}
        >
          <span style={{ color: light ? '#ffffff' : '#0c1538' }}>Partfolio</span>
          <span style={{ color: '#6e25e8', marginLeft: '1px' }}>Hub</span>
        </span>
      )}
    </div>
  );

  if (!linkTo) return content;

  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  );
};
