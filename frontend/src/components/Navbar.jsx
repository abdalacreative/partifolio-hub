// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Logo } from './Logo';
import { Search, Compass, Grid, User, LogOut, LayoutDashboard, Menu, X, PlusCircle, Bell, MessageSquare, Shield } from 'lucide-react';

export const Navbar = ({ onOpenSearch }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #ede8f8',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(110, 37, 232, 0.05)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px' }}>
        {/* Brand Logo */}
        <Logo size="medium" light={false} linkTo="/" />

        {/* Desktop Navigation Links with beautiful hover animation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {[
            { to: '/', label: 'Home' },
            { to: '/explore', label: 'Explore' },
            { to: '/categories', label: 'Categories' },
            { to: '/about', label: 'About' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `navbar-hover-link ${isActive ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              <span className="navbar-hover-bar" />
            </NavLink>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Global Search Bar */}
          <div
            onClick={onOpenSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: '#f8f5ff',
              border: '1px solid #e7dcfa',
              borderRadius: 'var(--radius-full)',
              color: '#6e25e8',
              fontSize: '0.88rem',
              cursor: 'pointer',
              width: '210px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6e25e8'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e7dcfa'}
          >
            <Search size={15} color="#6e25e8" />
            <span style={{ color: '#8b5cf6', fontWeight: '500' }}>Search Creators...</span>
          </div>

          {isAuthenticated ? (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/create-post" className="btn btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px', borderRadius: 'var(--radius-full)', background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)' }}>
                <PlusCircle size={15} />
                <span className="desktop-only-text">Create</span>
              </Link>

              <Link to="/notifications" style={{ position: 'relative', color: '#6e25e8', padding: '6px' }}>
                <Bell size={20} />
                {user?.unread_notifications_count > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#ef4444'
                  }} />
                )}
              </Link>

              {/* Profile Avatar & Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <img
                    src={user?.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                    alt={user?.full_name || 'Profile'}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #6e25e8'
                    }}
                  />
                </button>

                {profileDropdown && (
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '48px',
                    width: '220px',
                    background: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #ede8f8',
                    boxShadow: '0 12px 30px rgba(110, 37, 232, 0.15)',
                    padding: '8px 0',
                    zIndex: 110
                  }}>
                    <div style={{ padding: '8px 16px', borderBottom: '1px solid #ede8f8' }}>
                      <p style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0c1538' }}>{user?.full_name}</p>
                      <p style={{ fontSize: '0.75rem', color: '#6e25e8' }}>@{user?.username}</p>
                    </div>

                    <Link to="/dashboard" onClick={() => setProfileDropdown(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', color: '#0c1538', fontSize: '0.88rem', textDecoration: 'none' }}>
                      <LayoutDashboard size={16} color="#6e25e8" />
                      Dashboard
                    </Link>
                    <Link to="/my-profile" onClick={() => setProfileDropdown(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', color: '#0c1538', fontSize: '0.88rem', textDecoration: 'none' }}>
                      <User size={16} color="#6e25e8" />
                      My Portfolio
                    </Link>
                    {user?.role === 'admin' && (
                      <Link to="/admin" onClick={() => setProfileDropdown(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', color: '#7c3aed', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none', background: 'rgba(124, 58, 237, 0.08)' }}>
                        <Shield size={16} color="#7c3aed" />
                        Admin Portal
                      </Link>
                    )}

                    <div style={{ borderTop: '1px solid #ede8f8', margin: '4px 0' }} />

                    <button
                      onClick={handleLogout}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        width: '100%',
                        padding: '10px 16px',
                        color: 'var(--danger)',
                        background: 'none',
                        border: 'none',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link
                to="/admin/login"
                title="Admin Control Center"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #e2e8f0',
                  color: '#475569',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  background: '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed'; e.currentTarget.style.background = '#f5f3ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <Shield size={14} color="#7c3aed" />
                <span>Admin</span>
              </Link>
              <Link
                to="/login"
                style={{
                  padding: '9px 22px',
                  borderRadius: 'var(--radius-full)',
                  background: '#0c1538',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#182455'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#0c1538'}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{
                  padding: '9px 24px',
                  borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(110, 37, 232, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(110, 37, 232, 0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 14px rgba(110, 37, 232, 0.4)'}
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#6e25e8',
              cursor: 'pointer'
            }}
            className="mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Embedded CSS for beautiful navbar link hover animations */}
      <style>{`
        .navbar-hover-link {
          position: relative;
          color: #6e25e8;
          font-size: 0.96rem;
          font-weight: 700;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 9999px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .navbar-hover-link:hover {
          color: #5511cc;
          background: rgba(110, 37, 232, 0.08);
          transform: translateY(-1px);
        }
        .navbar-hover-link .navbar-hover-bar {
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 0;
          height: 2.5px;
          background: linear-gradient(90deg, #7c2ae8, #6e25e8);
          border-radius: 99px;
          transform: translateX(-50%);
          transition: width 0.25s ease-out;
        }
        .navbar-hover-link:hover .navbar-hover-bar,
        .navbar-hover-link.active .navbar-hover-bar {
          width: 60%;
        }
        .navbar-hover-link.active {
          background: rgba(110, 37, 232, 0.08);
          font-weight: 800;
        }
      `}</style>
    </header>
  );
};
