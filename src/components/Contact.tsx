import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6a078fa5-0ded-429c-8045-e76a24796309',
          subject: `Nová zpráva od ${formData.name} – Smooth Development`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm transition-all duration-200 outline-none focus:ring-1 focus:ring-violet-500/50"
    + " bg-white/[0.04] border border-white/[0.08] focus:border-violet-500/40 focus:bg-white/[0.06]";

  return (
    <section className="min-h-screen flex items-center bg-[#030712] pt-28 pb-16 relative overflow-hidden">
      <div className="orb absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-600/15 animate-glow-pulse" />
      <div className="orb absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-4 sm:mt-8">

          {/* Left: Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h1
              className="text-[clamp(2.2rem,8vw,64px)] font-black mb-5 leading-none tracking-tight font-display"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <span className="text-white">{t('contact.title.ready')}</span>
              <br />
              <span className="text-gradient">{t('contact.title.project')}</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              {t('contact.subtitle')}
            </motion.p>

            {/* Contact tiles */}
            <motion.div className="space-y-3" variants={fadeUp} transition={{ duration: 0.6 }}>
              <a href="tel:+420776677137" className="flex items-center gap-4 p-4 rounded-xl glass-hover group">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{t('contact.form.phone')}</div>
                  <div className="text-white font-medium text-sm">+420 776 677 137</div>
                </div>
              </a>

              <a href="mailto:info@smooth-development.com" className="flex items-center gap-4 p-4 rounded-xl glass-hover group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-medium text-sm truncate">info@smooth-development.com</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="rounded-2xl p-5 sm:p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(34,211,238,0.2))', border: '1px solid rgba(139,92,246,0.4)' }}>
                  <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg font-display text-center">{t('contact.form.success')}</p>
                <button onClick={() => setStatus('idle')} className="text-sm text-gray-500 hover:text-violet-400 transition-colors underline underline-offset-4">
                  {t('contact.form.send')} →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.name')} *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder={t('contact.form.name')} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.email')} *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.phone')}</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+420 XXX XXX XXX" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.service')}</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass + " [color-scheme:dark]"}>
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
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.message')} *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={inputClass + " resize-none"} placeholder={t('contact.form.message.placeholder')} />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Něco se pokazilo, zkuste to prosím znovu.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 0 0 1px rgba(139,92,246,0.3)' }}
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? '...' : t('contact.form.send')}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
