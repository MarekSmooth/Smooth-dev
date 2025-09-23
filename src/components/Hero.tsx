import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-end bg-black pt-32 md:pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left">
            <span className="text-white">
              {t('hero.title.smooth')}
            </span>
            <br />
            <span className="text-white">
              {t('hero.title.development')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              to="/services"
              className="group bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <span>{t('hero.cta.services')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 text-sm font-medium border border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <Zap className="w-4 h-4" />
              <span>{t('hero.cta.start')}</span>
            </Link>
          </div>
{/*
          Stats
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{t('hero.stats.support')}</div>
            </div>
          </div>
*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;