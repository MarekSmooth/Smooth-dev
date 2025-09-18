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
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 mb-6">
            <Code className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{t('services.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-6 text-white dark:text-gray-900 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
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