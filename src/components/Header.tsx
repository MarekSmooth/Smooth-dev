import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    { path: '/made-by-smooth', label: t('nav.made') },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHomePage
          ? 'bg-black'
          : isScrolled 
            ? 'bg-gray-900 shadow-sm border-b border-gray-800' 
            : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - vždy viditelné */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/SDlogo.png" 
                  alt="Smooth Development" 
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - pouze na velkých obrazovkách */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors duration-200 font-normal text-sm ${
                    isActivePath(item.path)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side - pouze na velkých obrazovkách */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <div className="w-px h-4 bg-gray-600"></div>
              
              <LanguageToggle />
              
              <Link
                to="/contact"
                className="transition-colors duration-200 font-normal text-sm border border-white px-3 py-1 rounded text-white hover:bg-white hover:text-black"
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Mobile Burger Menu Button - pouze na malých obrazovkách */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Navigation Items */}
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-base transition-colors duration-200 ${
                isActivePath(item.path)
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 mt-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            {t('nav.contact')}
          </Link>
          
          {/* Mobile Social Links and Language Toggle */}
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;