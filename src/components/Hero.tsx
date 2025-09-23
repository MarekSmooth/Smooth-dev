import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.35, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.34
      }
    }
  };

  return (
    <section className="min-h-screen flex items-end bg-black pt-32 md:pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          className="max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left"
            variants={fadeInUp}
          >
            <span className="text-white">
              {t('hero.title.smooth')}
            </span>
            <br />
            <span className="text-white">
              {t('hero.title.development')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left"
            variants={fadeInUp}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            variants={fadeInUp}
          >
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
          </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;