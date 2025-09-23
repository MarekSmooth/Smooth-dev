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
    <section id="contact" className="min-h-screen flex items-end bg-black pt-32 md:pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-left">
            {t('contact.title.ready')} <br />
            {t('contact.title.project')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-normal text-left">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black border border-gray-800 p-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{t('contact.phone')}</h3>
                <p className="text-gray-400 text-sm">+420 XXX XXX XXX</p>
                <p className="text-xs text-gray-500 mt-1">{t('contact.phone.hours')}</p>
              </div>

              <div className="bg-black border border-gray-800 p-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{t('contact.email')}</h3>
                <p className="text-gray-400 text-sm">info@smoothdevelopment.com</p>
                <p className="text-xs text-gray-500 mt-1">{t('contact.email.support')}</p>
              </div>

              <div className="bg-black border border-gray-800 p-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 text-black">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{t('contact.location')}</h3>
                <p className="text-gray-400 text-sm">Czech Republic</p>
                <p className="text-xs text-gray-500 mt-1">{t('contact.location.services')}</p>
              </div>

              <div className="bg-black border border-gray-800 p-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 text-black">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{t('contact.response')}</h3>
                <p className="text-gray-400 text-sm">{t('contact.response.time')}</p>
                <p className="text-xs text-gray-500 mt-1">{t('contact.response.note')}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-black border border-gray-800 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 focus:ring-1 focus:ring-white focus:border-transparent text-white placeholder-gray-400 text-sm"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 focus:ring-1 focus:ring-white focus:border-transparent text-white placeholder-gray-400 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 focus:ring-1 focus:ring-white focus:border-transparent text-white placeholder-gray-400 text-sm"
                        placeholder="+420 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
                        {t('contact.form.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-600 focus:ring-1 focus:ring-white focus:border-transparent text-white text-sm"
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
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-600 focus:ring-1 focus:ring-white focus:border-transparent text-white placeholder-gray-400 resize-none text-sm"
                      placeholder={t('contact.form.message.placeholder')}
                    ></textarea>
                  </div>
                </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact.form.send')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
  )
}
  )
}