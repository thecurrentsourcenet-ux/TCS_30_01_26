import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create singleton Supabase client to prevent multiple instances
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
};

// Reuse the same instance across HMR
export const supabase = 
  (globalThis as any).__supabase__ ?? 
  ((globalThis as any).__supabase__ = createSupabaseClient());

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};