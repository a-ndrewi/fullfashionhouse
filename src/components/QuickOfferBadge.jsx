import React from 'react';
import { Phone } from 'lucide-react';

const QuickOfferBadge = ({ phoneNumber }) => {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-accent to-amber-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2 sm:py-3">
          <span className="text-white font-bold text-base sm:text-lg">
            Oferte Speciale Disponibile!
          </span>
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-accent font-bold py-2 px-4 sm:px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Solicită Ofertă Rapidă</span>
            <span className="sm:hidden">Apelează</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickOfferBadge;
