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
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:h-20">
          {/* On mobile this wrapper is display:contents — Logo/Contact become direct items of the outer
              column so they can be reordered/centered independently; at lg it becomes a real flex row again,
              reproducing the original side-by-side desktop pairing untouched. */}
          <div className="contents lg:flex lg:flex-row lg:items-stretch lg:gap-10 lg:flex-shrink-0 lg:order-1">
            {/* Brand — smaller + centered on mobile; fills the fixed row height exactly on desktop */}
            <Logo showText={true} className="order-2 lg:order-1 h-[83px] lg:h-full" />

            {/* Contact */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-stretch gap-2.5 lg:justify-center">
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
                {t('contact.location.value')}
              </div>
            </div>
          </div>

          {/* Social + scroll-to-top — above copyright on mobile, same height level as logo/contact on desktop */}
          <div className="order-3 lg:order-4 flex items-center gap-3 lg:self-center lg:flex-shrink-0">
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

          {/* Copyright — last on mobile (below everything); centered between the side groups on desktop */}
          <p className="order-4 text-gray-600 text-xs text-center lg:hidden">{t('footer.copyright')}</p>
          <div className="hidden lg:flex lg:order-3 lg:flex-1 lg:items-center lg:justify-center lg:min-w-0">
            <p className="text-gray-600 text-xs whitespace-nowrap">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
