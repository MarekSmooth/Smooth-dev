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
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          language === 'en' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="text-xs font-bold text-gray-900 dark:text-white">
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;