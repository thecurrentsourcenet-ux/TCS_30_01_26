import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
}

export default function AuthGuard({ children, requireSubscription = false }: AuthGuardProps) {
  const { user, subscription, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ returnTo: location.pathname }} replace />;
  }

  if (requireSubscription && !subscription?.status === 'active') {
    return <Navigate to="/pricing" state={{ returnTo: location.pathname }} replace />;
  }

  return <>{children}</>;
}