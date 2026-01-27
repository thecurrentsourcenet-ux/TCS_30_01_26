import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from '../components/AuthProvider';

export default function Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = (location.state as { returnTo?: string })?.returnTo || '/';

  useEffect(() => {
    if (user && !loading) {
      navigate(returnTo, { replace: true });
    }
  }, [user, loading, navigate, returnTo]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isSupabaseConfigured() || !supabase) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Authentication Unavailable
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Authentication is currently not configured. Please contact support.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Sign In - TheCurrentSource"
        description="Sign in to access premium energy insights and analysis."
        noIndex={true}
      />

      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to access premium energy insights
            </p>
          </div>

          <div className="mt-8">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#2563eb',
                      brandAccent: '#1d4ed8',
                    },
                  },
                },
              }}
              providers={[]}
              redirectTo={`${window.location.origin}/auth/callback`}
            />
          </div>
        </div>
      </div>
    </>
  );
}