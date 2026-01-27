import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { categories } from '../../data/categories';
import CategoryDropdown from './CategoryDropdown';

interface MainNavProps {
  className?: string;
  activeDropdown?: string | null;
  toggleDropdown?: (categoryId: string) => void;
}

export default function MainNav({ 
  className = '', 
  activeDropdown, 
  toggleDropdown 
}: MainNavProps) {
  const [localActiveDropdown, setLocalActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  const currentActiveDropdown = activeDropdown !== undefined ? activeDropdown : localActiveDropdown;
  const currentToggleDropdown = toggleDropdown || setLocalActiveDropdown;

  return (
    <nav className={`hidden lg:flex items-center space-x-6 ${className}`}>
      {categories.map((category) => (
        <CategoryDropdown 
          key={category.id} 
          category={category}
          isActive={currentActiveDropdown === category.id}
          onToggle={() => currentToggleDropdown(category.id)}
        />
      ))}
    </nav>
  );
}