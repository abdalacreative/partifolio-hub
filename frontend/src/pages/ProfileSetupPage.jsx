// frontend/src/pages/ProfileSetupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import { Check, ArrowRight, ArrowLeft, Camera, Image, Sparkles, User, Briefcase, Globe, Eye } from 'lucide-react';

export const ProfileSetupPage = () => {
  const { user, refreshUser } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    full_name: user?.full_name || '',
    professional_title: user?.professional_title || 'Visual Designer & Creator',
    bio: user?.bio || 'Building modern digital products and creative brand systems.',
    location: user?.location || 'Mogadishu, Somalia',
    profile_photo: user?.profile_photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
    cover_photo: user?.cover_photo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    experience: '3+ Years',
    education: 'Bachelor of Creative Media',
    skills: ['Figma', 'React.js', 'UI/UX Design', 'Branding'],
    website: 'https://partfoliohub.com',
    whatsapp: '+252615000000',
    facebook: user?.facebook || 'https://www.facebook.com/share/19KxQX3pxa/',
    instagram: user?.instagram || 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi',
    tiktok: user?.tiktok || 'https://www.tiktok.com/@abdala.creator',
    portfolio_intro: 'Crafting thoughtful digital interfaces and impactful design solutions.'
  });

  const [newSkill, setNewSkill] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e, category, field) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const res = await api.uploadFile(file, category);
      if (res.success && res.data?.url) {
        setForm((prev) => ({ ...prev, [field]: res.data.full_url || res.data.url }));
        showToast('Image uploaded successfully!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Image upload failed', 'error');
    } finally {
      setUploading(false);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !form.skills.includes(newSkill.trim())) {
      setForm((prev) => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setForm((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skillToRemove) }));
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      const res = await api.setupProfile(form);
      if (res.success) {
        showToast('Profile setup complete! Welcome to your creator dashboard.', 'success');
        await refreshUser();
        navigate('/dashboard');
      }
    } catch (err) {
      showToast(err.message || 'Failed to save profile setup', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 20px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        {/* Progress Bar & Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>
            Complete Your Profile
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Set up your professional credentials to stand out to clients and fellow creators.
          </p>

          {/* Steps Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '24px' }}>
            {[1, 2, 3, 4].map((s) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: step >= s ? 'var(--primary)' : '#e2e8f0',
                  color: step >= s ? '#ffffff' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}>
                  {step > s ? <Check size={16} /> : s}
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: '600', color: step === s ? 'var(--primary)' : '#94a3b8' }}>
                  {s === 1 && 'Basic'}
                  {s === 2 && 'Professional'}
                  {s === 3 && 'Portfolio'}
                  {s === 4 && 'Preview'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '36px' }}>
          {/* STEP 1: Basic Information */}
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Step 1: Basic Information</h2>

              {/* Cover & Avatar Upload Preview */}
              <div style={{ position: 'relative', height: '180px', borderRadius: '14px', overflow: 'hidden', background: '#0f172a', marginBottom: '45px' }}>
                <img
                  src={form.cover_photo}
                  alt="Cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <label style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Camera size={14} /> Change Cover
                  <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'covers', 'cover_photo')} style={{ display: 'none' }} />
                </label>

                {/* Avatar Overlay */}
                <div style={{ position: 'absolute', bottom: '-25px', left: '25px', width: '90px', height: '90px' }}>
                  <img
                    src={form.profile_photo}
                    alt="Avatar"
                    style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: 'var(--shadow-md)' }}
                  />
                  <label style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    background: 'var(--primary)',
                    color: '#fff',
                    padding: '6px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <Camera size={14} />
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'avatars', 'profile_photo')} style={{ display: 'none' }} />
                  </label>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="full_name" value={form.full_name} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Professional Title</label>
                  <input type="text" name="professional_title" placeholder="e.g. Senior Brand & Graphic Designer" value={form.professional_title} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" name="location" placeholder="e.g. Mogadishu, Somalia" value={form.location} onChange={handleChange} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Short Bio</label>
                <textarea rows={3} name="bio" placeholder="Tell clients and collaborators about your passion..." value={form.bio} onChange={handleChange} className="form-textarea" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <button onClick={() => setStep(2)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Professional Information */}
          {step === 2 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Step 2: Professional Skills & Socials</h2>

              <div className="form-group">
                <label className="form-label">Skills & Technologies (Tag Chips)</label>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <input
                    type="text"
                    placeholder="e.g. Figma, React, After Effects"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } }}
                    className="form-input"
                  />
                  <button type="button" onClick={addSkill} className="btn btn-secondary">Add</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {form.skills.map((sk) => (
                    <span key={sk} className="badge badge-primary" style={{ padding: '6px 12px', fontSize: '0.82rem', gap: '8px' }}>
                      {sk}
                      <button onClick={() => removeSkill(sk)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontWeight: 'bold' }}>×</button>
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <input type="text" name="experience" placeholder="e.g. 5+ Years" value={form.experience} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Education / Degree</label>
                  <input type="text" name="education" placeholder="e.g. B.Sc. Computer Science" value={form.education} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Website URL</label>
                  <input type="url" name="website" placeholder="https://..." value={form.website} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Contact</label>
                  <input type="text" name="whatsapp" placeholder="+252..." value={form.whatsapp} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Facebook Profile Link</label>
                  <input type="text" name="facebook" placeholder="https://www.facebook.com/share/..." value={form.facebook} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Instagram Profile Link</label>
                  <input type="text" name="instagram" placeholder="https://www.instagram.com/..." value={form.instagram} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">TikTok Profile Link</label>
                  <input type="text" name="tiktok" placeholder="https://www.tiktok.com/@..." value={form.tiktok} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <button onClick={() => setStep(1)} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => setStep(3)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Portfolio Information */}
          {step === 3 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Step 3: Portfolio Introduction</h2>

              <div className="form-group">
                <label className="form-label">Portfolio Introduction Statement</label>
                <textarea
                  rows={4}
                  name="portfolio_intro"
                  placeholder="Summarize your creative style and client offerings..."
                  value={form.portfolio_intro}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <button onClick={() => setStep(2)} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => setStep(4)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Preview Profile <Eye size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Live Preview */}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Step 4: Live Profile Preview</h2>

              <div style={{ border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px', background: '#fff' }}>
                <div style={{ height: '140px', background: '#0f172a' }}>
                  <img src={form.cover_photo} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', position: 'relative' }}>
                  <img
                    src={form.profile_photo}
                    alt="Avatar"
                    style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', marginTop: '-45px', marginBottom: '10px' }}
                  />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{form.full_name || 'Your Name'}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>{form.professional_title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '8px 0' }}>{form.bio}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {form.skills.map((s) => (
                      <span key={s} className="badge badge-neutral">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setStep(3)} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={handleComplete}
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 28px' }}
                >
                  <Check size={18} />
                  <span>{loading ? 'Publishing Profile...' : 'Complete & Launch Portfolio'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
