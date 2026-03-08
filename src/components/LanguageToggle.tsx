import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cs' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-violet-500/40"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full transform transition-transform duration-200 flex items-center justify-center ${
          language === 'en' ? 'translate-x-[22px]' : 'translate-x-0'
        }`}
        style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}
      >
        <span className="text-[9px] font-bold text-white leading-none">
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
