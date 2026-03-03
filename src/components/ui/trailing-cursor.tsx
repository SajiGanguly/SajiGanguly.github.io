"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const TrailingCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Increased stiffness, decreased damping and mass for a faster, snappy feel
    const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
    const cursorXSpring = useSpring(mouseX, springConfig);
    const cursorYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

        setIsVisible(true);

        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if we are hovering over an anchor, button, or any interactive element
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (pointer: fine) {
          body, a, button, [role="button"], input, select, textarea { 
            cursor: none !important; 
          }
        }
      `}} />

            {/* The main solid dot */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white hidden sm:block mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />

            {/* The trailing ring */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white hidden sm:block mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    width: isHovering ? 56 : 32,
                    height: isHovering ? 56 : 32,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
};
