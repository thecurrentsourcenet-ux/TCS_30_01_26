import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { ProfileWithSubscription, Subscription } from '../types';

export function useAuth() {
  const [user, setUser] = useState<ProfileWithSubscription | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSupabaseConfigured() || !supabase) {
      setLoading(false);
      return;
    }

    // Check active session and subscribe to changes
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setUser(null);
          setSubscription(null);
          setLoading(false);
        }
      }
    );

    return () => {
      authSubscription.unsubscribe();
    };
  }, []);

  async function fetchProfile(userId: string) {
    if (!supabase) return;
    
    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError) throw profileError;

      const { data: sub, error: subError } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (subError && subError.code !== 'PGRST116') throw subError;

      setUser({ ...profile, subscription: sub || undefined });
      setSubscription(sub || null);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    if (!supabase) return;
    
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  async function handleSubscribe(priceId: string) {
    if (!user) {
      navigate('/login', { state: { returnTo: '/newsletter' } });
      return;
    }

    try {
      const { createCheckoutSession } = await import('../lib/stripe');
      await createCheckoutSession(priceId, subscription?.stripe_customer_id);
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  }

  return {
    user,
    subscription,
    loading,
    signOut,
    handleSubscribe
  };
}