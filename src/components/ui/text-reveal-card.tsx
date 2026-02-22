"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className,
}: {
    text: string;
    revealText: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef<HTMLDivElement | any>(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            setLeft(cardRef.current.getBoundingClientRect().left);
            setLocalWidth(cardRef.current.getBoundingClientRect().width);
        }
    }, []);

    function mouseMoveHandler(event: any) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }
    function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
        event.preventDefault();
        const clientX = event.touches[0]!.clientX;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            onTouchStart={mouseEnterHandler}
            onTouchEnd={mouseLeaveHandler}
            onTouchMove={touchMoveHandler}
            ref={cardRef}
            className={cn(
                "bg-retro-bg border-4 border-retro-secondary w-full rounded-lg p-8 relative overflow-hidden",
                className
            )}
        >
            {children}

            <div className="h-40 relative flex items-center overflow-hidden">
                <motion.div
                    style={{
                        width: "100%",
                    }}
                    animate={
                        isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                            : {
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                    }
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="absolute bg-retro-secondary z-20 will-change-transform"
                >
                    <p
                        style={{
                            textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                        }}
                        className="text-4xl md:text-5xl py-10 font-bold text-retro-bg bg-clip-text text-transparent bg-gradient-to-b from-retro-bg to-retro-primary"
                    >
                        {revealText}
                    </p>
                </motion.div>

                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${widthPercentage === 100 ? 0 : isMouseOver ? 10 : 0}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="h-40 w-[8px] bg-gradient-to-b from-transparent via-retro-accent to-transparent absolute z-50 will-change-transform"
                ></motion.div>

                <div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
                    <p className="text-4xl md:text-5xl py-10 font-bold bg-clip-text text-transparent bg-retro-text/30">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};
