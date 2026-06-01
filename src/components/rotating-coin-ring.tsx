"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiPython, SiSelenium } from "react-icons/si";
import { FaDatabase, FaChartBar, FaCloud, FaGithub, FaLaptopCode, FaFileExcel } from "react-icons/fa";

// Define the coin interface
interface CoinData {
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string; // Theme variable or glow color
  textColor: string;
}

const COIN_STACK: CoinData[] = [
  {
    name: "Python",
    subtitle: "Data Science & Automation",
    icon: SiPython,
    color: "rgba(56, 189, 248, 0.4)", // Sky 400
    textColor: "text-sky-400",
  },
  {
    name: "SQL",
    subtitle: "Querying & Optimization",
    icon: FaDatabase,
    color: "rgba(14, 165, 233, 0.4)", // Sky 500
    textColor: "text-sky-500",
  },
  {
    name: "Power BI",
    subtitle: "Business Intelligence & DAX",
    icon: FaChartBar,
    color: "rgba(242, 200, 17, 0.4)", // Amber/Gold
    textColor: "text-amber-400",
  },
  {
    name: "Pandas & NumPy",
    subtitle: "Statistical Computations",
    icon: FaLaptopCode,
    color: "rgba(139, 92, 246, 0.4)", // Violet
    textColor: "text-violet-400",
  },
  {
    name: "Excel",
    subtitle: "Spreadsheet Analytics",
    icon: FaFileExcel,
    color: "rgba(34, 197, 94, 0.4)", // Green 500
    textColor: "text-green-500",
  },
  {
    name: "Azure Cloud",
    subtitle: "Blob Storage & Pipelines",
    icon: FaCloud,
    color: "rgba(2, 132, 199, 0.4)", // Sky 600
    textColor: "text-sky-300",
  },
  {
    name: "Selenium",
    subtitle: "Web Extraction & Scraping",
    icon: SiSelenium,
    color: "rgba(239, 68, 68, 0.4)", // Red 500
    textColor: "text-red-400",
  },
  {
    name: "GitHub",
    subtitle: "Code & Project Governance",
    icon: FaGithub,
    color: "rgba(255, 255, 255, 0.4)", // White/Silver
    textColor: "text-slate-300",
  },
];

export const RotatingCoinRing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ rx: 420, ry: 120 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Animation values using refs to bypass React re-renders and enable 60+ FPS
  const angleRef = useRef(0);
  const speedRef = useRef(0.0001); // Radian per millisecond base speed
  const targetSpeedRef = useRef(0.0001);
  const isHoveredRef = useRef(false);

  // Dynamic sizing of the elliptical path based on container width
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateSize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      // Calculate responsive horizontal radius (rx) and vertical tilt radius (ry)
      const rx = w < 640 ? Math.min(125, w * 0.34) : Math.min(460, Math.max(140, w * 0.36));
      const ry = w < 640 ? rx * 0.32 : rx * 0.28; // Tilted angle factor (slightly taller on mobile for spacing)
      setDimensions({ rx, ry });
    };

    updateSize();
    
    // Resize observer for accurate parent bounds tracking
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    
    window.addEventListener("resize", updateSize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Smooth deceleration of rotation speed when a coin is hovered
  useEffect(() => {
    if (hoveredIdx !== null) {
      targetSpeedRef.current = 0.000015; // Slow down to 15% of original speed
      isHoveredRef.current = true;
    } else {
      targetSpeedRef.current = 0.00008; // Normal rotation speed
      isHoveredRef.current = false;
    }
  }, [hoveredIdx]);

  // Main high-performance render loop for the elliptical movement
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Linear interpolation (lerp) for smooth speed deceleration/acceleration
      const speedLerpFactor = 0.08;
      speedRef.current += (targetSpeedRef.current - speedRef.current) * speedLerpFactor;

      // Increment rotation angle
      angleRef.current += speedRef.current * delta;

      const N = COIN_STACK.length;
      const { rx, ry } = dimensions;

      COIN_STACK.forEach((_, i) => {
        const el = coinRefs.current[i];
        if (!el) return;

        // Calculate specific coin's angular position along the circle
        const angle = (2 * Math.PI * i) / N + angleRef.current;

        // Calculate Ellipse X, Y coordinates
        const x = rx * Math.cos(angle);
        const y = ry * Math.sin(angle);

        // Normalize vertical position for depth calculation (-1 = back, 1 = front)
        const yNorm = Math.sin(angle); 

        // Apply scale: foreground is larger (1.15x), background is smaller (0.8x)
        const scale = 0.95 + 0.22 * yNorm;

        // Apply opacity: foreground is highly visible (1.0), background is faint (0.4)
        const opacity = 0.45 + 0.55 * ((yNorm + 1) / 2);

        // Depth of field blur filter: back coins are blurred, front are sharp
        const blurAmount = (1 - yNorm) * 1.8;
        
        // Z-Index hierarchy: Text panel is set to zIndex = 10
        // Coins pass behind text (zIndex: 5-9) and in front (zIndex: 11-15)
        const zIndex = Math.round((yNorm + 1) * 5) + 5; 

        // Write directly to DOM style to achieve buttery smooth hardware acceleration
        el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = blurAmount > 0.15 ? `blur(${blurAmount}px)` : "none";
        el.style.zIndex = `${zIndex}`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none"
      style={{ minHeight: "350px" }}
    >
      {COIN_STACK.map((coin, idx) => (
        <Coin
          key={coin.name}
          index={idx}
          coin={coin}
          ref={(el) => {
            coinRefs.current[idx] = el;
          }}
          isHovered={hoveredIdx === idx}
          onHoverStart={() => setHoveredIdx(idx)}
          onHoverEnd={() => setHoveredIdx(null)}
        />
      ))}
    </div>
  );
};

/* Interactive Glassmorphic Coin Sub-Component with Magnetic Mouse Physics & 3D Card-Tilt */
interface CoinProps {
  index: number;
  coin: CoinData;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const Coin = React.forwardRef<HTMLDivElement, CoinProps>(
  ({ coin, isHovered, onHoverStart, onHoverEnd }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0, mx: 0, my: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Cursor position relative to coin center
      const cursorX = e.clientX - rect.left - width / 2;
      const cursorY = e.clientY - rect.top - height / 2;

      // Calculate 3D tilt coordinates (max 20deg)
      const tiltX = -(cursorY / (height / 2)) * 18;
      const tiltY = (cursorX / (width / 2)) * 18;

      // Calculate magnetic shift translation (max 12px pull)
      const magneticX = (cursorX / (width / 2)) * 10;
      const magneticY = (cursorY / (height / 2)) * 10;

      setTilt({ x: tiltX, y: tiltY, mx: magneticX, my: magneticY });
    };

    const handleMouseLeave = () => {
      onHoverEnd();
      // Smoothly snap back to origin
      setTilt({ x: 0, y: 0, mx: 0, my: 0 });
    };

    const Icon = coin.icon;

    return (
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 pointer-events-auto"
        style={{
          width: "max-content",
          height: "max-content",
          transition: isHovered
            ? "none"
            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease",
        }}
      >
        <div
          ref={cardRef}
          onMouseEnter={onHoverStart}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center justify-center cursor-pointer group select-none"
          style={{
            transform: `translate3d(${tilt.mx}px, ${tilt.my}px, 0) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovered
              ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
              : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glassmorphic Coin Body */}
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border bg-retro-bg/60 backdrop-blur-md transition-all duration-300 relative"
            style={{
              borderColor: isHovered ? coin.color : "rgba(var(--color-text), 0.15)",
              boxShadow: isHovered
                ? `0 0 25px ${coin.color}, inset 0 0 10px ${coin.color}`
                : "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Gloss reflection glare overlay */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none z-10" />

            {/* Glowing Stack Icon */}
            <div
              className={`transition-all duration-300 ${coin.textColor}`}
              style={{
                filter: isHovered ? `drop-shadow(0 0 8px ${coin.color})` : "none",
                transform: "translateZ(20px)", // Elevate icon in 3D space
              }}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
            </div>
          </div>

          {/* Hover Glassmorphic Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full mt-3 flex flex-col items-center bg-retro-bg/95 border border-retro-text/20 backdrop-blur-xl px-4 py-2 rounded-xl text-center shadow-[0_12px_40px_rgba(0,0,0,0.3)] z-50 pointer-events-none"
                style={{
                  minWidth: "160px",
                  transform: "translateZ(40px)", // Push further forward in 3D plane
                }}
              >
                <div className="font-mono text-xs font-bold text-retro-text tracking-wide uppercase">
                  {coin.name}
                </div>
                <div className="text-[10px] text-retro-text/70 mt-0.5 leading-snug">
                  {coin.subtitle}
                </div>
                {/* Arrow indicator */}
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-retro-bg/95" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

Coin.displayName = "Coin";
