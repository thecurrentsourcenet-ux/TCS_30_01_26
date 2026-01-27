import { useState, useEffect } from 'react';

export function useScrollNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('newsletter-popup-last-shown');
    
    if (lastShown === today) {
      setHasShownPopup(true);
      return;
    }

    let scrollTimer: NodeJS.Timeout;
    let timeTimer: NodeJS.Timeout;

    const handleScroll = () => {
      if (hasShownPopup) return;

      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      // Show popup at 50% scroll
      if (scrollPercentage >= 50) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (!hasShownPopup) {
            setShowPopup(true);
            setHasShownPopup(true);
            localStorage.setItem('newsletter-popup-last-shown', today);
          }
        }, 1000); // 1 second delay after reaching 50%
      }
    };

    // Also show after 30 seconds of being on page
    timeTimer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
        localStorage.setItem('newsletter-popup-last-shown', today);
      }
    }, 30000); // 30 seconds

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
      clearTimeout(timeTimer);
    };
  }, [hasShownPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
}