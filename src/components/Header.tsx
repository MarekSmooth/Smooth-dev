import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, User, Phone, Facebook, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'hero', label: t('nav.home'), icon: <Home className="w-4 h-4" /> },
    { id: 'services', label: t('nav.services'), icon: <Briefcase className="w-4 h-4" /> },
    { id: 'about', label: t('nav.about'), icon: <User className="w-4 h-4" /> },
    { id: 'contact', label: t('nav.contact'), icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/SDlogo.png" 
              alt="Smooth Development" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-normal text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-6">
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 dark:text-gray-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="py-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100 dark:border-gray-800">
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
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;