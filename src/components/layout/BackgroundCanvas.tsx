import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let mouseActive = false;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Soothing particle constellation setup
    const particleCount = Math.min(Math.floor(width / 16), 85);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      pulseSpeed: number;
      color: string;
      glowColor: string;
    }> = [];

    const colorPairs = [
      { color: '#00f2fe', glow: 'rgba(0, 242, 254, 0.45)' },
      { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)' },
      { color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.45)' },
      { color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)' },
    ];

    for (let i = 0; i < particleCount; i++) {
      const pair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
      const r = Math.random() * 1.8 + 1.2;
      const alpha = Math.random() * 0.4 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        baseRadius: r,
        radius: r,
        alpha: alpha,
        baseAlpha: alpha,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: pair.color,
        glowColor: pair.glow,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse position
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Soothing breathing pulse effect on alpha
        p1.alpha = p1.baseAlpha + Math.sin(Date.now() * p1.pulseSpeed) * 0.15;

        // Smooth particle drift
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Smooth bounce at edges
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Soft mouse attraction
        if (mouseActive) {
          const dx = mouseX - p1.x;
          const dy = mouseY - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 190) {
            const force = (190 - dist) / 190;
            p1.x += (dx / dist) * force * 0.6;
            p1.y += (dy / dist) * force * 0.6;
            p1.radius = p1.baseRadius + force * 1.5;
          } else {
            p1.radius += (p1.baseRadius - p1.radius) * 0.1;
          }
        }

        // Draw glowing particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, p1.radius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = p1.glowColor;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, p1.alpha));
        ctx.fill();

        // Draw glowing web line connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 145) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color);
            gradient.addColorStop(1, p2.color);

            ctx.strokeStyle = gradient;
            ctx.globalAlpha = Math.max(0, (1 - dist / 145) * 0.18);
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
    />
  );
};
