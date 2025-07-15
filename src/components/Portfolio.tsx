import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Biometrics', 'Security'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Comprehensive analytics dashboard for business intelligence and data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'Patient management system with appointment scheduling and medical records.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Healthcare'],
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'Real-time food ordering and delivery tracking application with live updates.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Google Maps', 'Real-time', 'Payment'],
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Application',
      description: 'Property listing and management platform with virtual tours and CRM integration.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Three.js', 'CRM', 'Virtual Tours'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                      <Github className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-2">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center space-x-1 group">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;