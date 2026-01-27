import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit() {
  const inited = useRef(false);
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push failed:', e);
      }
    };

    if (adRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              pushAd();
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' }
      );

      observer.observe(adRef.current);

      return () => observer.disconnect();
    } else {
      pushAd();
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", minHeight: 250 }}
      data-ad-client="ca-pub-4468932841277540"
      data-ad-slot="2559472230"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
