import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919709633313?text=Hello, I would like to inquire about Saalt Hotels', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </button>
  );
};
