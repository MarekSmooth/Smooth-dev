import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Code2, ShoppingBag, Tablet, Server, Wrench, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: [t('services.website.feature1'), t('services.website.feature2'), t('services.website.feature3'), t('services.website.feature4')],
      image: '/vyvoj.png',
      accent: 'from-violet-500/20 to-purple-600/10',
      iconColor: 'text-violet-400',
      iconBg: 'bg-violet-500/10',
      span: 'lg:col-span-2',
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      features: [t('services.ecommerce.feature1'), t('services.ecommerce.feature2'), t('services.ecommerce.feature3'), t('services.ecommerce.feature4')],
      image: '/ecommerce.png',
      accent: 'from-cyan-500/20 to-blue-600/10',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10',
      span: 'lg:col-span-1',
    },
    {
      icon: <Tablet className="w-6 h-6" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [t('services.mobile.feature1'), t('services.mobile.feature2'), t('services.mobile.feature3'), t('services.mobile.feature4')],
      image: '/mobilnia.png',
      accent: 'from-pink-500/20 to-rose-600/10',
      iconColor: 'text-pink-400',
      iconBg: 'bg-pink-500/10',
      span: 'lg:col-span-1',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t('services.database.title'),
      description: t('services.database.description'),
      features: [t('services.database.feature1'), t('services.database.feature2'), t('services.database.feature3'), t('services.database.feature4')],
      image: '/databaze.png',
      accent: 'from-emerald-500/20 to-teal-600/10',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      span: 'lg:col-span-2',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t('services.repair.title'),
      description: t('services.repair.description'),
      features: [t('services.repair.feature1'), t('services.repair.feature2'), t('services.repair.feature3'), t('services.repair.feature4')],
      image: '/Opravy.png',
      accent: 'from-orange-500/20 to-amber-600/10',
      iconColor: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      span: 'lg:col-span-1',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: [t('services.custom.feature1'), t('services.custom.feature2'), t('services.custom.feature3'), t('services.custom.feature4')],
      image: '/desktop.png',
      accent: 'from-indigo-500/20 to-violet-600/10',
      iconColor: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10',
      span: 'lg:col-span-2',
    },
  ];

  return (
    <section className="min-h-screen bg-[#030712] pt-20 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb absolute top-0 right-0 w-[600px] h-[400px] bg-violet-600/10 animate-glow-pulse" />
      <div className="orb absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          className="mt-8 sm:mt-16 mb-16"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-6">
            <span className="badge">
              <Layers className="w-3 h-3" />
              {t('nav.services')}
            </span>
          </motion.div> */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight font-display text-white mb-4"
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shimmer-card ${service.span}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${service.image}")`, opacity: 0.12 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`} />

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.25)' }} />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 font-display">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className={`w-1 h-1 rounded-full ${service.iconColor} bg-current flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
