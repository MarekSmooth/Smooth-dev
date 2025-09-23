import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const featureVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-black pt-32 md:pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          className="max-w-4xl mt-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left"
            variants={fadeInUp}
          >
            <span className="text-white">
              {t('about.title.crafting')}
            </span>
            <br />
            <span className="text-white">
              {t('about.title.excellence')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left"
            variants={fadeInUp}
          >
            {t('about.description')}
          </motion.p>

          {/* Features */}
          <motion.div className="space-y-6 mb-20" variants={staggerContainer}>
            <motion.div className="flex items-start space-x-4" variants={featureVariants}>
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.expertise.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.expertise.description')}</p>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start space-x-4" variants={featureVariants}>
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.custom.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.custom.description')}</p>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start space-x-4" variants={featureVariants}>
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1 text-sm">{t('about.hardware.title')}</h4>
                <p className="text-gray-400 text-sm">{t('about.hardware.description')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="group bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
            >
              <span>{t('about.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;