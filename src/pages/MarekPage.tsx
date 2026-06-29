import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  Globe,
  Linkedin,
  ExternalLink,
  Code2,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { EASE_OUT, SPRING_SNAPPY } from '../lib/motion';
import ShaderBackground from '../components/ShaderBackground';

const PAGE_TITLE = 'Marek Hladký — Full-stack Developer & Quality Specialist';
const PAGE_DESCRIPTION = 'Full-stack web developer a quality systems specialist z Brna. Zakladatel Smooth Development.';
const CANONICAL_URL = 'https://smooth-development.com/marek';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const webSkills = [
  'Full-stack vývoj (PHP, MySQL, JavaScript, React)',
  'Webdesign a UI/UX',
  'E-shopy na platformě Shoptet',
  'SEO optimalizace',
  'Systémy na míru, AI-assisted vývoj',
  'DNS, webhosting a serverová správa',
];

const qualitySkills = [
  'IATF 16949, VDA 6.3/6.5',
  'APQP, PPAP, FMEA, MSA, SPC',
  '8D reporty a řízení neshod',
  'Lean, Kaizen, Green Belt',
  'Procesní audity',
];

interface MarekProject {
  title: string;
  description: string;
  tags: string[];
  tagColor: string;
  url: string | null;
  image: string;
}

const projects: MarekProject[] = [
  {
    title: 'Smooth Development',
    description: 'Digitální agentura zaměřená na výkon, čistý design a dlouhodobou spolehlivost.',
    tags: ['Agentura', 'Web & Brand'],
    tagColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    url: 'https://smooth-development.com',
    image: '/portfolio/sd.png',
  },
  {
    title: 'MN Shine Detailing',
    description: 'Web pro auto detailing studio u Brna.',
    tags: ['Auto Detailing', 'Webdesign'],
    tagColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
    url: 'https://mnshine.cz',
    image: '/portfolio/mnshine.jpg',
  },
  {
    title: 'Autoškola JEDU! Brno',
    description: 'Firemní web pro autoškolu v Brně.',
    tags: ['Autoškola', 'Webdesign'],
    tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    url: 'https://autoskolajedu.cz',
    image: '/portfolio/autoskolajedu.jpg',
  },
  {
    title: 'Vraky Brno',
    description: 'Odtah, výkup a ekologická likvidace vozidel v Jihomoravském kraji.',
    tags: ['Odtahová služba', 'Webdesign'],
    tagColor: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
    url: 'https://vraky-brno.cz',
    image: '/portfolio/vrakybrno.jpg',
  },
  {
    title: 'AQMS',
    description: 'Vlastní webový systém pro evidenci neshod, nápravná opatření a interaktivní 8D reporty s automatickým generováním výstupů.',
    tags: ['Quality Systems', 'Ve vývoji'],
    tagColor: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    url: null,
    image: '/portfolio/aqms.png',
  },
];

const navLinks = [
  { href: '#o-mne', label: 'O mně' },
  { href: '#dovednosti', label: 'Co umím' },
  { href: '#zkusenosti', label: 'Zkušenosti' },
  { href: '#projekty', label: 'Projekty' },
  { href: '#kontakt', label: 'Kontakt' },
];

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    role: 'Full-stack Web Developer',
    company: 'Freelance',
    period: '05/2025 – dosud',
    description: 'Weby a e-shopy na míru, technické SEO a vývoj vlastního systému AQMS pro řízení kvality a neshod.',
  },
  {
    role: 'Supervisor zákaznické a procesní kvality',
    company: 'Inventec Czech s.r.o. — SMT/PCBA automotive výroba',
    period: '02/2023 – 04/2025 · 2 roky 3 měs.',
    description: 'Vybudoval oddělení kvality od nuly — nábor a vedení týmu, zavedení IATF 16949 na nové výrobní hale, řízení 8D reklamací a zákaznických auditů (VDA 6.3).',
  },
  {
    role: 'Inženýr zákaznické kvality',
    company: 'Inventec Czech s.r.o.',
    period: '01/2022 – 01/2023 · 1 rok 1 měs.',
    description: 'Zavádění IATF 16949 na nově spouštěných linkách, APQP/PPAP, řízení reklamací metodou 8D, analýza kořenových příčin.',
  },
  {
    role: 'Inženýr kvality',
    company: 'Inventec Czech s.r.o. — výroba serverů HP/HPE',
    period: '11/2014 – 12/2021 · 7 let 2 měs.',
    description: 'Process FMEA, statistická analýza procesních dat pro centrálu v Tchaj-wanu, zavádění nových produktů (NPI) a Kaizen projekty.',
  },
  {
    role: 'Technik kvality',
    company: 'Inventec Czech s.r.o.',
    period: '02/2013 – 10/2014 · 1 rok 9 měs.',
    description: 'Diagnostické testy serverů HPE, kontrola kvality hotových produktů, dokumentace neshod.',
  },
];

const education = [
  { school: 'UTB Zlín', program: 'Softwarové inženýrství (5 semestrů)', period: '2019 – 2023' },
  { school: 'Obchodní akademie Opava', program: 'Ekonomika a podnikání, maturita', period: '2009 – 2012' },
];

const certificationGroups = [
  {
    title: 'Automotive & kvalita',
    color: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    items: ['ISO 9001 → IATF 16949', 'Interní auditor IATF', 'Interní auditor VDA 6.3 / 6.5', 'FMEA', 'APQP / PPAP / MSA / SPC', '8D, DMAIC, CSR'],
  },
  {
    title: 'Lean & výroba',
    color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    items: ['Lean Green Belt (Six Sigma)', 'Kaizen — Shingijutsu Corp.', 'HP EMEA Kaizen events', 'Lean Manufacturing (SC&C)', '5S, VSM, SMED, TPM'],
  },
];

// Backdrop: a static violet/cyan mesh gradient (painterly color depth, pinned to the viewport)
// with Smooth Development's own plasma shader drifting on top, dimmed and screen-blended so only
// its bright line/circle highlights show through — same WebGL technique as the main site's hero,
// here used page-wide instead of grid/dot texture. Both layers are `fixed`, so content scrolls
// over a static backdrop rather than the backdrop being baked into document height.
const MeshGradientBackdrop: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0"
    style={{
      background: [
        'radial-gradient(circle at 15% 20%, rgba(124,58,237,0.35), transparent 45%)',
        'radial-gradient(circle at 85% 15%, rgba(34,211,238,0.18), transparent 50%)',
        'radial-gradient(circle at 75% 85%, rgba(139,92,246,0.28), transparent 45%)',
        'radial-gradient(circle at 20% 90%, rgba(34,211,238,0.14), transparent 50%)',
      ].join(', '),
    }}
  />
);

// This page is a standalone personal site, not part of the Smooth Development SPA's shared
// layout — index.html only ships Smooth's own title/description/canonical, so they're swapped
// in here for the duration of the visit and restored on unmount (matters because this is a
// client-routed SPA, not a per-route server render).
const MarekPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? null;
    descriptionTag?.setAttribute('content', PAGE_DESCRIPTION);

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalExisted = !!canonicalTag;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    const previousCanonicalHref = canonicalTag.href;
    canonicalTag.href = CANONICAL_URL;

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) descriptionTag?.setAttribute('content', previousDescription);
      if (canonicalExisted) {
        canonicalTag!.href = previousCanonicalHref;
      } else {
        canonicalTag?.remove();
      }
    };
  }, []);

  // Scroll-spy: highlights the nav link for whichever section is crossing the vertical center
  // of the viewport, same active-indicator language as the main site's Header.
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbY1 = useTransform(heroProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 90]);
  const orbY2 = useTransform(heroProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -60]);

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-dvh overflow-x-hidden">
      <MeshGradientBackdrop />
      <ShaderBackground className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.12]" />

      {/* Top bar — wordmark + anchor nav, no Smooth Development branding */}
      <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left"
          style={{ scaleX: progressScaleX, background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
        />
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between relative">
          <a href="#" className="font-display font-bold text-sm tracking-tight text-white">
            Marek Hladký
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors duration-200 rounded-md ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>
          <a href="#kontakt" className="sm:hidden btn-gradient rounded-md text-xs px-4 py-2">
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-svh flex items-center pt-16 pb-16 relative overflow-hidden">
        <motion.div className="orb absolute top-1/4 -left-20 w-[400px] h-[400px] bg-violet-600/20 animate-glow-pulse" style={{ y: orbY1 }} />
        <motion.div className="orb absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/10 animate-pulse-slow" style={{ y: orbY2, animationDelay: '2s' }} />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.h1
                className="text-[clamp(2.5rem,9vw,88px)] font-black mb-4 leading-none tracking-tightest font-display"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <span className="text-white">Marek </span>
                <span className="text-gradient-violet">Hladký</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-2xl text-gray-300 mb-5 max-w-2xl leading-relaxed font-medium"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Full-stack Web Developer & Quality Systems Specialist
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl leading-relaxed"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Spojuji 12 let zkušeností z automotive průmyslu s moderním webovým vývojem.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <a
                  href="#projekty"
                  className="btn-gradient group justify-center rounded-md"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Zobrazit projekty</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                </a>
                <a
                  href="#kontakt"
                  className="btn-outline group justify-center rounded-md"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Napište mi</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Portrait — gradient ring + ambient glow, photo itself stays still to keep a
                professional read (a bobbing headshot undercuts a quality-systems credibility pitch) */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-4 sm:-inset-5 rounded-full bg-violet-600/30 blur-2xl animate-glow-pulse" />
                <div
                  className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full p-[3px]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                    <img
                      src="/personalpage/marek.jpeg"
                      alt="Marek Hladký"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O mně */}
      <section id="o-mne" className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div className="orb absolute top-0 right-0 w-[350px] h-[350px] bg-violet-600/10 animate-pulse-slow" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex gap-5 sm:gap-7">
            <motion.div
              className="hidden sm:block w-1 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(to bottom, #7c3aed, rgba(34,211,238,0.3))', transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            />
            <div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-8"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                O mně
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                12 let jsem budoval a řídil kvalitářské systémy v automotive průmyslu. Naučilo mě to jedno —
                každý detail rozhoduje a systémy musí fungovat spolehlivě. Dnes stejný přístup uplatňuji při
                vývoji webů, e-shopů a digitálních systémů pro firmy.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Co umím */}
      <section id="dovednosti" className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div className="orb absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-violet-500/10 animate-glow-pulse" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Co umím
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div
              className="group glass rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: SPRING_SNAPPY }}
            >
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 font-display">Web & Development</h3>
              <ul className="space-y-2.5">
                {webSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="group glass rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: SPRING_SNAPPY }}
            >
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 font-display">Quality & Systems</h3>
              <ul className="space-y-2.5">
                {qualitySkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="gradient-line" />
      </div>

      {/* Zkušenosti */}
      <section id="zkusenosti" className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div className="orb absolute top-0 left-1/4 w-[380px] h-[380px] bg-cyan-500/8 animate-pulse-slow" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Zkušenosti
          </motion.h2>

          <div className="mb-16 sm:mb-20">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role + item.period}
                className={`relative pl-6 sm:pl-8 ${i === timeline.length - 1 ? 'border-transparent' : 'border-l border-white/10'} pb-10 sm:pb-12 last:pb-0`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
              >
                <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-4 ring-[#0a0a0a]" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white font-display">{item.role}</h3>
                  <span className="text-xs text-gray-400">{item.period}</span>
                </div>
                <p className="text-sm text-violet-300 mb-2">{item.company}</p>
                <p className="text-sm text-gray-300 leading-relaxed max-w-xl">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Vzdělání</h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.school}>
                    <p className="text-sm font-medium text-white">{edu.school}</p>
                    <p className="text-sm text-gray-300">{edu.program}</p>
                    <p className="text-xs text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Certifikace</h3>
              <div className="space-y-3">
                {certificationGroups.map((group) => (
                  <div key={group.title} className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${group.color}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="gradient-line" />
      </div>

      {/* Vybrané projekty */}
      <section id="projekty" className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div className="orb absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 animate-pulse-slow" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Vybrané projekty
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((project, i) => {
              const domain = project.url
                ? project.url.replace(/^https?:\/\//, '').replace(/^www\./, '')
                : null;

              return (
                <motion.div
                  key={project.title}
                  className="group relative rounded-2xl overflow-hidden"
                  style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  whileHover={{ y: -6, transition: SPRING_SNAPPY }}
                >
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                      aria-label={project.title}
                    />
                  )}

                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                    <div className="flex-1 mx-2 px-3 py-1 rounded-md text-center truncate" style={{ background: 'rgba(0,0,0,0.3)' }}>
                      <span className="text-[11px] text-gray-500">{domain ?? 've vývoji'}</span>
                    </div>
                    {project.url ? (
                      <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
                    ) : (
                      <Wrench className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                    )}
                  </div>

                  {/* Visual */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${project.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white font-display mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                  </div>

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.3)' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spolupráce */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.18), transparent 60%)' }}
        />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/15 animate-glow-pulse" />

        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-5">
            Pojďme spolupracovat
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hledáte partnera pro webový projekt nebo digitální řešení? Nebo hledáte zkušeného quality
            specialistu pro spolupráci? Ozvěte se — rád si o projektu popovídám.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="gradient-line" />
      </div>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
        <div className="orb absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-500/8 animate-pulse-slow" />
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            className="rounded-2xl p-6 sm:p-10 text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            initial={{ opacity: 0, scale: 0.97, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black leading-none tracking-tightest font-display text-white mb-6">
              Kontakt
            </h2>

            <div className="flex flex-col items-center gap-3 mb-8">
              <a href="tel:+420776677137" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 text-violet-400 flex-shrink-0" />
                +420 776 677 137
              </a>
              <a href="mailto:info@smooth-development.com" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                info@smooth-development.com
              </a>
              <a href="https://smooth-development.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                <Globe className="w-4 h-4 text-violet-400 flex-shrink-0" />
                smooth-development.com
              </a>
              <a href="https://www.linkedin.com/in/marek-hladký" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200">
                <Linkedin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                LinkedIn
              </a>
            </div>

            <a href="mailto:info@smooth-development.com" className="btn-gradient group rounded-md inline-flex">
              <span>Napsat zprávu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer — intentionally minimal, no Smooth Development logo */}
      <footer className="relative px-5 sm:px-6 py-8 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Marek Hladký</p>
          <a href="https://smooth-development.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
            smooth-development.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MarekPage;
