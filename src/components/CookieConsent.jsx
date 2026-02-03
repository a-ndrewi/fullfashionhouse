import React from 'react';

const CookieConsent = ({ showCookies, setShowCookies }) => {
  if (!showCookies) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-40 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-4 md:space-y-0">
        <p className="text-sm md:text-base text-center md:text-left md:flex-1">
          Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru îmbunătățiri de marketing. Continuând, accepți utilizarea cookie-urilor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 whitespace-nowrap w-full md:w-auto">
          <button
            onClick={() => setShowCookies(false)}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full font-semibold transition order-2 sm:order-1"
          >
            Accept doar necesare
          </button>
          <button
            onClick={() => setShowCookies(false)}
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition order-1 sm:order-2"
          >
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
