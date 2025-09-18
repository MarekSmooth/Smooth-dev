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
      className="relative w-12 h-6 bg-black border border-white rounded-full transition-colors duration-200 focus:outline-none hover:bg-gray-800"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transform transition-transform duration-200 flex items-center justify-center ${
          language === 'en' ? 'translate-x-[22px]' : 'translate-x-0'
        }`}
      >
        <span className="text-[9px] font-semibold text-black leading-none">
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;