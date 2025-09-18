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
    console.log('Form submitted:', formData);
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
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-6 tracking-tight">
            {t('contact.title.ready')} <br />
            {t('contact.title.project')}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6">
              <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center mb-4 text-white dark:text-black">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-black dark:text-white mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">+420 XXX XXX XXX</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{t('contact.phone.hours')}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6">
              <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center mb-4 text-white dark:text-black">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-black dark:text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">info@smoothdevelopment.com</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{t('contact.email.support')}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6">
              <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center mb-4 text-white dark:text-black">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-black dark:text-white mb-2">{t('contact.location')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Czech Republic</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{t('contact.location.services')}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6">
              <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center mb-4 text-white dark:text-black">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-black dark:text-white mb-2">{t('contact.response')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t('contact.response.time')}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{t('contact.response.note')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-700 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder="+420 XXX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      {t('contact.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-transparent text-black dark:text-white text-sm"
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
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none text-sm"
                    placeholder={t('contact.form.message.placeholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wide"
                >
                  <Send className="w-4 h-4" />
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