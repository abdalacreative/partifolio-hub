// frontend/src/pages/ProfilePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import { PostCard } from '../components/PostCard';
import { UnsplashPickerModal } from '../components/UnsplashPickerModal';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  Share2,
  Edit3,
  UserPlus,
  Check,
  MessageSquare,
  Sparkles,
  Grid,
  FolderGit2,
  Film,
  Bookmark,
  Calendar,
  Phone,
  Mail,
  Camera,
  Image,
  PlusCircle,
  UploadCloud
} from 'lucide-react';

export const ProfilePage = () => {
  const { username } = useParams();
  const { user: currentUser, isAuthenticated, updateUser } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'projects', 'videos', 'about', 'saved'
  const [following, setFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [actionLoading, setActionLoading] = useState(false);

  // Cover and Avatar Upload States
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [unsplashTarget, setUnsplashTarget] = useState(null); // 'avatar' | 'cover' | null
  const [unsplashOpen, setUnsplashOpen] = useState(false);

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  // Check if profile belongs to logged-in user
  const isOwnProfile = !username || (currentUser && currentUser.username === username);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const identifier = username || (currentUser ? currentUser.username : null);
      if (!identifier) {
        navigate('/login');
        return;
      }

      const res = await api.getProfile(identifier);
      if (res.success && res.data) {
        const p = res.data.user || res.data.profile;
        setProfile(p);
        setFollowing(p.is_following || false);
        setFollowersCount(p.followers_count || 0);

        // Fetch creator's posts
        const postsRes = await api.getPosts({ user_id: p.id, limit: 30 });
        if (postsRes.success) {
          setPosts(postsRes.data.posts || []);
        }
      } else {
        showToast('Profile not found', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Could not load profile information', 'error');
    } finally {
      setLoading(false);
    }
  };

  const formatSocialUrl = (type, val) => {
    if (!val || val === '#' || val === '') {
      if (profile?.username === 'abdala' || !profile?.username) {
        if (type === 'facebook') return 'https://www.facebook.com/share/19KxQX3pxa/';
        if (type === 'instagram') return 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi';
        if (type === 'tiktok') return 'https://www.tiktok.com/@abdala.creator';
      }
      return '#';
    }
    const trimmed = String(val).trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    if (type === 'facebook') {
      if (trimmed === 'abdaladesign' || profile?.username === 'abdala') return 'https://www.facebook.com/share/19KxQX3pxa/';
      return `https://facebook.com/${trimmed}`;
    }
    if (type === 'instagram') {
      if (trimmed === 'abdalacreator' || trimmed === 'abdala14564' || profile?.username === 'abdala') {
        return 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi';
      }
      return `https://instagram.com/${trimmed.replace(/^@/, '')}`;
    }
    if (type === 'tiktok') {
      if (trimmed === 'abdalacreative' || trimmed === 'abdala.creator' || profile?.username === 'abdala') {
        return 'https://www.tiktok.com/@abdala.creator';
      }
      return `https://tiktok.com/@${trimmed.replace(/^@/, '')}`;
    }
    return trimmed;
  };

  useEffect(() => {
    fetchProfileData();
  }, [username, currentUser?.username]);

  const handleFollowToggle = async () => {
    if (!isAuthenticated) {
      showToast('Please sign in to follow creators.', 'info');
      navigate('/login');
      return;
    }
    if (isOwnProfile || actionLoading) return;

    setActionLoading(true);
    try {
      const res = await api.toggleFollow(profile.id);
      if (res.success) {
        setFollowing(res.data.following);
        setFollowersCount(res.data.followers_count);
        showToast(res.message, 'success');
      }
    } catch (err) {
      showToast('Action failed', 'error');
    } finally {
      setActionLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Profile link copied to clipboard!', 'success');
    }
  };

  // Upload Avatar from Local Device
  const handleAvatarFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingAvatar(true);
    try {
      const res = await api.uploadFile(file, 'avatars');
      if (res.success && res.data?.full_url) {
        const newUrl = res.data.full_url;
        await api.updateProfile({ profile_photo: newUrl });
        setProfile((prev) => ({ ...prev, profile_photo: newUrl }));
        if (updateUser) updateUser({ profile_photo: newUrl });
        showToast('Profile image updated successfully!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to upload profile image', 'error');
    } finally {
      setUploadingAvatar(false);
    }
  };

  // Upload Cover from Local Device
  const handleCoverFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    try {
      const res = await api.uploadFile(file, 'covers');
      if (res.success && res.data?.full_url) {
        const newUrl = res.data.full_url;
        await api.updateProfile({ cover_photo: newUrl });
        setProfile((prev) => ({ ...prev, cover_photo: newUrl }));
        if (updateUser) updateUser({ cover_photo: newUrl });
        showToast('Cover image updated successfully!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to upload cover image', 'error');
    } finally {
      setUploadingCover(false);
    }
  };

  // Apply photo picked from Unsplash
  const handleSelectUnsplash = async (url) => {
    try {
      if (unsplashTarget === 'avatar') {
        await api.updateProfile({ profile_photo: url });
        setProfile((prev) => ({ ...prev, profile_photo: url }));
        if (updateUser) updateUser({ profile_photo: url });
        showToast('Profile image updated from Unsplash!', 'success');
      } else if (unsplashTarget === 'cover') {
        await api.updateProfile({ cover_photo: url });
        setProfile((prev) => ({ ...prev, cover_photo: url }));
        if (updateUser) updateUser({ cover_photo: url });
        showToast('Cover image updated from Unsplash!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to update photo', 'error');
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0', minHeight: '60vh' }}>
        <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
        <p style={{ color: 'var(--text-muted)' }}>Loading portfolio profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>User profile not found</h2>
        <Link to="/explore" className="btn btn-primary" style={{ marginTop: '16px' }}>Explore Creators</Link>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'projects') return post.post_type === 'project';
    if (activeTab === 'videos') return post.post_type === 'video';
    return true;
  });

  return (
    <div style={{ background: '#f8fafc', paddingBottom: '80px' }}>
      <UnsplashPickerModal
        isOpen={unsplashOpen}
        onClose={() => setUnsplashOpen(false)}
        onSelectImage={handleSelectUnsplash}
        title={unsplashTarget === 'cover' ? 'Select Cover Photo from Unsplash' : 'Select Profile Photo from Unsplash'}
      />

      {/* 1. Cover Photo Banner */}
      <div style={{
        height: '300px',
        background: profile.cover_photo
          ? `url(${profile.cover_photo}) center/cover no-repeat`
          : 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 70%, #6366f1 100%)',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />

        {/* Change Cover Controls for Owner */}
        {isOwnProfile && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            display: 'flex',
            gap: '8px',
            zIndex: 15
          }}>
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              disabled={uploadingCover}
              className="btn btn-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#0f172a',
                border: 'none',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Camera size={15} color="#6e25e8" />
              <span>{uploadingCover ? 'Uploading...' : 'Upload Cover'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setUnsplashTarget('cover');
                setUnsplashOpen(true);
              }}
              className="btn btn-sm"
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} color="#00d2ff" />
              <span>Unsplash Cover</span>
            </button>

            <input
              type="file"
              ref={coverInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleCoverFileUpload}
            />
          </div>
        )}
      </div>

      {/* 2. Main Profile Header Info */}
      <div className="container" style={{ maxWidth: '1160px', marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="card" style={{ padding: '32px', marginBottom: '32px', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {/* Avatar & Identifiers */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={profile.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                  alt={profile.full_name}
                  style={{
                    width: '135px',
                    height: '135px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
                  }}
                />

                {/* Change Avatar Interactive Buttons */}
                {isOwnProfile && (
                  <div style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    display: 'flex',
                    gap: '4px'
                  }}>
                    <button
                      type="button"
                      onClick={() => avatarInputRef.current?.click()}
                      disabled={uploadingAvatar}
                      title="Upload photo from device"
                      style={{
                        background: '#6e25e8',
                        color: '#ffffff',
                        border: '2.5px solid #ffffff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(110, 37, 232, 0.4)'
                      }}
                    >
                      <Camera size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setUnsplashTarget('avatar');
                        setUnsplashOpen(true);
                      }}
                      title="Pick avatar from Unsplash"
                      style={{
                        background: '#0f172a',
                        color: '#ffffff',
                        border: '2.5px solid #ffffff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <Sparkles size={15} color="#00d2ff" />
                    </button>

                    <input
                      type="file"
                      ref={avatarInputRef}
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleAvatarFileUpload}
                    />
                  </div>
                )}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                    {profile.full_name || profile.username}
                  </h1>
                  {profile.role === 'admin' && (
                    <span className="badge badge-primary">Admin Staff</span>
                  )}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500', marginBottom: '6px' }}>
                  @{profile.username}
                </p>
                {profile.professional_title && (
                  <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={16} />
                    {profile.professional_title}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {isOwnProfile ? (
                <>
                  <Link to="/create-post" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PlusCircle size={16} />
                    <span>Create Post</span>
                  </Link>

                  <Link to="/profile-setup" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Edit3 size={16} />
                    <span>Edit Profile</span>
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleFollowToggle}
                    disabled={actionLoading}
                    className={`btn ${following ? 'btn-secondary' : 'btn-primary'}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '120px', justifyContent: 'center' }}
                  >
                    {following ? <Check size={16} /> : <UserPlus size={16} />}
                    <span>{following ? 'Following' : 'Follow'}</span>
                  </button>

                  <button
                    onClick={() => navigate(`/messages?user_id=${profile.id}`)}
                    className="btn btn-outline"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageSquare size={16} />
                    <span>Message</span>
                  </button>
                </>
              )}

              <button
                onClick={handleShare}
                className="btn btn-secondary"
                style={{ padding: '10px 14px' }}
                title="Share Profile"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Bio & Details */}
          {profile.bio && (
            <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.6', marginTop: '20px', maxWidth: '850px' }}>
              {profile.bio}
            </p>
          )}

          {/* Meta Info Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {profile.location && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="var(--primary)" />
                {profile.location}
              </span>
            )}
            {profile.education && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={16} color="var(--primary)" />
                {profile.education}
              </span>
            )}
            {profile.experience && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Briefcase size={16} color="var(--primary)" />
                {profile.experience}
              </span>
            )}
            {profile.website && (
              <a
                href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '600' }}
              >
                <Globe size={16} />
                Portfolio Link
              </a>
            )}
          </div>

          {/* Contact & Social Links */}
          {(profile.whatsapp || profile.facebook || profile.instagram || profile.tiktok || profile.username === 'abdala') && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px', alignItems: 'center' }}>
              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge badge-success"
                  style={{ textDecoration: 'none', padding: '8px 14px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', borderRadius: '8px' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  WhatsApp: {profile.whatsapp}
                </a>
              )}
              {(profile.facebook || profile.username === 'abdala') && (
                <a
                  href={formatSocialUrl('facebook', profile.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(24, 119, 242, 0.12)',
                    color: '#1877f2',
                    border: '1px solid rgba(24, 119, 242, 0.35)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1877f2'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(24, 119, 242, 0.12)'; e.currentTarget.style.color = '#1877f2'; }}
                  title="Follow on Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              )}
              {(profile.instagram || profile.username === 'abdala') && (
                <a
                  href={formatSocialUrl('instagram', profile.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(225, 48, 108, 0.12)',
                    color: '#e1306c',
                    border: '1px solid rgba(225, 48, 108, 0.35)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#e1306c'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(225, 48, 108, 0.12)'; e.currentTarget.style.color = '#e1306c'; }}
                  title="Follow on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              )}
              {(profile.tiktok || profile.username === 'abdala') && (
                <a
                  href={formatSocialUrl('tiktok', profile.tiktok)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    color: '#ffffff',
                    border: '1px solid rgba(0, 242, 254, 0.45)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#fe2c55'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.35)'; e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.45)'; }}
                  title="Follow on TikTok"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c.14-.14.27-.29.39-.45V9.48a8.16 8.16 0 0 0 5.38 2.05v-3.53a4.83 4.83 0 0 1 0-1.31z" />
                  </svg>
                  TikTok
                </a>
              )}
            </div>
          )}

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '16px',
            marginTop: '28px',
            padding: '20px',
            background: 'var(--bg-main)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{posts.length}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Showcases</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{followersCount}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Followers</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{profile.following_count || 0}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Following</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{profile.total_likes || 0}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Applauds / Likes</div>
            </div>
          </div>
        </div>

        {/* 3. Profile Content Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '2px solid var(--border-color)',
          marginBottom: '28px',
          overflowX: 'auto',
          paddingBottom: '2px'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              color: activeTab === 'all' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'all' ? '3px solid var(--primary)' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <Grid size={18} />
            <span>All Posts ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              color: activeTab === 'projects' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'projects' ? '3px solid var(--primary)' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <FolderGit2 size={18} />
            <span>Projects ({posts.filter(p => p.post_type === 'project').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              color: activeTab === 'videos' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'videos' ? '3px solid var(--primary)' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <Film size={18} />
            <span>Videos ({posts.filter(p => p.post_type === 'video').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              color: activeTab === 'about' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'about' ? '3px solid var(--primary)' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <Sparkles size={18} />
            <span>About & Skills</span>
          </button>
        </div>

        {/* 4. Tab Content Panels */}
        {activeTab === 'about' ? (
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '16px' }}>Detailed Portfolio Overview</h3>
            <p style={{ color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '28px', whiteSpace: 'pre-line' }}>
              {profile.portfolio_intro || profile.bio || "No expanded bio provided yet."}
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '14px' }}>Expertise & Skills</h4>
            {profile.skills && profile.skills.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {profile.skills.map((sk, idx) => (
                  <span key={idx} className="badge badge-primary" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                    {typeof sk === 'string' ? sk : sk.name}
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>No skills listed yet.</p>
            )}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <Grid size={48} color="var(--text-light)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>No items in this section</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 20px' }}>
              {isOwnProfile ? 'You haven’t published any works here yet.' : 'This creator hasn’t uploaded any projects here yet.'}
            </p>
            {isOwnProfile && (
              <Link to="/create-post" className="btn btn-primary">Create Your First Showcase</Link>
            )}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} onPostUpdated={fetchProfileData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
