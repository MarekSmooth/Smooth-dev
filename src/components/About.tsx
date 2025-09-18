import React from 'react';
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
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{t('about.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title.crafting')} <br />
              {t('about.title.excellence')}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('about.description')}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.expertise.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('about.expertise.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.custom.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('about.custom.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.hardware.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('about.hardware.description')}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
            >
              {t('about.cta')}
            </button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 text-white dark:text-gray-900">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;