import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users2, Star, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: <Users2 className="w-5 h-5" />, value: t('about.achievement.expert.title'), label: t('about.achievement.expert.description'), color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { icon: <Star className="w-5 h-5" />, value: t('about.achievement.client.title'), label: t('about.achievement.client.description'), color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { icon: <Clock className="w-5 h-5" />, value: t('about.achievement.timely.title'), label: t('about.achievement.timely.description'), color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: <Shield className="w-5 h-5" />, value: t('about.achievement.quality.title'), label: t('about.achievement.quality.description'), color: 'text-pink-400', bg: 'bg-pink-500/10' },
  ];

  return (
    <section className="min-h-screen flex items-center bg-[#030712] pt-28 pb-16 relative overflow-hidden">
      <div className="orb absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-700/15 animate-glow-pulse" />
      <div className="orb absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h1
              className="text-[clamp(2.2rem,8vw,72px)] font-black mb-5 leading-none tracking-tight font-display"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <span className="text-white">{t('about.title.crafting')}</span>
              <br />
              <span className="text-gradient">{t('about.title.excellence')}</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              {t('about.description')}
            </motion.p>

            {/* Features */}
            <motion.div className="space-y-3 mb-8" variants={fadeUp} transition={{ duration: 0.6 }}>
              {[
                { title: t('about.expertise.title'), desc: t('about.expertise.description') },
                { title: t('about.custom.title'), desc: t('about.custom.description') },
                { title: t('about.hardware.title'), desc: t('about.hardware.description') },
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl glass-hover">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-0.5">{feat.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <Link to="/contact" className="btn-gradient group rounded-md inline-flex">
                <span>{t('about.cta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Achievement cards */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="glass-hover rounded-2xl p-4 sm:p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-bold font-display ${item.color} mb-0.5`}>{item.value}</div>
                  <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">{item.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Accent card */}
            <motion.div
              className="col-span-2 rounded-2xl p-5 sm:p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(34,211,238,0.08))',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="orb absolute -right-8 -top-8 w-32 h-32 bg-violet-500/20" />
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-black font-display text-gradient mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">{t('hero.stats.projects')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
