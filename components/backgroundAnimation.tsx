'use client';

import { useEffect, useRef } from 'react';

export default function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      history: { x: number; y: number }[];
      maxHistory: number;
      speed: number;
      angle: number;

      reset(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 1.5 + 0.5;
        this.angle = 0;
        this.maxHistory = Math.floor(Math.random() * 20) + 10;
      }

      update(canvas: HTMLCanvasElement, mouse: { x: number; y: number }) {
        // Flow field logic (using sin/cos for smooth flow)
        const noise = Math.sin(this.x * 0.005) * Math.cos(this.y * 0.005) * Math.PI * 2;
        this.angle = noise + time * 0.1;

        // Mouse influence
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.angle += Math.atan2(dy, dx) * (1 - dist / 200);
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) this.history.shift();

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset(canvas);
          this.history = [];
        }
      }

      constructor(canvas: HTMLCanvasElement) {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.angle = 0;
        this.history = [];
        this.maxHistory = 0;
        this.reset(canvas);
      }

      draw() {
        if (!ctx || this.history.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15})`; // Indigo
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 8000), 200);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas));
      }
    };

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();

    const animate = () => {
      // Subtle fade effect for trails
      ctx.fillStyle = 'rgba(3, 3, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update(canvas, mouse);
        particle.draw();
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030308]">
      {/* Deep Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
