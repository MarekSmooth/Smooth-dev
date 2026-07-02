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
    'hero.badge': 'Professional Development Solutions — Brno & Czech Republic',
    'hero.title.smooth': 'Smooth',
    'hero.title.development': 'Development',
    'hero.subtitle': 'We create digital solutions that work — from our base in Brno, for clients across the Czech Republic.\nFrom corporate websites to complex systems — we build every project with a focus on performance, clean design, and long-term reliability.',
    'hero.cta.services': 'Explore Services',
    'hero.cta.start': 'Schedule Free Consultation',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.support': 'Support Available',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Tech Solutions',
    'services.subtitle': 'Every project begins with understanding your goal.\nWhether you need a website, e-shop, or internal system, we focus on results that help your business grow — for clients in Brno and across the Czech Republic.',
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
    'about.title.crafting': 'Your Vision.',
    'about.title.excellence': 'Our Code.',
    'about.description': 'We are a duo based in Brno, united by a passion for technology, design, and innovation, building for clients across the Czech Republic.\nAt Smooth Development, we create solutions that combine aesthetics, performance, and usability.\nOur goal is for the digital world to run smoothly — just like your business.\nThrough a combination of technical knowledge and a sensitive approach to detail, we transform ideas into reality.',
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
    'contact.location.value': 'Brno, Czech Republic',
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
    'footer.tagline': 'Full-stack development agency crafting digital excellence.',
    'footer.description': 'Expert full-stack development, custom applications, e-commerce solutions, and professional tech services. Transform your business with cutting-edge technology.',
    'footer.services': 'Services',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 Smooth Development. All rights reserved.',

    // Made by Smooth Page
    'made.title': 'Made by Smooth',
    'made.subtitle': 'Every project is a partnership for us.\nFrom concept to deployment – every step we take aims to achieve perfection in design, performance, and usability.',
    'made.project1.title': 'Autoškola JEDU! Brno',
    'made.project1.description': 'A small driving school in Brno with a friendly, family atmosphere — Category B courses and refresher lessons.',
    'made.project2.title': 'Kadeřnictví POHODA',
    'made.project2.description': 'Website for hairdresser Helena Bošinová in Liberec — 20+ years of experience and online booking.',
    'made.project3.title': 'MN Shine Detailing',
    'made.project3.description': 'Car detailing studio near Brno — interior cleaning, paint renovation, ceramic coating.',
    'made.project4.title': 'Studio Mirage',
    'made.project4.description': 'Accredited requalification courses in Liberec — pedicure, cosmetics, nail design.',
    'made.project5.title': 'Vraky Brno',
    'made.project5.description': 'Vehicle towing, purchase, and eco-friendly disposal in the South Moravian Region.',
    'made.cta': 'Start Your Project',
    'made.visit': 'Visit website',

    // Homepage: Process Section
    'process.title': 'How We Work Together',
    'process.subtitle': 'No guesswork, no surprises. You always know exactly where your project stands.',
    'process.step1.title': 'Free Consultation',
    'process.step1.description': 'We discuss your idea, goals, and budget. No strings attached.',
    'process.step2.title': 'Proposal & Plan',
    'process.step2.description': 'We prepare a concrete plan, timeline estimate, and cost breakdown.',
    'process.step3.title': 'Design & Visuals',
    'process.step3.description': 'We design the UI/UX and visual identity before a single line of code is written.',
    'process.step4.title': 'Development',
    'process.step4.description': 'We build your project with regular progress updates.',
    'process.step5.title': 'Testing & SEO',
    'process.step5.description': 'We test every feature and fine-tune technical SEO for search visibility.',
    'process.step6.title': 'Approval & Launch',
    'process.step6.description': 'Final sign-off, domain setup, and deployment to production.',
    'process.step7.title': 'Training & Support',
    'process.step7.description': 'We train your team and stay available for ongoing support.',

    // Homepage: Work Showcase
    'work.title': 'Our Work',
    'work.subtitle': 'A few examples of what we\'ve been building lately.',
    'work.cta': 'View All Projects',

    // Homepage: Final CTA
    'finalcta.title': 'Got a project in mind?',
    'finalcta.subtitle': 'Let\'s talk it through — the consultation is free and no-strings-attached.',
    'finalcta.cta': 'Let\'s Get Started',

    // SEO — per-page title/description
    'seo.home.title': 'Smooth Development — Web, E-commerce & App Development | Brno, Czech Republic',
    'seo.home.description': 'Smooth Development builds custom websites, e-shops, web applications, and systems from Brno, serving clients across the Czech Republic.',
    'seo.services.title': 'Services — Web, E-shop & Custom App Development | Smooth Development Brno',
    'seo.services.description': 'Website development, e-shops, mobile apps, database systems, and PC services — full-stack development from Brno for clients across the Czech Republic.',
    'seo.about.title': 'About Us — Full-Stack Development Studio in Brno | Smooth Development',
    'seo.about.description': 'Meet Smooth Development, a full-stack development duo based in Brno delivering websites, e-shops, and custom systems across the Czech Republic.',
    'seo.made.title': 'Made by Smooth — Our Web & E-shop Portfolio | Smooth Development',
    'seo.made.description': 'A selection of websites and e-shops built by Smooth Development for clients in Brno and throughout the Czech Republic.',
    'seo.contact.title': 'Contact — Smooth Development, Brno, Czech Republic',
    'seo.contact.description': 'Get in touch with Smooth Development in Brno for a free consultation on your website, e-shop, or web application — we work with clients across the Czech Republic.',
  },
  cs: {
    // Header
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.about': 'O nás',
    'nav.made': 'Made by Smooth',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.badge': 'Profesionální vývojová řešení — Brno & ČR',
    'hero.title.smooth': 'Smooth',
    'hero.title.development': 'Development',
    'hero.subtitle': 'Tvoříme digitální řešení, která fungují — z Brna, pro klienty po celé České republice.\nOd firemních webů po komplexní systémy — každý projekt stavíme s důrazem na výkon, čistý design a dlouhodobou spolehlivost.',
    'hero.cta.services': 'Prozkoumat služby',
    'hero.cta.start': 'Domluvte konzultaci zdarma',
    'hero.stats.projects': 'Dokončených projektů',
    'hero.stats.experience': 'Let zkušeností',
    'hero.stats.support': 'Podpora k dispozici',
    
    // Services Section
    'services.badge': 'Naše služby',
    'services.title': 'Komplexní technologická řešení',
    'services.subtitle': 'Každý projekt začínáme pochopením vašeho cíle.\nAť už potřebujete web, e-shop nebo interní systém, zaměřujeme se na výsledek, který pomáhá vašemu podnikání růst — pro klienty v Brně i po celé České republice.',
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
    'about.title.crafting': 'Váš nápad.',
    'about.title.excellence': 'Náš kód.',
    'about.description': 'Jsme dvojice z Brna, kterou spojuje vášeň pro technologie, design a inovace — tvoříme pro klienty po celé České republice.\nVe Smooth Development vytváříme řešení, která spojují estetiku, výkon a použitelnost.\nNaším cílem je, aby digitální svět fungoval hladce — stejně jako vaše podnikání.\nDíky kombinaci technických znalostí a citlivého přístupu k detailům proměňujeme nápady ve skutečnost.',
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
    'contact.location.value': 'Brno, Česká republika',
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
    'footer.tagline': 'Agentura pro full-stack vývoj. Tvoříme digitální dokonalost.',
    'footer.description': 'Odborný full-stack vývoj, vlastní aplikace, e-commerce řešení a profesionální technické služby. Transformujte své podnikání pomocí nejmodernějších technologií.',
    'footer.services': 'Služby',
    'footer.links': 'Rychlé odkazy',
    'footer.privacy': 'Zásady ochrany osobních údajů',
    'footer.terms': 'Podmínky služby',
    'footer.copyright': '© 2025 Smooth Development. Všechna práva vyhrazena.',

    // Made by Smooth Page
    'made.title': 'Made by Smooth',
    'made.subtitle': 'Každý projekt je pro nás partnerství.\nOd konceptu po nasazení – každý krok děláme s cílem dosáhnout dokonalosti v designu, výkonu i použitelnosti.',
    'made.project1.title': 'Autoškola JEDU! Brno',
    'made.project1.description': 'Malá autoškola s rodinnou atmosférou v Brně — kurzy skupiny B a kondiční jízdy.',
    'made.project2.title': 'Kadeřnictví POHODA',
    'made.project2.description': 'Web pro kadeřnictví Heleny Bošinové v Liberci — přes 20 let zkušeností a online rezervace termínů.',
    'made.project3.title': 'MN Shine Detailing',
    'made.project3.description': 'Detailingové studio u Brna — čištění interiéru, renovace laku, keramická ochrana.',
    'made.project4.title': 'Studio Mirage',
    'made.project4.description': 'Akreditované rekvalifikační kurzy v Liberci — pedikúra, kosmetika, nehtová designérka.',
    'made.project5.title': 'Vraky Brno',
    'made.project5.description': 'Odtah, výkup a ekologická likvidace vozidel v Jihomoravském kraji.',
    'made.cta': 'Začněte váš projekt',
    'made.visit': 'Navštívit web',

    // Homepage: Process Section
    'process.title': 'Jak probíhá spolupráce',
    'process.subtitle': 'Žádné nejasnosti, žádná překvapení. Vždy přesně víte, v jaké fázi se váš projekt nachází.',
    'process.step1.title': 'Konzultace zdarma',
    'process.step1.description': 'Probereme váš nápad, cíle a rozpočet. Bez závazků.',
    'process.step2.title': 'Návrh a nabídka',
    'process.step2.description': 'Připravíme konkrétní plán, časový odhad a kalkulaci nákladů.',
    'process.step3.title': 'Design a grafika',
    'process.step3.description': 'Navrhneme UI/UX a vizuální podobu ještě před prvním řádkem kódu.',
    'process.step4.title': 'Vývoj',
    'process.step4.description': 'Stavíme váš projekt s pravidelnými ukázkami postupu.',
    'process.step5.title': 'Testování a SEO',
    'process.step5.description': 'Otestujeme každou funkci a doladíme technické SEO pro lepší viditelnost ve vyhledávání.',
    'process.step6.title': 'Schválení a nasazení',
    'process.step6.description': 'Finální schválení, založení domény a nasazení do provozu.',
    'process.step7.title': 'Zaškolení a podpora',
    'process.step7.description': 'Zaškolíme váš tým a zůstáváme k dispozici i po spuštění.',

    // Homepage: Work Showcase
    'work.title': 'Naše práce',
    'work.subtitle': 'Pár ukázek toho, na čem jsme nedávno pracovali.',
    'work.cta': 'Zobrazit všechny projekty',

    // Homepage: Final CTA
    'finalcta.title': 'Máte nápad na projekt?',
    'finalcta.subtitle': 'Probereme ho společně – konzultace je zdarma a nezávazná.',
    'finalcta.cta': 'Začněme spolupracovat',

    // SEO — titulky a popisky pro jednotlivé stránky
    'seo.home.title': 'Smooth Development — Vývoj webů, e-shopů a aplikací | Brno & ČR',
    'seo.home.description': 'Smooth Development tvoří weby, e-shopy, webové aplikace a systémy na míru z Brna, s realizacemi po celé České republice.',
    'seo.services.title': 'Naše služby — Weby, e-shopy a systémy na míru | Smooth Development Brno',
    'seo.services.description': 'Vývoj webových stránek, e-shopů, mobilních aplikací, databázových systémů a servis počítačů — full-stack vývoj z Brna pro klienty po celé ČR.',
    'seo.about.title': 'O nás — Full-stack vývojářské studio z Brna | Smooth Development',
    'seo.about.description': 'Poznejte Smooth Development, full-stack vývojářskou dvojici z Brna, která tvoří weby, e-shopy a systémy na míru pro klienty po celé České republice.',
    'seo.made.title': 'Made by Smooth — Portfolio webů a e-shopů | Smooth Development',
    'seo.made.description': 'Výběr webů a e-shopů, které jsme vytvořili pro klienty v Brně i po celé České republice.',
    'seo.contact.title': 'Kontakt — Smooth Development, Brno, Česká republika',
    'seo.contact.description': 'Ozvěte se nám do Brna na nezávaznou konzultaci k vašemu webu, e-shopu nebo webové aplikaci — spolupracujeme s klienty po celé České republice.',
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
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};