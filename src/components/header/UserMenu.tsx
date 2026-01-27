import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, subscription, signOut } = useAuth();

  // Only show user menu if user is logged in
  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors"
      >
        <User className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">
          {user.full_name || 'Account'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-600 hover:bg-electric-50 hover:text-electric transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Profile Settings
          </Link>
          {subscription?.status === 'active' ? (
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-600 hover:bg-electric-50 hover:text-electric transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Manage Subscription
            </Link>
          ) : (
            <Link
              to="/newsletter"
              className="block px-4 py-2 text-gray-600 hover:bg-electric-50 hover:text-electric transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Upgrade to Premium
            </Link>
          )}
          <button
            onClick={() => {
              setIsOpen(false);
              signOut();
            }}
            className="w-full text-left px-4 py-2 text-gray-600 hover:bg-electric-50 hover:text-electric transition-colors"
          >
            <span className="flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
}