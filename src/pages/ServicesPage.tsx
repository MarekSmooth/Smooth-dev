import React from 'react';
import Services from '../components/Services';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../lib/useSEO';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  useSEO({ title: t('seo.services.title'), description: t('seo.services.description'), path: '/services' });

  return <Services />;
};

export default ServicesPage;