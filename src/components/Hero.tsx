import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import ShaderBackground from './ShaderBackground';

const HERO_TITLE_MAX = 72; // px — matches the old clamp() ceiling
const HERO_TITLE_MIN = 26; // px — below this we let the line wrap instead of shrinking further

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  // Each line must stay on its own row at any viewport width. A vw-based clamp() can't guarantee
  // that — it doesn't know how long the text is. Instead, measure both lines' natural width at a
  // reference size via canvas (using the element's own computed font, so weight/family fallbacks
  // match exactly what's rendered) and pick the largest font size that still lets the wider of the
  // two fit the container. Falls back to natural wrapping only if even the minimum can't fit,
  // rather than shrinking to illegible text or overflowing horizontally on very narrow screens.
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [titleFit, setTitleFit] = useState({ fontSize: HERO_TITLE_MAX, nowrap: true });

  const line1Text = t('hero.title.line1');
  const line2Text = t('hero.title.line2');

  useLayoutEffect(() => {
    const container = containerRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    if (!container || !line1 || !line2) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      if (!containerWidth) return;

      if (!canvasRef.current) canvasRef.current = document.createElement('canvas');
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      const REF_SIZE = 200;
      let smallestFit = HERO_TITLE_MAX;

      for (const el of [line1, line2]) {
        if (!el.textContent) continue;
        const computed = getComputedStyle(el);
        ctx.font = `${computed.fontStyle} ${computed.fontWeight} ${REF_SIZE}px ${computed.fontFamily}`;
        const width = ctx.measureText(el.textContent).width;
        const fitted = (containerWidth / width) * REF_SIZE * 0.94; // safety margin for kerning/sub-pixel drift
        smallestFit = Math.min(smallestFit, fitted);
      }

      setTitleFit({
        fontSize: Math.max(HERO_TITLE_MIN, Math.min(HERO_TITLE_MAX, smallestFit)),
        nowrap: smallestFit >= HERO_TITLE_MIN,
      });
    };

    measure();
    // Re-measure once the Space Grotesk webfont has actually swapped in. `document.fonts.ready`
    // alone isn't enough — it resolves as soon as nothing else happens to be loading, which can
    // be immediately, before this exact weight has ever been requested. Explicitly loading the
    // precise font spec we're about to measure guarantees we wait for the right resource, so we
    // never compute a size that fits the fallback font but overflows once the real one renders.
    const computed = getComputedStyle(line1);
    const fontSpec = `${computed.fontStyle} ${computed.fontWeight} 16px ${computed.fontFamily}`;
    if (document.fonts) {
      Promise.all([document.fonts.load(fontSpec), document.fonts.ready]).then(measure);
    }
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [line1Text, line2Text]);

  return (
    // svh (small viewport height), not dvh — dvh recalculates the moment the mobile browser's
    // address bar starts collapsing on the user's first scroll touch, which resizes this section
    // (and the content within it) mid-gesture. svh stays fixed to the smallest possible viewport
    // (toolbar fully shown) so it never recalculates after first paint.
    <section className="min-h-svh flex items-center bg-[#030712] pt-24 pb-12 md:pb-16 relative overflow-hidden">
      {/* Shader background */}
      <ShaderBackground className="absolute inset-0 w-full h-full opacity-90 sm:opacity-70" />

      {/* Gradient overlays — keep the shader visible up top, guarantee text contrast lower down */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(3,7,18,0.88) 0%, rgba(3,7,18,0.3) 30%, rgba(3,7,18,0.55) 55%, rgba(3,7,18,0.96) 100%)',
        }}
      />

      {/* Ambient orbs */}
      <div className="orb absolute top-1/4 -left-20 w-[400px] h-[400px] bg-violet-600/20 animate-glow-pulse" />
      <div className="orb absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <motion.div
          ref={containerRef}
          className="max-w-5xl"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Main Heading — a longer, keyword-carrying phrase than the old "Smooth Development"
              brand lockup, so the max size comes down from 96px to keep it from overwhelming the
              hero at wide viewports (the brand name itself still lives in the header logo). Font
              size is fitted at runtime (see the effect above) so each line always stays on its own
              row instead of internally wrapping into a third line. */}
          <motion.h1
            className="font-black mb-4 sm:mb-6 leading-[1.05] tracking-tightest font-display"
            style={{ fontSize: `${titleFit.fontSize}px` }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span ref={line1Ref} className={`text-white block ${titleFit.nowrap ? 'whitespace-nowrap' : ''}`}>{line1Text}</span>
            <span ref={line2Ref} className={`text-gradient block ${titleFit.nowrap ? 'whitespace-nowrap' : ''}`}>{line2Text}</span>
          </motion.h1>

          {/* Subtitle — whitespace-pre-line so the \n line breaks in the translation string
              actually render instead of collapsing into a single wrapped paragraph. */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed whitespace-pre-line"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-20"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              to="/services"
              className="btn-gradient group justify-center sm:justify-start rounded-md"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>{t('hero.cta.services')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline group justify-center sm:justify-start rounded-md"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>{t('hero.cta.start')}</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-12 pt-6 sm:pt-8 border-t border-white/[0.07]"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {[
              { value: '50+', label: t('hero.stats.projects') },
              { value: '5+', label: t('hero.stats.experience') },
              { value: '24/7', label: t('hero.stats.support') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
