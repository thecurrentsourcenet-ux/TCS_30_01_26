import { useEffect } from 'react';

export default function InArticleAd() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4468932841277540"
        data-ad-slot="1772579146"
      />
    </div>
  );
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
