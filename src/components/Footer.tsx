import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Automation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <img 
                    src="/SD logo 18.png" 
                    alt="Smooth Development Logo" 
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                <span className="text-xl font-heading font-bold">Smooth Development</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Crafting exceptional digital experiences that drive business success. 
                Your vision, our technology, unlimited possibilities.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-gold-400 hover:to-gold-600 transition-all duration-300 group glow-effect-hover"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-dark-950" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-heading font-bold text-white mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Mail className="w-6 h-6 text-dark-950" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email us</p>
                  <a
                    href="mailto:hello@smoothdevelopment.com"
                    className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
                  >
                    hello@smoothdevelopment.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Phone className="w-6 h-6 text-dark-950" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call us</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="card-premium bg-gray-800 rounded-2xl p-8 mb-12 shadow-premium">
            <div className="text-center">
              <h4 className="font-heading font-bold text-white mb-4 text-xl">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights, tips, and project updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                />
                <button className="btn-premium bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 px-6 py-3 rounded-xl font-heading font-semibold hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-glow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300">
                © {currentYear} Smooth Development. All rights reserved.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </div>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-glow group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 text-dark-950 group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;