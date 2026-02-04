import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-8 sm:py-12 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 text-center">
        <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-accent" />
        <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">FullFashionHouse SRL - CUI: 49077961 - NR. REG. COMERTULUI: J2023021064408</h3>
        <p className="text-background/70 mb-3 sm:mb-6 text-xs sm:text-base">Calitate Premium, Prețuri Avantajoase</p>
        <p className="text-xs sm:text-sm text-background/40">© 2026 FullFashionHouse SRL. Toate drepturile rezervate.</p>
        <div className="mt-2">
          <Link to="/termeni-conditii-cookie-uri" className="text-xs text-background/40 hover:underline">Termeni, Condiții & Cookie-uri</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
