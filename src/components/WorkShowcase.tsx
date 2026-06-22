import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SPRING_SNAPPY } from '../lib/motion';
import { portfolioProjects } from '../data/projects';

const WorkShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#030712] py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
      <div className="orb absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-600/10 animate-glow-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-12 sm:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-4">
            {t('work.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            {t('work.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: SPRING_SNAPPY }}
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.accent}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 2).map((tech, ti) => (
                    <span key={ti} className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${project.tagColor}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white font-display">
                  {t(project.titleKey)}
                </h3>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.25)' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/made-by-smooth" className="btn-outline group rounded-md inline-flex">
            <span>{t('work.cta')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkShowcase;
