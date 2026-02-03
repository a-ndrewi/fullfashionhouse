
import React, { useEffect } from 'react';
import { X, Tag, TrendingUp } from 'lucide-react';

const DealPopup = ({ showDealPopup, setShowDealPopup, whatsappLink, currentPage }) => {
  useEffect(() => {
    if (sessionStorage.getItem('dealPopupShown')) {
      setShowDealPopup(false);
    }
  }, [setShowDealPopup]);

  if (!showDealPopup || currentPage !== 'home') return null;

  const handleClose = () => {
    setShowDealPopup(false);
    sessionStorage.setItem('dealPopupShown', 'true');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
        <button onClick={handleClose} className="absolute top-4 right-4 text-primary/40 hover:text-primary transition">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
            <Tag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-primary mb-4">Ofertă Limitată!</h3>
          <p className="text-primary/60 mb-6 text-lg">Reduceri de până la <span className="text-accent font-bold text-2xl">50%</span> la loturi selectate de haine second hand!</p>
          
          <div className="bg-background/80 rounded-xl p-4 mb-6">
            <p className="text-sm text-primary font-medium">Loturi Haine Damă - 40% REDUCERE</p>
            <p className="text-sm text-primary font-medium">Loturi Încălțăminte - 35% REDUCERE</p>
            <p className="text-sm text-primary font-medium">Loturi Geci & Jachete - 50% REDUCERE</p>
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-3 mb-6">
            <p className="text-primary font-semibold text-sm">Livrare GRATUITĂ la comenzi peste 3.900 RON</p>
          </div>

          <p className="text-red-500 font-semibold mb-6 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Oferta expiră în 48 de ore!
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-accent hover:bg-accent/80 text-primary py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Comandă Acum
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealPopup;
