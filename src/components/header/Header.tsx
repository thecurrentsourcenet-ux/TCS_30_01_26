import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from '../Logo';
import MainNav from './MainNav';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';
import HeaderErrorBoundary from './ErrorBoundary';
import { useAuth } from '../../hooks/useAuth';
import type { HeaderProps } from './types';

export default function Header({ className = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSearch = useCallback((query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const toggleDropdown = useCallback((categoryId: string) => {
    setActiveDropdown(prevActive => (prevActive === categoryId ? null : categoryId));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <HeaderErrorBoundary>
      <header
        className={`bg-white border-b border-gray-100 sticky top-0 z-50 ${className}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto">
          {/* Responsive header row:
             - shorter on mobile, taller on md/lg
             - top-aligned items */}
          <div className="flex items-start justify-between min-h-[72px] sm:min-h-[96px] md:min-h-[112px] py-2 px-4 sm:px-6 lg:px-8">
            {/* Left: brand + (desktop) nav */}
            <div className="flex items-start space-x-6 md:space-x-8">
              {/* Small logo on mobile */}
              <Logo size="small" className="md:hidden" />
              {/* Bigger logo from md+ upward */}
              <Logo size="medium" className="hidden md:flex" />

              {/* Desktop/Large nav (hidden on small screens) */}
              <div className="hidden lg:block">
                <MainNav
                  activeDropdown={activeDropdown}
                  toggleDropdown={toggleDropdown}
                />
              </div>
            </div>

            {/* Right: search (md+), user, hamburger (mobile) */}
            <div className="flex items-start space-x-4">
              <div className="hidden md:block">
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* LinkedIn Profile Link */}
              <a
                href="https://it.linkedin.com/in/the-current-source-616307380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
                aria-label="Follow us on LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <UserMenu />

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-600 hover:text-electric p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-opacity-50 rounded"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <MobileMenu
              id="mobile-menu"
              isOpen={isMobileMenuOpen}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              onSearch={handleSearch}
              onClose={closeMobileMenu}
              user={user}
            />
          )}
        </div>
      </header>
    </HeaderErrorBoundary>
  );
}