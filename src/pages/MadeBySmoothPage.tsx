import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Code, Lightbulb, Users } from 'lucide-react';

const MadeBySmoothPage: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with payment integration",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile application for financial services",
      tech: ["React Native", "TypeScript", "Firebase"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Corporate Website",
      description: "Professional website with custom CMS",
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "50+ Projects",
      description: "Successfully delivered applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Code",
      description: "Clean, maintainable solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Cutting-edge technologies"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
            Made by <span className="text-white">Smooth</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Showcase of our finest work - from concept to deployment, each project represents our commitment to excellence and innovation in digital solutions.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              A selection of our most impactful work, showcasing our expertise across different industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-700 overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Our Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              From initial consultation to final deployment, we follow a proven methodology that ensures success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Design", description: "Creating intuitive user experiences" },
              { step: "03", title: "Development", description: "Building with cutting-edge technology" },
              { step: "04", title: "Deployment", description: "Launching and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-white mb-4">{phase.step}</div>
                <h3 className="text-lg font-medium text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let's discuss your next project and bring your vision to life with our expertise and passion for excellence.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default MadeBySmoothPage;