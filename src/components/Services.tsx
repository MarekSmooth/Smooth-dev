import React from 'react';
import { Link } from 'react-router-dom';
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
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-700 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide"
          >
            <Wrench className="w-4 h-4" />
            <span>{t('services.cta')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;