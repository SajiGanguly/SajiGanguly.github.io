"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: React.ReactNode;
        subtitle?: React.ReactNode;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-retro-secondary/30 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-retro-bg border-4 border-retro-secondary group-hover:border-retro-primary relative z-20 transition-colors duration-500 shadow-xl">
                        <div className="relative z-50">
                            <div className="p-4">
                                <h4 className="text-retro-secondary font-bold tracking-wide mt-4 text-2xl">
                                    {item.title}
                                </h4>
                                {item.subtitle && (
                                    <p className="text-retro-text/80 font-semibold mt-2">{item.subtitle}</p>
                                )}
                                <div className="mt-4 text-retro-text tracking-wide leading-relaxed text-sm">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
