import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      isHomePage
        ? 'bg-black'
        : isScrolled 
          ? 'bg-gray-900 shadow-sm border-b border-gray-800' 
          : 'bg-gray-900'
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
              {navigationItems.filter(item => item.id !== 'contact').map((item) => (
                item.path ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors duration-200 font-normal text-sm ${
                      isHomePage
                        ? isActivePath(item.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                        : isActivePath(item.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-colors duration-200 font-normal text-sm ${
                      isHomePage
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
            
            {/* Social Links and Language Toggle */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isHomePage
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isHomePage
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            
            <div className={`w-px h-4 ${
              isHomePage ? 'bg-gray-600' : 'bg-gray-600'
            }`}></div>
            
            <LanguageToggle />
            
            {/* Contact Button - moved after language toggle */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-200 font-normal text-sm border border-white px-3 py-1 rounded text-white hover:bg-white hover:text-black ${
                isHomePage
                  ? ''
                  : ''
              }`}
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