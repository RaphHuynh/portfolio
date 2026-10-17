import { useCallback, useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import satoshiFont from '../../assets/fonts/Satoshi-Black.otf';
import gambettaFont from '../../assets/fonts/Gambetta-Semibold.otf';
import clashFont from '../../assets/fonts/ClashGrotesk-Semibold.otf';
import pencerioFont from '../../assets/fonts/Pencerio-Hairline.otf';
import alpinoFont from '../../assets/fonts/Alpino-Black.otf';
// Import de toutes les images du dossier dessin
import dessin1 from '../../assets/dessin/dessin_1.jpg';
import dessin2 from '../../assets/dessin/dessin_2.jpg';
import dessin3 from '../../assets/dessin/dessin_3.jpg';
import dessin4 from '../../assets/dessin/dessin_4.jpg';
import dessin5 from '../../assets/dessin/dessin_5.jpg';
import dessin6 from '../../assets/dessin/dessin_6.jpg';
import dessin7 from '../../assets/dessin/dessin_7.jpg';
import dessin8 from '../../assets/dessin/dessin_8.png';
import dessin9 from '../../assets/dessin/dessin_9.jpg';
import dessin10 from '../../assets/dessin/dessin_10.png';
import dessin11 from '../../assets/dessin/dessin_11.jpg';
import dessin13 from '../../assets/dessin/dessin_13.jpg';
import dessin16 from '../../assets/dessin/dessin_16.png';
import dessin17 from '../../assets/dessin/dessin_17.png';
import dessin18 from '../../assets/dessin/dessin_18.png';
import dessin19 from '../../assets/dessin/dessin_19.jpg';
import dessin20 from '../../assets/dessin/dessin°20.png';
import dessin21 from '../../assets/dessin/dessin_21.png';
import dessin22 from '../../assets/dessin/dessin_22.png';
import dessin23 from '../../assets/dessin/dessin_23.png';
import dessin24 from '../../assets/dessin/dessin_24.png';

// Tableau de toutes les images avec leurs métadonnées
const drawings = [
  { id: "Dessin 1", img: dessin1, title: "Fisheye Placebo", year: "2024" },
  { id: "Dessin 2", img: dessin2, title: "Bakugo", year: "2024" },
  { id: "Dessin 3", img: dessin3, title: "Allen Walker", year: "2024" },
  { id: "Dessin 4", img: dessin4, title: "Hideyoshi ", year: "2024" },
  { id: "Dessin 5", img: dessin5, title: "Pikachu", year: "2024" },
  { id: "Dessin 6", img: dessin6, title: "Abeille", year: "2024" },
  { id: "Dessin 7", img: dessin7, title: "Nature morte", year: "2024" },
  { id: "Dessin 8", img: dessin8, title: "Ryuk", year: "2024" },
  { id: "Dessin 9", img: dessin9, title: "Luffy", year: "2024" },
  { id: "Dessin 10", img: dessin10, title: "Billy Bat", year: "2024" },
  { id: "Dessin 11", img: dessin11, title: "Pluto", year: "2024" },
  { id: "Dessin 13", img: dessin13, title: "Flambino", year: "2024" },
  { id: "Dessin 16", img: dessin16, title: "Neige", year: "2024" },
  { id: "Dessin 17", img: dessin17, title: "Fire force", year: "2024" },
  { id: "Dessin 18", img: dessin18, title: "Tornado", year: "2024" },
  { id: "Dessin 19", img: dessin19, title: "Montagne", year: "2024" },
  { id: "Dessin 20", img: dessin20, title: "Monster", year: "2024" },
  { id: "Dessin 21", img: dessin21, title: "Abeille", year: "2024" },
  { id: "Dessin 22", img: dessin22, title: "Silverfish", year: "2024" },
  { id: "Dessin 23", img: dessin23, title: "Plage", year: "2024" },
  { id: "Dessin 24", img: dessin24, title: "Paysage", year: "2024" }
];

// Versions WebP compressées pour le carrousel, les originaux restent pour le plein écran
const carouselImages = import.meta.glob('../../assets/dessin/carousel/*.webp', { eager: true, import: 'default' });
drawings.forEach((drawing) => {
  const number = drawing.id.replace('Dessin ', '');
  drawing.thumb = carouselImages[`../../assets/dessin/carousel/dessin_${number}.webp`] ?? drawing.img;
});

const TOTAL = drawings.length;
// Échelle de résistance du geste : plus c'est petit, plus le carrousel suit vite le doigt
const WHEEL_PX_PER_DRAWING = 220;
const WHEEL_MAX_DELTA = 120;
// Sans nouvel événement molette pendant ce délai, on considère le geste terminé (inertie comprise)
const WHEEL_IDLE_MS = 120;
// Un mouvement plus petit que ça (en fraction de dessin) est considéré comme accidentel
const MIN_GESTURE = 0.02;

// Pendant un geste, le carrousel suit mais ne dépasse jamais un dessin d'écart
const resist = (moved) => Math.tanh(moved);

// Firefox peut envoyer deltaMode en lignes (1) ou en pages (2) au lieu de pixels
const normalizeWheelDelta = (e) => {
  const raw = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (e.deltaMode === 1) return raw * 16;
  if (e.deltaMode === 2) return raw * window.innerHeight;
  return raw;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = (index, length) => ((index % length) + length) % length;

// Distance (continue) entre un dessin et la position courante, en tenant compte de la boucle
const continuousOffset = (index, position, length) => {
  const offset = wrap(index - position, length);
  return offset > length / 2 ? offset - length : offset;
};

// Même chose en entier, pour savoir de combien de crans avancer vers un dessin
const getOffset = (index, current, length) => Math.round(continuousOffset(index, current, length));

const pad = (n) => String(n).padStart(2, '0');

function DrawingCard({ drawing, active, maxHeight, maxWidth }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const shine = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.18), transparent 60%)`
  );

  const handleMouseMove = (e) => {
    if (!active) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative block w-fit shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-10px_rgba(255,255,255,0.12)]"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <img
        src={drawing.thumb}
        alt={drawing.title}
        draggable={false}
        decoding="async"
        className={`block w-auto h-auto object-contain select-none transition-[filter] duration-500 ${active ? '' : 'grayscale'}`}
        style={{ maxHeight, maxWidth }}
      />
      {active && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: shine }}
        />
      )}
    </motion.div>
  );
}

// Polices chargées seulement pour le fond de cette page, sous des noms à part pour ne rien changer ailleurs
const BACKDROP_FONTS = [
  { family: 'ArtSatoshi', url: satoshiFont },
  { family: 'ArtGambetta', url: gambettaFont },
  { family: 'ArtAlpino', url: alpinoFont },
  { family: 'ArtPencerio', url: pencerioFont },
  { family: 'ArtClash', url: clashFont },
];

let backdropFontsLoading = null;
const loadBackdropFonts = () => {
  if (backdropFontsLoading || typeof FontFace === 'undefined') return;
  backdropFontsLoading = Promise.all(
    BACKDROP_FONTS.map(({ family, url }) =>
      new FontFace(family, `url(${url})`).load().then((face) => document.fonts.add(face)).catch(() => {})
    )
  );
};

const BACKDROP_ROWS = 9;

// Le texte du dessin répété en rangées qui défilent dans des sens opposés, sur tout le fond
function BackdropPattern({ text, direction, reduceMotion }) {
  const word = text.toUpperCase();
  // Chaque moitié de rangée doit dépasser la largeur de l'écran pour boucler sans trou, sans aller beaucoup plus loin
  const fontPx = Math.max(48, window.innerHeight * 0.105);
  const wordPx = fontPx * 0.5 * (word.length + 0.5);
  const repeats = Math.max(2, Math.ceil(window.innerWidth / wordPx) + 1);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-between overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
    >
      {Array.from({ length: BACKDROP_ROWS }, (_, row) => {
        const reverse = row % 2 === 1;
        const half = Array.from({ length: repeats }, (_, i) => {
          const font = BACKDROP_FONTS[(row * 2 + i) % BACKDROP_FONTS.length];
          const outlined = (row + i) % 3 === 0;
          const hairline = font.family === 'ArtPencerio';
          return (
            <span
              key={i}
              className="px-[0.25em]"
              style={{
                fontFamily: `${font.family}, sans-serif`,
                color: outlined ? 'transparent' : `rgba(255,255,255,${hairline ? 0.12 : 0.05})`,
                WebkitTextStroke: outlined ? '1px rgba(255,255,255,0.09)' : undefined,
              }}
            >
              {word}
            </span>
          );
        });

        return (
          <motion.div
            key={row}
            initial={{ y: reduceMotion ? 0 : direction > 0 ? 30 : -30 }}
            animate={{ y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : row * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex w-max whitespace-nowrap leading-none"
              style={{ fontSize: fontPx }}
              initial={{ x: reverse ? '-50%' : '0%' }}
              animate={reduceMotion ? undefined : { x: reverse ? '0%' : '-50%' }}
              transition={{ duration: 50 + row * 6, ease: 'linear', repeat: Infinity }}
            >
              {half}
              {half}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function CarouselCard({ drawing, index, position, spacing, active, maxHeight, maxWidth, onClick }) {
  // Tout est dérivé de la position continue : les dessins suivent le doigt/la molette sans re-render React
  const offset = useTransform(position, (p) => continuousOffset(index, p, TOTAL));
  const x = useTransform([offset, spacing], ([o, s]) => o * s);
  const z = useTransform(offset, (o) => -Math.abs(o) * 120);
  const rotateY = useTransform(offset, (o) => clamp(o * -28, -50, 50));
  const scale = useTransform(offset, (o) => Math.max(0.55, 1 - Math.abs(o) * 0.18));
  const opacity = useTransform(offset, (o) => {
    const d = Math.abs(o);
    return d <= 2 ? 1 - d * 0.3 : Math.max(0, 0.4 * (3 - d));
  });
  const dim = useTransform(offset, (o) => Math.min(0.45, Math.abs(o) * 0.45));
  const zIndex = useTransform(offset, (o) => 100 - Math.round(Math.abs(o) * 10));
  const visibility = useTransform(offset, (o) => (Math.abs(o) > 3 ? 'hidden' : 'visible'));

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        z,
        rotateY,
        scale,
        opacity,
        zIndex,
        visibility,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      onClick={onClick}
    >
      <div className="relative">
        <DrawingCard drawing={drawing} active={active} maxHeight={maxHeight} maxWidth={maxWidth} />
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: dim }}
        />
      </div>
    </motion.div>
  );
}

export default function Art() {
  const stageRef = useRef(null);
  const didPanRef = useRef(false);
  const panStartRef = useRef(0);
  const animationRef = useRef(null);
  const targetRef = useRef(null);
  const roundedRef = useRef(0);
  const wheelGestureRef = useRef({ active: false, start: 0, moved: 0, timer: null });
  const reduceMotion = useReducedMotion();

  // Position continue du carrousel (2.4 = entre le 3e et le 4e dessin), non bornée pour la boucle
  const position = useMotionValue(0);
  const spacingValue = useMotionValue(380);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stageSize, setStageSize] = useState({ width: 1000, height: 500 });
  useEffect(loadBackdropFonts, []);

  // Tout est proportionnel à la scène, pour rester centré quelle que soit la taille d'écran
  const isMobile = stageSize.width < 640;
  const spacing = stageSize.width * (isMobile ? 0.68 : 0.3);
  const cardMaxHeight = stageSize.height * 0.78;
  const cardMaxWidth = stageSize.width * (isMobile ? 0.84 : 0.42);

  useEffect(() => {
    spacingValue.set(spacing);
  }, [spacing, spacingValue]);

  // Le dessin "actif" (compteur, fond, couleur) suit la position arrondie
  useMotionValueEvent(position, 'change', (p) => {
    const rounded = Math.round(p);
    if (rounded === roundedRef.current) return;
    setDirection(Math.sign(rounded - roundedRef.current));
    roundedRef.current = rounded;
    setCurrent(wrap(rounded, TOTAL));
  });

  const snapTo = useCallback((target) => {
    animationRef.current?.stop();
    targetRef.current = target;
    animationRef.current = animate(
      position,
      target,
      reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 30, mass: 0.9 }
    );
  }, [position, reduceMotion]);

  // Fin de geste : un geste = un dessin, même petit, jamais plus
  const settle = useCallback((start, moved) => {
    if (moved > MIN_GESTURE) snapTo(start + 1);
    else if (moved < -MIN_GESTURE) snapTo(start - 1);
    else snapTo(start);
  }, [snapTo]);

  const go = useCallback((step) => {
    if (step === 0) return;
    const base = Math.round(targetRef.current ?? position.get());
    snapTo(base + step);
  }, [position, snapTo]);

  const stopMomentum = () => {
    animationRef.current?.stop();
    targetRef.current = null;
  };

  // Mesure de la scène pour dimensionner les dessins
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      setStageSize({ width: stage.clientWidth, height: stage.clientHeight });
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // Molette / trackpad : le carrousel suit le geste puis se cale sur le dessin voisin
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const gesture = wheelGestureRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = clamp(normalizeWheelDelta(e), -WHEEL_MAX_DELTA, WHEEL_MAX_DELTA);

      if (!gesture.active) {
        gesture.active = true;
        gesture.start = Math.round(targetRef.current ?? position.get());
        gesture.moved = 0;
        stopMomentum();
      }

      gesture.moved += delta / WHEEL_PX_PER_DRAWING;
      position.set(gesture.start + resist(gesture.moved));

      clearTimeout(gesture.timer);
      gesture.timer = setTimeout(() => {
        gesture.active = false;
        settle(gesture.start, gesture.moved);
      }, WHEEL_IDLE_MS);
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      stage.removeEventListener('wheel', handleWheel);
      clearTimeout(gesture.timer);
    };
  }, [position, settle]);

  // Clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Escape') setIsModalOpen(false);
      else if (e.key === 'Enter' && !isModalOpen) setIsModalOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, go]);

  const handlePanStart = () => {
    didPanRef.current = true;
    panStartRef.current = Math.round(targetRef.current ?? position.get());
    stopMomentum();
  };

  const handlePan = (_, info) => {
    position.set(panStartRef.current + resist(-info.offset.x / spacing));
  };

  const handlePanEnd = (_, info) => {
    const moved = (-info.offset.x - info.velocity.x * 0.2) / spacing;
    settle(panStartRef.current, moved);
  };

  const handleCardClick = (index) => {
    if (didPanRef.current) return;
    const offset = getOffset(index, current, TOTAL);
    if (offset === 0) setIsModalOpen(true);
    else go(offset);
  };

  const tickTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 };

  const activeDrawing = drawings[current];

  return (
    <section
      className="relative h-screen supports-[height:100svh]:h-[100svh] min-h-[520px] bg-[#181a1b] flex flex-col pt-20 md:pt-24 overflow-hidden"
      id="Art"
    >
      {/* Fond d'ambiance : le dessin actif, très flouté */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <AnimatePresence>
          <motion.div
            key={activeDrawing.id}
            className="absolute inset-0"
            style={{ willChange: 'opacity' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Flouter une image réduite puis l'agrandir coûte bien moins cher qu'un gros flou plein écran */}
            <img
              src={activeDrawing.thumb}
              alt=""
              decoding="async"
              className="absolute top-0 left-0 object-cover"
              style={{
                width: '25%',
                height: '25%',
                filter: 'blur(12px)',
                transform: 'scale(4.4)',
                transformOrigin: 'top left',
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#181a1b] via-transparent to-[#181a1b]" />
        <AnimatePresence initial={false}>
          <BackdropPattern
            key={activeDrawing.id}
            text={activeDrawing.title.trim()}
            direction={direction}
            reduceMotion={reduceMotion}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full flex-1 min-h-0 flex flex-col px-6 md:px-28">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left highlight-green w-fit shrink-0" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Art
        </h2>
        <div className="border-b border-stone-700 w-full shrink-0" />

        {/* Scène du carrousel : occupe tout l'espace entre le titre et la barre du bas */}
        <motion.div
          ref={stageRef}
          className="relative w-full flex-1 min-h-0 my-4 md:my-6 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
          style={{
            perspective: 1200,
            touchAction: 'pan-y',
          }}
          onPointerDown={() => { didPanRef.current = false; }}
          onPanStart={handlePanStart}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
        >
          {drawings.map((drawing, index) => (
            <CarouselCard
              key={drawing.id}
              drawing={drawing}
              index={index}
              position={position}
              spacing={spacingValue}
              active={index === current}
              maxHeight={cardMaxHeight}
              maxWidth={cardMaxWidth}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.div>

        {/* Barre de navigation */}
        <div className="shrink-0 pb-6 md:pb-8 flex md:grid md:grid-cols-[1fr_auto_1fr] items-end justify-between gap-6 text-[var(--primary-color)]" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
          <div className="flex items-end gap-3 overflow-hidden">
            <div className="relative h-10 md:h-14 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.span
                  key={current}
                  custom={direction}
                  className="block text-4xl md:text-6xl leading-none"
                  initial={{ y: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {pad(current + 1)}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-stone-500 text-sm md:text-base mb-1">/ {pad(TOTAL)}</span>
          </div>

          <div className="hidden md:flex items-end gap-1.5 h-8 justify-center">
            {drawings.map((drawing, index) => (
              <button
                key={drawing.id}
                aria-label={`Voir ${drawing.title}`}
                onClick={() => go(getOffset(index, current, TOTAL))}
                className="group h-full flex items-end px-0.5"
              >
                <motion.span
                  className="block w-px bg-[var(--primary-color)] group-hover:opacity-100"
                  animate={{
                    height: index === current ? 32 : 12,
                    opacity: index === current ? 1 : 0.3,
                  }}
                  transition={tickTransition}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:justify-self-end">
            <span className="hidden xl:block whitespace-nowrap text-xs text-stone-500 uppercase tracking-widest mr-2">
              Molette · Glisser · ← →
            </span>
            <button
              onClick={() => go(-1)}
              aria-label="Dessin précédent"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--primary-color)] flex items-center justify-center hover:bg-white hover:text-[#181a1b] transition-colors duration-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Dessin suivant"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--primary-color)] flex items-center justify-center hover:bg-white hover:text-[#181a1b] transition-colors duration-200"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="relative w-full max-w-full max-h-[90vh] flex items-center justify-center" style={{ pointerEvents: 'none' }}>
            <img
              src={activeDrawing.img}
              alt={activeDrawing.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={() => go(1)}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
