import { useRef, useEffect } from "react";

export default function HurricaneCanvas({ cloudCount = 8 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let animationId;
    let t = 0;

    // Génère des nuages flous
    const clouds = Array.from({ length: cloudCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      r: 60 + Math.random() * 80,
      dx: 0.1 + Math.random() * 0.2,
      dy: 0.05 + Math.random() * 0.1,
      opacity: 0.10 + Math.random() * 0.13,
    }));

    function drawSpiral() {
      // Centre de la spirale
      const cx = width / 2;
      const cy = height / 2.1;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.04 * Math.sin(t / 120));
      ctx.globalAlpha = 0.45;
      // Spirale principale
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 2.5; a += 0.03) {
        const r = 60 + 120 * a;
        const x = Math.cos(a + t / 180) * r;
        const y = Math.sin(a + t / 180) * r;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(180, 190, 210, 0.25)";
      ctx.lineWidth = 38;
      ctx.shadowColor = "#e0e7ef";
      ctx.shadowBlur = 32;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();

      // Oeil de l'ouragan
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 38, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.shadowColor = "#e0e7ef";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.restore();
    }

    function drawClouds() {
      clouds.forEach(cloud => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,230,245,${cloud.opacity})`;
        ctx.shadowColor = "#e0e7ef";
        ctx.shadowBlur = 40;
        ctx.fill();
        ctx.restore();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawClouds();
      drawSpiral();
      // Animation douce des nuages
      clouds.forEach(cloud => {
        cloud.x += cloud.dx * Math.sin(t / 200 + cloud.y / 200);
        cloud.y += cloud.dy * Math.cos(t / 300 + cloud.x / 300);
        // Repositionne si hors écran
        if (cloud.x > width + cloud.r) cloud.x = -cloud.r;
        if (cloud.x < -cloud.r) cloud.x = width + cloud.r;
        if (cloud.y > height * 0.9) cloud.y = 0;
      });
      t += 1;
      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [cloudCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
      aria-hidden="true"
    />
  );
} 