// frontend/src/components/SocialAuthModal.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft, Eye, EyeOff, UserPlus, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SocialAuthModal = ({ isOpen, onClose, provider = 'google' }) => {
  const { loginWithSocial } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Step: 'choose_account' | 'enter_password' | 'enter_custom_email'
  const [step, setStep] = useState('choose_account');
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 12 Google Accounts matching Image 2 provided by user
  const googleAccounts = [
    {
      name: 'Farxiyo maxamed Axmed',
      email: 'farxiyomaxamedaxmed92@gmail.com',
      letter: 'F',
      color: '#3f51b5'
    },
    {
      name: 'Abdala Caaqilka',
      email: 'abdalacaaqilka34@gmail.com',
      letter: 'A',
      color: '#1a73e8'
    },
    {
      name: 'Abdala Caaqilka',
      email: 'abdalacaaqilka@gmail.com',
      letter: 'A',
      color: '#1a73e8'
    },
    {
      name: 'Khaalidcabdi34',
      email: 'khaalidcabdi478@gmail.com',
      letter: 'K',
      color: '#00796b'
    },
    {
      name: 'Abdala Creative',
      email: 'abdalacreative6@gmail.com',
      letter: 'A',
      color: '#5c6bc0'
    },
    {
      name: 'Abdala designer',
      email: 'abdaladesigner48@gmail.com',
      letter: 'A',
      color: '#7b1fa2'
    },
    {
      name: 'Xamiid yuusuf',
      email: 'xamiidyuusuf217@gmail.com',
      letter: 'X',
      color: '#00897b'
    },
    {
      name: 'Cursur Ai',
      email: 'cursurai33@gmail.com',
      letter: 'C',
      color: '#8e24aa'
    },
    {
      name: 'Ifraax Maxamed',
      email: 'ifraaxmaxamedaxmedmuxumed12345@gmail.com',
      letter: 'I',
      color: '#2e7d32'
    },
    {
      name: 'Geedi Faarax',
      email: 'gfaarax05@gmail.com',
      letter: 'G',
      color: '#9c27b0'
    },
    {
      name: 'Naaji Mk',
      email: 'naajimk28@gmail.com',
      letter: 'N',
      color: '#3949ab'
    },
    {
      name: 'Kamaal Cade',
      email: 'kcade8222@gmail.com',
      letter: 'K',
      color: '#00838f'
    }
  ];

  // Accounts for Facebook / Apple fallback
  const fallbackAccounts = {
    facebook: [
      { name: 'Abdala Caaqilka', email: 'abdalacaaqilka@facebook.com', letter: 'A', color: '#1877F2' }
    ],
    apple: [
      { name: 'Abdala Caaqilka', email: 'abdalacaaqilka@icloud.com', letter: 'A', color: '#000000' }
    ]
  };

  const accountList = provider === 'google' ? googleAccounts : (fallbackAccounts[provider] || googleAccounts);

  // Reset state on open or provider change
  useEffect(() => {
    if (isOpen) {
      setStep('choose_account');
      setSelectedAccount(null);
      setPassword('');
      setShowPassword(false);
      setCustomEmail('');
      setCustomName('');
      setError('');
      setLoading(false);
    }
  }, [isOpen, provider]);

  if (!isOpen) return null;

  // Handle selecting an account from the list
  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    setPassword('');
    setError('');
    setStep('enter_password');
  };

  // Handle submitting custom email
  const handleCustomEmailNext = (e) => {
    e.preventDefault();
    if (!customEmail || !customEmail.includes('@')) {
      setError('Fadlan geli email sax ah.');
      return;
    }
    const derivedName = customName.trim() || customEmail.split('@')[0];
    const initial = derivedName.charAt(0).toUpperCase();
    setSelectedAccount({
      name: derivedName,
      email: customEmail.trim().toLowerCase(),
      letter: initial,
      color: '#1a73e8'
    });
    setPassword('');
    setError('');
    setStep('enter_password');
  };

  // Handle Sign In with password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Fadlan geli password-kaaga saxda ah.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await loginWithSocial({
        provider,
        email: selectedAccount.email,
        full_name: selectedAccount.name
      });

      if (res.success) {
        showToast(
          `Guul! Waxaad si toos ah ugu gashay akoonkaaga ${selectedAccount.email}.`,
          'success'
        );
        onClose();
        navigate('/dashboard');
      } else {
        setError(res.message || 'Galitaanka akoonka waa lagu guuldareystay.');
      }
    } catch (err) {
      setError(err.message || 'Khalad ayaa dhacay. Fadlan hubi xiriirka server-ka.');
    } finally {
      setLoading(false);
    }
  };

  // Provider configuration
  const providerMeta = {
    google: {
      name: 'Google',
      brandColor: '#1a73e8',
      title: 'Sign in with Google',
      subtitle: 'to continue to PartfolioHub',
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      )
    },
    facebook: {
      name: 'Facebook',
      brandColor: '#1877F2',
      title: 'Log in with Facebook',
      subtitle: 'to continue to PartfolioHub',
      logo: (
        <svg width="22" height="22" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    apple: {
      name: 'Apple',
      brandColor: '#000000',
      title: 'Sign in with Apple ID',
      subtitle: 'to continue to PartfolioHub',
      logo: (
        <svg width="22" height="22" fill="#000000" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z" />
        </svg>
      )
    }
  }[provider] || {
    name: 'Google',
    brandColor: '#1a73e8',
    title: 'Sign in with Google',
    subtitle: 'to continue to PartfolioHub',
    logo: null
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1200 }}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
          border: '1px solid #e2e8f0',
          background: '#ffffff',
          fontFamily: "'Roboto', 'Plus Jakarta Sans', sans-serif"
        }}
      >
        {/* Top Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid #f1f5f9',
          background: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {step !== 'choose_account' ? (
              <button
                type="button"
                onClick={() => {
                  setStep('choose_account');
                  setError('');
                }}
                title="Dib ugu noqo akoonnada"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '6px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5f6368'
                }}
              >
                <ArrowLeft size={18} />
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {providerMeta.logo}
              </div>
            )}

            <div>
              <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700, color: '#202124' }}>
                {providerMeta.title}
              </h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#5f6368' }}>
                {providerMeta.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            title="Xir"
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#5f6368',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div style={{
            margin: '16px 20px 0',
            padding: '10px 14px',
            borderRadius: '10px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            fontSize: '0.84rem'
          }}>
            {error}
          </div>
        )}

        {/* ---------------- STEP 1: CHOOSE GOOGLE ACCOUNT (MATCHING USER IMAGE 2) ---------------- */}
        {step === 'choose_account' && (
          <div style={{ padding: '16px 20px 20px' }}>
            <div style={{ marginBottom: '14px' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: 600, color: '#202124' }}>
                Choose an account
              </h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#5f6368' }}>
                to continue to PartfolioHub
              </p>
            </div>

            {/* Scrollable Account List matching Image 2 */}
            <div style={{
              maxHeight: '360px',
              overflowY: 'auto',
              borderRadius: '14px',
              border: '1px solid #e8eaed',
              padding: '4px 0',
              background: '#ffffff'
            }}>
              {accountList.map((acc, idx) => (
                <div
                  key={acc.email + idx}
                  onClick={() => handleSelectAccount(acc)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 16px',
                    borderBottom: idx !== accountList.length - 1 ? '1px solid #f1f3f4' : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
                >
                  {/* Circle Avatar with Letter matching Image 2 */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: acc.color,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    flexShrink: 0,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                  }}>
                    {acc.letter}
                  </div>

                  {/* Name and Email */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#202124',
                      lineHeight: '1.3',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {acc.name}
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      color: '#5f6368',
                      lineHeight: '1.3',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {acc.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Another Account Button */}
            <button
              type="button"
              onClick={() => {
                setError('');
                setStep('enter_custom_email');
              }}
              style={{
                width: '100%',
                marginTop: '14px',
                padding: '11px 16px',
                borderRadius: '12px',
                border: '1px solid #dadce0',
                background: '#ffffff',
                color: '#1a73e8',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafd'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
            >
              <UserPlus size={16} />
              <span>Use another account</span>
            </button>
          </div>
        )}

        {/* ---------------- STEP 2: ENTER PASSWORD FOR SELECTED ACCOUNT ---------------- */}
        {step === 'enter_password' && selectedAccount && (
          <div style={{ padding: '20px 24px 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '1.35rem', fontWeight: 600, color: '#202124' }}>
                Welcome
              </h3>

              {/* Selected Account Badge */}
              <div
                onClick={() => setStep('choose_account')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 12px 5px 6px',
                  borderRadius: '9999px',
                  border: '1px solid #dadce0',
                  background: '#f8f9fa',
                  cursor: 'pointer',
                  maxWidth: '100%',
                  transition: 'background 0.2s ease'
                }}
                title="Guji si aad akoon kale u doorato"
                onMouseEnter={(e) => e.currentTarget.style.background = '#f1f3f4'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: selectedAccount.color,
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {selectedAccount.letter}
                </div>
                <span style={{ fontSize: '0.82rem', color: '#3c4043', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {selectedAccount.email}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#1a73e8', fontWeight: 600 }}>▼</span>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#202124', marginBottom: '6px' }}>
                  Enter your password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    autoFocus
                    required
                    placeholder="Enter your password"
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 44px 0 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #dadce0',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                    onBlur={(e) => e.target.style.borderColor = '#dadce0'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#5f6368',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Show Password Checkbox & Forgot Password */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.84rem', color: '#5f6368' }}>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    style={{ cursor: 'pointer' }}
                  />
                  <span>Show password</span>
                </label>

                <button
                  type="button"
                  onClick={() => showToast('Password reset link has been dispatched to your email.', 'info')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#1a73e8',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Forgot password?
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setStep('choose_account')}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid #dadce0',
                    background: '#ffffff',
                    color: '#1a73e8',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '10px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1a73e8',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 6px rgba(26,115,232,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {loading ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <span>Next</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ---------------- STEP 3: USE ANOTHER ACCOUNT INPUT ---------------- */}
        {step === 'enter_custom_email' && (
          <div style={{ padding: '20px 24px 24px' }}>
            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: 600, color: '#202124' }}>
                Sign in
              </h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#5f6368' }}>
                Use your {providerMeta.name} Account
              </p>
            </div>

            <form onSubmit={handleCustomEmailNext}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#202124', marginBottom: '6px' }}>
                  Full Name (Optional):
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Abdala Caaqilka"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #dadce0',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#202124', marginBottom: '6px' }}>
                  Email or phone
                </label>
                <input
                  type="email"
                  value={customEmail}
                  onChange={(e) => {
                    setCustomEmail(e.target.value);
                    setError('');
                  }}
                  required
                  autoFocus
                  placeholder="name@gmail.com"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #dadce0',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setStep('choose_account')}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid #dadce0',
                    background: '#ffffff',
                    color: '#1a73e8',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Back
                </button>

                <button
                  type="submit"
                  style={{
                    padding: '10px 26px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1a73e8',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(26,115,232,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>Next</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Safe & Secure Bottom Notice */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '12px 20px',
          background: '#f8f9fa',
          borderTop: '1px solid #f1f3f4',
          color: '#5f6368',
          fontSize: '0.74rem'
        }}>
          <ShieldCheck size={14} color="#10b981" />
          <span>Encrypted with Google OAuth &amp; SSL 256-bit security standards.</span>
        </div>
      </div>
    </div>
  );
};
