import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919652710153';
  const message = 'Hi! I\'m interested in booking SSP Rock Band for my event.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
          >
            <div className="bg-white text-dark-900 px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              Chat with us on WhatsApp!
              <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50" />
        
        {/* Icon */}
        <FaWhatsapp className="text-white text-xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;

