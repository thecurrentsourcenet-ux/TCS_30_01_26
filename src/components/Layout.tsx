import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Info, Mail, Calendar, Linkedin } from 'lucide-react';
import { lazy, Suspense } from 'react';
import Logo from './Logo';
import ScrollToTop from './ScrollToTop';
import { useYearEndPopup } from '../hooks/useYearEndPopup';

// Lazy load header and ad preferences
const Header = lazy(() => import('./header/Header'));
const AdPreferences = lazy(() => import('./AdPreferences'));
const YearEndPresentationPopup = lazy(() => import('./YearEndPresentationPopup'));

const HeaderLoader = () => (
  <div className="bg-white border-b border-gray-100 h-20 animate-pulse"></div>
);

interface LayoutProps {
  children: React.ReactNode;
  timelineFilters?: {
    availableCategories: string[];
    availableYears: string[];
    selectedCategories: Set<string>;
    selectedYears: Set<string>;
    toggleCategory: (category: string) => void;
    toggleYear: (year: string) => void;
    clearAllFilters: () => void;
    hasActiveFilters: boolean;
    filteredCount: number;
    totalCount: number;
  };
}

export default function Layout({ children, timelineFilters }: LayoutProps) {
  const [showAdPreferences, setShowAdPreferences] = useState(false);
  const location = useLocation();
  const isTimelinePage = location.pathname === '/';

  const isYearEndPresentationPage = location.pathname === '/year-end-presentation';
  const { isVisible: showYearEndPopup, closePopup: closeYearEndPopup } = useYearEndPopup({
    enabled: !isYearEndPresentationPage,
    delayMs: 15000,
    scrollThreshold: 50
  });

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<HeaderLoader />}>
        <Header />
      </Suspense>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 lg:pb-20">
        {children}
      </main>

      <footer className="mt-12 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <div className="mb-2 flex items-center justify-center sm:justify-start">
                <Logo compact hideTagline />
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                Comprehensive energy information hub
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="mb-2 text-sm font-semibold text-gray-800">Quick Links</h3>
              <ul className="flex flex-col items-center gap-1.5 sm:items-start">
                <li>
                  <Link to="/" className="text-xs text-gray-600 hover:text-electric">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link to="/infographics" className="text-xs text-gray-600 hover:text-electric">
                    Infographics
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-xs text-gray-600 hover:text-electric">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-xs text-gray-600 hover:text-electric">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-xs text-gray-600 hover:text-electric">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="mb-2 text-sm font-semibold text-gray-800">Contact</h3>
              <p className="text-xs text-gray-600">
                <a href="mailto:thecurrentsource.net@gmail.com" className="hover:text-electric">
                  thecurrentsource.net@gmail.com
                </a>
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="mb-2 text-sm font-semibold text-gray-800">Connect</h3>
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <a
                  href="https://it.linkedin.com/in/the-current-source-616307380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@TheCurrentSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@TheCurrentSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black"
                  aria-label="TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-3">
            <p className="text-center text-xs text-gray-600">
              &copy; {new Date().getFullYear()} TheCurrentSource. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop sticky footer - compact */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-electric-100 p-2 rounded">
                <Mail className="h-4 w-4 text-electric" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-800">Free Monthly Energy Digest</span>
                <span className="text-gray-600 ml-2">Comprehensive, organized, reliable</span>
              </div>
            </div>

            <Link
              to="/newsletter"
              className="bg-electric text-white px-6 py-2.5 rounded-lg hover:bg-electric-600 transition-all duration-200 text-sm font-semibold flex items-center gap-2 shadow hover:shadow-md"
            >
              <Mail className="h-4 w-4" />
              Subscribe Free
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky footer - compact */}
      <div className="fixed bottom-0 left-0 right-0 bg-electric text-white z-40 lg:hidden">
        <div className="px-4 py-3">
          <Link
            to="/newsletter"
            className="flex items-center justify-center gap-2 w-full bg-white text-electric px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-base shadow-lg"
          >
            <Mail className="h-4 w-4" />
            Subscribe Free
          </Link>
        </div>
      </div>

      {/* ⬇️ AdPreferences resta DENTRO al wrapper principale */}
      <Suspense fallback={null}>
        <AdPreferences
          isOpen={showAdPreferences}
          onClose={() => setShowAdPreferences(false)}
        />
      </Suspense>

      {/* Year-End Presentation Popup */}
      <Suspense fallback={null}>
        <YearEndPresentationPopup
          isVisible={showYearEndPopup}
          onClose={closeYearEndPopup}
        />
      </Suspense>

      {/* Scroll to top on route change and show button */}
      <ScrollToTop />
    </div>
  );
}