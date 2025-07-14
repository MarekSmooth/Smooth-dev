import React from 'react';
import { ArrowLeft, Code, Smartphone, Cog, Palette, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Implementation',
        'Security Best Practices',
        'Content Management Systems',
        'E-commerce Solutions',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      startingPrice: '$2,500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Device Integration',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '$5,000',
    },
    {
      icon: Cog,
      title: 'Automation & Integration',
      description: 'Streamline your business processes with custom automation solutions',
      features: [
        'Workflow Automation',
        'API Development',
        'Third-party Integrations',
        'Data Processing',
        'Cloud Solutions',
        'DevOps & CI/CD',
      ],
      technologies: ['Python', 'AWS', 'Docker', 'Jenkins', 'Zapier'],
      startingPrice: '$3,000',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Brand Identity',
        'Design Systems',
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
      startingPrice: '$1,500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan, timeline, and architecture tailored to your needs.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our design team creates beautiful, user-friendly interfaces that align with your brand.',
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using modern technologies and best practices.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution is bug-free and performs optimally.',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support and maintenance.',
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                          Starting from {service.startingPrice}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Get Started
                    </button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-yellow-500 opacity-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How we work with you to bring your vision to life
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                    <div className="text-4xl font-bold text-yellow-500 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-400 z-10"></div>
                  )}
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
              Let's discuss how we can help bring your vision to life.
            </p>
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;