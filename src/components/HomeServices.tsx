import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EASE_OUT, SPRING_SNAPPY } from '../lib/motion';
import { softwareServices } from '../data/services';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

// Homepage teaser for /services — development leads (four cards, full color, first), IT/hardware
// service trails as a single clearly-labeled "also available" card. Deliberately not a second
// copy of the full service catalog: that already lives on /services, this just signals it exists.
const HomeServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#030712] py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
      <div className="orb absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-10 sm:mb-14 max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('home.services.title')}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-400 leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('home.services.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {softwareServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT }}
              whileHover={{ y: -3, transition: SPRING_SNAPPY }}
            >
              <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center ${service.iconColor} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5 font-display">{t(service.titleKey)}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t(service.descriptionKey)}</p>
            </motion.div>
          ))}

          {/* IT/hardware service — same card anatomy, warm palette, explicit "also available"
              badge so it reads as a bonus offering, not a fifth equal-weight core service. */}
          <motion.div
            className="relative overflow-hidden rounded-2xl p-5 col-span-2 sm:col-span-1"
            style={{ background: 'rgba(251,146,60,0.04)', border: '1px solid rgba(251,146,60,0.2)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: softwareServices.length * 0.06, ease: EASE_OUT }}
            whileHover={{ y: -3, transition: SPRING_SNAPPY }}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Wrench className="w-5 h-5" />
              </div>
              <span
                className="inline-flex items-center px-2 py-0.5 text-[9px] font-medium tracking-widest uppercase rounded-full flex-shrink-0"
                style={{ border: '1px solid rgba(251,146,60,0.4)', background: 'rgba(251,146,60,0.12)', color: '#fdba74' }}
              >
                {t('home.services.hardware.badge')}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5 font-display">{t('home.services.hardware.title')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('home.services.hardware.description')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200 transition-colors duration-200 group">
            {t('home.services.exploreCta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
