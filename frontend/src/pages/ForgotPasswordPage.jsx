// frontend/src/pages/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentToken, setSentToken] = useState(null);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast('Please enter your email address.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await api.forgotPassword(email.trim());
      if (res.success) {
        setSentToken(res.data.reset_token || 'demo-token');
        showToast('Password reset link and verification code prepared!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Request failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '24px' }}>
      <div className="card" style={{ maxWidth: '460px', width: '100%', padding: '36px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            margin: '0 auto 16px'
          }}>
            <KeyRound size={26} />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '6px' }}>Reset Your Password</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Enter your email and we'll generate a secure token to reset your credentials.
          </p>
        </div>

        {!sentToken ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                autoFocus
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.98rem' }}
            >
              {loading ? 'Verifying Account...' : 'Send Reset Link'}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ padding: '16px', background: 'var(--success-bg)', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
              <CheckCircle2 size={28} color="var(--success)" style={{ margin: '0 auto 8px' }} />
              <p style={{ fontSize: '0.9rem', color: '#065f46', fontWeight: '600' }}>
                Reset authorization generated!
              </p>
              <p style={{ fontSize: '0.8rem', color: '#047857', marginTop: '4px' }}>
                Token: <code style={{ background: '#d1fae5', padding: '2px 6px', borderRadius: '4px' }}>{sentToken}</code>
              </p>
            </div>

            <button
              onClick={() => navigate(`/reset-password?token=${sentToken}`)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              Proceed to Reset Password
            </button>
          </div>
        )}

        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            <ArrowLeft size={16} /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
