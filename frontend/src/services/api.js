// frontend/src/services/api.js

const API_BASE = '/api';

export const getStoredToken = () => localStorage.getItem('partfoliohub_token');
export const setStoredToken = (token) => localStorage.setItem('partfoliohub_token', token);
export const removeStoredToken = () => localStorage.removeItem('partfoliohub_token');

export async function apiRequest(endpoint, options = {}) {
  const token = getStoredToken();
  const headers = {
    'Accept': 'application/json',
    ...(options.headers || {})
  };

  // Only add Content-Type if not FormData
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers
  };

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`;
  
  try {
    const res = await fetch(url, config);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMsg = data.message || `Request failed with status ${res.status}`;
      const err = new Error(errorMsg);
      err.status = res.status;
      err.errors = data.errors || {};
      throw err;
    }

    return data;
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error);
    throw error;
  }
}

export const api = {
  // Auth
  register: (payload) => apiRequest('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  socialLogin: (payload) => apiRequest('/auth/social', { method: 'POST', body: JSON.stringify(payload) }),
  logout: () => apiRequest('/auth/logout', { method: 'POST' }),
  getMe: () => apiRequest('/auth/me'),
  forgotPassword: (email) => apiRequest('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) }),
  resetPassword: (payload) => apiRequest('/auth/reset-password', { method: 'POST', body: JSON.stringify(payload) }),

  // Users & Profiles
  getProfile: (usernameOrId) => {
    const param = typeof usernameOrId === 'number' ? `id=${usernameOrId}` : `username=${encodeURIComponent(usernameOrId)}`;
    return apiRequest(`/users/profile?${param}`);
  },
  updateProfile: (payload) => apiRequest('/users/update-profile', { method: 'POST', body: JSON.stringify(payload) }),
  setupProfile: (payload) => apiRequest('/users/setup-profile', { method: 'POST', body: JSON.stringify(payload) }),
  getCreators: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/users/creators?${query}`);
  },
  getSettings: () => apiRequest('/users/settings'),
  updateSettings: (payload) => apiRequest('/users/settings', { method: 'POST', body: JSON.stringify(payload) }),

  // Posts & Projects
  getPosts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/posts/list?${query}`);
  },
  getPost: (id) => apiRequest(`/posts/get?id=${id}`),
  createPost: (payload) => apiRequest('/posts/create', { method: 'POST', body: JSON.stringify(payload) }),
  updatePost: (payload) => apiRequest('/posts/update', { method: 'POST', body: JSON.stringify(payload) }),
  deletePost: (id) => apiRequest('/posts/delete', { method: 'POST', body: JSON.stringify({ id }) }),
  getMyPosts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/posts/my-posts?${query}`);
  },

  // Social
  toggleLike: (postId) => apiRequest('/social/like', { method: 'POST', body: JSON.stringify({ post_id: postId }) }),
  addComment: (postId, content) => apiRequest('/social/comment', { method: 'POST', body: JSON.stringify({ post_id: postId, content }) }),
  editComment: (commentId, content) => apiRequest('/social/comment', { method: 'PUT', body: JSON.stringify({ comment_id: commentId, content }) }),
  deleteComment: (commentId) => apiRequest(`/social/comment?comment_id=${commentId}`, { method: 'DELETE' }),
  toggleSave: (postId) => apiRequest('/social/save', { method: 'POST', body: JSON.stringify({ post_id: postId }) }),
  toggleFollow: (userId) => apiRequest('/social/follow', { method: 'POST', body: JSON.stringify({ user_id: userId }) }),

  // Messages
  getConversations: () => apiRequest('/messages/conversations'),
  getMessages: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/messages/messages?${query}`);
  },
  sendMessage: (receiverId, message) => apiRequest('/messages/send', { method: 'POST', body: JSON.stringify({ receiver_id: receiverId, message }) }),

  // Notifications
  getNotifications: (type = 'all') => apiRequest(`/notifications/list?type=${type}`),
  markNotificationRead: (id, all = false) => apiRequest('/notifications/read', { method: 'POST', body: JSON.stringify({ id, all }) }),
  deleteNotification: (id) => apiRequest('/notifications/delete', { method: 'POST', body: JSON.stringify({ id }) }),

  // Analytics
  getAnalytics: (days = 7) => apiRequest(`/analytics/overview?days=${days}`),

  // Search
  search: (q) => apiRequest(`/posts/search?q=${encodeURIComponent(q)}`),

  // Admin
  getAdminStats: () => apiRequest('/admin/stats'),
  getAdminUsers: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/admin/users?${query}`);
  },
  adminUserAction: (userId, action, extra = {}) => apiRequest('/admin/users', { method: 'POST', body: JSON.stringify({ user_id: userId, action, ...extra }) }),
  getAdminReports: (status = 'all') => apiRequest(`/admin/reports?status=${status}`),
  adminReportAction: (reportId, action, notes = '') => apiRequest('/admin/report-action', { method: 'POST', body: JSON.stringify({ report_id: reportId, action, notes }) }),

  // File Upload
  uploadFile: async (file, category = 'posts') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    return apiRequest('/upload', { method: 'POST', body: formData });
  }
};
