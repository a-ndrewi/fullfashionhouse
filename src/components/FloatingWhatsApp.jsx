import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({ whatsappLink }) => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center space-x-3 group"
    >
      <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" />
      <span className="hidden lg:group-hover:inline-block font-semibold pr-2 whitespace-nowrap">Comandă pe WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
