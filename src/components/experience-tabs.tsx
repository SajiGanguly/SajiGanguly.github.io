"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const ExperienceTabs = ({
    items,
    className,
}: {
    items: {
        title: string;
        subtitle?: React.ReactNode;
        description: React.ReactNode;
    }[];
    className?: string;
}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={cn("flex flex-col md:flex-row gap-4 md:gap-8 py-10 w-full max-w-5xl mx-auto", className)}>
            {/* Sidebar Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 gap-2 md:w-1/4 relative border-b md:border-b-0 md:border-l-2 border-retro-secondary/30">
                {items.map((item, idx) => {
                    // Attempt to extract just the company name from the subtitle if it's a string, else fallback to title
                    const tabLabel = typeof item.subtitle === 'string' ? item.subtitle.split(' (')[0] : item.title;

                    return (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={cn(
                                "px-5 py-4 text-left w-full md:w-auto transition-all whitespace-nowrap md:whitespace-normal font-mono text-base relative md:-ml-[2px] rounded-r-lg md:rounded-r-none md:rounded-l-lg",
                                activeTab === idx
                                    ? "text-retro-primary font-bold bg-retro-primary/10 shadow-[inset_2px_0_0_0_#9FE2BF] md:shadow-[inset_4px_0_0_0_#9FE2BF]"
                                    : "text-retro-text/70 hover:text-retro-text hover:bg-white/5 font-medium"
                            )}
                        >
                            {activeTab === idx && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className="absolute bottom-0 left-0 md:top-0 md:bottom-auto w-full md:w-1 h-1 md:h-full bg-retro-primary shadow-[0_0_10px_var(--color-primary)] rounded-r-full"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 drop-shadow-sm">{tabLabel}</span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-[300px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-black/60 to-black/35 backdrop-blur-xl border border-retro-secondary/20 rounded-3xl p-8 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] hover:border-retro-primary/40 hover:-translate-y-0.5 transition-all duration-500 relative overflow-hidden group"
                    >
                        {/* Dynamic corner frame accents */}
                        <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-retro-primary via-retro-accent/50 to-transparent transition-all duration-500 group-hover:w-24"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-12 bg-gradient-to-b from-retro-primary via-retro-accent/50 to-transparent transition-all duration-500 group-hover:h-24"></div>
                        
                        <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-gradient-to-l from-retro-accent via-retro-primary/50 to-transparent transition-all duration-500 group-hover:w-24"></div>
                        <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-gradient-to-t from-retro-accent via-retro-primary/50 to-transparent transition-all duration-500 group-hover:h-24"></div>

                        {/* Subtle inner card light bleed glow */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-retro-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-retro-primary/10 transition-all duration-500"></div>

                        <h3 className="text-3xl md:text-4xl font-bold font-serif text-retro-text tracking-wide drop-shadow-md relative z-10">
                            {items[activeTab].title}
                        </h3>
                        <p className="text-retro-primary font-mono mt-3 mb-8 text-lg font-bold drop-shadow-sm flex items-center gap-2 relative z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-retro-primary animate-pulse inline-block"></span>
                            {items[activeTab].subtitle}
                        </p>
                        <div className="text-retro-text/90 font-medium leading-relaxed text-base md:text-lg opacity-100 relative z-10">
                            {items[activeTab].description}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
