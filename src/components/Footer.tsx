import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#030712] relative overflow-hidden">
      <div className="gradient-line" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="mb-5">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2.5">
              <a href="tel:+420776677137" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <span className="text-xs">+420 776 677 137</span>
              </a>
              <a href="mailto:info@smooth-development.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-xs truncate">info@smooth-development.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <span className="text-xs">Czech Republic</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Menu</h3>
            <ul className="space-y-2.5">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/services', label: t('nav.services') },
                { path: '/about', label: t('nav.about') },
                { path: '/made-by-smooth', label: t('nav.made') },
                { path: '/contact', label: t('nav.contact') },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-500 hover:text-white transition-colors duration-200 text-xs">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">{t('footer.services')}</h3>
            <ul className="space-y-2.5">
              {[
                t('services.website.title'),
                t('services.ecommerce.title'),
                t('services.mobile.title'),
                t('services.database.title'),
                t('services.repair.title'),
                t('services.custom.title'),
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-500 hover:text-white transition-colors duration-200 text-xs">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
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
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/smooth_development/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
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
