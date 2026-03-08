import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Facebook, Instagram } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Logo showText={false} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-md ${
                    isActivePath(item.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActivePath(item.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 p-1.5 rounded-md hover:bg-white/5"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/smooth_development/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 p-1.5 rounded-md hover:bg-white/5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <div className="w-px h-4 bg-white/10 mx-1" />

              <LanguageToggle />

              <Link
                to="/contact"
                className="ml-1 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 rounded-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.8), rgba(109,40,217,0.8))',
                  border: '1px solid rgba(139,92,246,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(139,92,246,0.9), rgba(124,58,237,0.9))';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(124,58,237,0.8), rgba(109,40,217,0.8))';
                }}
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Mobile Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
                <Plus className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030712]/98 backdrop-blur-xl md:hidden">
          <div className="pt-24 px-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-xl font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-white bg-violet-500/10 border border-violet-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gradient block w-full text-center mt-6 rounded-md"
              >
                {t('nav.contact')}
              </Link>

              <div className="flex items-center justify-center gap-6 pt-8 border-t border-white/[0.07] mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/smooth_development/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
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
