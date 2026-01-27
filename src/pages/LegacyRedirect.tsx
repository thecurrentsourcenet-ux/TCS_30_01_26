import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { articleToNewsArticle } from '../types';

export default function LegacyRedirect() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectArticle = async () => {
      if (!id) {
        navigate("/", { replace: true });
        return;
      }

      if (!isSupabaseConfigured() || !supabase) {
        // If Supabase is not configured, we can't fetch by ID to redirect.
        // Redirect to home or a generic error page.
        console.warn("Supabase not configured for LegacyRedirect. Redirecting to home.");
        navigate("/", { replace: true });
        return;
      }

      try {
        // Fetch all articles to find the one by ID and then get its slug
        const { data, error } = await supabase
          .from('articles')
          .select('*');

        if (error) throw error;

        const foundArticle = (data || [])
          .map(articleToNewsArticle)
          .find(a => a.id === id);

        if (foundArticle) {
          navigate(`/articles/${foundArticle.slug}`, { replace: true });
        } else {
          // If article not found, redirect to home
          navigate("/", { replace: true });
        }
      } catch (err) {
        console.error("Error during legacy redirect:", err);
        navigate("/", { replace: true }); // Redirect to home on error
      } finally {
        setLoading(false);
      }
    };

    redirectArticle();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric"></div>
      </div>
    );
  }

  return null;
}