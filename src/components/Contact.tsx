import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@smoothdevelopment.com',
      link: 'mailto:hello@smoothdevelopment.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Get In{' '}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Let's discuss your project and create 
              something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <div className="card-premium bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-premium">
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                  Start Your Project
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <CheckCircle className="w-20 h-20 text-gold-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 form-premium">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-premium bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 py-4 rounded-xl font-heading font-semibold hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-dark-950"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Contact Details */}
              <div className="card-premium bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-premium">
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <info.icon className="w-6 h-6 text-dark-950" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-gold-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="card-premium bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-premium">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-gold-400" />
                  <h4 className="font-heading font-bold text-gray-900 dark:text-white">
                    Office Hours
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                    <span className="text-gray-900 dark:text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                    <span className="text-gray-900 dark:text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card-premium bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-8 text-dark-950">
                <h4 className="font-heading font-bold mb-6 text-xl">Why Choose Us?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">Dedicated team of experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Premium quality guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">24-hour response time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;