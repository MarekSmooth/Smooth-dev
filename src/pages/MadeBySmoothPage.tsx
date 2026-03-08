import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const MadeBySmoothPage: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('made.project2.title'),
      description: t('made.project2.description'),
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      accent: 'from-violet-500/30 to-purple-900/60',
      tagColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    },
    {
      title: t('made.project1.title'),
      description: t('made.project1.description'),
      tech: ['Shoptet', 'Payment Integration', 'SEO'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      accent: 'from-cyan-500/30 to-blue-900/60',
      tagColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
    },
    {
      title: t('made.project3.title'),
      description: t('made.project3.description'),
      tech: ['Python', 'Data Visualization', 'Business Intelligence'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      accent: 'from-emerald-500/30 to-teal-900/60',
      tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    },
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen relative overflow-hidden">
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
              className="text-[clamp(2.2rem,8vw,72px)] font-black leading-none tracking-tight font-display mb-4"
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 items-stretch`}>

                  {/* Image */}
                  <div className={`relative overflow-hidden min-h-[200px] sm:min-h-[260px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/20 to-transparent md:hidden" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-6xl sm:text-7xl font-black font-display opacity-10 text-white leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative p-6 sm:p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, ti) => (
                        <span key={ti} className={`px-3 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-display mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium group/link">
                      <span>{t('made.cta')}</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
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
