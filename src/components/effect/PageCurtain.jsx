import { useEffect, useRef, useState } from 'react';
import satoshiFont from '../../assets/fonts/Satoshi-Black.otf';
import gambettaFont from '../../assets/fonts/Gambetta-Semibold.otf';
import clashFont from '../../assets/fonts/ClashGrotesk-Semibold.otf';
import pencerioFont from '../../assets/fonts/Pencerio-Hairline.otf';
import alpinoFont from '../../assets/fonts/Alpino-Black.otf';

const FONTS = [
  { family: 'CurtainSatoshi', url: satoshiFont },
  { family: 'CurtainGambetta', url: gambettaFont },
  { family: 'CurtainAlpino', url: alpinoFont },
  { family: 'CurtainPencerio', url: pencerioFont },
  { family: 'CurtainClash', url: clashFont },
];

let fontsLoading = null;
const loadFonts = () => {
  if (fontsLoading || typeof FontFace === 'undefined') return;
  fontsLoading = Promise.all(
    FONTS.map(({ family, url }) =>
      new FontFace(family, `url(${url})`).load().then((face) => document.fonts.add(face)).catch(() => {})
    )
  );
};

const PAGES = [
  { path: '/', title: 'Accueil' },
  { path: '/about', title: 'À propos' },
  { path: '/projets', title: 'Projets' },
  { path: '/art', title: 'Art' },
];

const PROJECTS = {
  '/projets/jonathan-steuer': 'Jonathan Steuer',
  '/projets/francaises-des-dev': 'Françaises des dev',
  '/projets/dashboard-nlp': 'DashBoard NLP',
  '/projets/portfolio-raph': 'Raphaël Demets',
  '/projets/meteo-r': "Meteo'R",
  '/projets/sum-app': "Sum'APP",
};

export function curtainMeta(from, to) {
  const rank = (path) => {
    if (PROJECTS[path]) return 2.5;
    const index = PAGES.findIndex((page) => page.path === path);
    return index === -1 ? 2 : index;
  };

  return {
    title: PROJECTS[to] || PAGES.find((page) => page.path === to)?.title || 'Projets',
    direction: rank(to) >= rank(from) ? 'left' : 'right',
  };
}

const COVER_MS = 460;
const HOLD_MS = 140;
const REVEAL_MS = 480;
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';

const slantPercent = () => {
  const rise = Math.tan((9 * Math.PI) / 180) * window.innerHeight;
  return (rise / Math.max(window.innerWidth, 1)) * 100;
};

const poly = (left, right, slant) => {
  const half = slant / 2;
  const n = (value) => value.toFixed(2);
  return `polygon(${n(left - half)}% 0%, ${n(right - half)}% 0%, ${n(right + half)}% 100%, ${n(left + half)}% 100%)`;
};

const clipsFor = (direction) => {
  const slant = slantPercent();
  const pad = 10 + Math.abs(slant);
  const open = poly(-pad, 100 + pad, slant);
  const offRight = poly(100 + pad - 1, 100 + pad, slant);
  const offLeft = poly(-pad, -pad + 1, slant);
  if (direction === 'right') return { enter: offLeft, open, exit: offRight };
  return { enter: offRight, open, exit: offLeft };
};

function CurtainField({ word }) {
  const fontPx = Math.max(40, window.innerHeight * 0.085);
  const wordPx = fontPx * 0.55 * (word.length + 0.8);
  const repeats = Math.max(3, Math.ceil(window.innerWidth / wordPx) + 1);
  const rows = 8;

  return (
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden py-[2vh]" aria-hidden="true">
      {Array.from({ length: rows }, (_, row) => (
        <div key={row} className="flex justify-center whitespace-nowrap leading-none" style={{ fontSize: fontPx }}>
          {Array.from({ length: repeats }, (_, i) => {
            const font = FONTS[(row + i) % FONTS.length];
            const outlined = (row + i) % 3 === 0;
            const hairline = font.family === 'CurtainPencerio';
            return (
              <span
                key={i}
                className="px-[0.28em]"
                style={{
                  fontFamily: `${font.family}, sans-serif`,
                  color: outlined ? 'transparent' : `rgba(255,255,255,${hairline ? 0.2 : 0.1})`,
                  WebkitTextStroke: outlined ? '1px rgba(255,255,255,0.16)' : undefined,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function PageCurtain({ title, direction, onCovered, onDone }) {
  const clips = useRef(clipsFor(direction));
  const phase = useRef('cover');
  const coveredRef = useRef(onCovered);
  const doneRef = useRef(onDone);
  coveredRef.current = onCovered;
  doneRef.current = onDone;

  const [clip, setClip] = useState(clips.current.enter);
  const [moving, setMoving] = useState(false);
  const alive = useRef(true);
  const word = title.toUpperCase();

  useEffect(() => {
    loadFonts();
    alive.current = true;
    const arm = window.setTimeout(() => setMoving(true), 32);
    const start = window.setTimeout(() => setClip(clips.current.open), 64);

    const coverFallback = window.setTimeout(() => {
      if (!alive.current || phase.current !== 'cover') return;
      phase.current = 'reveal';
      coveredRef.current();
      setClip(clips.current.exit);
    }, 64 + COVER_MS + HOLD_MS + 80);

    const doneFallback = window.setTimeout(() => {
      if (!alive.current || phase.current === 'done') return;
      phase.current = 'done';
      doneRef.current();
    }, 64 + COVER_MS + HOLD_MS + REVEAL_MS + 240);

    return () => {
      alive.current = false;
      window.clearTimeout(arm);
      window.clearTimeout(start);
      window.clearTimeout(coverFallback);
      window.clearTimeout(doneFallback);
    };
  }, []);

  const finishCover = () => {
    if (phase.current !== 'cover') return;
    phase.current = 'hold';
    coveredRef.current();
    window.setTimeout(() => {
      if (!alive.current || phase.current === 'done') return;
      phase.current = 'reveal';
      setClip(clips.current.exit);
    }, HOLD_MS);
  };

  const finishReveal = () => {
    if (phase.current !== 'reveal') return;
    phase.current = 'done';
    doneRef.current();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#181a1b] pointer-events-auto overflow-hidden"
      style={{
        clipPath: clip,
        transition: moving ? `clip-path ${phase.current === 'reveal' ? REVEAL_MS : COVER_MS}ms ${EASE}` : 'none',
      }}
      onTransitionEnd={(event) => {
        if (event.propertyName !== 'clip-path' || event.target !== event.currentTarget) return;
        if (phase.current === 'cover') finishCover();
        else finishReveal();
      }}
    >
      <p className="sr-only">{title}</p>
      <CurtainField word={word} />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p
          className="text-center uppercase text-white leading-none text-[clamp(3rem,8vw,7.5rem)]"
          style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
