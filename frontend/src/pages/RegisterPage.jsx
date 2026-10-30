// frontend/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Logo } from '../components/Logo';
import { SocialAuthModal } from '../components/SocialAuthModal';
import { Eye, EyeOff, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const RegisterPage = () => {
  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [socialModal, setSocialModal] = useState({ isOpen: false, provider: 'google' });

  const [form, setForm] = useState({
    full_name: '',
    username: '',
    email: '',
    phone: '',
    birth_day: '',
    birth_month: '',
    birth_year: '',
    password: '',
    terms: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.terms) {
      setErrorMsg('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      const res = await register(form);
      if (res.success) {
        showToast('Registration successful! Welcome to PartfolioHub.', 'success');
        navigate('/dashboard');
      } else {
        setErrorMsg(res.message || 'Registration failed');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error occurred during registration');
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
      {/* LEFT COLUMN: Registration Form (50% Split, with Scroll Support) */}
      <div style={{
        flex: '1 1 50%',
        minWidth: '320px',
        maxHeight: '100vh',
        overflowY: 'auto',
        padding: '36px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#ffffff'
      }}>
        <div style={{ width: '100%', maxWidth: '440px', margin: 'auto 0' }}>
          {/* Brand Logo at top left */}
          <div style={{ marginBottom: '22px' }}>
            <Logo size="small" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: '#0c1538', letterSpacing: '-0.03em', marginBottom: '6px' }}>
              Create Your Account
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
              Join our community and start showcasing your talent.
            </p>
          </div>

          {/* Social Continue Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {/* Google */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'google' })}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                height: '44px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#0c1538',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6e25e8'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'facebook' })}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                height: '44px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#0c1538',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6e25e8'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              <svg width="18" height="18" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Continue with Facebook</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={() => setSocialModal({ isOpen: true, provider: 'apple' })}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                height: '44px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#0c1538',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6e25e8'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              <svg width="18" height="18" fill="#0c1538" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {errorMsg && (
            <div style={{ padding: '10px 14px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px' }}>
              {errorMsg}
            </div>
          )}

          {/* Form with Fixed 100% Width Inputs */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '5px' }}>
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Your Name"
                value={form.full_name}
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
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '5px' }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
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
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '5px' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
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
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '5px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+252 61 5000000"
                value={form.phone}
                onChange={handleChange}
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

            {/* Birthday / Date of Birth (Day, Month, Year) */}
            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '6px' }}>
                Date of Birth
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', width: '100%' }}>
                {/* Day */}
                <div>
                  <select
                    name="birth_day"
                    value={form.birth_day}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 10px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      border: '1.5px solid #e2e8f0',
                      background: '#ffffff',
                      color: form.birth_day ? '#0c1538' : '#94a3b8',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6e25e8'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d} style={{ color: '#0c1538' }}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Month */}
                <div>
                  <select
                    name="birth_month"
                    value={form.birth_month}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 10px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      border: '1.5px solid #e2e8f0',
                      background: '#ffffff',
                      color: form.birth_month ? '#0c1538' : '#94a3b8',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6e25e8'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Month</option>
                    {[
                      { val: 1, label: 'January' },
                      { val: 2, label: 'February' },
                      { val: 3, label: 'March' },
                      { val: 4, label: 'April' },
                      { val: 5, label: 'May' },
                      { val: 6, label: 'June' },
                      { val: 7, label: 'July' },
                      { val: 8, label: 'August' },
                      { val: 9, label: 'September' },
                      { val: 10, label: 'October' },
                      { val: 11, label: 'November' },
                      { val: 12, label: 'December' }
                    ].map((m) => (
                      <option key={m.val} value={m.val} style={{ color: '#0c1538' }}>{m.label}</option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div>
                  <select
                    name="birth_year"
                    value={form.birth_year}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 10px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      border: '1.5px solid #e2e8f0',
                      background: '#ffffff',
                      color: form.birth_year ? '#0c1538' : '#94a3b8',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6e25e8'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 70 }, (_, i) => 2015 - i).map((y) => (
                      <option key={y} value={y} style={{ color: '#0c1538' }}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#0c1538', marginBottom: '5px' }}>
                Password
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
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

            {/* Terms checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                style={{ accentColor: '#6e25e8', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <label htmlFor="terms" style={{ fontSize: '0.82rem', color: '#64748b', cursor: 'pointer' }}>
                I agree to the <span style={{ color: '#6e25e8', fontWeight: '700' }}>Terms of Service</span> and <span style={{ color: '#6e25e8', fontWeight: '700' }}>Privacy Policy</span>
              </label>
            </div>

            {/* Create Account Submit Button: Full-Width Purple Pill */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                height: '48px',
                marginTop: '10px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: '800',
                fontSize: '0.98rem',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(110, 37, 232, 0.45)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(110, 37, 232, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(110, 37, 232, 0.45)'}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.88rem', color: '#64748b' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#6e25e8', fontWeight: '800', textDecoration: 'none' }}>
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Purple Branding Showcase (50% Split matching Image 4) */}
      <div style={{
        flex: '1 1 50%',
        minWidth: '320px',
        background: 'radial-gradient(circle at 50% 25%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 70%), #070918',
        color: '#ffffff',
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} className="auth-right-panel">
        <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 5 }}>
          {/* Top 3D Emblem in White / Purple glow */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'inline-block', filter: 'drop-shadow(0 10px 28px rgba(110, 37, 232, 0.6))' }}>
              <Logo size="large" light={true} linkTo="" />
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: '900', marginTop: '16px', letterSpacing: '-0.03em' }}>
              Join PartfolioHub
            </h2>
            <p style={{ color: '#c084fc', fontSize: '1rem', fontWeight: '700', marginTop: '4px' }}>
              Showcase • Connect • Grow
            </p>
          </div>

          {/* 4 Feature Items with purple circular check icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(110, 37, 232, 0.5)'
              }}>
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>Build your portfolio</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '3px 0 0' }}>Showcase your best creative work</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(110, 37, 232, 0.5)'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>Get discovered</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '3px 0 0' }}>Get quick-start visibility to top clients</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(110, 37, 232, 0.5)'
              }}>
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>Connect with clients</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '3px 0 0' }}>Communicate with direct opportunities</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(110, 37, 232, 0.5)'
              }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>Grow your career</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '3px 0 0' }}>Elevate your creator earnings</p>
              </div>
            </div>
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
