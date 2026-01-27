import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Scale, ChevronRight, Zap } from 'lucide-react';
import { categories } from '../data/categories';

export default function CategoryNav() {
  const location = useLocation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="h-5 w-5" />;
      case 'Scale':
        return <Scale className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <nav className="space-y-6" aria-label="Category navigation">
      {/* Featured Technical Article */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100">
        <Link
          to="/hydrogen-book"
          className="block p-4 hover:bg-white/50 transition-colors rounded-lg"
        >
          <div className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Future of Hydrogen</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      {/* Regular Categories */}
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <Link
              to={`/category/${category.id}`}
              className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-2">
                {getIcon(category.icon)}
                <span className="font-semibold">{category.name}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          {category.subcategories && (
            <div className="p-2">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  to={`/category/${category.id}/${sub.id}`}
                  className={`block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md hover:text-blue-600 transition-colors ${
                    location.pathname === `/category/${category.id}/${sub.id}` ? 'bg-gray-50 text-blue-600' : ''
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}