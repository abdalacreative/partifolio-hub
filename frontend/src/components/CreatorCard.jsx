// frontend/src/components/CreatorCard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, UserPlus, Check, Eye } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const CreatorCard = ({ creator, onFollowToggled }) => {
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [following, setFollowing] = useState(creator.is_following || false);
  const [followersCount, setFollowersCount] = useState(creator.followers_count || 0);
  const [loading, setLoading] = useState(false);

  const isOwnCard = user?.id === creator.id;

  const handleFollow = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      showToast('Please log in to follow creators.', 'info');
      navigate('/login');
      return;
    }

    if (isOwnCard || loading) return;
    setLoading(true);

    try {
      const res = await api.toggleFollow(creator.id);
      if (res.success) {
        setFollowing(res.data.following);
        setFollowersCount(res.data.followers_count);
        showToast(res.message, 'success');
        if (onFollowToggled) onFollowToggled();
      }
    } catch (err) {
      showToast(err.message || 'Follow action failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px 20px', position: 'relative' }}>
      {/* Avatar with gradient glow */}
      <Link to={`/profile/${creator.username}`} style={{ position: 'relative', marginBottom: '14px' }}>
        <img
          src={creator.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
          alt={creator.full_name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #ffffff',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
          }}
        />
      </Link>

      {/* Name & Handle */}
      <Link to={`/profile/${creator.username}`}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '3px' }}>
          {creator.full_name || creator.username}
        </h4>
      </Link>
      <p style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '600', marginBottom: '6px' }}>
        @{creator.username}
      </p>

      {/* Profession */}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '10px' }}>
        {creator.professional_title || 'Creative Specialist'}
      </p>

      {/* Location */}
      {creator.location && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '14px' }}>
          <MapPin size={13} />
          <span>{creator.location}</span>
        </div>
      )}

      {/* Skills Badges */}
      {creator.skills && creator.skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginBottom: '18px' }}>
          {creator.skills.slice(0, 3).map((sk) => (
            <span key={sk.id} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
              {sk.name}
            </span>
          ))}
        </div>
      )}

      {/* Followers Counter */}
      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: '500' }}>
        <strong style={{ color: 'var(--text-main)' }}>{followersCount}</strong> Followers
      </div>

      {/* Action Button */}
      <div style={{ width: '100%', marginTop: 'auto' }}>
        {isOwnCard ? (
          <Link to="/my-profile" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
            View My Profile
          </Link>
        ) : (
          <button
            onClick={handleFollow}
            disabled={loading}
            className={`btn btn-sm ${following ? 'btn-secondary' : 'btn-primary'}`}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            {following ? (
              <>
                <Check size={14} color="var(--success)" />
                <span>Following</span>
              </>
            ) : (
              <>
                <UserPlus size={14} />
                <span>Follow</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
