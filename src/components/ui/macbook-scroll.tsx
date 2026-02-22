"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge,
    children,
}: {
    src?: string;
    showGradient?: boolean;
    title?: string | React.ReactNode;
    badge?: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3],
        [1.2, isMobile ? 1 : 1.5]
    );
    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3],
        [0.6, isMobile ? 1 : 1.5]
    );
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotation = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
        >
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="text-retro-text text-3xl pb-20 font-bold text-center"
            >
                {title || (
                    <span>
                        This Macbook is built with Tailwind CSS. <br /> No kidding.
                    </span>
                )}
            </motion.h2>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotation}
                translateY={translateY}
            >
                {children}
            </Lid>
            {/* Base area */}
            <div className="h-[22rem] w-[32rem] bg-[#272729] rounded-2xl relative -mt-48 [perspective:1000px] [transform:rotateX(20deg)_translateZ(0px)] flex flex-col items-center justify-start p-2">
                {/* Keyboard edge */}
                <div className="absolute inset-x-2 bottom-0 top-0 bg-[#272729] rounded-b-2xl mx-auto shadow-sm" />
                <div className="absolute inset-x-2 bottom-0 top-0 bg-[#272729] rounded-b-2xl mx-auto drop-shadow-lg" />

                {/* Trackpad */}
                <div className="h-20 w-32 rounded-lg bg-[#3C3D3E] shadow-[inset_0_3px_6px_rgba(0,0,0,1)] relative z-10 bottom-4 mt-auto" />
                {/* Keyboard plate */}
                <div className="h-[210px] w-full rounded-lg bg-[#111111] shadow-[inset_0_5px_8px_rgba(0,0,0,1)] relative z-10 p-1 flex mt-2">
                    <SpeakerGrid />
                    <Keyboard badge={badge} />
                    <SpeakerGrid />
                </div>
            </div>
        </div>
    );
};

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translateY,
    src,
    children,
}: {
    scaleX: any;
    scaleY: any;
    rotate: any;
    translateY: any;
    src?: string;
    children?: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                scaleX: scaleX,
                scaleY: scaleY,
                rotateX: rotate,
                translateY: translateY,
                transformStyle: "preserve-3d",
                transformOrigin: "bottom",
            }}
            className="h-[22rem] w-[32rem] bg-[#111111] rounded-2xl p-2 relative"
        >
            <div className="inset-0 bg-[#272729] rounded-xl absolute z-0" />
            <div className="h-full w-full bg-[#111111] rounded-xl z-10 relative overflow-hidden flex items-center justify-center">
                {children ? (
                    children
                ) : src ? (
                    <img
                        src={src}
                        alt="macbook screeen"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-900" />
                )}
            </div>
            <div className="absolute top-2 w-full flex justify-center z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>
        </motion.div>
    );
};

export const SpeakerGrid = () => {
    return (
        <div
            className="flex px-[2px] gap-[2px] mt-2 h-[150px] w-full"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1.5px)",
                backgroundSize: "3px 3px",
            }}
        ></div>
    );
};

export const Keyboard = ({ badge }: { badge?: React.ReactNode }) => {
    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
    const rows = [letters.slice(0, 10), letters.slice(10, 19), letters.slice(19)];

    return (
        <div className="h-full w-[80%] px-1 flex flex-col gap-1 mx-2">
            {/* Top Row / Touchbar */}
            <div className="h-6 w-full rounded-sm bg-[#1A1A1A] mb-2 mx-1 shadow-[inset_0_2px_4px_rgba(0,0,0,1)] flex items-center justify-between px-4">
                <div className="h-2 w-8 bg-[#333] rounded-full" />
                <div className="h-2 w-8 bg-[#333] rounded-full" />
                <div className="h-2 w-8 bg-[#333] rounded-full" />
                <div className="h-2 w-8 bg-[#333] rounded-full" />
            </div>

            {/* Keys */}
            {rows.map((row, i) => (
                <div key={i} className="flex justify-center flex-row gap-1">
                    {i === 1 && <div className="h-8 w-10 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />}
                    {i === 2 && <div className="h-8 w-14 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />}

                    {row.map((key) => (
                        <div
                            key={key}
                            className="h-8 w-8 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333] flex items-center justify-center"
                        >
                            <span className="text-[10px] text-white/50">{key}</span>
                        </div>
                    ))}

                    {i === 1 && <div className="h-8 w-10 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />}
                    {i === 2 && <div className="h-8 w-16 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />}
                </div>
            ))}
            {/* Spacebar Row */}
            <div className="flex justify-center flex-row gap-1">
                <div className="h-8 w-8 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />
                <div className="h-8 w-8 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />
                <div className="h-8 w-8 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />
                <div className="h-8 w-48 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333] flex items-center justify-center">
                    {badge && <div className="opacity-70 scale-75">{badge}</div>}
                </div>
                <div className="h-8 w-8 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />
                <div className="h-8 w-16 bg-[#222] rounded shadow-[0_2px_4px_rgba(0,0,0,1)] border border-[#333]" />
            </div>
        </div>
    );
};
