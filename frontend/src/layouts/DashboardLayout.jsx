// frontend/src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { GlobalSearchModal } from '../components/GlobalSearchModal';
import { useAuth } from '../context/AuthContext';

export const DashboardLayout = () => {
  const { user, loading, isAuthenticated } = useAuth();
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0f19', color: '#fff' }}>
        <p>Loading PartfolioHub...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-main)' }}>
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <DashboardHeader
          onToggleSidebar={() => setMobileSidebar(!mobileSidebar)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        <main style={{ flex: 1, padding: '28px', maxWidth: '1440px', width: '100%', margin: '0 auto' }} className="dashboard-main-content">
          <Outlet />
        </main>
      </div>

      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        @media (max-width: 640px) {
          .dashboard-main-content {
            padding: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};
