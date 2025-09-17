import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cs' : 'en');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleLanguage}
        className="relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg px-4 py-2 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 group overflow-hidden"
        aria-label="Toggle language"
      >
        {/* Neon glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Language options */}
        <div className="relative flex items-center space-x-3">
          <span 
            className={`text-sm font-bold transition-all duration-300 ${
              language === 'cs' 
                ? 'text-primary-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse' 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            CS
          </span>
          
          {/* Separator */}
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
          
          <span 
            className={`text-sm font-bold transition-all duration-300 ${
              language === 'en' 
                ? 'text-primary-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse' 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            EN
          </span>
        </div>
        
        {/* Active indicator */}
        <div 
          className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary-400 to-gold-400 transition-all duration-300 ${
            language === 'cs' ? 'left-2 w-6' : 'right-2 w-6'
          }`}
          style={{
            boxShadow: '0 0 8px rgba(56, 189, 248, 0.6)'
          }}
        ></div>
      </button>
    </div>
  );
};

export default LanguageToggle;