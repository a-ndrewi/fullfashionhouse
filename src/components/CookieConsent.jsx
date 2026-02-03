
import React, { useEffect } from 'react';

const CookieConsent = ({ showCookies, setShowCookies }) => {
  useEffect(() => {
    if (sessionStorage.getItem('cookieConsentShown')) {
      setShowCookies(false);
    }
  }, [setShowCookies]);

  if (!showCookies) return null;

  const handleAccept = () => {
    setShowCookies(false);
    sessionStorage.setItem('cookieConsentShown', 'true');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-background p-6 z-40 shadow-2xl border-t border-primary/30">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="md:flex-1 text-center md:text-left">
          <span className="block text-lg font-semibold mb-1">Consimțământ Cookie</span>
          <span className="block text-base leading-relaxed text-background/90">
            Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru îmbunătățiri de marketing. Continuând, accepți utilizarea cookie-urilor.
          </span>
        </div>
        <div className="flex flex-row gap-3 w-full md:w-auto justify-center md:justify-end">
          <button
            onClick={handleAccept}
            className="px-6 py-3 rounded-full font-semibold transition bg-background text-primary border border-primary/30 hover:bg-background/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Accept doar necesare
          </button>
          <button
            onClick={handleAccept}
            className="px-8 py-3 rounded-full font-semibold transition bg-accent text-primary shadow-md hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
