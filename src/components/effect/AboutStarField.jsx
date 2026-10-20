import React, { useRef, useEffect } from 'react';

const STAR_COLORS = [
  'rgba(255,255,255,0.85)',
  'rgba(191,167,106,0.65)',
  'rgba(174,194,224,0.65)',
  'rgba(255,255,255,0.5)',
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function isMobile() {
  return window.innerWidth < 700;
}

/** Même halo que la galaxie de l'accueil, centré sur le soleil. */
function drawMoonHalo(ctx, width, height) {
  const reach = Math.min(width, height) * 0.38;
  const cx = width / 2;
  const cy = height / 2 + 34;
  const grad = ctx.createRadialGradient(
    cx,
    cy,
    Math.min(width, height) * 0.08,
    cx,
    cy,
    reach,
  );
  grad.addColorStop(0, 'rgba(180,180,255,0.18)');
  grad.addColorStop(0.35, 'rgba(191,167,106,0.10)');
  grad.addColorStop(0.7, 'rgba(120,80,180,0.08)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, reach, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

/** Fond d'étoiles discret pour About. Le halo reste réservé à l'écran Compétences. */
export default function AboutStarField({ starCount = 120, contained = false, halo = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const host = contained ? canvas.parentElement : null;
    const readSize = () => {
      if (contained && host) return { width: host.clientWidth, height: host.clientHeight };
      return { width: window.innerWidth, height: window.innerHeight };
    };
    let { width, height } = readSize();
    canvas.width = width;
    canvas.height = height;

    const mobile = isMobile();
    const N = mobile ? Math.floor(starCount * 0.4) : starCount;

    const stars = Array.from({ length: N }).map(() => ({
      baseX: random(0, width),
      baseY: random(0, height),
      r: random(0.35, 1.5),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      baseAlpha: random(0.4, 0.95),
      twinkleSpeed: random(0.6, 2.2),
      twinklePhase: random(0, Math.PI * 2),
      moveRadius: random(0.3, 1.8),
      moveSpeed: random(0.06, 0.18),
      moveAngle: random(0, Math.PI * 2),
    }));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const meteors = [];
    let nextMeteor = Date.now() / 1000 + random(0.8, 2.2);
    function spawnMeteor(time) {
      const angle = 0.68;
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);
      const distance = Math.hypot(width, height) * 1.2;
      const speed = random(distance / 1.7, distance / 1.2);
      meteors.push({
        x: -36,
        y: random(-height * 0.08, height * 0.72),
        vx: dirX * speed,
        vy: dirY * speed,
        born: time,
        life: distance / speed,
        length: random(100, 170),
      });
    }

    let animationId;
    let lastTick = 0;
    function animate() {
      animationId = window.requestAnimationFrame(animate);
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);
      const now = Date.now() / 1000;
      const step = lastTick ? Math.min(0.05, now - lastTick) : 1 / 60;
      lastTick = now;

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      if (halo) drawMoonHalo(ctx, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const angle = now * star.moveSpeed + star.moveAngle;
        const x = star.baseX + Math.cos(angle) * star.moveRadius;
        const y = star.baseY + Math.sin(angle) * star.moveRadius;
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(now * star.twinkleSpeed + star.twinklePhase));

        ctx.globalAlpha = star.baseAlpha * twinkle;
        ctx.beginPath();
        ctx.arc(x, y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!reduceMotion && now >= nextMeteor && meteors.length < 2) {
        spawnMeteor(now);
        nextMeteor = now + random(4.5, 9);
      }

      for (let i = meteors.length - 1; i >= 0; i -= 1) {
        const meteor = meteors[i];
        const age = (now - meteor.born) / meteor.life;
        if (age >= 1) {
          meteors.splice(i, 1);
          continue;
        }
        const fade = age < 0.12 ? age / 0.12 : 1 - ((age - 0.12) / 0.88);
        const speed = Math.hypot(meteor.vx, meteor.vy) || 1;
        const tailX = meteor.x - (meteor.vx / speed) * meteor.length;
        const tailY = meteor.y - (meteor.vy / speed) * meteor.length;
        const trail = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        trail.addColorStop(0, 'rgba(255,255,255,0)');
        trail.addColorStop(0.7, `rgba(244,231,200,${0.35 * fade})`);
        trail.addColorStop(1, `rgba(255,255,255,${0.95 * fade})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.35;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();
        ctx.globalAlpha = fade;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        meteor.x += meteor.vx * step;
        meteor.y += meteor.vy * step;
      }
    }
    animate();

    function handleResize() {
      const next = readSize();
      width = next.width;
      height = next.height;
      canvas.width = width;
      canvas.height = height;
      stars.forEach((star) => {
        star.baseX = random(0, width);
        star.baseY = random(0, height);
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, contained, halo]);

  return (
    <canvas
      ref={canvasRef}
      className={contained
        ? 'pointer-events-none absolute inset-0 h-full w-full'
        : 'pointer-events-none fixed inset-0 z-0 h-full w-full'}
      style={{ top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
}
