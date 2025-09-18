import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="/SDlogo.png" 
                alt="Smooth Development" 
                className="h-6 w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-3 h-3 text-white" />
                <span className="text-xs">+420 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-3 h-3 text-white" />
                <span className="text-xs">info@smoothdevelopment.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-3 h-3 text-white" />
                <span className="text-xs">Czech Republic</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.website.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.ecommerce.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.mobile.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.database.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.repair.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('services.custom.title')}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">{t('footer.links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('footer.privacy')}
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-xs">
                  {t('footer.terms')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
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
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
  )
}