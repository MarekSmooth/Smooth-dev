import React from 'react';
import { ArrowRight, Zap, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
            <span className="text-black dark:text-white">
              {t('hero.title.smooth')}
            </span>
            <br />
            <span className="text-black dark:text-white">
              {t('hero.title.development')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={scrollToServices}
              className="group bg-black dark:bg-white text-white dark:text-black px-10 py-4 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <span>{t('hero.cta.services')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-10 py-4 text-sm font-medium border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <Zap className="w-4 h-4" />
              <span>{t('hero.cta.start')}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-black dark:text-white mb-2">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-black dark:text-white mb-2">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-black dark:text-white mb-2">24/7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;