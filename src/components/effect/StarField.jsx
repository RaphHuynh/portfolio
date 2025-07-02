import React, { useRef, useEffect } from 'react';

const STAR_COLORS = [
  'rgba(255,255,255,0.85)', // blanc
  'rgba(191,167,106,0.7)', // doré pâle
  'rgba(174,194,224,0.7)', // bleu pâle
  'rgba(255,255,255,0.55)',
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function isMobile() {
  return window.innerWidth < 700;
}

export default function StarField({ starCount = 140 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // OPTIMISATION : moins d'étoiles sur mobile
    const mobile = isMobile();
    const N = mobile ? Math.floor(starCount * 0.45) : starCount;

    // Générer les étoiles (plus dense au centre pour effet galaxie)
    const stars = Array.from({ length: N }).map((_, i) => {
      // Pour la galaxie : 60% des étoiles dans une ellipse centrale
      let x, y;
      if (i < N * 0.6) {
        // Ellipse centrale (galaxie)
        const angle = random(0, 2 * Math.PI);
        const radius = random(0, Math.min(width, height) * 0.32) * (0.7 + 0.3 * Math.random());
        x = width / 2 + Math.cos(angle) * radius * 1.1;
        y = height / 2 + Math.sin(angle) * radius * 0.55;
      } else {
        // Reste : fond classique
        x = random(0, width);
        y = random(0, height);
      }
      return {
        baseX: x,
        baseY: y,
        r: random(0.4, 1.7),
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        baseAlpha: random(0.5, 1),
        twinkleSpeed: random(0.7, 2.5),
        twinklePhase: random(0, Math.PI * 2),
        moveRadius: random(0.5, 2.5),
        moveSpeed: random(0.08, 0.22),
        moveAngle: random(0, Math.PI * 2),
      };
    });

    // Effet galaxie : halo central
    function drawGalaxyHalo() {
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.08,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.38
      );
      grad.addColorStop(0, 'rgba(180,180,255,0.18)'); // bleu pâle
      grad.addColorStop(0.35, 'rgba(191,167,106,0.10)'); // doré
      grad.addColorStop(0.7, 'rgba(120,80,180,0.08)'); // violet
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.38, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawGalaxyHalo();
      const now = Date.now() / 1000;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        // Mouvement spatial doux (oscillation sur x et y)
        const angle = now * star.moveSpeed + star.moveAngle;
        const x = star.baseX + Math.cos(angle) * star.moveRadius;
        const y = star.baseY + Math.sin(angle) * star.moveRadius;
        // Scintillement accentué
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(now * star.twinkleSpeed + star.twinklePhase));
        ctx.globalAlpha = star.baseAlpha * twinkle;
        ctx.beginPath();
        ctx.arc(x, y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        if (!mobile) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 8 * star.r;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationId = window.requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Repositionner les étoiles
      stars.forEach((star, i) => {
        if (i < N * 0.6) {
          const angle = random(0, 2 * Math.PI);
          const radius = random(0, Math.min(width, height) * 0.32) * (0.7 + 0.3 * Math.random());
          star.baseX = width / 2 + Math.cos(angle) * radius * 1.1;
          star.baseY = height / 2 + Math.sin(angle) * radius * 0.55;
        } else {
          star.baseX = random(0, width);
          star.baseY = random(0, height);
        }
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{ top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
} 