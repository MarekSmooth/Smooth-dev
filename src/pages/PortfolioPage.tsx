import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'automation', label: 'Automation' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'Fashion Forward',
      description: 'A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and customer analytics.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Multi-vendor support', 'Real-time analytics', 'Mobile-first design', 'Payment integration'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      client: 'SecureBank',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and financial planning tools.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'Redux', 'API Integration'],
      features: ['Biometric login', 'Transaction tracking', 'Budget planner', 'Bill payments'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'web',
      client: 'DataViz Pro',
      description: 'A comprehensive analytics dashboard for business intelligence with customizable widgets and real-time data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      features: ['Custom widgets', 'Real-time updates', 'Data export', 'Team collaboration'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      client: 'MedCare Solutions',
      description: 'A patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'WebRTC'],
      features: ['Appointment booking', 'Medical records', 'Video consultations', 'Prescription management'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      client: 'QuickEats',
      description: 'A real-time food ordering and delivery tracking application with GPS integration and payment processing.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Google Maps', 'Firebase', 'Stripe', 'Real-time DB'],
      features: ['GPS tracking', 'Real-time orders', 'Payment gateway', 'Restaurant management'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'web',
      client: 'PropertyPro',
      description: 'A property listing and management platform with virtual tours, CRM integration, and lead management.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Three.js', 'CRM API', 'AWS S3', 'Elasticsearch'],
      features: ['Virtual tours', 'Lead management', 'Property search', 'Agent dashboard'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 7,
      title: 'Brand Identity System',
      category: 'design',
      client: 'Tech Startup',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'InDesign'],
      features: ['Logo design', 'Brand guidelines', 'Color system', 'Typography'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'Workflow Automation',
      category: 'automation',
      client: 'Corporate Inc.',
      description: 'Custom automation solution for streamlining business processes and reducing manual work.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Zapier', 'AWS Lambda', 'API Integration', 'Slack'],
      features: ['Process automation', 'API integrations', 'Notifications', 'Reporting'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <button className="inline-flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-6">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our collection of successful projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Filter className="w-5 h-5" />
                <span>Filter by:</span>
              </div>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-16">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.liveUrl}
                          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-600" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">
                      {project.client}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Live</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 flex items-center space-x-2"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Let's create something amazing together. Contact us to discuss your vision.
            </p>
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;