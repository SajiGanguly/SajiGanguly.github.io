"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => {
                    // Helper to dynamically match skills category to a beautiful Lucide icon
                    const getIcon = (category: string) => {
                        const cat = category.toLowerCase();
                        if (cat.includes("data") || cat.includes("analytics")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-primary"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            );
                        }
                        if (cat.includes("program")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-primary"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                            );
                        }
                        if (cat.includes("ai") || cat.includes("agentic")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-accent animate-pulse"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"></path><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"></path></svg>
                            );
                        }
                        if (cat.includes("front") || cat.includes("back")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            );
                        }
                        if (cat.includes("cloud") || cat.includes("devops")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-accent"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47-.47-1.12-.95-1.9-1.31A6.5 6.5 0 0 0 12 9c-3.14 0-5.7 2.38-6 5.5C3.54 14.5 2 16.04 2 18a3 3 0 0 0 3 3h12.5"></path></svg>
                            );
                        }
                        if (cat.includes("database")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-primary"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
                            );
                        }
                        if (cat.includes("tools") || cat.includes("git")) {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-accent"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            );
                        }
                        return (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-retro-primary"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
                        );
                    };

                    return (
                        <li
                            className="w-[250px] md:w-[310px] max-w-full relative rounded-2xl border border-retro-secondary/15 px-6 py-5 bg-gradient-to-br from-black/60 to-black/35 backdrop-blur-xl shadow-lg flex-shrink-0 overflow-hidden group hover:border-retro-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                            key={item.name + idx}
                        >
                            {/* Accent top border hover shine */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-retro-primary/20 to-transparent transition-all duration-500 group-hover:via-retro-primary/60"></div>
                            
                            {/* Inner subtle glow */}
                            <div className="absolute -top-12 -left-12 w-24 h-24 bg-retro-primary/5 rounded-full blur-xl pointer-events-none group-hover:bg-retro-primary/8 transition-all duration-300"></div>

                            <blockquote>
                                <div className="relative z-20 flex flex-col h-full justify-between">
                                    {/* Category tag at top */}
                                    <span className="text-[9px] font-mono tracking-widest text-retro-accent/80 uppercase block mb-3 font-semibold">
                                        {item.title}
                                    </span>
                                    
                                    {/* Icon & Name Row */}
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 shrink-0 rounded-lg bg-black/40 border border-white/5 group-hover:border-retro-primary/25 transition-colors duration-300 flex items-center justify-center">
                                            {getIcon(item.title)}
                                        </div>
                                        <span className="text-base md:text-lg leading-snug text-retro-text font-bold tracking-wide">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
