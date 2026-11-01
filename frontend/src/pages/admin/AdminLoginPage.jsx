// frontend/src/pages/admin/AdminLoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import {
  Shield,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

export const AdminLoginPage = () => {
  const { login, logout, isAuthenticated, isAdmin, user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    login: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If already authenticated as admin, jump straight to the admin portal
  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

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
      setError('Fadlan geli email-ka/username-ka iyo password-ka maamulka.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await login(form);
      if (res.success) {
        const loggedUser = res.data?.user;
        if (loggedUser?.role !== 'admin') {
          // Account exists but is not an admin!
          await logout();
          setError('Ogolaanshaha waa la diiday: Account-kani ma laha awoodda maamulaha (Admin Privileges). Fadlan ku gal account-ka saxda ah ee Admin-ka.');
          showToast('Access Denied: Admin privileges required.', 'error');
          return;
        }

        showToast(`Ku soo dhawoow Admin Portal-ka, ${loggedUser.full_name || 'Maamule'}!`, 'success');
        navigate('/admin', { replace: true });
      } else {
        setError(res.message || 'Xogta login-ka ma saxna. Fadlan hubi email-ka iyo password-ka.');
      }
    } catch (err) {
      setError(err.message || 'Khalad ayaa dhacay marka la galayay. Fadlan dib u tijaabi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 42%, rgba(75, 79, 190, 0.16) 0%, transparent 48%), #050817',
      color: '#ffffff',
      padding: '24px 16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Ambience Lines */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '360px',
        height: '360px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Main Glass Card */}
      <div style={{
        width: '100%',
        maxWidth: '300px',
        background: '#10172b',
        border: '1px solid rgba(148, 163, 184, 0.12)',
        borderRadius: '16px',
        padding: '25px 24px 22px',
        boxShadow: '0 18px 48px rgba(0, 0, 0, 0.38)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header Icon & Security Badge */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'rgba(79, 70, 229, 0.16)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            marginBottom: '10px',
            border: '1px solid rgba(99, 102, 241, 0.18)'
          }}>
            <Shield size={19} strokeWidth={2.4} color="#818cf8" />
          </div>

          <h1 style={{
            fontSize: '1.28rem',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 2px',
            letterSpacing: '-0.03em'
          }}>
            Portfolio<span style={{ color: '#818cf8' }}>Hub</span>
          </h1>

          <p style={{ color: '#818cf8', fontSize: '0.58rem', fontWeight: 800, margin: '0 0 8px', letterSpacing: '0.04em' }}>ADMIN PORTAL</p>

          <p style={{
            color: '#94a3b8',
            fontSize: '0.62rem',
            margin: 0,
            lineHeight: 1.45
          }}>
            Geli xogtaada si aad u gasho maamulka nidaamka.
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            color: '#fca5a5',
            padding: '12px 14px',
            borderRadius: '12px',
            fontSize: '0.84rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            lineHeight: 1.45
          }}>
            <AlertTriangle size={18} style={{ flexShrink: 0, color: '#ef4444', marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        {/* Admin Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Email / Username Field */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.58rem',
              fontWeight: 700,
              color: '#cbd5e1',
              marginBottom: '5px',
              letterSpacing: '0.02em'
            }}>
              EMAIL AMA USERNAME
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8'
                }}
              />
              <input
                type="text"
                name="login"
                placeholder="admin@portfoliohub.com"
                value={form.login}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 34px',
                  borderRadius: '9px',
                  border: '1px solid rgba(148, 163, 184, 0.13)',
                  background: 'rgba(11, 15, 30, 0.48)',
                  color: '#ffffff',
                  fontSize: '0.67rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.14)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.13)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div style={{ marginBottom: '5px' }}>
              <label style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                color: '#cbd5e1',
                letterSpacing: '0.02em'
              }}>
                PASSWORD
              </label>
            </div>

            <div style={{ position: 'relative' }}>
              <Lock
                size={14}
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8'
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '8px 34px 8px 34px',
                  borderRadius: '9px',
                  border: '1px solid rgba(148, 163, 184, 0.13)',
                  background: 'rgba(11, 15, 30, 0.48)',
                  color: '#ffffff',
                  fontSize: '0.67rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.14)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.13)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '11px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Remember Option */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.6rem', color: '#94a3b8' }}>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                style={{ accentColor: '#6366f1', width: '12px', height: '12px', cursor: 'pointer' }}
              />
              <span>I xusuuso (Remember me)</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '8px',
              background: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.68rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 6px 16px rgba(79, 70, 229, 0.28)',
              transition: 'all 0.25s ease',
              marginTop: '2px',
              opacity: loading ? 0.75 : 1
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(79, 70, 229, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(79, 70, 229, 0.28)';
            }}
          >
            {loading ? (
              <>
                <div className="spinner" style={{ width: '18px', height: '18px', borderTopColor: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }} />
                <span>Checking Credentials...</span>
              </>
            ) : (
              <>
                <span>Gal Portal-ka</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLoginPage;
