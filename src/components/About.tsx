import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: t('about.achievement.expert.title'),
      description: t('about.achievement.expert.description')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('about.achievement.client.title'),
      description: t('about.achievement.client.description')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('about.achievement.timely.title'),
      description: t('about.achievement.timely.description')
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('about.achievement.quality.title'),
      description: t('about.achievement.quality.description')
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              {t('about.title.crafting')} <br />
              {t('about.title.excellence')}
            </h2>

            <p className="text-base text-gray-400 mb-8 leading-relaxed font-light">
              {t('about.description')}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">{t('about.expertise.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('about.expertise.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">{t('about.custom.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('about.custom.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">{t('about.hardware.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('about.hardware.description')}</p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide"
            >
              {t('about.cta')}
            </Link>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 text-black">
                  {achievement.icon}
                </div>
                <h3 className="text-base font-medium text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-xs">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;