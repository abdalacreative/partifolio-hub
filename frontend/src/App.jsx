// frontend/src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Public & Community Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CreatorsPage } from './pages/CreatorsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PostDetailPage } from './pages/PostDetailPage';
import { VideoPostPage } from './pages/VideoPostPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CategoriesPage } from './pages/CategoriesPage';

// Auth Pages
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';

// Dashboard Creator Pages
import { DashboardPage } from './pages/DashboardPage';
import { CreatePostPage } from './pages/CreatePostPage';
import { MyPostsPage } from './pages/MyPostsPage';
import { MessagesPage } from './pages/MessagesPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ProfileSetupPage } from './pages/ProfileSetupPage';

// Admin Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminOverviewPage } from './pages/admin/AdminOverviewPage';
import { AdminUsersPage } from './pages/admin/AdminUsersPage';
import { AdminReportsPage } from './pages/admin/AdminReportsPage';

export function App() {
  return (
    <Routes>
      {/* 1. Public Browsing Routes with Main Header & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/:id/video" element={<VideoPostPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* 2. Authentication Flow Pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* 3. Creator Dashboard App (Protected) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/my-posts" element={<MyPostsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* 4. Administrative Moderation Portal (Protected Admin) */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin-login" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverviewPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
      </Route>

      {/* 5. Fallback 404 Route */}
      <Route
        path="*"
        element={
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The showcase or destination you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">Return Home</a>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
