import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, X, Facebook, Instagram } from 'lucide-react';
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
        'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/LogoSD.png" 
                  alt="Smooth Development" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative">
                  <Link
                  to={item.path}
                  className={`transition-colors duration-200 font-normal text-sm ${
                    isActivePath(item.path)
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  >
                  {item.label}
                  </Link>
                  {isActivePath(item.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
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
                href="https://www.instagram.com/smooth_development/"
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

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gray-300 transition-all duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
                <Plus className="w-8 h-8" />
              </div>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden">
          <div className="pt-20 px-6">
            <div className="space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-light transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-white font-normal border-l-2 border-white pl-4'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-3 mt-8 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 text-lg"
              >
                {t('nav.contact')}
              </Link>
              
              <div className="flex items-center justify-center space-x-6 pt-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/smooth_development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;