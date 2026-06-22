import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { MessageCircle, FileSignature, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

// Curve lives in its own local coordinate space, independent of the column's real pixel width —
// preserveAspectRatio="none" stretches it to fill whatever height the rail ends up taking.
// A single gentle bezier spread across the full height reads as barely-curved (the bulge
// is too stretched out to register). Instead: swing out hard right away, hold the bulge
// flat through the middle steps, then swing back hard at the end — a "D" silhouette, not a lens.
const CURVE_VIEWBOX_W = 160;
const CURVE_VIEWBOX_H = 600;
const CURVE_PATH = 'M24,0 C100,20 140,60 140,150 C140,250 140,350 140,450 C140,540 100,580 24,600';

const ProcessSteps: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);
  const firstIconRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);

  // The rail must run exactly from the first icon's center to the last icon's center —
  // not the grid's outer box, whose bottom edge sits well past the last icon (the row is
  // as tall as its wrapped description text, not just the icon). Measured, not guessed,
  // so it stays correct across reflow/resize.
  const [rail, setRail] = useState({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const first = firstIconRef.current;
      const last = lastIconRef.current;
      if (!container || !first || !last) return;
      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const top = firstRect.top + firstRect.height / 2 - containerRect.top;
      const bottom = lastRect.top + lastRect.height / 2 - containerRect.top;
      setRail({ top, height: bottom - top });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.5 });
  const dotOpacity = useTransform(lineProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  // Captured once so the dot's position-along-path uses the exact same path geometry as the
  // visible fill below.
  const [totalLength, setTotalLength] = useState(0);
  useEffect(() => {
    if (pathRef.current) setTotalLength(pathRef.current.getTotalLength());
  }, []);

  // The fill is revealed by growing a clip-rect's height from a fixed y=0 — set directly as an
  // SVG attribute, not a CSS transform (transform-origin on SVG shapes is inconsistent across
  // browsers; it was pivoting from the rect's center instead of its top).
  //
  // The height must come from the path's Y-coordinate AT THE DOT'S ARC-LENGTH POSITION, not from
  // `progress * totalHeight` directly. The dot travels by arc length (equal distance per equal
  // progress along the curve); a plain height fraction travels by Y-coordinate (equal vertical
  // distance per equal progress). Those two only agree where the curve is perfectly vertical —
  // in the curved swing-out/swing-back sections near the top and bottom they disagree, which is
  // exactly where the fill edge and the dot were visibly drifting apart. Reusing the same
  // getPointAtLength() call as the dot guarantees both move by the identical definition of "progress".
  useMotionValueEvent(lineProgress, 'change', (v) => {
    if (clipRectRef.current && pathRef.current && totalLength) {
      const clamped = Math.min(Math.max(v, 0), 1);
      const point = pathRef.current.getPointAtLength(clamped * totalLength);
      clipRectRef.current.setAttribute('height', String(point.y));
    }
  });

  const dotTransform = useTransform(lineProgress, (v: number) => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg || !totalLength) return 'translate(-9999px, -9999px)';
    const clamped = Math.min(Math.max(v, 0), 1);
    const point = path.getPointAtLength(clamped * totalLength);
    const rect = svg.getBoundingClientRect();
    const scaleX = rect.width / CURVE_VIEWBOX_W;
    const scaleY = rect.height / CURVE_VIEWBOX_H;
    return `translate(${point.x * scaleX - 6}px, ${point.y * scaleY - 6}px)`;
  });

  const steps = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
    },
    {
      icon: <FileSignature className="w-5 h-5" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
    },
  ];

  return (
    <section className="bg-[#030712] py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden">
      <div className="orb absolute top-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/8 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-14 sm:mb-20 max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tightest font-display text-white mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('process.title')}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-400 leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {t('process.subtitle')}
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-2xl">
          {/* Decorative curve: faint static track behind, scroll-drawn gradient stroke in front, travelling glow dot on top — all behind the icons (z-0) */}
          <div
            className="absolute left-0 w-[130px] sm:w-[160px] pointer-events-none z-0"
            style={{ top: rail.top, height: rail.height }}
          >
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${CURVE_VIEWBOX_W} ${CURVE_VIEWBOX_H}`}
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="processCurveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="33%" stopColor="#22d3ee" />
                  <stop offset="66%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <clipPath id="processCurveReveal">
                  <rect ref={clipRectRef} x={-40} y={0} width={CURVE_VIEWBOX_W + 80} height={0} />
                </clipPath>
              </defs>
              <path d={CURVE_PATH} stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              <path
                ref={pathRef}
                d={CURVE_PATH}
                stroke="url(#processCurveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                clipPath="url(#processCurveReveal)"
              />
            </svg>
            <motion.div
              className="absolute top-0 left-0 w-3 h-3 rounded-full bg-white"
              style={{ transform: dotTransform, opacity: dotOpacity, boxShadow: '0 0 16px 4px rgba(167,139,250,0.7)' }}
            />
          </div>

          <div className="relative grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-x-5 sm:gap-x-6 gap-y-12 sm:gap-y-16">
            {steps.map((step, i) => {
              // The curve bulges out to the right around the middle two steps. Rather than have it
              // awkwardly cross behind icon/text, the middle icons shift right to sit ON the bulge
              // (and their text shifts with them to keep its usual gap); the first/last icon stay
              // put — that's where the curve starts/ends, right at their center — and just their
              // text nudges over slightly so the curve's early/late swing doesn't cut across it.
              const isMiddle = i === 1 || i === 2;
              const iconShift = isMiddle ? 100 : 0;
              const contentShift = isMiddle ? 100 : 45;

              return (
                <React.Fragment key={i}>
                  <motion.div
                    ref={i === 0 ? firstIconRef : i === steps.length - 1 ? lastIconRef : undefined}
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ring-1 ring-white/10 flex items-center justify-center overflow-hidden"
                    style={{ gridColumn: 1, gridRow: i + 1, marginLeft: iconShift }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    <div className="absolute inset-0 bg-[#030712]" />
                    <div className={`absolute inset-0 ${step.bg}`} />
                    <span className={`relative ${step.color} flex items-center justify-center`}>{step.icon}</span>
                  </motion.div>
                  <motion.div
                    style={{ gridColumn: 2, gridRow: i + 1, marginLeft: contentShift }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">{step.description}</p>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
