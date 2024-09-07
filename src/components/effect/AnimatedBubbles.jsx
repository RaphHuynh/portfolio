import React, { useEffect, useRef } from 'react';

const AnimatedBubbles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];
    const bubbleCount = 50;

    class Bubble {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + Math.random() * canvas.height;
          this.radius = Math.random() * 20 + 5;
          this.speed = Math.random() * 3 + 1;
          this.opacity = Math.random() * 0.5 + 0.1;
        }
      
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
          ctx.fill();
        }
      
        update() {
          this.y -= this.speed;
          if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius;
          }
        }
      }      

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach(bubble => {
        bubble.draw();
        bubble.update();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
    />
  );
};

export default AnimatedBubbles;