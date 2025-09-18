import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/SDlogo.png" 
              alt="Smooth Development" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-6 ml-auto">
            {/* Navigation Items */}
            <nav className="flex items-center space-x-8">
              {navigationItems.filter(item => item.id !== 'contact').map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-normal text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Social Links */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            
            <ThemeToggle />
            <LanguageToggle />
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-black dark:border-white text-black dark:text-white px-4 py-1.5 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 uppercase tracking-wide rounded-lg"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;