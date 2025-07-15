import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

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

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/public/SD logo 18.png" 
                  alt="Smooth Development Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold">Smooth Development</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting exceptional digital experiences that drive business success. Your vision, our technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all duration-200 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a
                  href="mailto:hello@smoothdevelopment.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  hello@smoothdevelopment.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="text-center">
              <h4 className="font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
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
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;