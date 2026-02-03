import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
        <h3 className="text-2xl font-bold mb-2">FullFashionHouse SRL - CUI: 49077961 - NR. REG. COMERTULUI: J2023021064408</h3>
        <p className="text-gray-400 mb-6">Calitate Premium, Prețuri Avantajoase</p>
        <p className="text-sm text-gray-500">© 2025 FullFashionHouse SRL. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;
