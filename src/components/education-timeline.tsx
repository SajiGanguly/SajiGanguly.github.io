"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EducationTimeline = ({
    items,
    className,
}: {
    items: {
        title: string;
        subtitle: React.ReactNode;
        description: React.ReactNode;
    }[];
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className={cn("w-full bg-transparent font-sans md:px-10", className)}
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-20 md:gap-10"
                    >
                        {/* Timeline Line and Dot */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-retro-bg flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-retro-text border border-retro-primary/[0.5] p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold font-serif text-retro-secondary/80">
                                {typeof item.title === 'string' ? item.title.split(' (')[0] : item.title}
                            </h3>
                        </div>

                        {/* Content Card */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-serif text-retro-secondary/80">
                                {item.title}
                            </h3>

                            <div className="bg-gradient-to-br from-black/60 to-black/35 backdrop-blur-xl border border-retro-secondary/20 rounded-2xl p-6 md:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:border-retro-accent/40 hover:-translate-y-0.5 transition-all duration-500 relative overflow-hidden group">
                                {/* Dynamic corner frame accents */}
                                <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-retro-accent via-retro-primary/40 to-transparent transition-all duration-500 group-hover:w-20"></div>
                                <div className="absolute top-0 left-0 w-[2px] h-10 bg-gradient-to-b from-retro-accent via-retro-primary/40 to-transparent transition-all duration-500 group-hover:h-20"></div>
                                
                                <div className="absolute bottom-0 right-0 w-10 h-[2px] bg-gradient-to-l from-retro-primary via-retro-accent/40 to-transparent transition-all duration-500 group-hover:w-20"></div>
                                <div className="absolute bottom-0 right-0 w-[2px] h-10 bg-gradient-to-t from-retro-primary via-retro-accent/40 to-transparent transition-all duration-500 group-hover:h-20"></div>

                                {/* Subtle inner card light bleed glow */}
                                <div className="absolute -top-16 -left-16 w-32 h-32 bg-retro-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-retro-accent/10 transition-all duration-500"></div>

                                <div className="text-retro-primary font-mono mb-4 font-bold text-lg md:text-xl drop-shadow-md relative z-10">
                                    {item.subtitle}
                                </div>
                                <div className="text-retro-text/90 font-medium leading-relaxed text-sm md:text-base opacity-100 relative z-10">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* The Animated Glowing Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-retro-secondary/20 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-retro-primary via-retro-accent to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
