// frontend/src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Logo } from '../components/Logo';
import { SocialAuthModal } from '../components/SocialAuthModal';
import { Eye, EyeOff, Shield } from 'lucide-react';

export const LoginPage = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [socialModal, setSocialModal] = useState({ isOpen: false, provider: 'google' });

  const [form, setForm] = useState({
    login: '',
    password: '',
    remember: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.login.trim() || !form.password) {
      setError('Please provide your login and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await login(form);
      if (res.success) {
        showToast('Welcome back to PartfolioHub!', 'success');
        if (res.data?.user?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError(res.message || 'Invalid login credentials.');
      }
    } catch (err) {
      setError(err.message || 'Login credentials incorrect.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      background: '#ffffff',
      overflowX: 'hidden'
    }}>
      {/* LEFT COLUMN: Login Form (50% Split) */}
      <div style={{
        flex: '1 1 50%',
        minWidth: '320px',
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffffff'
      }}>
        <div style={{ width: '100%', maxWidth: '430px' }}>
          {/* Centered Logo */}
          <div style={{ textAlign: 'center', marginBottom: '26px' }}>
            <Logo size="large" />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h1 style={{ fontSize: '1.9rem', fontWeight: '900', color: '#0c1538', letterSpacing: '-0.03em', marginBottom: '6px' }}>
              Welcome Back
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
              Login to your account and continue your journey.
            </p>
          </div>

          {error && (
            <div style={{ padding: '10px 14px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', fontSize: '0.85rem', marginBottom: '18px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {/* Form with Fixed 100% Full-Width Inputs */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '6px' }}>
                Email or Username
              </label>
              <input
                type="text"
                name="login"
                placeholder="Enter your email or username"
                value={form.login}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 16px',
                  fontSize: '0.92rem',
                  borderRadius: '10px',
                  border: '1.5px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#0c1538',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6e25e8'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '6px' }}>
                Password
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    height: '46px',
                    padding: '0 45px 0 16px',
                    fontSize: '0.92rem',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    background: '#ffffff',
                    color: '#0c1538',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6e25e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#6e25e8',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#0c1538', fontWeight: '700' }}>
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  style={{ accentColor: '#6e25e8', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" style={{ color: '#6e25e8', fontWeight: '700', textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </div>

            {/* Purple Pill Full-Width Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                height: '48px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: '800',
                fontSize: '0.98rem',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(110, 37, 232, 0.45)',
                transition: 'all 0.2s ease',
                marginTop: '4px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(110, 37, 232, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(110, 37, 232, 0.45)'}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Divider: or continue with */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            margin: '26px 0',
            color: '#94a3b8',
            fontSize: '0.82rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: '#ede8f8' }} />
            <span>or continue with</span>
            <div style={{ flex: 1, height: '1px', background: '#ede8f8' }} />
          </div>

          {/* 3 Circular Social Buttons: Google, Facebook, Apple */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            {/* Google Circle */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'google' })}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(110, 37, 232, 0.05)',
                transition: 'all 0.2s ease'
              }}
              title="Continue with Google"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </button>

            {/* Facebook Circle */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'facebook' })}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(110, 37, 232, 0.05)'
              }}
              title="Continue with Facebook"
            >
              <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Apple Circle */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'apple' })}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(110, 37, 232, 0.05)'
              }}
              title="Continue with Apple"
            >
              <svg width="20" height="20" fill="#0c1538" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z" />
              </svg>
            </button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.88rem', color: '#64748b' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#6e25e8', fontWeight: '800', textDecoration: 'none' }}>
              Sign up
            </Link>
          </p>

          {/* Admin Entry Gateway */}
          <div style={{
            marginTop: '28px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, rgba(14, 165, 233, 0.06) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#0c1538',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0
              }}>
                <Shield size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#0c1538' }}>Platform Administrator?</div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Galitaanka xarunta maamulka nidaamka</div>
              </div>
            </div>
            <Link
              to="/admin/login"
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#6e25e8',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap'
              }}
            >
              Admin Portal →
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Dark Purple Artwork with Laptop (50% Split Matching Image 3) */}
      <div style={{
        flex: '1 1 50%',
        minWidth: '320px',
        background: 'radial-gradient(circle at 60% 35%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 70%), #070918',
        color: '#ffffff',
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} className="auth-right-panel">
        <div style={{ textAlign: 'center', maxWidth: '440px', zIndex: 5, width: '100%' }}>
          {/* Logo & PartfolioHub brand */}
          <div style={{ marginBottom: '22px' }}>
            <Logo size="large" light={true} linkTo="" />
          </div>

          <div style={{
            fontSize: '1.25rem',
            fontWeight: '900',
            lineHeight: '1.7',
            letterSpacing: '-0.02em',
            marginBottom: '36px'
          }}>
            <span style={{ display: 'block', color: '#a78bfa' }}>Your Skills</span>
            <span style={{ display: 'block', color: '#ffffff' }}>Your Portfolio</span>
            <span style={{ display: 'block', color: '#c084fc' }}>Your Platform</span>
          </div>

          {/* Sleek Angled Laptop Mockup on dark desk under ambient purple LED glow (Matching media_1791642796403) */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '460px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(110, 37, 232, 0.45)',
            border: '1.5px solid rgba(167, 139, 250, 0.35)'
          }}>
            <img
              src="/assets/login_laptop.jpg"
              alt="PartfolioHub Platform Laptop"
              style={{
                width: '100%',
                height: '270px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 55%, rgba(7, 9, 24, 0.75) 100%)'
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .auth-right-panel {
            display: none !important;
          }
        }
      `}</style>

      {/* Social Authentication Modal */}
      <SocialAuthModal
        isOpen={socialModal.isOpen}
        provider={socialModal.provider}
        onClose={() => setSocialModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};
