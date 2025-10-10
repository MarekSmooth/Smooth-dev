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
    'hero.subtitle': 'We create digital solutions that work.\nFrom corporate websites to complex systems — we build every project with a focus on performance, clean design, and long-term reliability.',
    'hero.cta.services': 'Explore Services',
    'hero.cta.start': 'Schedule Free Consultation',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.support': 'Support Available',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Tech Solutions',
    'services.subtitle': 'Every project begins with understanding your goal.\nWhether you need a website, e-shop, or internal system, we focus on results that help your business grow.',
    'services.website.title': 'Website Development',
    'services.website.description': 'Modern, responsive websites built with cutting-edge technologies.',
    'services.website.feature1': 'Responsive Design',
    'services.website.feature2': 'SEO Optimized',
    'services.website.feature3': 'Fast Loading',
    'services.website.feature4': 'Custom CMS',
    'services.ecommerce.title': 'E-shop Development & E-commerce Solutions',
    'services.ecommerce.description': 'E-shop development on Shoptet platform or fully custom solutions.',
    'services.ecommerce.feature1': 'Shoptet Platform',
    'services.ecommerce.feature2': 'Custom Development',
    'services.ecommerce.feature3': 'Payment Integration',
    'services.ecommerce.feature4': 'SEO Optimization',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Cross-platform mobile app development for Android and iOS.',
    'services.mobile.feature1': 'Modern Frameworks',
    'services.mobile.feature2': 'Multi-platform',
    'services.mobile.feature3': 'UX Consultation & Design',
    'services.mobile.feature4': 'Android & iOS',
    'services.database.title': 'Database Systems',
    'services.database.description': 'We create robust database solutions and tools for managing corporate data.',
    'services.database.feature1': 'System Consulting',
    'services.database.feature2': 'System Development',
    'services.database.feature3': 'Data Analysis',
    'services.database.feature4': 'Enterprise Solutions',
    'services.repair.title': 'PC & Notebook Repairs',
    'services.repair.description': 'Professional repairs, cleaning, reinstallation, and performance optimization.',
    'services.repair.feature1': 'Diagnostics & Service',
    'services.repair.feature2': 'Windows Installation',
    'services.repair.feature3': 'Hardware Upgrades',
    'services.repair.feature4': 'Performance Optimization',
    'services.custom.title': 'Custom Desktop Builds',
    'services.custom.description': 'Desktop computers precisely built for your needs.',
    'services.custom.feature1': 'Gaming & Workstation Builds',
    'services.custom.feature2': 'Performance Optimization',
    'services.custom.feature3': 'Individual Configuration',
    'services.custom.feature4': 'Custom Components',
    'services.cta': 'Start Your Project',
    
    // About Section
    'about.badge': 'About Us',
    'about.title.crafting': 'Crafting Digital',
    'about.title.excellence': 'Excellence',
    'about.description': 'We are a duo united by a passion for technology, design, and innovation.\nAt Smooth Development, we create solutions that combine aesthetics, performance, and usability.\nOur goal is for the digital world to run smoothly — just like your business.\nThrough a combination of technical knowledge and a sensitive approach to detail, we transform ideas into reality.',
    'about.expertise.title': 'Full-Stack Expertise',
    'about.expertise.description': 'End-to-end development from frontend interface to backend systems and databases.',
    'about.custom.title': 'Custom Solutions',
    'about.custom.description': 'Applications and systems designed precisely for your business needs.',
    'about.hardware.title': 'Hardware Services',
    'about.hardware.description': 'Professional repairs, upgrades, and custom computer builds for maximum performance.',
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
    'contact.title.ready': 'Ready for a',
    'contact.title.project': 'Digital Shift?',
    'contact.subtitle': 'Reach out to us and together we\'ll find a way to transform your ideas into modern, functional solutions.\nThe consultation is free – getting started is easy.',
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
    'made.subtitle': 'Every project is a partnership for us.\nFrom concept to deployment – every step we take aims to achieve perfection in design, performance, and usability.',
    'made.project1.title': 'Shoptet e-shop solutions',
    'made.project1.description': 'Modern online store with payment integration and optimized performance.',
    'made.project2.title': 'Corporate website',
    'made.project2.description': 'Professional website with custom CMS, built on Next.js and Tailwind.',
    'made.project3.title': 'Data analysis',
    'made.project3.description': 'Advanced data analysis and business intelligence solutions.',
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
    'hero.subtitle': 'Tvoříme digitální řešení, která fungují.\nOd firemních webů po komplexní systémy — každý projekt stavíme s důrazem na výkon, čistý design a dlouhodobou spolehlivost.',
    'hero.cta.services': 'Prozkoumat služby',
    'hero.cta.start': 'Domluvte konzultaci zdarma',
    'hero.stats.projects': 'Dokončených projektů',
    'hero.stats.experience': 'Let zkušeností',
    'hero.stats.support': 'Podpora k dispozici',
    
    // Services Section
    'services.badge': 'Naše služby',
    'services.title': 'Komplexní technologická řešení',
    'services.subtitle': 'Každý projekt začínáme pochopením vašeho cíle.\nAť už potřebujete web, e-shop nebo interní systém, zaměřujeme se na výsledek, který pomáhá vašemu podnikání růst.',
    'services.website.title': 'Vývoj webových stránek',
    'services.website.description': 'Moderní, responzivní weby postavené na nejmodernějších technologiích.',
    'services.website.feature1': 'Responzivní design',
    'services.website.feature2': 'SEO optimalizace',
    'services.website.feature3': 'Rychlé načítání',
    'services.website.feature4': 'Vlastní CMS',
    'services.ecommerce.title': 'Vývoj e-shopů a e-commerce řešení',
    'services.ecommerce.description': 'Vývoj e-shopů na platformě Shoptet nebo zcela na míru.',
    'services.ecommerce.feature1': 'Shoptet platforma',
    'services.ecommerce.feature2': 'Vývoj na míru',
    'services.ecommerce.feature3': 'Integrace plateb',
    'services.ecommerce.feature4': 'SEO optimalizace',
    'services.mobile.title': 'Mobilní aplikace',
    'services.mobile.description': 'Vývoj multiplatformních mobilních aplikací pro Android i iOS.',
    'services.mobile.feature1': 'Moderní frameworky',
    'services.mobile.feature2': 'Multi-platform',
    'services.mobile.feature3': 'Konzultace a návrh UX',
    'services.mobile.feature4': 'Android i iOS',
    'services.database.title': 'Databázové systémy',
    'services.database.description': 'Tvoříme robustní databázová řešení a nástroje pro správu firemních dat.',
    'services.database.feature1': 'Systémové poradenství',
    'services.database.feature2': 'Vývoj systémů',
    'services.database.feature3': 'Datová analýza',
    'services.database.feature4': 'Firemní řešení',
    'services.repair.title': 'Opravy PC a notebooků',
    'services.repair.description': 'Profesionální opravy, čištění, reinstalace a optimalizace výkonu.',
    'services.repair.feature1': 'Diagnostika a servis',
    'services.repair.feature2': 'Instalace Windows',
    'services.repair.feature3': 'Hardwarové upgrady',
    'services.repair.feature4': 'Optimalizace výkonu',
    'services.custom.title': 'Sestavy na míru',
    'services.custom.description': 'Stolní počítače přesně podle vašich potřeb.',
    'services.custom.feature1': 'Herní a pracovní sestavy',
    'services.custom.feature2': 'Optimalizace výkonu',
    'services.custom.feature3': 'Individuální konfigurace',
    'services.custom.feature4': 'Komponenty na míru',
    'services.cta': 'Začněte váš projekt',
    
    // About Section
    'about.badge': 'O nás',
    'about.title.crafting': 'Vytváříme digitální',
    'about.title.excellence': 'dokonalost',
    'about.description': 'Jsme dvojice, kterou spojuje vášeň pro technologie, design a inovace.\nVe Smooth Development vytváříme řešení, která spojují estetiku, výkon a použitelnost.\nNaším cílem je, aby digitální svět fungoval hladkě — stejně jako vaše podnikání.\nDíky kombinaci technických znalostí a citlivého přístupu k detailům proměňujeme nápady ve skutečnost.',
    'about.expertise.title': 'Full-Stack odbornost',
    'about.expertise.description': 'Komplexní vývoj od frontendového rozhraní po backendové systémy a databáze.',
    'about.custom.title': 'Řešení na míru',
    'about.custom.description': 'Aplikace a systémy navržené přesně podle potřeb vašeho podnikání.',
    'about.hardware.title': 'Hardwarové služby',
    'about.hardware.description': 'Profesionální opravy, upgrady a stavby počítačů na míru pro maximální výkon.',
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
    'contact.title.ready': 'Připravení na',
    'contact.title.project': 'digitální posun?',
    'contact.subtitle': 'Ozvěte se nám a společně najdeme cestu, jak proměnit vaše nápady v moderní, funkční řešení.\nKonzultace je zdarma – začít je snadné.',
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
    'made.subtitle': 'Každý projekt je pro nás partnerství.\nOd konceptu po nasazení – každý krok děláme s cílem dosáhnout dokonalosti v designu, výkonu i použitelnosti.',
    'made.project1.title': 'Shoptet e-shop řešení',
    'made.project1.description': 'Moderní online obchod s platební integrací a optimalizovaným výkonem.',
    'made.project2.title': 'Firemní web',
    'made.project2.description': 'Profesionální web s vlastním CMS, postavený na Next.js a Tailwindu.',
    'made.project3.title': 'Datová analýza',
    'made.project3.description': 'Pokročilá datová analýza a business intelligence řešení.',
    'made.cta': 'Začněte váš projekt',
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