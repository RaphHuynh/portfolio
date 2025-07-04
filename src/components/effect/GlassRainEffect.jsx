import { useRef, useEffect } from "react";

export default function GlassRainEffect({ dropCount = 38, streakCount = 8 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Fond dégradé doux (ciel clair)
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#e0eafc");
    gradient.addColorStop(1, "#f7faff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Générer les gouttes
    const drops = Array.from({ length: dropCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 18 + Math.random() * 32,
      rx: 0.8 + Math.random() * 0.7, // ovale
      ry: 0.8 + Math.random() * 0.7,
      opacity: 0.18 + Math.random() * 0.22,
      highlight: Math.random() * 0.7 + 0.3,
      blur: Math.random() < 0.3 ? 2 + Math.random() * 2 : 0,
    }));

    // Générer les coulures
    const streaks = Array.from({ length: streakCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      len: 60 + Math.random() * 120,
      width: 2.2 + Math.random() * 2.5,
      opacity: 0.10 + Math.random() * 0.13,
      speed: 0.2 + Math.random() * 0.3,
      progress: Math.random() * 1,
    }));

    let animationId;
    function draw() {
      // Fond dégradé
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Gouttes
      drops.forEach(drop => {
        ctx.save();
        ctx.globalAlpha = drop.opacity;
        if (drop.blur > 0) {
          ctx.shadowColor = "#b6d0f7";
          ctx.shadowBlur = drop.blur;
        }
        ctx.beginPath();
        ctx.ellipse(drop.x, drop.y, drop.r * drop.rx, drop.r * drop.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#e3f0fa";
        ctx.fill();
        // Reflet
        ctx.globalAlpha = drop.opacity * 0.7;
        ctx.beginPath();
        ctx.ellipse(drop.x - drop.r * 0.25, drop.y - drop.r * 0.25, drop.r * 0.18, drop.r * 0.12, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        ctx.restore();
      });

      // Coulures
      streaks.forEach(streak => {
        ctx.save();
        ctx.globalAlpha = streak.opacity;
        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(streak.x, streak.y + streak.len * streak.progress);
        ctx.strokeStyle = "#b6d0f7";
        ctx.lineWidth = streak.width;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.restore();
        // Animation
        streak.progress += streak.speed * 0.008;
        if (streak.progress > 1) {
          streak.progress = 0;
          streak.x = Math.random() * width;
          streak.y = Math.random() * height * 0.7;
        }
      });

      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [dropCount, streakCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
} 