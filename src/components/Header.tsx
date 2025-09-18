import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Link to="/">
              <div>
                <img 
                  src="/SDlogo.png" 
                  alt="Smooth Development" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-6 ml-auto">
            {/* Navigation Items */}
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors duration-200 font-normal text-sm ${
                      isActivePath(item.path)
                        ? 'text-black dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-normal text-sm"
                  >
                    {item.label}
                  </button>
                )
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
            
            <Link
              to="/contact"
              className="border-2 border-black dark:border-white text-black dark:text-white px-4 py-1.5 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 uppercase tracking-wide rounded-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;