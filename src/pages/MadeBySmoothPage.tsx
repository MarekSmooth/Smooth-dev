import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SPRING_SNAPPY } from '../lib/motion';
import { portfolioProjects } from '../data/projects';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const MadeBySmoothPage: React.FC = () => {
  const { t } = useLanguage();

  const projects = portfolioProjects.map((p) => ({
    title: t(p.titleKey),
    description: t(p.descriptionKey),
    tags: p.tags,
    image: p.image,
    url: p.url,
    tagColor: p.tagColor,
    domain: p.url.replace(/^https?:\/\//, '').replace(/^www\./, ''),
  }));

  return (
    <div className="bg-[#030712] text-white min-h-dvh relative overflow-hidden">
      <div className="orb absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/15 animate-glow-pulse" />
      <div className="orb absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-cyan-500/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <section className="pt-28 pb-20 px-5 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="mb-10 sm:mb-16"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h1
              className="text-[clamp(2.2rem,8vw,72px)] font-black leading-none tracking-tightest font-display mb-4"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gradient">{t('made.title')}</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              {t('made.subtitle')}
            </motion.p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ y: -3, transition: SPRING_SNAPPY }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

                  {/* Browser window */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex flex-col overflow-hidden min-h-[240px] sm:min-h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  >
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                      <div className="flex-1 mx-2 px-3 py-1 rounded-md text-center truncate" style={{ background: 'rgba(0,0,0,0.3)' }}>
                        <span className="text-[11px] text-gray-500">{project.domain}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className={`relative p-6 sm:p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className={`px-3 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-display mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium group/link"
                    >
                      <span>{t('made.visit')}</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.25)' }} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="btn-gradient group rounded-md">
              <span>{t('made.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MadeBySmoothPage;
