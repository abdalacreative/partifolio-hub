// frontend/src/pages/SettingsPage.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import {
  User,
  Shield,
  Lock,
  Eye,
  Bell,
  Share2,
  Trash2,
  CheckCircle2,
  Save,
  KeyRound,
  ExternalLink,
  Camera,
  UploadCloud
} from 'lucide-react';

export const SettingsPage = () => {
  const { user, refreshUser } = useAuth();
  const { showToast } = useToast();

  // Active Tab matching Figma Screen (defaulting to 'privacy' or 'profile')
  const [activeTab, setActiveTab] = useState('privacy');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Privacy Toggles (Exact matching Figma screen: Show email, Show phone, Show WhatsApp, Show location)
  const [privacyToggles, setPrivacyToggles] = useState({
    show_email: true,
    show_phone: false,
    show_whatsapp: true,
    show_location: true
  });

  // Account / Profile states
  const [profileForm, setProfileForm] = useState({
    full_name: '',
    username: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    professional_title: '',
    profile_photo: ''
  });
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    new_password: '',
    confirm_password: ''
  });

  const handleAvatarUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingAvatar(true);
    try {
      const uploadRes = await api.uploadFile(file, 'avatars');
      if (uploadRes.success && uploadRes.data?.file_url) {
        const photoUrl = uploadRes.data.file_url;
        setProfileForm((prev) => ({ ...prev, profile_photo: photoUrl }));
        await api.updateProfile({ profile_photo: photoUrl });
        await refreshUser();
        showToast('Profile photo updated successfully!', 'success');
      } else {
        showToast(uploadRes.message || 'Failed to upload photo', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Error uploading photo', 'error');
    } finally {
      setUploadingAvatar(false);
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.getSettings();
        if (res.success && res.data) {
          const s = res.data.settings || res.data.user || {};
          setProfileForm({
            full_name: s.full_name || user?.full_name || '',
            username: s.username || user?.username || '',
            email: s.email || user?.email || '',
            phone: s.phone || user?.phone || '',
            location: s.location || user?.location || '',
            bio: s.bio || user?.bio || '',
            professional_title: s.professional_title || user?.professional_title || '',
            profile_photo: s.profile_photo || user?.profile_photo || ''
          });

          if (s.privacy) {
            setPrivacyToggles({
              show_email: !!s.privacy.show_email,
              show_phone: !!s.privacy.show_phone,
              show_whatsapp: !!s.privacy.show_whatsapp,
              show_location: !!s.privacy.show_location
            });
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [user]);

  const handleToggle = (key) => {
    setPrivacyToggles((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSavePrivacy = async () => {
    setSaving(true);
    try {
      const res = await api.updateSettings({
        action: 'privacy',
        ...privacyToggles
      });
      if (res.success) {
        showToast('Privacy settings saved successfully!', 'success');
        refreshUser();
      } else {
        showToast(res.message || 'Failed to save settings', 'error');
      }
    } catch (err) {
      showToast('Error saving settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await api.updateProfile(profileForm);
      if (res.success) {
        showToast('Profile information updated successfully!', 'success');
        refreshUser();
      } else {
        showToast(res.message || 'Failed to update profile', 'error');
      }
    } catch (err) {
      showToast('Error updating profile info', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleSavePassword = async (e) => {
    e.preventDefault();
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      showToast('Passwords do not match', 'error');
      return;
    }
    setSaving(true);
    try {
      const res = await api.updateSettings({
        action: 'password',
        ...passwordForm
      });
      if (res.success) {
        showToast('Password changed successfully!', 'success');
        setPasswordForm({ current_password: '', new_password: '', confirm_password: '' });
      } else {
        showToast(res.message || 'Failed to change password', 'error');
      }
    } catch (err) {
      showToast('Error changing password', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Tabs matching Figma Screen
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Lock },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'privacy', label: 'Privacy', icon: Eye },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'social', label: 'Social Links', icon: Share2 },
    { id: 'deactivate', label: 'Deactivate Account', icon: Trash2, danger: true }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Page Title */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0c1538', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
          Settings
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
          Manage your account credentials, security preferences, and public visibility.
        </p>
      </div>

      {/* 2-Column Settings Container (Exact matching Figma screen: Left Tabs, Right Form) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* Left Column: Vertical Tabs */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '16px 12px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: isActive ? 'rgba(110, 37, 232, 0.08)' : 'transparent',
                  color: isActive ? '#6e25e8' : (tab.danger ? '#ef4444' : '#64748b'),
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  borderLeft: isActive ? '3px solid #6e25e8' : '3px solid transparent'
                }}
              >
                <Icon size={18} strokeWidth={isActive ? 2.4 : 2} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Tab Content */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '32px',
          border: '1px solid #edf2f7',
          boxShadow: '0 4px 25px rgba(0,0,0,0.03)'
        }}>
          {/* TAB: PRIVACY (Exact Match to Figma Screen) */}
          {activeTab === 'privacy' && (
            <div>
              <div style={{ marginBottom: '28px', paddingBottom: '18px', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c1538', margin: '0 0 6px' }}>
                  Privacy Settings
                </h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                  Control what contact information and details are visible to other users on your profile.
                </p>
              </div>

              {/* iOS-Style Toggle Switches (Figma Screen) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
                {/* 1. Show email address */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #f8fafc' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 700, color: '#0c1538' }}>
                      Show email address
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                      Allow verified visitors and potential clients to see your email address.
                    </p>
                  </div>

                  <div
                    onClick={() => handleToggle('show_email')}
                    style={{
                      width: '48px',
                      height: '26px',
                      borderRadius: '13px',
                      background: privacyToggles.show_email ? '#6e25e8' : '#e2e8f0',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background 0.25s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      position: 'absolute',
                      top: '3px',
                      left: privacyToggles.show_email ? '25px' : '3px',
                      transition: 'left 0.25s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                </div>

                {/* 2. Show phone number */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #f8fafc' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 700, color: '#0c1538' }}>
                      Show phone number
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                      Display your direct phone number for phone consultations.
                    </p>
                  </div>

                  <div
                    onClick={() => handleToggle('show_phone')}
                    style={{
                      width: '48px',
                      height: '26px',
                      borderRadius: '13px',
                      background: privacyToggles.show_phone ? '#6e25e8' : '#e2e8f0',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background 0.25s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      position: 'absolute',
                      top: '3px',
                      left: privacyToggles.show_phone ? '25px' : '3px',
                      transition: 'left 0.25s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                </div>

                {/* 3. Show WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #f8fafc' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 700, color: '#0c1538' }}>
                      Show WhatsApp
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                      Add a direct WhatsApp message action button on your public portfolio page.
                    </p>
                  </div>

                  <div
                    onClick={() => handleToggle('show_whatsapp')}
                    style={{
                      width: '48px',
                      height: '26px',
                      borderRadius: '13px',
                      background: privacyToggles.show_whatsapp ? '#6e25e8' : '#e2e8f0',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background 0.25s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      position: 'absolute',
                      top: '3px',
                      left: privacyToggles.show_whatsapp ? '25px' : '3px',
                      transition: 'left 0.25s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                </div>

                {/* 4. Show location */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', fontWeight: 700, color: '#0c1538' }}>
                      Show location
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                      Display your city and country (e.g., Mogadishu, Somalia) to prospective local clients.
                    </p>
                  </div>

                  <div
                    onClick={() => handleToggle('show_location')}
                    style={{
                      width: '48px',
                      height: '26px',
                      borderRadius: '13px',
                      background: privacyToggles.show_location ? '#6e25e8' : '#e2e8f0',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background 0.25s ease'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      position: 'absolute',
                      top: '3px',
                      left: privacyToggles.show_location ? '25px' : '3px',
                      transition: 'left 0.25s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                </div>
              </div>

              {/* Save Button (Figma Screen) */}
              <button
                type="button"
                onClick={handleSavePrivacy}
                disabled={saving}
                className="btn btn-primary"
                style={{
                  padding: '12px 32px',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
                  boxShadow: '0 6px 18px rgba(110, 37, 232, 0.35)',
                  borderRadius: '12px'
                }}
              >
                {saving ? 'Saving Changes...' : 'Save Changes'}
              </button>
            </div>
          )}

          {/* TAB: PROFILE */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile}>
              <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c1538', margin: '0 0 6px' }}>
                  Public Profile
                </h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                  Update your display name, headline title, location, and professional biography.
                </p>
              </div>

              {/* Profile Photo Upload Banner */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '18px 20px',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                marginBottom: '10px'
              }}>
                <div style={{ position: 'relative', width: '80px', height: '80px', flexShrink: 0 }}>
                  <img
                    src={profileForm.profile_photo || user?.profile_photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
                    alt="Profile Avatar"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #7c3aed',
                      boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                    }}
                  />
                  <label
                    htmlFor="avatar-upload-input"
                    title="Change profile picture"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#7c3aed',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: uploadingAvatar ? 'wait' : 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                      transition: 'transform 0.2s'
                    }}
                  >
                    <Camera size={15} />
                  </label>
                  <input
                    id="avatar-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    disabled={uploadingAvatar}
                    style={{ display: 'none' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px', fontSize: '0.96rem', fontWeight: 800, color: '#0c1538' }}>
                    Profile Picture / Sawirka Profile-ka
                  </h4>
                  <p style={{ margin: '0 0 10px', fontSize: '0.82rem', color: '#64748b' }}>
                    Upload a high resolution JPG, PNG, or WEBP portrait (max 5MB).
                  </p>
                  <label
                    htmlFor="avatar-upload-input"
                    className="btn btn-secondary btn-sm"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: uploadingAvatar ? 'wait' : 'pointer'
                    }}
                  >
                    <UploadCloud size={14} />
                    <span>{uploadingAvatar ? 'Uploading Image...' : 'Choose New Photo'}</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.full_name}
                    onChange={(e) => setProfileForm({ ...profileForm, full_name: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Professional Title / Headline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Brand & Graphic Designer"
                    value={profileForm.professional_title}
                    onChange={(e) => setProfileForm({ ...profileForm, professional_title: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mogadishu, Somalia"
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', lineHeight: 1.6 }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary"
                style={{ padding: '12px 32px', fontWeight: 800, background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)' }}
              >
                {saving ? 'Saving...' : 'Save Profile'}
              </button>
            </form>
          )}

          {/* TAB: SECURITY / PASSWORD */}
          {activeTab === 'security' && (
            <form onSubmit={handleSavePassword}>
              <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c1538', margin: '0 0 6px' }}>
                  Security & Password
                </h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                  Update your secret password to keep your PartfolioHub account safe.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.current_password}
                    onChange={(e) => setPasswordForm({ ...passwordForm, current_password: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.new_password}
                    onChange={(e) => setPasswordForm({ ...passwordForm, new_password: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0c1538', marginBottom: '6px' }}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.confirm_password}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirm_password: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary"
                style={{ padding: '12px 32px', fontWeight: 800, background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)' }}
              >
                {saving ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          )}

          {/* OTHER TABS FALLBACK */}
          {activeTab !== 'privacy' && activeTab !== 'profile' && activeTab !== 'security' && (
            <div>
              <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0c1538', margin: '0 0 6px', textTransform: 'capitalize' }}>
                  {activeTab} Settings
                </h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                  Manage your {activeTab} preferences and automated configurations.
                </p>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
                All changes to your {activeTab} settings are auto-saved securely.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
