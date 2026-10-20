import { useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AboutStarField from '../effect/AboutStarField';
import '../../assets/fonts/Satoshi-Black.otf';

const pad = (n) => String(n).padStart(2, '0');
/** Format de la première image Jonathan Steuer : les autres s'y calent avec des bords noirs. */
const JONATHAN_FRAME = 3276 / 1886;

const PLANET_COLORS = ['#ffffff', '#f4e7c8', '#d7e6f6', '#f7ddd0', '#f7f3ea', '#e7dcc4'];
const RING_INNER = 86;
const RING_GAP = 46;
const PAD = 168;
const LABEL_GAP = 22;
const HALF_H = 14;
const STACK = 52;

function polar(angle, radius) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

function wrapAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

/** Le nom suit l'angle de sa planète, tout le tour, hors des anneaux. */
function PlanetChart({ technologies }) {
  const lineRefs = useRef([]);
  const planetRefs = useRef([]);
  const glowRefs = useRef([]);
  const labelRefs = useRef([]);
  const shiftRef = useRef([]);
  const lastRef = useRef(0);

  const layout = useMemo(() => {
    const count = Math.max(technologies.length, 1);
    const radii = technologies.map((_, index) => RING_INNER + index * RING_GAP);
    const outer = radii[radii.length - 1] || RING_INNER;
    const width = (outer + PAD) * 2;
    const height = width;
    const cx = width / 2;
    const cy = height / 2;
    const items = technologies.map((tech, index) => ({
      tech,
      radius: radii[index],
      duration: 26 + index * 8,
      start: (360 / count) * index,
      color: PLANET_COLORS[index % PLANET_COLORS.length],
    }));
    return { items, radii, outer, cx, cy, width, height };
  }, [technologies]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { items, outer, cx, cy } = layout;
    let frame;

    const draw = (now) => {
      const seconds = now / 1000;
      const dt = Math.min(0.05, lastRef.current ? (now - lastRef.current) / 1000 : 0.016);
      lastRef.current = now;
      const glide = reduceMotion ? 1 : 1 - Math.exp(-dt / 0.7);
      const placed = items.map((item, index) => {
        const turns = reduceMotion ? 0 : seconds / item.duration;
        const angle = wrapAngle(item.start + turns * 360);
        const point = polar(angle, item.radius);
        const unit = polar(angle, 1);
        const label = labelRefs.current[index];
        const half = label ? label.getBBox().width / 2 : 40;
        return {
          index,
          duration: item.duration,
          angle,
          half,
          unit,
          inset: half * Math.abs(unit.x) + HALF_H * Math.abs(unit.y),
          extra: 0,
          planetX: cx + point.x,
          planetY: cy + point.y,
        };
      });

      const front = [];
      placed
        .slice()
        .sort((a, b) => a.duration - b.duration)
        .forEach((item) => {
          const limit = outer + PAD - 10;
          const roomX = Math.abs(item.unit.x) < 0.02 ? Infinity : (limit - item.half) / Math.abs(item.unit.x);
          const roomY = Math.abs(item.unit.y) < 0.02 ? Infinity : (limit - HALF_H) / Math.abs(item.unit.y);
          const ceiling = Math.max(outer + LABEL_GAP + item.inset, Math.min(roomX, roomY));
          const spot = (extra) => {
            const orbit = Math.min(ceiling, outer + LABEL_GAP + item.inset + extra);
            return {
              x: cx + item.unit.x * orbit,
              y: cy + item.unit.y * orbit,
              orbit,
            };
          };
          let extra = 0;
          let pos = spot(0);
          let guard = 0;
          while (
            guard < 2
            && front.some((other) => Math.abs(other.targetX - pos.x) < other.half + item.half + 20 && Math.abs(other.targetY - pos.y) < HALF_H * 2 + 14)
          ) {
            extra += STACK;
            pos = spot(extra);
            guard += 1;
          }
          item.targetX = pos.x;
          item.targetY = pos.y;
          const shown = (shiftRef.current[item.index] ?? extra) + (extra - (shiftRef.current[item.index] ?? extra)) * glide;
          shiftRef.current[item.index] = shown;
          const place = spot(shown);
          item.orbit = place.orbit;
          item.labelX = place.x;
          item.labelY = place.y;
          front.push(item);
        });

      placed.forEach((item) => {
        const planet = planetRefs.current[item.index];
        const glow = glowRefs.current[item.index];
        if (planet) {
          planet.setAttribute('cx', item.planetX);
          planet.setAttribute('cy', item.planetY);
        }
        if (glow) {
          glow.setAttribute('cx', item.planetX);
          glow.setAttribute('cy', item.planetY);
        }
        const line = lineRefs.current[item.index];
        if (line) {
          const alongX = Math.abs(item.unit.x) < 0.02 ? Infinity : item.half / Math.abs(item.unit.x);
          const alongY = Math.abs(item.unit.y) < 0.02 ? Infinity : HALF_H / Math.abs(item.unit.y);
          const start = polar(item.angle, Math.max(outer + 12, item.orbit - Math.min(alongX, alongY) - 8));
          line.setAttribute('d', `M ${cx + start.x} ${cy + start.y} L ${item.planetX} ${item.planetY}`);
        }
        const label = labelRefs.current[item.index];
        if (label) {
          label.setAttribute('x', item.labelX);
          label.setAttribute('y', item.labelY);
        }
      });

      frame = window.requestAnimationFrame(draw);
    };

    frame = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frame);
  }, [layout]);

  const { items, radii, outer, cx, cy, width, height } = layout;

  return (
    <div
      className="relative mx-auto"
      style={{ width: 'min(100%, calc(100vh - 6.5rem))', height: 'min(100%, calc(100vh - 6.5rem))' }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible" role="img" aria-label="Compétences">
        {radii.map((radius) => (
          <circle
            key={radius}
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1"
          />
        ))}
        {items.map((item, index) => {
          const point = polar(item.start, item.radius);
          const x = cx + point.x;
          const y = cy + point.y;
          const anchor = polar(item.start, outer + 80);
          return (
            <g key={item.tech}>
              <path
                ref={(node) => { lineRefs.current[index] = node; }}
                d={`M ${cx + anchor.x} ${cy + anchor.y} L ${x} ${y}`}
                fill="none"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 5"
              />
              <circle
                ref={(node) => { glowRefs.current[index] = node; }}
                cx={x}
                cy={y}
                r="16"
                fill={item.color}
                opacity="0.28"
              />
              <circle
                ref={(node) => { planetRefs.current[index] = node; }}
                cx={x}
                cy={y}
                r="7"
                fill={item.color}
              />
              <text
                ref={(node) => { labelRefs.current[index] = node; }}
                x={cx + anchor.x}
                y={cy + anchor.y}
                fill="white"
                fontSize="22"
                fontFamily="Satoshi-Black, sans-serif"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {item.tech}
              </text>
            </g>
          );
        })}
      </svg>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white to-stone-300 shadow-[0_0_40px_rgba(255,255,255,0.8),0_0_90px_rgba(255,255,255,0.35)] md:h-20 md:w-20"
        aria-hidden="true"
      />
    </div>
  );
}

export default function ProjectDetail({
  title,
  year,
  role,
  subtitle,
  description,
  technologies,
  images,
  sectionId = 'ProjetDetail',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lenisRef = useRef(null);
  const orbitRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: orbitRef,
    offset: ['start end', 'start start'],
  });
  const orbitOpacity = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const orbitY = useTransform(scrollYProgress, [0.15, 0.85], [72, 0]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true, autoRaf: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (images.length < 2 || lightboxIndex !== null) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length, lightboxIndex, activeIndex]);

  const goTo = (index) => {
    const total = images.length;
    setActiveIndex(((index % total) + total) % total);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div id={sectionId} className="bg-[#181a1b] text-[var(--primary-color)]" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
      <section className="flex min-h-screen flex-col px-6 pb-8 pt-24 md:px-28 md:pt-28">
        <div className="grid w-full items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-left text-3xl leading-none md:text-5xl xl:text-6xl">{title}</h1>
            <p className="mt-4 text-left text-2xl md:text-4xl">{year}</p>
          </div>
          <div className="max-w-xl lg:ml-auto lg:pt-2">
            <h2 className="text-right text-lg md:text-xl">{role}</h2>
            <p className="mt-4 text-right text-base leading-relaxed text-stone-200 md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div
          className="mx-auto mt-8 w-full max-w-5xl bg-black"
          style={{ aspectRatio: JONATHAN_FRAME }}
        >
          <button
            type="button"
            className="group relative block h-full w-full overflow-hidden"
            onClick={() => setLightboxIndex(activeIndex)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt={title}
                className="absolute inset-0 h-full w-full cursor-pointer object-contain grayscale transition-[filter] duration-500 ease-in-out group-hover:grayscale-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </button>
        </div>

        <div className="mt-6 flex items-end justify-between gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-end gap-3">
            <span className="text-4xl leading-none md:text-6xl">{pad(activeIndex + 1)}</span>
            <span className="mb-1 text-sm text-stone-500 md:text-base">/ {pad(images.length)}</span>
          </div>

          <div className="hidden h-8 items-end justify-center gap-1.5 md:flex">
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                aria-label={`Image ${index + 1}`}
                onClick={() => goTo(index)}
                className="group flex h-full items-end px-0.5"
              >
                <span
                  className={`block w-px bg-[var(--primary-color)] transition-all duration-300 ${index === activeIndex ? 'h-8 opacity-100' : 'h-3 opacity-30 group-hover:opacity-100'}`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:justify-self-end">
            <button
              type="button"
              aria-label="Image précédente"
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary-color)] transition-colors duration-200 hover:bg-white hover:text-[#181a1b] md:h-12 md:w-12"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              aria-label="Image suivante"
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary-color)] transition-colors duration-200 hover:bg-white hover:text-[#181a1b] md:h-12 md:w-12"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (lenisRef.current) lenisRef.current.scrollTo('#competences', { duration: 1.25 });
            else document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-[var(--primary-color)]"
        >
          Scroll pour voir les compétences
          <FaArrowDown className="text-[10px]" />
        </button>
      </section>

      <section id="competences" ref={orbitRef} className="relative min-h-screen overflow-hidden">
        <AboutStarField contained halo starCount={130} />
        <motion.div
          style={{ opacity: orbitOpacity, y: orbitY }}
          className="relative z-10 flex h-screen items-center justify-center px-3 pb-3 pt-20"
        >
          <div className="pointer-events-none absolute inset-x-0 top-24 z-20 px-6 md:top-28 md:px-28">
            <div className="max-w-[11rem] md:max-w-[13rem]">
              <p className="text-xs uppercase tracking-widest text-stone-500">Compétences</p>
              <p className="mt-3 text-sm text-[var(--primary-color)]">{title} — {year}</p>
              {subtitle ? (
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{subtitle}</p>
              ) : null}
            </div>
          </div>
          <PlanetChart technologies={technologies} />
        </motion.div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute right-6 top-6 z-10 text-4xl text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              ×
            </button>
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={title}
              className="max-h-[90vh] max-w-[90vw] cursor-pointer object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
