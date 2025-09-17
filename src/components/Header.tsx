import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, Briefcase, User, Phone, Facebook, Instagram } from 'lucide-react';
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
    { id: 'hero', label: t('nav.home'), icon: <Home className="w-5 h-5" /> },
    { id: 'services', label: t('nav.services'), icon: <Briefcase className="w-5 h-5" /> },
    { id: 'about', label: t('nav.about'), icon: <User className="w-5 h-5" /> },
    { id: 'contact', label: t('nav.contact'), icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-20 xl:w-64 bg-gradient-to-b from-black to-gray-800 backdrop-blur-lg z-20 flex-col">
        {/* Logo Section */}
        <div className="p-6">
          <div className="flex items-center justify-center xl:justify-start space-x-3">
            <img 
              src="/SD logo bez pozadi use.png" 
              alt="Smooth Development" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <div className="space-y-2 px-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-900/50 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Neon glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="hidden xl:block font-medium relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)] transition-all duration-300">{item.label}</span>
                
                {/* Active indicator line */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary-400 to-gold-400 group-hover:h-8 transition-all duration-300 rounded-r-full opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(56, 189, 248, 0.6)' }}></div>
              </button>
            ))}
            
            {/* Social Media Links */}
            <div className="flex items-center justify-center xl:justify-start space-x-3 mt-6 px-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg p-3 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 overflow-hidden"
                aria-label="Facebook"
              >
                {/* Neon glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-all duration-300 relative z-10" />
                
                {/* Active indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-8 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}></div>
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg p-3 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 overflow-hidden"
                aria-label="Instagram"
              >
                {/* Neon glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-110 transition-all duration-300 relative z-10" />
                
                {/* Active indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-8 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)' }}></div>
              </a>
            </div>
          </div>
        </nav>

        {/* Theme and Language Controls */}
        <div className="p-6 space-y-4">
          <div className="flex xl:flex-row flex-col items-center xl:justify-between space-y-3 xl:space-y-0 xl:space-x-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-20 bg-gradient-to-b from-black to-gray-800 backdrop-blur-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/SD logo bez pozadi use.png" 
                alt="Smooth Development" 
                className="h-12 w-auto object-contain"
              />
            </div>

            <button
              className="text-gray-700 dark:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 pb-4 pt-4">
              <div className="flex justify-center space-x-4 mb-6">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-900/50 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Neon glow background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                    </div>
                    <span className="font-medium relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.8)] transition-all duration-300">{item.label}</span>
                    
                    {/* Active indicator line */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary-400 to-gold-400 group-hover:h-8 transition-all duration-300 rounded-r-full opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(56, 189, 248, 0.6)' }}></div>
                  </button>
                ))}
                
                {/* Social Media Links after navigation */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg p-3 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 overflow-hidden"
                    aria-label="Facebook"
                  >
                    {/* Neon glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-all duration-300 relative z-10" />
                    
                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-8 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}></div>
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg p-3 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 overflow-hidden"
                    aria-label="Instagram"
                  >
                    {/* Neon glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-110 transition-all duration-300 relative z-10" />
                    
                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-8 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)' }}></div>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;