import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { categories } from '../../data/categories';
import SearchBar from './SearchBar';
import type { MobileMenuProps } from './types';

export default function MobileMenu({ 
  id,
  isOpen, 
  activeDropdown, 
  toggleDropdown, 
  onSearch,
  onClose,
  user,
  className = ''
}: MobileMenuProps & { id?: string }) {
  const location = useLocation();

  return (
    <div 
      id={id}
      className={`lg:hidden transform transition-all duration-300 ease-in-out origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
      } ${className}`}
      aria-hidden={!isOpen}
    >
      <div className="border-t border-gray-100 py-4 px-4 space-y-4">
        <SearchBar onSearch={onSearch} mobile />

        <nav className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="py-2">
              {category.subcategories && category.subcategories.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleDropdown(category.id)}
                    className={`flex items-center justify-between w-full text-gray-600 hover:text-electric ${
                      location.pathname.includes(`/category/${category.id}`) ? 'text-electric' : ''
                    }`}
                    aria-expanded={activeDropdown === category.id}
                  >
                    <span>{category.name}</span>
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === category.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`mt-2 space-y-2 transition-all duration-300 ${
                      activeDropdown === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                    aria-hidden={activeDropdown !== category.id}
                  >
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/category/${category.id}/${sub.id}`}
                        className={`block pl-4 py-2 text-gray-600 hover:text-electric ${
                          location.pathname === `/category/${category.id}/${sub.id}` ? 'text-electric' : ''
                        }`}
                        onClick={onClose}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={`/category/${category.id}`}
                  className={`block text-gray-600 hover:text-electric ${
                    location.pathname.includes(`/category/${category.id}`) ? 'text-electric' : ''
                  }`}
                  onClick={onClose}
                >
                  {category.name}
                </Link>
              )}
            </div>
          ))}

          {!user && (
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="https://it.linkedin.com/in/the-current-source-616307380"
                onClick={onClose}
                className="flex items-center gap-3 w-full px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors mb-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span>Follow us on LinkedIn</span>
              </Link>
              <Link
                to="/newsletter"
                onClick={onClose}
                className="block w-full px-4 py-2 text-center text-white bg-electric rounded-lg hover:bg-electric-600"
              >
                Subscribe Now
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}