import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.made': 'Made by Smooth',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Professional Development Solutions',
    'hero.title.smooth': 'Smooth',
    'hero.title.development': 'Development',
    'hero.subtitle': 'Expert full-stack development, custom applications, e-commerce solutions, and professional tech services tailored to your business needs.',
    'hero.cta.services': 'Explore Services',
    'hero.cta.start': 'Get Started',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.support': 'Support Available',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Tech Solutions',
    'services.subtitle': 'From concept to deployment, we provide end-to-end technology solutions that drive your business forward in the digital age.',
    'services.website.title': 'Website Development',
    'services.website.description': 'Modern, responsive websites built with cutting-edge technologies',
    'services.website.feature1': 'Responsive Design',
    'services.website.feature2': 'SEO Optimized',
    'services.website.feature3': 'Fast Loading',
    'services.website.feature4': 'Custom CMS',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.description': 'E-shop development on Shoptet platform, custom solutions available after consultation',
    'services.ecommerce.feature1': 'Shoptet Platform',
    'services.ecommerce.feature2': 'Custom Development',
    'services.ecommerce.feature3': 'Payment Integration',
    'services.ecommerce.feature4': 'SEO Optimization',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Cross-platform mobile app development - we\'re building our expertise in this area',
    'services.mobile.feature1': 'Growing Experience',
    'services.mobile.feature2': 'Cross-Platform',
    'services.mobile.feature3': 'Modern Frameworks',
    'services.mobile.feature4': 'Consultation Available',
    'services.database.title': 'Database Systems',
    'services.database.description': 'Database solutions and consulting - building expertise in manufacturing systems and data analysis',
    'services.database.feature1': 'System Consulting',
    'services.database.feature2': 'Manufacturing Systems',
    'services.database.feature3': 'Data Analysis',
    'services.database.feature4': 'Growing Experience',
    'services.repair.title': 'PC & Notebook Repairs',
    'services.repair.description': 'System and software installation and configuration, hardware and system cleaning, optimization',
    'services.repair.feature1': 'PC & Notebook Repairs',
    'services.repair.feature2': 'Hardware & System Cleaning',
    'services.repair.feature3': 'Windows Reinstallation',
    'services.repair.feature4': 'Software Installation',
    'services.custom.title': 'Custom Desktop Builds',
    'services.custom.description': 'Tailored desktop computers built to your specifications',
    'services.custom.feature1': 'Custom Configuration',
    'services.custom.feature2': 'Performance Optimization',
    'services.custom.feature3': 'Gaming Setups',
    'services.custom.feature4': 'Workstation Builds',
    'services.cta': 'Start Your Project',
    
    // About Section
    'about.badge': 'About Us',
    'about.title.crafting': 'Crafting Digital',
    'about.title.excellence': 'Excellence',
    'about.description': 'At Smooth Development, we are a young two-member team with a sense for modern design, broad technical foundation, and passion for innovation in the digital world. We specialize in creating seamless digital experiences that transform businesses. With education and experience in the field, we combine technical expertise with creative vision to deliver custom-tailored solutions that not only meet your current needs but scale with your future growth.',
    'about.expertise.title': 'Full-Stack Expertise',
    'about.expertise.description': 'End-to-end development from frontend interfaces to backend systems and databases.',
    'about.custom.title': 'Custom Solutions',
    'about.custom.description': 'Tailored applications and systems designed specifically for your business requirements.',
    'about.hardware.title': 'Hardware Services',
    'about.hardware.description': 'Professional PC repairs, upgrades, and custom desktop builds for optimal performance.',
    'about.cta': 'Let\'s Work Together',
    'about.achievement.expert.title': 'Expert Team',
    'about.achievement.expert.description': 'Certified professionals with years of industry experience',
    'about.achievement.client.title': 'Client-Focused',
    'about.achievement.client.description': 'Dedicated to understanding and exceeding client expectations',
    'about.achievement.timely.title': 'Timely Delivery',
    'about.achievement.timely.description': 'Consistent track record of on-time project completion',
    'about.achievement.quality.title': 'Quality Assurance',
    'about.achievement.quality.description': 'Rigorous testing and quality control processes',
    
    // Contact Section
    'contact.badge': 'Get In Touch',
    'contact.title.ready': 'Ready to Start Your',
    'contact.title.project': 'Next Project?',
    'contact.subtitle': 'Let\'s discuss how we can help transform your ideas into reality. Contact us today for a free consultation.',
    'contact.phone': 'Phone',
    'contact.phone.hours': 'Mon-Fri 9AM-6PM',
    'contact.email': 'Email',
    'contact.email.support': '24/7 Support Available',
    'contact.location': 'Location',
    'contact.location.services': 'Remote & On-site Services',
    'contact.response': 'Response Time',
    'contact.response.time': 'Within 24 hours',
    'contact.response.note': 'Usually much faster!',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service of Interest',
    'contact.form.service.select': 'Select a service',
    'contact.form.service.website': 'Website Development',
    'contact.form.service.ecommerce': 'E-commerce Solution',
    'contact.form.service.mobile': 'Mobile Application',
    'contact.form.service.database': 'Database System',
    'contact.form.service.repair': 'PC/Notebook Repair',
    'contact.form.service.custom': 'Custom Desktop Build',
    'contact.form.service.consultation': 'Consultation',
    'contact.form.message': 'Project Description',
    'contact.form.message.placeholder': 'Tell us about your project, requirements, timeline, and any specific details...',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Thank you for your message! We\'ll get back to you soon.',
    
    // Footer
    'footer.description': 'Expert full-stack development, custom applications, e-commerce solutions, and professional tech services. Transform your business with cutting-edge technology.',
    'footer.services': 'Services',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 Smooth Development. All rights reserved.',

    // Made by Smooth Page
    'made.title': 'Made by Smooth',
    'made.subtitle': 'Showcase of our work - from concept to deployment, each project represents our commitment to excellence and innovation in digital solutions.',
    'made.project1.title': 'Shoptet E-shop Solutions',
    'made.project1.description': 'Modern online store with payment integration',
    'made.project2.title': 'Corporate Website',
    'made.project2.description': 'Professional website with custom CMS',
    'made.project3.title': 'Data Analysis',
    'made.project3.description': 'Advanced data analysis and business intelligence solutions',
    'made.cta': 'Start Your Project',
  },
  cs: {
    // Header
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.about': 'O nás',
    'nav.made': 'Made by Smooth',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.badge': 'Profesionální vývojová řešení',
    'hero.title.smooth': 'Smooth',
    'hero.title.development': 'Development',
    'hero.subtitle': 'Odborný full-stack vývoj, vlastní aplikace, e-commerce řešení a profesionální technické služby přizpůsobené potřebám vašeho podnikání.',
    'hero.cta.services': 'Prozkoumat služby',
    'hero.cta.start': 'Začít',
    'hero.stats.projects': 'Dokončených projektů',
    'hero.stats.experience': 'Let zkušeností',
    'hero.stats.support': 'Podpora k dispozici',
    
    // Services Section
    'services.badge': 'Naše služby',
    'services.title': 'Komplexní technologická řešení',
    'services.subtitle': 'Od konceptu po nasazení poskytujeme komplexní technologická řešení, která posouvají vaše podnikání vpřed v digitálním věku.',
    'services.website.title': 'Vývoj webových stránek',
    'services.website.description': 'Moderní, responzivní webové stránky postavené na nejmodernějších technologiích',
    'services.website.feature1': 'Responzivní design',
    'services.website.feature2': 'SEO optimalizace',
    'services.website.feature3': 'Rychlé načítání',
    'services.website.feature4': 'Vlastní CMS',
    'services.ecommerce.title': 'E-commerce řešení',
    'services.ecommerce.description': 'Vývoj e-shopů na platformě Shoptet, řešení na míru dostupná po konzultaci',
    'services.ecommerce.feature1': 'Shoptet platforma',
    'services.ecommerce.feature2': 'Vývoj na míru',
    'services.ecommerce.feature3': 'Integrace plateb',
    'services.ecommerce.feature4': 'SEO optimalizace',
    'services.mobile.title': 'Mobilní aplikace',
    'services.mobile.description': 'Vývoj multiplatformních mobilních aplikací - v této oblasti budujeme naše zkušenosti',
    'services.mobile.feature1': 'Rostoucí zkušenosti',
    'services.mobile.feature2': 'Multiplatformní',
    'services.mobile.feature3': 'Moderní frameworky',
    'services.mobile.feature4': 'Konzultace k dispozici',
    'services.database.title': 'Databázové systémy',
    'services.database.description': 'Databázová řešení a poradenství - budujeme zkušenosti v systémech pro výrobní firmy a datové analýze',
    'services.database.feature1': 'Systémové poradenství',
    'services.database.feature2': 'Výrobní systémy',
    'services.database.feature3': 'Datová analýza',
    'services.database.feature4': 'Rostoucí zkušenosti',
    'services.repair.title': 'Opravy PC a notebooků',
    'services.repair.description': 'Instalace a nastavení systémů, případně jakéhokoliv software, čištění hardwaru i systému, optimalizace',
    'services.repair.feature1': 'Opravy stolních počítačů a notebooků',
    'services.repair.feature2': 'Čištění hardwaru i systému',
    'services.repair.feature3': 'Přeinstalace Windows',
    'services.repair.feature4': 'Instalace software',
    'services.custom.title': 'Sestavy na míru',
    'services.custom.description': 'Stolní počítače sestavené podle vašich specifikací',
    'services.custom.feature1': 'Vlastní konfigurace',
    'services.custom.feature2': 'Optimalizace výkonu',
    'services.custom.feature3': 'Herní sestavy',
    'services.custom.feature4': 'Pracovní stanice',
    'services.cta': 'Začít váš projekt',
    
    // About Section
    'about.badge': 'O nás',
    'about.title.crafting': 'Vytváříme digitální',
    'about.title.excellence': 'dokonalost',
    'about.description': 'Ve Smooth Development jsme mladý dvoučlenný tým, který má cit pro moderní design, široký technický základ a zapálení pro inovace v digitálním světě. Specializujeme se na vytváření bezproblémových digitálních zážitků, které transformují podnikání. Máme vzdělání a praxi v oboru a kombinujeme technické odborné znalosti s kreativní vizí, abychom poskytli řešení na míru, která nejen splňují vaše současné potřeby, ale také se škálují s vaším budoucím růstem.',
    'about.expertise.title': 'Full-Stack odbornost',
    'about.expertise.description': 'Komplexní vývoj od frontendových rozhraní po backendové systémy a databáze.',
    'about.custom.title': 'Řešení na míru',
    'about.custom.description': 'Aplikace a systémy navržené speciálně pro požadavky vašeho podnikání.',
    'about.hardware.title': 'Hardwarové služby',
    'about.hardware.description': 'Profesionální opravy PC, upgrady a sestavy stolních počítačů na míru pro optimální výkon.',
    'about.cta': 'Pojďme spolupracovat',
    'about.achievement.expert.title': 'Odborný tým',
    'about.achievement.expert.description': 'Certifikovaní profesionálové s letitými zkušenostmi v oboru',
    'about.achievement.client.title': 'Zaměření na klienta',
    'about.achievement.client.description': 'Věnujeme se porozumění a překonávání očekávání klientů',
    'about.achievement.timely.title': 'Včasné dodání',
    'about.achievement.timely.description': 'Konzistentní historie včasného dokončování projektů',
    'about.achievement.quality.title': 'Zajištění kvality',
    'about.achievement.quality.description': 'Důkladné testování a procesy kontroly kvality',
    
    // Contact Section
    'contact.badge': 'Kontaktujte nás',
    'contact.title.ready': 'Připraveni začít váš',
    'contact.title.project': 'další projekt?',
    'contact.subtitle': 'Pojďme si promluvit o tom, jak můžeme pomoci proměnit vaše nápady ve skutečnost. Kontaktujte nás ještě dnes pro bezplatnou konzultaci.',
    'contact.phone': 'Telefon',
    'contact.phone.hours': 'Po-Pá 9:00-18:00',
    'contact.email': 'E-mail',
    'contact.email.support': 'Podpora 24/7 k dispozici',
    'contact.location': 'Lokalita',
    'contact.location.services': 'Vzdálené a místní služby',
    'contact.response': 'Doba odezvy',
    'contact.response.time': 'Do 24 hodin',
    'contact.response.note': 'Obvykle mnohem rychleji!',
    'contact.form.name': 'Celé jméno',
    'contact.form.email': 'E-mailová adresa',
    'contact.form.phone': 'Telefonní číslo',
    'contact.form.service': 'Služba zájmu',
    'contact.form.service.select': 'Vyberte službu',
    'contact.form.service.website': 'Vývoj webových stránek',
    'contact.form.service.ecommerce': 'E-commerce řešení',
    'contact.form.service.mobile': 'Mobilní aplikace',
    'contact.form.service.database': 'Databázový systém',
    'contact.form.service.repair': 'Oprava PC/notebooku',
    'contact.form.service.custom': 'Sestava na míru',
    'contact.form.service.consultation': 'Konzultace',
    'contact.form.message': 'Popis projektu',
    'contact.form.message.placeholder': 'Řekněte nám o vašem projektu, požadavcích, časovém harmonogramu a jakýchkoli specifických detailech...',
    'contact.form.send': 'Odeslat zprávu',
    'contact.form.success': 'Děkujeme za vaši zprávu! Brzy se vám ozveme.',
    
    // Footer
    'footer.description': 'Odborný full-stack vývoj, vlastní aplikace, e-commerce řešení a profesionální technické služby. Transformujte své podnikání pomocí nejmodernějších technologií.',
    'footer.services': 'Služby',
    'footer.links': 'Rychlé odkazy',
    'footer.privacy': 'Zásady ochrany osobních údajů',
    'footer.terms': 'Podmínky služby',
    'footer.copyright': '© 2025 Smooth Development. Všechna práva vyhrazena.',

    // Made by Smooth Page
    'made.title': 'Made by Smooth',
    'made.subtitle': 'Ukázka naší práce - od konceptu po nasazení, každý projekt představuje náš závazek k dokonalosti a inovacím v digitálních řešeních.',
    'made.project1.title': 'Shoptet E-shop řešení',
    'made.project1.description': 'Moderní online obchod s platební integrací',
    'made.project2.title': 'Firemní Web',
    'made.project2.description': 'Profesionální web s vlastním CMS',
    'made.project3.title': 'Datová Analýza',
    'made.project3.description': 'Pokročilá datová analýza a business intelligence řešení',
    'made.cta': 'Začít váš projekt',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'cs';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};