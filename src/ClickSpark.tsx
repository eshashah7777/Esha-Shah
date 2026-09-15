import React, { useRef, useEffect, useCallback } from 'react';

export interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export default function ClickSpark({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  // Easing function calculation
  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case 'ease-out':
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Resize canvas to cover viewport with devicePixelRatio support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation render loop
  const animate = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLen = sparkSize * (1 - progress);

        const x1 = (spark.x + Math.cos(spark.angle) * distance) * dpr;
        const y1 = (spark.y + Math.sin(spark.angle) * distance) * dpr;
        const x2 = (spark.x + Math.cos(spark.angle) * (distance + lineLen)) * dpr;
        const y2 = (spark.y + Math.sin(spark.angle) * (distance + lineLen)) * dpr;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2.5 * dpr;
        ctx.lineCap = 'round';
        ctx.globalAlpha = Math.max(0, 1 - progress);

        // Add glow & drop-shadow so white sparks pop vibrantly on cream and dark backgrounds
        const isWhite =
          sparkColor.toLowerCase() === '#ffffff' ||
          sparkColor.toLowerCase() === '#fff' ||
          sparkColor.toLowerCase() === 'white';
        ctx.shadowColor = isWhite ? 'rgba(124, 40, 76, 0.85)' : 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 5 * dpr;

        ctx.stroke();
        ctx.restore();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        animFrameIdRef.current = null;
      }
    },
    [duration, easeFunc, extraScale, sparkColor, sparkRadius, sparkSize]
  );

  // Trigger sparks at given screen coordinates
  const triggerSparks = useCallback(
    (clientX: number, clientY: number) => {
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount;
        sparksRef.current.push({
          x: clientX,
          y: clientY,
          angle,
          startTime: now,
        });
      }

      if (animFrameIdRef.current === null) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      }
    },
    [sparkCount, animate]
  );

  // Listen to clicks across the application with capture phase
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      } else {
        return;
      }

      triggerSparks(clientX, clientY);
    };

    window.addEventListener('pointerdown', handlePointerDown, { capture: true, passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, { capture: true });
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [triggerSparks]);

  return (
    <div className="relative w-full min-h-screen">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-9999"
      />
      {children}
    </div>
  );
}
