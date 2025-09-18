import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/SD_logo_white.png" 
                alt="Smooth Development" 
                className="h-8 w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4 text-gray-900 dark:text-white" />
                <span>+420 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 text-gray-900 dark:text-white" />
                <span>info@smoothdevelopment.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-gray-900 dark:text-white" />
                <span>Czech Republic</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.website.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.ecommerce.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.mobile.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.database.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.repair.title')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('services.custom.title')}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{t('footer.links')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('footer.privacy')}
                </span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  {t('footer.terms')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;