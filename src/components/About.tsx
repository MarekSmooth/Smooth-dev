import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center bg-black pt-32 md:pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-4xl mt-20">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left">
            <span className="text-white">
              {t('about.title.crafting')}
            </span>
            <br />
            <span className="text-white">
              {t('about.title.excellence')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left">
            {t('about.description')}
          </p>

          {/* Features */}
          <div className="space-y-6 mb-20">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.expertise.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.expertise.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.custom.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.custom.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.hardware.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.hardware.description')}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <span>{t('about.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;