// frontend/src/pages/admin/AdminLoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Logo } from '../../components/Logo';
import {
  Shield,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  KeyRound,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const AdminLoginPage = () => {
  const { login, logout, isAuthenticated, isAdmin, user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    login: '',
    password: '',
    remember: true
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
      background: 'radial-gradient(circle at 50% 15%, rgba(124, 58, 237, 0.28) 0%, transparent 60%), radial-gradient(circle at 85% 85%, rgba(239, 68, 68, 0.18) 0%, transparent 55%), linear-gradient(135deg, #060914 0%, #0d122b 50%, #070a17 100%)',
      color: '#ffffff',
      padding: '30px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Ambience Lines */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(circle, rgba(110, 37, 232, 0.22) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Main Glass Card */}
      <div style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(167, 139, 250, 0.3)',
        borderRadius: '24px',
        padding: '42px 36px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 50px rgba(110, 37, 232, 0.2)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header Icon & Security Badge */}
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #4f46e5 100%)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 8px 30px rgba(124, 58, 237, 0.55), 0 0 20px rgba(168, 85, 247, 0.35)',
            marginBottom: '16px',
            border: '2px solid rgba(255, 255, 255, 0.25)'
          }}>
            <Shield size={32} strokeWidth={2.4} />
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.74rem',
            fontWeight: 800,
            color: '#f87171',
            letterSpacing: '0.04em',
            marginBottom: '10px'
          }}>
            <Lock size={12} />
            <span>RESTRICTED ACCESS • ADMIN ONLY</span>
          </div>

          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: '0 0 6px',
            letterSpacing: '-0.02em'
          }}>
            PartfolioHub <span style={{
              background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Admin Portal</span>
          </h1>

          <p style={{
            color: '#94a3b8',
            fontSize: '0.88rem',
            margin: 0,
            lineHeight: 1.5
          }}>
            Geli xogta maamulka si aad u maamusho users-ka, reports-ka iyo nidaamka guud ee goobta.
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
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Email / Username Field */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#cbd5e1',
              marginBottom: '8px',
              letterSpacing: '0.02em'
            }}>
              Email ama Username-ka Admin-ka:
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
                placeholder="admin ama admin@partfoliohub.com"
                value={form.login}
                onChange={handleChange}
                autoFocus
                required
                style={{
                  width: '100%',
                  padding: '13px 16px 13px 44px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(255, 255, 255, 0.14)',
                  background: 'rgba(11, 15, 30, 0.8)',
                  color: '#ffffff',
                  fontSize: '0.94rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a855f7';
                  e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.35)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.3)';
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#cbd5e1',
                letterSpacing: '0.02em'
              }}>
                Password-ka Admin-ka:
              </label>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                Default: <code style={{ color: '#c084fc', background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px' }}>Admin@123456</code>
              </span>
            </div>

            <div style={{ position: 'relative' }}>
              <KeyRound
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
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Geli Password-kaaga..."
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '13px 46px 13px 44px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(255, 255, 255, 0.14)',
                  background: 'rgba(11, 15, 30, 0.8)',
                  color: '#ffffff',
                  fontSize: '0.94rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a855f7';
                  e.target.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.35)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.3)';
                }}
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
                  color: '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Option */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.84rem', color: '#94a3b8' }}>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                style={{ accentColor: '#7c3aed', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <span>Ha iga saarin (Remember session)</span>
            </label>

            <span style={{ fontSize: '0.78rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} /> 256-bit Encrypted
            </span>
          </div>

          {/* Quick Demo Fill Helper */}
          <button
            type="button"
            onClick={() => {
              setForm({
                login: 'admin@partfoliohub.com',
                password: 'Admin@123456',
                remember: true
              });
              showToast('Xogta Admin-ka waa la buuxiyey!', 'info');
            }}
            style={{
              padding: '9px 14px',
              borderRadius: '10px',
              border: '1px dashed rgba(167, 139, 250, 0.4)',
              background: 'rgba(124, 58, 237, 0.12)',
              color: '#c084fc',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
              marginTop: '2px'
            }}
          >
            <KeyRound size={15} />
            <span>Ku buuxi Xogta Admin-ka (admin@partfoliohub.com)</span>
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #6e25e8 50%, #4f46e5 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.98rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 8px 25px rgba(124, 58, 237, 0.45)',
              transition: 'all 0.25s ease',
              marginTop: '6px',
              opacity: loading ? 0.75 : 1
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(124, 58, 237, 0.65)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(124, 58, 237, 0.45)';
            }}
          >
            {loading ? (
              <>
                <div className="spinner" style={{ width: '18px', height: '18px', borderTopColor: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }} />
                <span>Checking Credentials...</span>
              </>
            ) : (
              <>
                <span>Gal Admin Portal-ka</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Bottom Navigation & Safety Notice */}
        <div style={{
          marginTop: '26px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          textAlign: 'center'
        }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#94a3b8',
              fontSize: '0.86rem',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            <ArrowLeft size={15} />
            <span>Ku Noqo Bogga Weyn (Return to Home)</span>
          </Link>

          <p style={{
            margin: 0,
            fontSize: '0.74rem',
            color: '#64748b',
            lineHeight: 1.45
          }}>
            Xusuusin: Gelitaanka boggan waxaa toos u diiwaangelinaya nidaamka ammaanka ee PartfolioHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
