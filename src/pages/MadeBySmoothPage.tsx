import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SPRING_SNAPPY } from '../lib/motion';
import { portfolioProjects, PortfolioCategory } from '../data/projects';
import { useSEO } from '../lib/useSEO';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const FILTERS: Array<{ key: PortfolioCategory | 'all'; labelKey: string }> = [
  { key: 'all', labelKey: 'made.filter.all' },
  { key: 'website', labelKey: 'made.filter.website' },
  { key: 'webapp', labelKey: 'made.filter.webapp' },
  { key: 'eshop', labelKey: 'made.filter.eshop' },
];

// Determines the group order when "All" is active — websites first (most numerous/familiar),
// then web apps, then e-shops.
const CATEGORY_ORDER: PortfolioCategory[] = ['website', 'webapp', 'eshop'];

const MadeBySmoothPage: React.FC = () => {
  const { t } = useLanguage();
  useSEO({ title: t('seo.made.title'), description: t('seo.made.description'), path: '/made-by-smooth' });

  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | 'all'>('all');

  const projects = portfolioProjects
    .filter((p) => activeFilter === 'all' || p.category === activeFilter)
    .map((p) => ({
      category: p.category,
      title: t(p.titleKey),
      description: t(p.descriptionKey),
      tags: p.tags,
      image: p.image,
      url: p.url,
      tagColor: p.tagColor,
      isClickable: p.url !== '#',
      domain: p.url !== '#' ? p.url.replace(/^https?:\/\//, '').replace(/^www\./, '') : '',
    }))
    .sort((a, b) =>
      activeFilter === 'all' ? CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) : 0
    );

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

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                    : 'text-gray-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </motion.div>

          {/* Projects */}
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            {projects.map((project, index) => {
              const showCategoryHeading =
                activeFilter === 'all' && (index === 0 || projects[index - 1].category !== project.category);

              return (
              <React.Fragment key={project.title}>
                {showCategoryHeading && (
                  <motion.div
                    className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-violet-300/80 ${index === 0 ? '' : 'pt-4 sm:pt-6'}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                  >
                    {t(`made.filter.${project.category}`)}
                    <span className="flex-1 h-px bg-white/10" />
                  </motion.div>
                )}
              <motion.div
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
                  {project.isClickable ? (
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
                ) : (
                  <div className={`relative flex flex-col overflow-hidden min-h-[240px] sm:min-h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                      <div className="flex-1 mx-2 px-3 py-1 rounded-md text-center truncate" style={{ background: 'rgba(0,0,0,0.3)' }}>
                        <span className="text-[11px] text-gray-500">{project.domain}</span>
                      </div>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}

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
                    {project.isClickable && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium group/link"
                    >
                      <span>{t('made.visit')}</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.25)' }} />
              </motion.div>
              </React.Fragment>
              );
            })}
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
