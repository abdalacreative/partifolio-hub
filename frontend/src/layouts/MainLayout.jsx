// frontend/src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlobalSearchModal } from '../components/GlobalSearchModal';
import { useAuth } from '../context/AuthContext';
import { Home, Compass, Users, LayoutDashboard, User } from 'lucide-react';

export const MainLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <NavLink to="/" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <Home size={19} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/explore" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <Compass size={19} />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/creators" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <Users size={19} />
          <span>Creators</span>
        </NavLink>
        <NavLink to={isAuthenticated ? '/dashboard' : '/login'} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to={isAuthenticated ? '/my-profile' : '/login'} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <User size={19} />
          <span>{isAuthenticated ? 'Profile' : 'Login'}</span>
        </NavLink>
      </nav>

      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};
