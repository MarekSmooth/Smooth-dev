import React from 'react';
import Contact from '../components/Contact';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../lib/useSEO';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  useSEO({ title: t('seo.contact.title'), description: t('seo.contact.description'), path: '/contact' });

  return <Contact />;
};

export default ContactPage;