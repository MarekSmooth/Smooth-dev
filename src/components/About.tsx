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
    <section id="about" className="py-20 relative lg:pl-48 xl:pl-96">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gold-500/10 dark:bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gray-100/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Users className="w-4 h-4 text-gold-600 dark:text-gold-400" />
              <span className="text-sm text-gray-800 dark:text-gray-300">{t('about.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">{t('about.title.crafting')}</span><br />
              <span className="bg-gradient-to-r from-primary-600 to-gold-600 dark:from-primary-400 dark:to-gold-400 bg-clip-text text-transparent">
                {t('about.title.excellence')}
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('about.description')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.expertise.title')}</h4>
                  <p className="text-gray-700 dark:text-gray-400">{t('about.expertise.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.custom.title')}</h4>
                  <p className="text-gray-700 dark:text-gray-400">{t('about.custom.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('about.hardware.title')}</h4>
                  <p className="text-gray-700 dark:text-gray-400">{t('about.hardware.description')}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary-500 to-gold-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              {t('about.cta')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 text-white">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;