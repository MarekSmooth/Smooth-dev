import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Database, 
  Monitor, 
  Settings,
  Code,
  Wrench
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
    <section id="services" className="py-20 relative lg:pl-48 xl:pl-96">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Code className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm text-gray-800 dark:text-gray-300">{t('services.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-gold-600 dark:from-primary-400 dark:to-gold-400 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-xl flex items-center justify-center mb-6 text-white group-hover:animate-pulse">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-gold-500 dark:bg-gold-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-gold-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <Wrench className="w-5 h-5" />
            <span>{t('services.cta')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;