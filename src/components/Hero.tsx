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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden lg:pl-48 xl:pl-96 pt-20 lg:pt-0">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/20 dark:bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary-500/10 to-gold-500/10 dark:from-primary-500/5 dark:to-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-gray-100/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full px-6 py-3 shadow-lg">
              <Star className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{t('hero.badge')}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-600 via-gold-600 to-primary-600 dark:from-primary-400 dark:via-gold-400 dark:to-primary-400 bg-clip-text text-transparent">
              {t('hero.title.smooth')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-gold-600 dark:from-primary-400 dark:to-gold-400 bg-clip-text text-transparent">
              {t('hero.title.development')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToServices}
              className="group bg-gradient-to-r from-primary-500 to-gold-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center space-x-2"
            >
              <span>{t('hero.cta.services')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>{t('hero.cta.start')}</span>
            </button>
          </div>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">50+</div>
              <div className="text-gray-700 dark:text-gray-400">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-700 dark:text-gold-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-400">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">24/7</div>
              <div className="text-gray-700 dark:text-gray-400">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;