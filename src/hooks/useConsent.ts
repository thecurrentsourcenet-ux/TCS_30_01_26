import { useState, useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: {
      requestNonPersonalizedAds?: number;
      push: (params: unknown) => void;
    };
    acceptConsent?: () => void;
    rejectConsent?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

interface ConsentState {
  status: ConsentStatus;
  acceptConsent: () => void;
  rejectConsent: () => void;
  showBanner: boolean;
}

export function useConsent(): ConsentState {
  const [status, setStatus] = useState<ConsentStatus>(() => {
    return (localStorage.getItem('consent.v1') as ConsentStatus) || 'unset';
  });

  useEffect(() => {
    const handleConsentChange = (e: CustomEvent) => {
      setStatus(e.detail as ConsentStatus);
    };

    window.addEventListener('consentchange', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('consentchange', handleConsentChange as EventListener);
    };
  }, []);

  const acceptConsent = () => {
    if (window.acceptConsent) {
      window.acceptConsent();
    } else {
      localStorage.setItem('consent.v1', 'accepted');
      setStatus('accepted');
      window.location.reload();
    }
  };

  const rejectConsent = () => {
    if (window.rejectConsent) {
      window.rejectConsent();
    } else {
      localStorage.setItem('consent.v1', 'rejected');
      setStatus('rejected');
      window.location.reload();
    }
  };

  return {
    status,
    acceptConsent,
    rejectConsent,
    showBanner: status === 'unset'
  };
}

export function refreshAdsAfterNavigation() {
  if (typeof window === 'undefined') return;

  const adSlots = document.querySelectorAll('.adsbygoogle');

  adSlots.forEach((slot) => {
    const adStatus = slot.getAttribute('data-ad-status');
    const adsbygoogleStatus = slot.getAttribute('data-adsbygoogle-status');

    if (adStatus === 'unfilled' || adsbygoogleStatus === 'done') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense re-request failed:', e);
      }
    }
  });
}
