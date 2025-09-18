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
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform transition-transform duration-200 flex items-center justify-center ${
          language === 'en' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="text-[10px] font-medium text-black">
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;