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
      className="relative w-10 h-5 bg-black rounded-full transition-colors duration-200 focus:outline-none hover:bg-gray-800"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transform transition-transform duration-200 flex items-center justify-center ${
          language === 'en' ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        <span className="text-xs font-medium text-black">
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;