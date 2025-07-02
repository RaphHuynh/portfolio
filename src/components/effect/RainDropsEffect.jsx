import React, { useEffect, useRef } from "react";

const NB_DROPS = 32;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function RainDropsEffect() {
  const canvasRef = useRef(null);
  const drops = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Générer les gouttes
    drops.current = Array.from({ length: NB_DROPS }).map(() => ({
      x: random(0, width),
      y: random(0, height),
      r: random(8, 22),
      speed: random(0.4, 1.2),
      opacity: random(0.08, 0.18),
      blur: random(1, 3),
      sway: random(0.5, 1.5),
      swayPhase: random(0, Math.PI * 2),
    }));

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      drops.current.forEach((drop) => {
        // Oscillation horizontale
        const swayX = Math.sin(Date.now() / 1200 + drop.swayPhase) * drop.sway;
        ctx.save();
        ctx.globalAlpha = drop.opacity;
        ctx.filter = `blur(${drop.blur}px)`;
        ctx.beginPath();
        ctx.ellipse(drop.x + swayX, drop.y, drop.r * 0.7, drop.r, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "#bfe0ff";
        ctx.fill();
        ctx.restore();
        // Mouvement vers le bas
        drop.y += drop.speed;
        if (drop.y - drop.r > height) {
          drop.y = -drop.r;
          drop.x = random(0, width);
        }
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
} 