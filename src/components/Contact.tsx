import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    { value: '', label: t('contact.form.service.select') },
    { value: 'website', label: t('contact.form.service.website') },
    { value: 'ecommerce', label: t('contact.form.service.ecommerce') },
    { value: 'mobile', label: t('contact.form.service.mobile') },
    { value: 'database', label: t('contact.form.service.database') },
    { value: 'repair', label: t('contact.form.service.repair') },
    { value: 'custom-build', label: t('contact.form.service.custom') },
    { value: 'consultation', label: t('contact.form.service.consultation') },
  ];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) setServiceOpen(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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
    <section className="min-h-dvh flex items-center bg-[#030712] pt-28 pb-16 relative overflow-hidden">
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
              className="text-[clamp(2.2rem,8vw,64px)] font-black mb-5 leading-none tracking-tightest font-display"
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

              <div className="flex items-center gap-4 p-4 rounded-xl glass-hover">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{t('contact.location')}</div>
                  <div className="text-white font-medium text-sm">{t('contact.location.value')}</div>
                </div>
              </div>
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
              <div className="flex flex-col items-center justify-center py-16 gap-4" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(34,211,238,0.2))', border: '1px solid rgba(139,92,246,0.4)' }}>
                  <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                    <div className="relative" ref={serviceRef}>
                      <button
                        type="button"
                        id="service"
                        onClick={() => setServiceOpen((o) => !o)}
                        aria-haspopup="listbox"
                        aria-expanded={serviceOpen}
                        className={inputClass + " flex items-center justify-between text-left"}
                      >
                        <span className={formData.service ? 'text-white' : 'text-gray-600'}>
                          {serviceOptions.find((opt) => opt.value === formData.service)?.label}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-violet-400 transition-transform duration-200 flex-shrink-0 ${serviceOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {serviceOpen && (
                        <ul
                          role="listbox"
                          className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto rounded-xl py-1.5"
                          style={{ background: '#0d0a1a', border: '1px solid rgba(139,92,246,0.3)', boxShadow: '0 16px 40px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.08)' }}
                        >
                          {serviceOptions.map((opt) => (
                            <li
                              key={opt.value}
                              role="option"
                              aria-selected={formData.service === opt.value}
                              onClick={() => { setFormData({ ...formData, service: opt.value }); setServiceOpen(false); }}
                              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                                formData.service === opt.value
                                  ? 'bg-violet-500/15 text-violet-300'
                                  : 'text-gray-300 hover:bg-violet-500/10 hover:text-white'
                              }`}
                            >
                              {opt.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">{t('contact.form.message')} *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={inputClass + " resize-none"} placeholder={t('contact.form.message.placeholder')} />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center" role="alert" aria-live="polite">Něco se pokazilo, zkuste to prosím znovu.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 0 0 1px rgba(139,92,246,0.3)' }}
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
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
