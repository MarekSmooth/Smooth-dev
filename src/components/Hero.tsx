import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-end bg-[#030712] pt-24 pb-12 md:pb-16 relative overflow-hidden">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.12]">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]" />

      {/* Ambient orbs */}
      <div className="orb absolute top-1/4 -left-20 w-[400px] h-[400px] bg-violet-600/20 animate-glow-pulse" />
      <div className="orb absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <motion.div
          className="max-w-5xl"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-[clamp(2.5rem,10vw,96px)] font-black mb-4 sm:mb-6 leading-none tracking-tight font-display"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-white">{t('hero.title.smooth')}</span>
            <br />
            <span className="text-gradient">{t('hero.title.development')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-20"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              to="/services"
              className="btn-gradient group justify-center sm:justify-start rounded-md"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>{t('hero.cta.services')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline group justify-center sm:justify-start rounded-md"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>{t('hero.cta.start')}</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-12 pt-6 sm:pt-8 border-t border-white/[0.07]"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {[
              { value: '50+', label: t('hero.stats.projects') },
              { value: '5+', label: t('hero.stats.experience') },
              { value: '24/7', label: t('hero.stats.support') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
