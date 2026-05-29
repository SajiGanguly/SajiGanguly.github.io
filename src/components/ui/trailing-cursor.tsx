"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const TrailingCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Dynamic spring config for smooth trailing animation (snappy, low-mass configuration)
    const springConfig = { damping: 20, stiffness: 480, mass: 0.15 };
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

            // Check if we are hovering over an anchor, button, or pointer element
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
            {/* Elegant micro trailing ring (keeps the default OS cursor visible for perfect snappiness) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white hidden sm:block mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    width: isHovering ? 28 : 14,
                    height: isHovering ? 28 : 14,
                    borderColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.65)",
                    scale: isHovering ? 1.15 : 1,
                }}
                transition={{ duration: 0.18, ease: "easeOut" }}
            />
        </>
    );
};
