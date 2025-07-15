import React from 'react';
import { Code, Smartphone, Cog, Palette, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Integration', 'Performance Optimization', 'SEO Implementation'],
      price: 'From $5,000',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications', 'Offline Functionality'],
      price: 'From $8,000',
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'Streamline your business processes with custom automation solutions and integrations.',
      features: ['Workflow Automation', 'API Integrations', 'Cloud Solutions', 'Data Processing', 'DevOps & CI/CD', 'Third-party Integrations'],
      price: 'From $3,000',
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.',
      features: ['User Research', 'Prototyping', 'Visual Design', 'Usability Testing', 'Brand Identity', 'Design Systems'],
      price: 'From $2,500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your needs, from concept to deployment and beyond. 
              We deliver premium quality that drives real business results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-premium bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-premium group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <service.icon className="w-8 h-8 text-dark-950" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gold-400 font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="w-full group bg-transparent border-2 border-gold-400 text-gold-400 py-3 rounded-xl font-heading font-semibold hover:bg-gold-400 hover:text-dark-950 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-12 text-dark-950 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Our Premium Process
              </h3>
              <p className="text-xl opacity-90">
                A proven methodology that ensures exceptional results every time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Strategy',
                  description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive strategy.'
                },
                {
                  step: '02',
                  title: 'Design & Development',
                  description: 'Our team creates stunning designs and builds robust solutions using cutting-edge technologies and best practices.'
                },
                {
                  step: '03',
                  title: 'Launch & Support',
                  description: 'We ensure a smooth launch and provide ongoing support, maintenance, and optimization for continued success.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-heading font-bold mb-4 opacity-60">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-4">
                    {process.title}
                  </h4>
                  <p className="opacity-90 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <button className="btn-premium bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 px-12 py-4 rounded-xl font-heading font-semibold hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;