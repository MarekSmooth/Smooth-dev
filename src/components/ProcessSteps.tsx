import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { MessageCircle, FileSignature, Palette, Code2, Search, Rocket, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

// Curve lives in its own local coordinate space, independent of the column's real pixel width —
// preserveAspectRatio="none" stretches it to fill whatever height the rail ends up taking.
// Not a "D" that swings back to the icon column — it's a single smooth quarter-circle-style
// sweep from step 1 straight through to the destination: the last step is pulled out of the
// vertical list entirely and sits at the line's end point, bottom-right.
//
// One cubic bezier, not several stitched together — a multi-segment path reads as a swing +
// a straight run + another swing, with a visible kink at each joint. A single curve with a
// horizontal tangent at the start (leaves step 1 moving sideways) and a vertical tangent at
// the end (arrives at the destination moving straight down) reads as one continuous, even arc.
//
// The viewBox is sized to the widest (lg) rail so the 24-unit start point lands almost exactly
// on the first icon's center in pixels there, and the 798-unit end point lands on the final
// step's icon (positioned via matching ml-[...] classes below); at narrower breakpoints the
// same path scales down with the rail, so the sweep shrinks proportionally instead of
// overshooting on small screens.
const CURVE_VIEWBOX_W = 880;
const CURVE_VIEWBOX_H = 600;
const CURVE_PATH = 'M24,0 C452,0 798,269 798,600';

// The curve's X position at a given height isn't linear (it's a bezier), so "where do I put the
// icon for the step that's 2/6 of the way down" has no closed-form answer — binary-search along
// arc length for the point whose Y matches the target. Safe because Y is monotonic the whole
// way down this curve (it never doubles back), which a plain swing-out-and-back "D" would violate.
//
// Equal-Y spacing over equal-arc-length: the curve's early stretch is nearly horizontal (leaving
// step 1 sideways), so equal arc-length steps there barely move vertically — rows 2–4 end up
// stacked almost on top of each other with their text overlapping. Equal Y keeps every row the
// same height apart, which is what the text needs; the trade-off is the *diagonal* gap between
// icons 1 and 2 reads a little longer than the rest, since that's where the curve is most sideways.
function findPointAtY(path: SVGPathElement, targetY: number, totalLength: number) {
  let lo = 0;
  let hi = totalLength;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    if (path.getPointAtLength(mid).y < targetY) lo = mid;
    else hi = mid;
  }
  return path.getPointAtLength((lo + hi) / 2);
}

const ProcessSteps: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);
  const firstIconRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);

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
      icon: <Palette className="w-5 h-5" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: t('process.step6.title'),
      description: t('process.step6.description'),
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
    },
    {
      icon: <LifeBuoy className="w-5 h-5" />,
      title: t('process.step7.title'),
      description: t('process.step7.description'),
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
    },
  ];

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

  // Steps 2–6 sit directly on the curve instead of in a static column. Their pixel positions
  // depend on the rail's actual rendered size (rail.top/rail.height, committed to the DOM by the
  // effect above), so this runs *after* that one — as a separate effect keyed on those values,
  // not folded into the same pass, so it always reads the rail's post-layout size, never a stale one.
  const [midPoints, setMidPoints] = useState<{ x: number; y: number }[]>([]);
  useLayoutEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg || rail.height === 0) return;
    const totalLen = path.getTotalLength();
    const svgRect = svg.getBoundingClientRect();
    const scaleX = svgRect.width / CURVE_VIEWBOX_W;
    const scaleY = svgRect.height / CURVE_VIEWBOX_H;
    const midStepCount = steps.length - 2;
    const points = Array.from({ length: midStepCount }, (_, idx) => {
      const targetY = ((idx + 1) / (steps.length - 1)) * CURVE_VIEWBOX_H;
      const point = findPointAtY(path, targetY, totalLen);
      return { x: point.x * scaleX, y: rail.top + point.y * scaleY };
    });
    setMidPoints(points);
  }, [rail.top, rail.height, steps.length]);

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

        {/* Wide enough that the icons/text riding out along the curve (left values up to ~800px
            at lg) still get proper shrink-to-fit sizing — an absolutely positioned element's
            "available width" is measured against its containing block's own box, not the
            viewport, so a narrow containerRef here was squeezing their text into single-word
            wrapping regardless of any max-w-[...] class. */}
        <div ref={containerRef} className="relative max-w-2xl sm:max-w-[820px] lg:max-w-[1100px]">
          {/* Decorative curve: faint static track behind, scroll-drawn gradient stroke in front, travelling glow dot on top — all behind the icons (z-0) */}
          <div
            className="absolute left-0 w-[130px] sm:w-[600px] lg:w-[880px] pointer-events-none z-0"
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
                  <stop offset="25%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#34d399" />
                  <stop offset="75%" stopColor="#fbbf24" />
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

          {/* Step 1 is the only one left in normal document flow at the top — it's what anchors
              the rail's top measurement and the curve's start point. */}
          <div className="relative grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-x-5 sm:gap-x-6">
            <motion.div
              ref={firstIconRef}
              className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ring-1 ring-white/10 flex items-center justify-center overflow-hidden"
              style={{ gridColumn: 1, gridRow: 1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="absolute inset-0 bg-[#030712]" />
              <div className={`absolute inset-0 ${steps[0].bg}`} />
              <span className={`relative ${steps[0].color} flex items-center justify-center`}>{steps[0].icon}</span>
            </motion.div>
            <motion.div
              className="mt-[-14px] sm:mt-[-34px]"
              style={{ gridColumn: 2, gridRow: 1, marginLeft: 0 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-display">{steps[0].title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-[220px] sm:max-w-sm">{steps[0].description}</p>
            </motion.div>
          </div>

          {/* Steps 2–6 ride the curve itself — each one's icon sits exactly on the line at an
              evenly Y-spaced point (midPoints, computed above), with its text pulled up and to
              the left so it clears both the icon and the line continuing past it below-right. */}
          {steps.slice(1, -1).map((step, idx) => {
            const point = midPoints[idx];
            if (!point) return null;
            return (
              <React.Fragment key={idx}>
                {/* Positioning lives on a plain div, not the motion.div — framer-motion owns the
                    `transform` property outright once a component animates x/y/scale, and silently
                    drops any hand-written transform string passed via `style`. Splitting the
                    static "where" (this div: left/top/translate) from the animated "how it enters"
                    (the motion.div inside: opacity/scale) keeps both intact. */}
                <div
                  className="absolute z-10"
                  style={{ left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ring-1 ring-white/10 flex items-center justify-center overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    <div className="absolute inset-0 bg-[#030712]" />
                    <div className={`absolute inset-0 ${step.bg}`} />
                    <span className={`relative ${step.color} flex items-center justify-center`}>{step.icon}</span>
                  </motion.div>
                </div>
                <div
                  className="absolute z-10 max-w-[220px] sm:max-w-xs text-left"
                  style={{ left: point.x, top: point.y, transform: 'translate(44px, -50%)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-2">{step.description}</p>
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}

          {/* Final step is pulled out of the column and dropped where the curve actually ends —
              the destination the whole scroll-drawn line has been building toward. The icon lives
              in an explicit-width wrapper (not a margin-pushed block, which breaks width:auto —
              see the containerRef comment above) so it stays anchored at the curve's endpoint;
              the big mt-[...] on that wrapper is what actually gives the rail its height, since
              steps 2–6 no longer contribute flow height now that they're absolute. Text is a
              separate sibling, positioned to the icon's right the same way steps 2–6 are, so it
              reads left-to-right like the rest instead of being squeezed against the icon. */}
          {/* Wrapper width is the icon's half-width *added onto* the curve's actual endpoint x
              (798 of 880 viewBox units, scaled per breakpoint the same way the rail is) — not a
              round number — so the icon's center lands exactly on the line instead of its edge. */}
          <motion.div
            className="relative z-10 mt-[560px] sm:mt-[760px] lg:mt-[860px] w-[142px] sm:w-[572px] lg:w-[826px] h-12 sm:h-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={lastIconRef}
              className="absolute right-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ring-1 ring-white/10 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#030712]" />
              <div className={`absolute inset-0 ${steps[steps.length - 1].bg}`} />
              <span className={`relative ${steps[steps.length - 1].color} flex items-center justify-center`}>{steps[steps.length - 1].icon}</span>
            </div>
          </motion.div>
          <div
            className="absolute z-10 text-left max-w-[150px] sm:max-w-[220px] lg:max-w-[240px] left-[156px] sm:left-[590px] lg:left-[846px]"
            style={{ top: rail.top + rail.height, transform: 'translateY(-50%)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-display whitespace-nowrap">{steps[steps.length - 1].title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{steps[steps.length - 1].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
