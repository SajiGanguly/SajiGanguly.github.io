"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

interface AuroraBlob {
  x: number;
  y: number;
  anchorX: number; // central position to float around
  anchorY: number;
  baseRadius: number;
  radius: number;
  r: number; // current red
  g: number; // current green
  b: number; // current blue
  phaseX: number; // trigger path variables
  phaseY: number;
  speedX: number;
  speedY: number;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Mouse coordinate and state references
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // Target colors mapping for each theme
  // Blobs 0-4 have custom complementary roles to create beautiful mesh gradients
  const getThemePalette = (activeTheme: string): [number, number, number][] => {
    switch (activeTheme) {
      case "dark":
        return [
          [139, 92, 246], // Violet-500
          [6, 182, 212],  // Cyan-500
          [56, 189, 248], // Sky-400
          [99, 102, 241], // Indigo-500
          [37, 99, 235],  // Blue-600
        ];
      case "mint":
        return [
          [37, 99, 235],  // Royal Blue-600
          [148, 163, 184], // Slate-400
          [45, 212, 191],  // Teal-400
          [96, 165, 250],  // Blue-400
          [191, 219, 254], // Light Blue-200
        ];
      case "default":
      default:
        return [
          [186, 230, 253], // Sky-200
          [237, 233, 254], // Lavender-100
          [255, 237, 213], // Peach-100
          [255, 255, 255], // Clean White
          [207, 250, 254], // Cyan-100
        ];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let blobs: AuroraBlob[] = [];
    let lastTime = performance.now();
    let isMobile = false;

    // Rescale canvas for window and Retina displays
    const resizeCanvas = () => {
      isMobile = window.innerWidth < 768;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize anchors on resize to ensure perfect screen alignment
      if (blobs.length > 0) {
        const w = rect.width;
        const h = rect.height;
        blobs[0].anchorX = w * 0.2;  blobs[0].anchorY = h * 0.25;
        blobs[1].anchorX = w * 0.8;  blobs[1].anchorY = h * 0.2;
        blobs[2].anchorX = w * 0.5;  blobs[2].anchorY = h * 0.55;
        blobs[3].anchorX = w * 0.35; blobs[3].anchorY = h * 0.85;
        blobs[4].anchorX = w * 0.75; blobs[4].anchorY = h * 0.8;
      }
    };

    // Instantiate our morphing blobs (5 blobs at strategic spatial coordinate anchors)
    const initBlobs = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const palette = getThemePalette(theme);

      // Sizing is massive to allow blending into smooth gradients
      const sizes = [
        Math.min(w, h) * 0.55, // blob 0
        Math.min(w, h) * 0.5,  // blob 1
        Math.min(w, h) * 0.65, // blob 2
        Math.min(w, h) * 0.45, // blob 3
        Math.min(w, h) * 0.55, // blob 4
      ];

      const anchors = [
        { x: w * 0.2,  y: h * 0.25 },
        { x: w * 0.8,  y: h * 0.2 },
        { x: w * 0.5,  y: h * 0.55 },
        { x: w * 0.35, y: h * 0.85 },
        { x: w * 0.75, y: h * 0.8 },
      ];

      blobs = anchors.map((anchor, i) => ({
        x: anchor.x,
        y: anchor.y,
        anchorX: anchor.x,
        anchorY: anchor.y,
        baseRadius: sizes[i],
        radius: sizes[i],
        r: palette[i][0],
        g: palette[i][1],
        b: palette[i][2],
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speedX: Math.random() * 0.003 + 0.0015,
        speedY: Math.random() * 0.003 + 0.0015,
      }));
    };

    initBlobs();
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Track mouse interactions
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = mouseRef.current;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Main animation loop
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.666, 4); // Delta relative to 60fps
      lastTime = time;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Setup dynamic opacity coefficients to maintain standard page readable contrast
      // Dark Mode requires low opacity to prevent washing out high-tech glowing text
      // Light Mode pastels are soft and need slightly higher visibility
      const isDark = theme === "dark";
      const blobAlpha = isDark ? 0.08 : 0.28;

      // Update blob positions and colors
      const palette = getThemePalette(theme);

      blobs.forEach((p, i) => {
        // Trigonometric wave oscillation (slow organic drifting path)
        p.phaseX += p.speedX * delta;
        p.phaseY += p.speedY * delta;

        // Slow horizontal and vertical waving drift around its anchor
        const driftX = Math.sin(p.phaseX) * (w * 0.14);
        const driftY = Math.cos(p.phaseY) * (h * 0.14);
        const baseX = p.anchorX + driftX;
        const baseY = p.anchorY + driftY;

        // Soft cursor attraction:
        // Distorts anchor coordinate grid towards cursor (up to 20% displacement force)
        let targetX = baseX;
        let targetY = baseY;

        const mouse = mouseRef.current;
        if (mouse.active) {
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(w, h) * 0.9;
          
          // Displacement multiplier decays with distance from anchor
          const displacement = (1 - Math.min(dist / maxDist, 1)) * 0.22;
          
          targetX = baseX + dx * displacement;
          targetY = baseY + dy * displacement;
        }

        // Apply smooth interpolation to blob movement
        p.x += (targetX - p.x) * 0.035 * delta;
        p.y += (targetY - p.y) * 0.035 * delta;

        // Animate sizes slowly over time to simulate auroral swelling
        const pulse = Math.sin(p.phaseX * 0.5) * (p.baseRadius * 0.12);
        p.radius = p.baseRadius + pulse;

        // Dynamic theme color shifting (linear RGB interpolation)
        const targetColor = palette[i];
        p.r += (targetColor[0] - p.r) * 0.04 * delta;
        p.g += (targetColor[1] - p.g) * 0.04 * delta;
        p.b += (targetColor[2] - p.b) * 0.04 * delta;
      });

      // DRAW BLOBS
      blobs.forEach((p) => {
        const rVal = Math.round(p.r);
        const gVal = Math.round(p.g);
        const bVal = Math.round(p.b);

        ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${blobAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]); // re-run setup safely on theme updates

  return (
    <div className={cn("absolute inset-0 h-full w-full pointer-events-none overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block pointer-events-auto blur-[80px] md:blur-[130px] scale-[1.12]"
      />
    </div>
  );
}
