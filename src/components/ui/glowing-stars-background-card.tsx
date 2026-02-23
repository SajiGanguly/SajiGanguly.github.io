"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const mouseMoveEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            onMouseMove={mouseMoveEvent}
            className={cn(
                "bg-retro-bg border-4 border-retro-secondary p-4 rounded-xl relative overflow-hidden group w-full h-full",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-primary), transparent 40%)`,
                }}
            />

            <GlowingStars />

            <div className="relative z-50 h-full w-full flex flex-col items-center justify-center text-center">{children}</div>
        </div>
    );
};

const GlowingStars = () => {
    const [stars, setStars] = useState<{ top: string; left: string; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate stars only on the client to prevent hydration mismatch
        const generatedStars = [...Array(20)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 2,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-retro-accent rounded-full h-1 w-1"
                    style={{
                        top: star.top,
                        left: star.left,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
};
