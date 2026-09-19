import React from 'react';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import HomeServices from '../components/HomeServices';
import WorkShowcase from '../components/WorkShowcase';
import FinalCTA from '../components/FinalCTA';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../lib/useSEO';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  useSEO({ title: t('seo.home.title'), description: t('seo.home.description'), path: '/' });

  return (
    <>
      <Hero />
      <ProcessSteps />
      <HomeServices />
      <WorkShowcase />
      <FinalCTA />
    </>
  );
};

export default HomePage;
