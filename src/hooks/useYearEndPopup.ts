import { useState, useEffect } from 'react';

const POPUP_SHOWN_KEY = 'yearEndPopupShown';
const POPUP_DISMISSED_KEY = 'yearEndPopupDismissed';

interface UseYearEndPopupOptions {
  delayMs?: number;
  scrollThreshold?: number;
  enabled?: boolean;
}

export function useYearEndPopup(options: UseYearEndPopupOptions = {}) {
  const {
    delayMs = 10000,
    scrollThreshold = 40,
    enabled = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const hasBeenShown = sessionStorage.getItem(POPUP_SHOWN_KEY);
    const hasBeenDismissed = localStorage.getItem(POPUP_DISMISSED_KEY);

    if (hasBeenShown || hasBeenDismissed) {
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let hasScrolled = false;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= scrollThreshold && !hasScrolled) {
        hasScrolled = true;

        timeoutId = setTimeout(() => {
          setIsVisible(true);
          sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
        }, delayMs);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delayMs, scrollThreshold, enabled]);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem(POPUP_DISMISSED_KEY, 'true');
  };

  const showPopup = () => {
    setIsVisible(true);
    sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
  };

  return {
    isVisible,
    closePopup,
    showPopup
  };
}
