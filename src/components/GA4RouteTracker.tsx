import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function GA4RouteTracker() {
  const { pathname, search, hash } = useLocation();
  const lastPathRef = useRef<string>("");

  useEffect(() => {
    // Only track if user granted consent in your banner logic
    try {
      if (localStorage.getItem("consent.v1") !== "accepted") return;
    } catch {}

    // Ensure gtag is present
    if (typeof window.gtag !== "function") return;

    // Build a stable page path (include search; include hash if you care)
    const page_path = `${pathname}${search}`;

    // Avoid accidental duplicates (rapid remounts, etc.)
    if (lastPathRef.current === page_path) return;
    lastPathRef.current = page_path;

    // Wait a microtick so document.title reflects the new route
    const id = setTimeout(() => {
      // Send GA4 page_view
      window.gtag!("event", "page_view", {
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => clearTimeout(id);
  }, [pathname, search, hash]);

  return null;
}