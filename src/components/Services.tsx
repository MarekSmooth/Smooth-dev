import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EASE_OUT, SPRING_SNAPPY, TAP_SCALE } from '../lib/motion';
import { softwareServices, hardwareServices, type ServiceItem } from '../data/services';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

type Filter = 'all' | 'software' | 'hardware';

// Touch-target padding trick: the visual link stays a small text row, but the negative margin
// extends its actual hit area to something closer to 44px without disturbing the layout.
const cardCtaClass = '-mx-2 -my-2 px-2 py-2 inline-flex items-center gap-1 text-xs font-medium rounded-md transition-colors duration-200';

// Every card — software or hardware — shares one anatomy (icon, title, description, optional
// feature pills, price, CTA) so the two categories read as one coherent system, distinguished
// only by their color temperature and the two premium items' badge/border.
const ServiceCard: React.FC<{ service: ServiceItem; delay: number; t: (key: string) => string }> = ({ service, delay, t }) => (
  <motion.div
    className="relative overflow-hidden rounded-2xl shimmer-card group"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: service.premium ? '1px solid rgba(251,146,60,0.35)' : '1px solid rgba(255,255,255,0.07)',
    }}
    whileHover={{ y: -4, transition: SPRING_SNAPPY }}
    whileTap={TAP_SCALE}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-40`} />
    <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
      style={{ boxShadow: `inset 0 0 0 1px ${service.premium ? 'rgba(251,146,60,0.4)' : 'rgba(139,92,246,0.2)'}` }} />

    <div className="relative z-10 p-6 sm:p-7 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>
        {service.badgeKey && (
          <span
            className="inline-flex items-center px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase rounded-full flex-shrink-0"
            style={{ border: '1px solid rgba(251,146,60,0.4)', background: 'rgba(251,146,60,0.12)', color: '#fdba74' }}
          >
            {t(service.badgeKey)}
          </span>
        )}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-white mb-2.5 font-display">
        {t(service.titleKey)}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
        {t(service.descriptionKey)}
      </p>

      {service.featureKeys && (
        <ul className="space-y-1.5 mb-5">
          {service.featureKeys.map((fk) => (
            <li key={fk} className="flex items-center gap-2 text-xs text-gray-500">
              <div className={`w-1 h-1 rounded-full ${service.iconColor} bg-current flex-shrink-0`} />
              {t(fk)}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between gap-3 pt-2 mt-auto border-t border-white/[0.06]">
        <span className="text-sm font-semibold text-white flex-1 min-w-0">{t(service.priceKey)}</span>
        <Link
          to={`/contact?service=${service.id}`}
          className={`${cardCtaClass} flex-shrink-0 hover:bg-white/5 ${service.premium ? 'text-orange-300 hover:text-orange-200' : 'text-violet-300 hover:text-violet-200'}`}
        >
          {t('services.cta.card')}
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const showSoftware = filter === 'all' || filter === 'software';
  const showHardware = filter === 'all' || filter === 'hardware';

  const filterOptions: { key: Filter; label: string }[] = [
    { key: 'all', label: t('services.filter.all') },
    { key: 'software', label: t('services.filter.software') },
    { key: 'hardware', label: t('services.filter.hardware') },
  ];

  return (
    <section className="min-h-dvh bg-[#030712] pt-20 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb absolute top-0 right-0 w-[600px] h-[400px] bg-violet-600/10 animate-glow-pulse" />
      <div className="orb absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/8 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          className="mt-8 sm:mt-16 mb-10"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tightest font-display text-white mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Category filter — same pill treatment as Made by Smooth's project filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setFilter(opt.key)}
              aria-pressed={filter === opt.key}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === opt.key
                  ? 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                  : 'text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        {/* Software section — four equal cards, no single service inflated above the rest */}
        {showSoftware && (
          <section className="mb-14" aria-labelledby="services-software-heading">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center flex-shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <h2 id="services-software-heading" className="text-xl sm:text-2xl font-bold text-white font-display">
                {t('services.section.software.title')}
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 sm:pl-12">{t('services.section.software.subtitle')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softwareServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} delay={index * 0.06} t={t} />
              ))}
            </div>
          </section>
        )}

        {/* Temperature-shift divider: cool violet/cyan fading into warm orange/red */}
        {filter === 'all' && (
          <div
            className="h-px mb-14"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(34,211,238,0.4), rgba(251,146,60,0.4), rgba(239,68,68,0.5), transparent)' }}
          />
        )}

        {/* Hardware section */}
        {showHardware && (
          <section className="mb-16" aria-labelledby="services-hardware-heading">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <h2 id="services-hardware-heading" className="text-xl sm:text-2xl font-bold text-white font-display">
                {t('services.section.hardware.title')}
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 sm:pl-12">{t('services.section.hardware.subtitle')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} delay={(index % 6) * 0.05} t={t} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/contact" className="btn-gradient group rounded-md">
            <span>{t('services.cta')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
