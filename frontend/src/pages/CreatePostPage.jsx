// frontend/src/pages/CreatePostPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';
import {
  Image as ImageIcon,
  Film,
  FolderGit2,
  FileText,
  Music,
  UploadCloud,
  X,
  Plus,
  Check,
  Eye,
  Globe,
  Lock,
  Sparkles,
  Link2,
  Github,
  Layers
} from 'lucide-react';
import { UnsplashPickerModal } from '../components/UnsplashPickerModal';

export const CreatePostPage = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Post Type Tabs (Exact matching Figma screen 07: Image, Video, Project, Article, Audio)
  const [postType, setPostType] = useState('image'); // 'image', 'video', 'project', 'article', 'audio'
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [unsplashModalOpen, setUnsplashModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: '',
    description: '',
    category_id: '',
    visibility: 'public',
    status: 'published',
    media_urls: [],
    tags: ['Branding', 'VisualIdentity'],
    // Project fields
    project_url: '',
    github_url: '',
    technologies: ''
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.getPosts({ limit: 1 });
        if (res.success && res.data?.categories) {
          const cats = res.data.categories;
          setCategories(cats);

          const catParam = searchParams.get('category');
          if (catParam) {
            const matched = cats.find((c) => String(c.id) === String(catParam) || c.slug === catParam);
            if (matched) {
              setForm((prev) => ({ ...prev, category_id: matched.id }));
              return;
            }
          }

          if (cats.length > 0 && !form.category_id) {
            setForm((prev) => ({ ...prev, category_id: cats[0].id }));
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    try {
      for (const file of files) {
        const folder = postType === 'video' ? 'videos' : 'posts';
        const res = await api.uploadFile(file, folder);
        if (res.success && res.data?.full_url) {
          setForm((prev) => ({ ...prev, media_urls: [...prev.media_urls, res.data.full_url] }));
        }
      }
      showToast('Media file(s) uploaded successfully!', 'success');
    } catch (err) {
      showToast(err.message || 'File upload failed', 'error');
    } finally {
      setUploading(false);
    }
  };

  const removeMedia = (index) => {
    setForm((prev) => ({ ...prev, media_urls: prev.media_urls.filter((_, i) => i !== index) }));
  };

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput('');
    }
  };

  const removeTag = (t) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== t) }));
  };

  const handleSubmit = async (submitStatus = 'published') => {
    if (!form.title.trim()) {
      showToast('Please enter a post title.', 'error');
      return;
    }
    if (!form.category_id) {
      showToast('Please select a category.', 'error');
      return;
    }
    if (form.media_urls.length === 0 && postType !== 'project' && postType !== 'article') {
      showToast('Please upload media or select an image/video.', 'error');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...form,
        post_type: postType === 'article' || postType === 'audio' ? 'image' : postType,
        status: submitStatus
      };

      const res = await api.createPost(payload);
      if (res.success) {
        showToast(submitStatus === 'draft' ? 'Draft saved successfully!' : 'Post published successfully!', 'success');
        navigate('/my-posts');
      }
    } catch (err) {
      showToast(err.message || 'Failed to publish post', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUnsplash = (url) => {
    setForm((prev) => ({ ...prev, media_urls: [...prev.media_urls, url] }));
    showToast('High-res Unsplash photo attached!', 'success');
  };

  const typeTabs = [
    { id: 'image', label: 'Image', icon: ImageIcon },
    { id: 'video', label: 'Video', icon: Film },
    { id: 'project', label: 'Project', icon: FolderGit2 },
    { id: 'article', label: 'Article', icon: FileText },
    { id: 'audio', label: 'Audio', icon: Music }
  ];

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', paddingBottom: '40px' }}>
      <UnsplashPickerModal
        isOpen={unsplashModalOpen}
        onClose={() => setUnsplashModalOpen(false)}
        onSelectImage={handleSelectUnsplash}
        title="Browse High-Quality Showcase Photos"
      />

      {/* Header (Figma screen 07) */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0c1538', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
          Create New Post
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
          Publish your creative portfolios, commercial showreels, code architectures, or case studies.
        </p>
      </div>

      {/* Post Type Selector Pills (Figma Screen 07: [Image] [Video] [Project] [Article] [Audio]) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#ffffff',
        padding: '8px',
        borderRadius: '16px',
        border: '1px solid #edf2f7',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        marginBottom: '24px',
        overflowX: 'auto'
      }}>
        {typeTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = postType === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPostType(tab.id)}
              style={{
                flex: '1 1 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: isActive ? 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
                boxShadow: isActive ? '0 4px 14px rgba(110, 37, 232, 0.35)' : 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={17} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Form Card (Figma screen 07 layout) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '32px',
        border: '1px solid #edf2f7',
        boxShadow: '0 4px 25px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px'
      }}>
        {/* 1. Title */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0c1538', marginBottom: '8px' }}>
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Modern Brand Identity & Visual System for Nova Studio"
            value={form.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#0c1538',
              fontSize: '0.95rem',
              outline: 'none',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
            }}
          />
        </div>

        {/* 2. Description */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0c1538', marginBottom: '8px' }}>
            Description
          </label>
          <textarea
            name="description"
            rows={5}
            placeholder="Write a clear overview of the project, goals, creative process, and results achieved..."
            value={form.description}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#0c1538',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'inherit',
              lineHeight: 1.6
            }}
          />
        </div>

        {/* 3. Category Dropdown */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0c1538', marginBottom: '8px' }}>
            Category
          </label>
          <select
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '13px 16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#0c1538',
              fontSize: '0.95rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Tags Input with Pills */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0c1538', marginBottom: '8px' }}>
            Tags
          </label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Add tag and press Enter (e.g., Branding, FullStack)..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addTag();
                }
              }}
              style={{
                flex: 1,
                padding: '11px 16px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={addTag}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0 18px', fontWeight: 700 }}
            >
              Add
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {form.tags.map((t) => (
              <span
                key={t}
                style={{
                  background: 'rgba(110, 37, 232, 0.08)',
                  color: '#6e25e8',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                #{t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  style={{ background: 'none', border: 'none', color: '#6e25e8', cursor: 'pointer', padding: 0 }}
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* 5. Project Extra Fields (When Project is selected) */}
        {postType === 'project' && (
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#0c1538', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={17} color="#6e25e8" />
              <span>Project Deliverable Links &amp; Stack</span>
            </h4>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                Live Website / Demo URL:
              </label>
              <input
                type="url"
                name="project_url"
                placeholder="https://myproject-demo.com"
                value={form.project_url}
                onChange={handleChange}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                GitHub Repository URL:
              </label>
              <input
                type="url"
                name="github_url"
                placeholder="https://github.com/username/project-repo"
                value={form.github_url}
                onChange={handleChange}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                Technologies Used:
              </label>
              <input
                type="text"
                name="technologies"
                placeholder="e.g., React.js, PHP, MySQL, Tailwind CSS"
                value={form.technologies}
                onChange={handleChange}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>
        )}

        {/* 6. Media Upload Box (Figma Screen 07: Dashed Drag & Drop Box) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0c1538' }}>
              Media Upload
            </label>
            <button
              type="button"
              onClick={() => setUnsplashModalOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#6e25e8',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles size={14} />
              <span>Or Pick from Unsplash</span>
            </button>
          </div>

          <label style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '36px 20px',
            border: '2px dashed #cbd5e1',
            borderRadius: '16px',
            background: '#faf5ff',
            cursor: uploading ? 'wait' : 'pointer',
            textAlign: 'center',
            transition: 'all 0.2s ease'
          }}>
            <input
              type="file"
              multiple
              accept={postType === 'video' ? 'video/mp4,video/webm' : 'image/*,video/mp4'}
              onChange={handleFileUpload}
              disabled={uploading}
              style={{ display: 'none' }}
            />
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6e25e8',
              boxShadow: '0 4px 14px rgba(110, 37, 232, 0.15)',
              marginBottom: '12px'
            }}>
              <UploadCloud size={26} />
            </div>
            <span style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0c1538', marginBottom: '4px' }}>
              {uploading ? 'Uploading media files...' : 'Drag and drop files here or click to browse'}
            </span>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Supports JPG, PNG, MP4, WEBM up to 50MB
            </span>
          </label>

          {/* Uploaded Media Thumbnails */}
          {form.media_urls.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px', marginTop: '16px' }}>
              {form.media_urls.map((url, index) => {
                const isVideo = url.endsWith('.mp4') || url.endsWith('.webm');
                return (
                  <div key={index} style={{ position: 'relative', height: '100px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    {isVideo ? (
                      <video src={url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <img src={url} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                    <button
                      type="button"
                      onClick={() => removeMedia(index)}
                      style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.7)',
                        color: '#fff',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 7. Visibility Options (Public / Private) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0c1538', marginBottom: '8px' }}>
            Visibility
          </label>
          <div style={{ display: 'flex', gap: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={form.visibility === 'public'}
                onChange={handleChange}
                style={{ accentColor: '#6e25e8', width: '16px', height: '16px' }}
              />
              <Globe size={15} color="#10b981" />
              <span>Public</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
              <input
                type="radio"
                name="visibility"
                value="private"
                checked={form.visibility === 'private'}
                onChange={handleChange}
                style={{ accentColor: '#6e25e8', width: '16px', height: '16px' }}
              />
              <Lock size={15} color="#64748b" />
              <span>Private</span>
            </label>
          </div>
        </div>

        {/* 8. Action Buttons (Figma Screen 07: [Save Draft] [Publish Post]) */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '14px',
          paddingTop: '20px',
          borderTop: '1px solid #f1f5f9'
        }}>
          <button
            type="button"
            onClick={() => handleSubmit('draft')}
            disabled={loading}
            className="btn btn-secondary"
            style={{ padding: '12px 24px', fontWeight: 700 }}
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={() => handleSubmit('published')}
            disabled={loading}
            className="btn btn-primary"
            style={{
              padding: '12px 30px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)',
              boxShadow: '0 6px 20px rgba(110, 37, 232, 0.4)'
            }}
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
