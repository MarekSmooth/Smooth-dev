import React from 'react';
import About from '../components/About';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../lib/useSEO';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  useSEO({ title: t('seo.about.title'), description: t('seo.about.description'), path: '/about' });

  return <About />;
};

export default AboutPage;