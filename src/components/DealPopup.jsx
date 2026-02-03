import React from 'react';
import { X, Tag, TrendingUp } from 'lucide-react';

const DealPopup = ({ showDealPopup, setShowDealPopup, whatsappLink, currentPage }) => {
  if (!showDealPopup || currentPage !== 'home') return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
        <button onClick={() => setShowDealPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
            <Tag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ofertă Limitată!</h3>
          <p className="text-gray-600 mb-6 text-lg">Reduceri de până la <span className="text-indigo-600 font-bold text-2xl">50%</span> la loturi selectate de haine second hand!</p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700 font-medium">✨ Loturi Haine Damă - 40% REDUCERE</p>
            <p className="text-sm text-gray-700 font-medium">✨ Loturi Încălțăminte - 35% REDUCERE</p>
            <p className="text-sm text-gray-700 font-medium">✨ Loturi Geci & Jachete - 50% REDUCERE</p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 mb-6">
            <p className="text-gray-700 font-semibold text-sm">📦 Livrare GRATUITĂ la comenzi peste 3.900 RON</p>
          </div>

          <p className="text-red-500 font-semibold mb-6 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Oferta expiră în 48 de ore!
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Comandă Acum
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealPopup;
