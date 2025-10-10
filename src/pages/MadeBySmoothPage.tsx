import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Code, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MadeBySmoothPage: React.FC = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.35, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.45
      }
    }
  };

  const projectVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 1.13, ease: "easeOut" }
    }
  };

  const projects = [
    {
      title: t('made.project2.title'),
      description: t('made.project2.description'),
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: t('made.project1.title'),
      description: t('made.project1.description'),
      tech: ["Shoptet", "Payment Integration", "SEO"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: t('made.project3.title'),
      description: t('made.project3.description'),
      tech: ["Python", "Data Visualization", "Business Intelligence"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-black pt-32 md:pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            className="max-w-4xl mt-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left"
              variants={fadeInUp}
            >
              <span className="text-white">
                {t('made.title')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left"
              variants={fadeInUp}
            >
              {t('made.subtitle')}
            </motion.p>

            {/* Projects Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={staggerContainer}>
              {projects.map((project, index) => (
                <motion.div key={index} className="bg-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1" variants={projectVariants}>
                  <div className="aspect-video bg-black overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Link
                to="/contact"
                className="group bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
              >
                <span>{t('made.cta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MadeBySmoothPage;