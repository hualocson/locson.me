"use client";

import { useCallback, useEffect, useRef } from "react";

import {
  Application,
  Graphics,
  Particle,
  ParticleContainer,
  Texture,
} from "pixi.js";
import { createNoise3D } from "simplex-noise";

// Constants
const SCALE = 200;
const LENGTH = 5;
const SPACING = 15;
const BACKGROUND_COLOR = "#ffffff";
const DOT_COLOR = 0xcccccc;

// Global state
let noise3d: ReturnType<typeof createNoise3D>;
const existingPoints = new Set<string>();
let points: Array<{
  x: number;
  y: number;
  opacity: number;
  particle: Particle;
}> = [];

// Initialize noise function
const initializeNoise = () => {
  if (!noise3d) {
    noise3d = createNoise3D();
  }
};

// Get force on point using noise
const getForceOnPoint = (x: number, y: number, z: number): number => {
  return (noise3d(x / SCALE, y / SCALE, z) - 0.5) * 2 * Math.PI;
};

// Create dot texture
const createDotTexture = (app: Application): Texture => {
  const graphics = new Graphics();
  graphics.circle(0, 0, 1);
  graphics.fill(DOT_COLOR);
  return app.renderer.generateTexture(graphics);
};

// Add points to the scene
const addPoints = (
  dotTexture: Texture,
  particleContainer: ParticleContainer,
  width: number,
  height: number
): void => {
  for (let x = -SPACING / 2; x < width + SPACING; x += SPACING) {
    for (let y = -SPACING / 2; y < height + SPACING; y += SPACING) {
      const id = `${x}-${y}`;
      if (existingPoints.has(id)) {
        continue;
      }
      existingPoints.add(id);

      const particle = new Particle(dotTexture);
      particle.anchorX = 0.5;
      particle.anchorY = 0.5;
      particleContainer.addParticle(particle);

      const opacity = Math.random() * 0.5 + 0.5;
      points.push({ x, y, opacity, particle });
    }
  }
};

// Clear existing points
const clearPoints = (): void => {
  existingPoints.clear();
  points = [];
};

export default function ArtDots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const isInitializedRef = useRef(false);

  const handleResize = useCallback(() => {
    if (!appRef.current || !containerRef.current) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear existing points
    clearPoints();

    // Add new points for the new dimensions
    const particleContainer = appRef.current.stage
      .children[0] as ParticleContainer;
    const dotTexture = createDotTexture(appRef.current);
    addPoints(dotTexture, particleContainer, width, height);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) {
      return;
    }

    let isDestroyed = false;
    isInitializedRef.current = true;

    const initializeApp = async () => {
      try {
        // Initialize noise
        initializeNoise();

        // Create PIXI application
        const app = new Application();
        await app.init({
          background: BACKGROUND_COLOR,
          antialias: true,
          resolution: window.devicePixelRatio || 1,
          resizeTo: containerRef.current!,
          eventMode: "none",
          autoDensity: true,
        });

        if (isDestroyed) {
          app.destroy(true);
          return;
        }

        appRef.current = app;
        containerRef.current?.appendChild(app.canvas);

        // Create particle container
        const particleContainer = new ParticleContainer({
          dynamicProperties: { position: true, alpha: true },
        });
        app.stage.addChild(particleContainer);

        // Create dot texture and add initial points
        const dotTexture = createDotTexture(app);
        const width = window.innerWidth;
        const height = window.innerHeight;
        addPoints(dotTexture, particleContainer, width, height);

        // Animation loop
        app.ticker.add(() => {
          if (isDestroyed) {
            return;
          }

          const time = Date.now() / 10000;

          for (const point of points) {
            const { x, y, opacity, particle } = point;
            const rad = getForceOnPoint(x, y, time);
            const len =
              (noise3d(x / SCALE, y / SCALE, time * 2) + 0.5) * LENGTH;
            const nx = x + Math.cos(rad) * len;
            const ny = y + Math.sin(rad) * len;

            particle.x = nx;
            particle.y = ny;
            particle.alpha = (Math.abs(Math.cos(rad)) * 0.8 + 0.2) * opacity;
          }
        });

        // Add resize listener
        window.addEventListener("resize", handleResize);
      } catch (error) {
        console.error("Failed to initialize ArtDots:", error);
      }
    };

    initializeApp();

    return () => {
      isDestroyed = true;
      window.removeEventListener("resize", handleResize);

      if (appRef.current) {
        try {
          appRef.current.destroy(true, {
            children: true,
            texture: true,
            textureSource: true,
          });
        } catch (error) {
          console.error("Error destroying PIXI app:", error);
        }
        appRef.current = null;
      }

      clearPoints();
      isInitializedRef.current = false;
    };
  }, [handleResize]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 dark:invert print:hidden"
    />
  );
}
