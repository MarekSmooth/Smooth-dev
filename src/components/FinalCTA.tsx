import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EASE_OUT } from '../lib/motion';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#030712] px-5 sm:px-6 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.18), transparent 60%)' }}
      />
      <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 animate-glow-pulse" />

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-none tracking-tightest font-display text-white mb-5">
          {t('finalcta.title')}
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-9 max-w-xl mx-auto leading-relaxed">
          {t('finalcta.subtitle')}
        </p>
        <Link to="/contact" className="btn-gradient group rounded-md inline-flex">
          <span>{t('finalcta.cta')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
