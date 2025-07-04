import { useRef, useEffect } from "react";

export default function RainWindEffect({ dropCount = 140 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Gouttes de pluie
    const drops = Array.from({ length: dropCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: 32 + Math.random() * 38, // plus longues
      speed: 3.5 + Math.random() * 2.5,
      thickness: 1.1 + Math.random() * 0.9,
      opacity: 0.22 + Math.random() * 0.22, // plus opaques
      windOffset: Math.random() * 1000,
      blur: Math.random() < 0.25 ? 2 + Math.random() * 2 : 0, // 25% des gouttes floues
    }));

    let t = 0;
    let animationId;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      t += 1;
      // Vent léger, direction constante, très subtil
      const wind = Math.sin(t / 180) * 0.7 + 1.2;
      drops.forEach(drop => {
        // Angle très faible pour la brise
        const angle = 0.18 + wind * 0.04;
        ctx.save();
        ctx.globalAlpha = drop.opacity;
        if (drop.blur > 0) {
          ctx.shadowColor = "#2563eb";
          ctx.shadowBlur = drop.blur;
        }
        ctx.strokeStyle = "#2563eb"; // bleu foncé
        ctx.lineWidth = drop.thickness;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(
          drop.x + Math.sin(angle) * drop.len,
          drop.y + Math.cos(angle) * drop.len
        );
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        ctx.restore();
        // Mouvement de la goutte
        drop.x += Math.sin(angle) * 0.5 + wind * 0.12;
        drop.y += Math.cos(angle) * drop.speed;
        // Si la goutte sort de l'écran, on la replace en haut
        if (drop.y > height + 10) {
          drop.x = Math.random() * width;
          drop.y = -20;
        }
        if (drop.x < -20 || drop.x > width + 20) {
          drop.x = Math.random() * width;
          drop.y = -20;
        }
      });
      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [dropCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
} 