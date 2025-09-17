import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert(t('contact.form.success'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative lg:pl-48 xl:pl-96">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm text-gray-800 dark:text-gray-300">{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">{t('contact.title.ready')}</span><br />
            <span className="bg-gradient-to-r from-primary-600 to-gold-600 dark:from-primary-400 dark:to-gold-400 bg-clip-text text-transparent">
              {t('contact.title.project')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-700 dark:text-gray-300">+420 XXX XXX XXX</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{t('contact.phone.hours')}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-700 dark:text-gray-300">info@smoothdevelopment.com</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{t('contact.email.support')}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.location')}</h3>
              <p className="text-gray-700 dark:text-gray-300">Czech Republic</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{t('contact.location.services')}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.response')}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('contact.response.time')}</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{t('contact.response.note')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="+420 XXX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                    >
                      <option value="">{t('contact.form.service.select')}</option>
                      <option value="website">{t('contact.form.service.website')}</option>
                      <option value="ecommerce">{t('contact.form.service.ecommerce')}</option>
                      <option value="mobile">{t('contact.form.service.mobile')}</option>
                      <option value="database">{t('contact.form.service.database')}</option>
                      <option value="repair">{t('contact.form.service.repair')}</option>
                      <option value="custom-build">{t('contact.form.service.custom')}</option>
                      <option value="consultation">{t('contact.form.service.consultation')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-gold-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('contact.form.send')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;