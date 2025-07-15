import React from 'react';
import { ArrowRight, Target, Zap, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel matters. We deliver pixel-perfect designs and flawless functionality that exceeds expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies and creative solutions to build future-ready digital experiences.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Your success is our priority. We build robust, scalable solutions with enterprise-grade security.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality, delivering premium solutions that drive real results.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', description: 'Successful launches' },
    { number: '5+', label: 'Years Experience', description: 'Industry expertise' },
    { number: '100%', label: 'Client Satisfaction', description: 'Happy customers' },
    { number: '24/7', label: 'Support', description: 'Always available' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-400/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital{' '}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers and designers who believe that exceptional 
              digital experiences are the foundation of business success in the modern world.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                Our Story
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Founded with a vision to bridge the gap between innovative technology and business success, 
                  Smooth Development has been at the forefront of digital transformation. We combine technical 
                  expertise with creative design to deliver solutions that not only meet but exceed expectations.
                </p>
                <p className="text-lg">
                  Our team brings together diverse expertise in modern web technologies, mobile development, 
                  and user experience design. We're committed to delivering premium quality while maintaining 
                  the agility and personal touch of a boutique agency.
                </p>
                <p className="text-lg">
                  Every project is an opportunity to push boundaries, explore new possibilities, and create 
                  digital experiences that leave lasting impressions and drive meaningful results.
                </p>
              </div>
              <button className="group btn-premium bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 px-8 py-4 rounded-xl font-heading font-semibold hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg flex items-center space-x-3 mt-8">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Stats Card */}
            <div className="animate-fade-in-right">
              <div className="card-premium bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-premium">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-4xl font-heading font-bold text-gold-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-900 dark:text-white font-semibold mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card-premium bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-premium group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <value.icon className="w-8 h-8 text-dark-950" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in-up">
            <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-12 text-dark-950">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can bring your ideas to life with cutting-edge technology and premium design.
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

export default About;