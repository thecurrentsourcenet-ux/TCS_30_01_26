import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params: {
        page_path?: string;
        page_location?: string;
        page_title?: string;
        debug_mode?: boolean;
        [key: string]: any;
      }
    ) => void;
  }
}

export function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    // Ensure gtag is available before sending page_view
    if (window.gtag && typeof window.gtag === 'function') {
      // Send pageview event for route changes
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: location.pathname + location.search,
        page_title: document.title,
        // Uncomment the line below for testing in development
        // debug_mode: true,
      });
    }
  }, [location]);
}