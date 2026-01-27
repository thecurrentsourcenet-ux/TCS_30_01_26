
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { CategoryStructure } from '../../types';

interface CategoryDropdownProps {
  category: CategoryStructure;
  isActive?: boolean;
  onToggle?: () => void;
}

export default function CategoryDropdown({ 
  category, 
  isActive = false, 
  onToggle 
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;
  
  // Check if current category or any subcategory is active
  const isCurrentlyActive = isActive || location.pathname.includes(`/category/${category.id}`);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle escape key press
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);
  
  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (onToggle) {
        onToggle();
      } else {
        setIsOpen(!isOpen);
      }
      event.preventDefault();
    }
  };
  
  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={onToggle ? isActive : isOpen}
        aria-haspopup="true"
        className={`flex items-center space-x-1 transition-colors ${
          isCurrentlyActive ? 'text-electric' : 'text-gray-600 hover:text-electric'
        }`}
      >
        <span>{category.name}</span>
        {hasSubcategories && (
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${
              (onToggle ? isActive : isOpen) ? 'rotate-180' : ''
            }`} 
            aria-hidden="true"
          />
        )}
      </button>
      
      {(onToggle ? isActive : isOpen) && hasSubcategories && (
        <div 
          className="absolute left-0 z-20 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="category-dropdown-button"
        >
          {category.subcategories?.map((sub) => {
            const isSubActive = location.pathname === `/category/${category.id}/${sub.id}`;
            
            return (
              <Link
                key={sub.id}
                to={`/category/${category.id}/${sub.id}`}
                className={`block px-4 py-2 transition-colors ${
                  isSubActive 
                    ? 'bg-electric-50 text-electric' 
                    : 'text-gray-600 hover:bg-electric-50 hover:text-electric'
                }`}
                onClick={() => {
                  if (onToggle) {
                    onToggle();
                  } else {
                    setIsOpen(false);
                  }
                }}
                role="menuitem"
              >
                {sub.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
