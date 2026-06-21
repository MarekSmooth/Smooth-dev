import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#030712] relative overflow-hidden">
      <div className="gradient-line" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-6 mb-8 sm:h-20">
          {/* Brand — fills the fixed row height exactly, so it can't grow the footer */}
          <Logo showText={true} className="h-full" />

          {/* Contact */}
          <div className="flex flex-col gap-2.5 sm:items-end sm:justify-center">
            <a href="tel:+420776677137" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              +420 776 677 137
            </a>
            <a href="mailto:info@smooth-development.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              info@smooth-development.com
            </a>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Czech Republic
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">{t('footer.copyright')}</p>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/smooth_development/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.8), rgba(109,40,217,0.8))' }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
