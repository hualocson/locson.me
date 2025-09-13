"use client";

import { useEffect, useRef, useState } from "react";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#88888825";

const MASK = "radial-gradient(circle, transparent, black)";

const MIN_BRANCH = 30;
const len = 6;

function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy] as [number, number];
}

export default function ArtPlum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [_, setStopped] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    // Setup retina scaling
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let steps: (() => void)[] = [];
    let prevSteps: (() => void)[] = [];

    const step = (
      x: number,
      y: number,
      rad: number,
      counter = { value: 0 }
    ) => {
      const length = Math.random() * len;
      counter.value += 1;
      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + Math.random() * r15;
      const rad2 = rad - Math.random() * r15;

      // out of bounds
      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100) {
        return;
      }

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      if (Math.random() < rate) {
        steps.push(() => step(nx, ny, rad1, counter));
      }
      if (Math.random() < rate) {
        steps.push(() => step(nx, ny, rad2, counter));
      }
    };

    let lastTime = performance.now();
    const interval = 1000 / 40; // 40fps cap
    let rafId: number;

    const frame = () => {
      rafId = requestAnimationFrame(frame);
      if (performance.now() - lastTime < interval) {
        return;
      }
      lastTime = performance.now();

      prevSteps = steps;
      steps = [];

      if (!prevSteps.length) {
        setStopped(true);
        cancelAnimationFrame(rafId);
        return;
      }

      prevSteps.forEach((fn) => {
        if (Math.random() < 0.5) {
          steps.push(fn);
        } else {
          fn();
        }
      });
    };

    // random 20%–80% of screen
    const randomMiddle = () => Math.random() * 0.6 + 0.2;

    const start = () => {
      cancelAnimationFrame(rafId);
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      prevSteps = [];
      steps = [
        () => step(randomMiddle() * width, -5, r90),
        () => step(randomMiddle() * width, height + 5, -r90),
        () => step(-5, randomMiddle() * height, 0),
        () => step(width + 5, randomMiddle() * height, r180),
      ];
      if (width < 500) {
        steps = steps.slice(0, 2);
      }
      setStopped(false);
      rafId = requestAnimationFrame(frame);
    };

    start();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 dark:invert print:hidden"
      style={
        {
          maskImage: MASK,
          WebkitMaskImage: MASK,
        } as React.CSSProperties
      }
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
