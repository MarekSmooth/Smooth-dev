import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Database, 
  Monitor, 
  Settings,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
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

  const cardVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };

  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: [t('services.website.feature1'), t('services.website.feature2'), t('services.website.feature3'), t('services.website.feature4')]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      features: [t('services.ecommerce.feature1'), t('services.ecommerce.feature2'), t('services.ecommerce.feature3'), t('services.ecommerce.feature4')]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [t('services.mobile.feature1'), t('services.mobile.feature2'), t('services.mobile.feature3'), t('services.mobile.feature4')]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.database.title'),
      description: t('services.database.description'),
      features: [t('services.database.feature1'), t('services.database.feature2'), t('services.database.feature3'), t('services.database.feature4')]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t('services.repair.title'),
      description: t('services.repair.description'),
      features: [t('services.repair.feature1'), t('services.repair.feature2'), t('services.repair.feature3'), t('services.repair.feature4')]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: [t('services.custom.feature1'), t('services.custom.feature2'), t('services.custom.feature3'), t('services.custom.feature4')]
    }
  ];

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
              {t('services.title')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left"
            variants={fadeInUp}
          >
            {t('services.subtitle')}
          </motion.p>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-black border border-gray-800 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-medium text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              <span>{t('services.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;