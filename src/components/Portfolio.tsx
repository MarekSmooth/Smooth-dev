import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Biometrics', 'Security'],
      featured: true,
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Comprehensive analytics dashboard for business intelligence and data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      featured: false,
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management system with appointment scheduling and medical records.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Healthcare'],
      featured: false,
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Real-time food ordering and delivery tracking application with live updates.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Google Maps', 'Real-time', 'Payment'],
      featured: false,
    },
    {
      id: 6,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete brand identity design including logo, guidelines, and digital assets.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'Brand Design', 'Guidelines', 'Assets'],
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects that showcase our expertise and 
              commitment to delivering exceptional digital experiences.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mr-4">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-heading font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 shadow-glow'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`card-premium bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-premium group animate-fade-in-up ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition-colors duration-200 group">
                      <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gold-600" />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition-colors duration-200 group">
                      <Github className="w-5 h-5 text-gray-700 group-hover:text-gold-600" />
                    </button>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 px-3 py-1 rounded-full text-sm font-heading font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="text-sm text-gold-400 font-semibold mb-2 uppercase tracking-wider">
                    {filters.find(f => f.id === project.category)?.label}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <button className="group w-full bg-transparent border-2 border-gold-400 text-gold-400 py-3 rounded-xl font-heading font-semibold hover:bg-gold-400 hover:text-dark-950 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-12 text-dark-950">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and bring your vision to life with our premium development services.
              </p>
              <button className="bg-dark-950 text-gold-400 px-8 py-4 rounded-xl font-heading font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;