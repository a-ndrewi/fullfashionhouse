import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

const FeaturedDeals = ({ featuredDeals, whatsappLink }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">Oferte Speciale Săptămâna Aceasta</h2>
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featuredDeals.map((deal, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur rounded-xl p-6 text-center hover:bg-white transition">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {deal.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{deal.item}</h3>
              <p className="text-3xl sm:text-4xl font-black text-indigo-600 mb-2">{deal.discount} REDUCERE</p>
              <p className="text-sm text-gray-600 font-semibold">{deal.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;
