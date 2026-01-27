import { useState, useEffect } from 'react';

export function useScrollPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('newsletter-popup-shown');
    if (hasSeenPopup) {
      setHasShownPopup(true);
      return;
    }

    const handleScroll = () => {
      if (hasShownPopup) return;

      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollPercentage >= 70) {
        setShowPopup(true);
        setHasShownPopup(true);
        // Mark as shown in session storage
        sessionStorage.setItem('newsletter-popup-shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShownPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
}