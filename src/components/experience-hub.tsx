"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, MapPin, Award, Building2, CheckCircle2 } from "lucide-react";
import { resolveExperienceItem, ExperienceItemInput, ResolvedExperienceItem } from "@/lib/experience";

export type ExperienceItem = ExperienceItemInput;

export const ExperienceHub = ({
  items,
  className,
}: {
  items: ExperienceItem[];
  className?: string;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Dynamically resolve tenure and progress for all items
  const resolvedItems: ResolvedExperienceItem[] = useMemo(() => {
    return items.map((item) => resolveExperienceItem(item));
  }, [items]);

  // SVG Circular Constants
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={cn("w-full font-sans", className)}>
      <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* LEFT: Tab Navigation Controls */}
          {/* Desktop Version: Vertical Sidebar Stack */}
          <div className="hidden md:flex md:col-span-4 flex-col gap-3 relative z-10">
            {resolvedItems.map((item, idx) => {
              const isActive = activeTab === idx;
              const strokeDashoffset = circumference - (item.progress / 100) * circumference;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "group relative w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden",
                    isActive
                      ? "border-retro-primary/40 bg-black/10 shadow-lg shadow-retro-primary/5"
                      : "border-retro-secondary/10 bg-black/20 hover:border-retro-secondary/40 hover:bg-black/10"
                  )}
                >
                  {/* Liquid background highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeExpTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-retro-primary/10 to-retro-accent/5 pointer-events-none rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col gap-1 pr-2">
                    <span className={cn(
                      "text-xs font-mono font-bold tracking-widest uppercase",
                      isActive ? "text-retro-accent" : "text-retro-text/40 group-hover:text-retro-text/60"
                    )}>
                      {item.duration.split(" (")[0]}
                    </span>
                    <h3 className={cn(
                      "font-bold text-lg font-serif transition-colors duration-300",
                      isActive ? "text-retro-text" : "text-retro-text/75 group-hover:text-retro-text"
                    )}>
                      {item.company}
                    </h3>
                    <p className="text-xs text-retro-text/50 truncate max-w-[200px]">
                      {item.role}
                    </p>
                  </div>

                  {/* Right hand indicator: Small Circular Progress representing months */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <svg className="w-10 h-10 transform -rotate-90">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-retro-text/5"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-retro-primary"
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 16}
                        initial={{ strokeDashoffset: 2 * Math.PI * 16 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 16 - (item.progress / 100) * (2 * Math.PI * 16) }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute text-[8px] font-mono font-bold text-retro-text/80 text-center leading-tight">
                      {item.formattedTenure.short}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Version: Horizontal Tab Slider */}
          <div className="flex md:hidden w-full overflow-x-auto gap-2 pb-3 scrollbar-none snap-x snap-mandatory relative z-10">
            {resolvedItems.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "snap-center shrink-0 px-5 py-3 rounded-full border text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer relative",
                    isActive
                      ? "border-retro-primary/40 bg-retro-primary/10 text-retro-text"
                      : "border-retro-secondary/15 bg-black/25 text-retro-text/60"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveExpTab"
                      className="absolute inset-0 bg-retro-primary/20 rounded-full pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-serif">{item.company}</span>
                  <span className="relative z-10 text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-black/30 text-retro-accent">
                    {item.formattedTenure.medium}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Detailed Content Panel with slide animations */}
          <div className="col-span-1 md:col-span-8 w-full min-h-[380px]">
            <AnimatePresence mode="wait">
              {resolvedItems.map((item, idx) => {
                if (idx !== activeTab) return null;
                const strokeDashoffset = circumference - (item.progress / 100) * circumference;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative w-full bg-gradient-to-br from-black/60 to-black/35 backdrop-blur-xl border border-retro-secondary/20 rounded-2xl p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden group"
                  >
                    {/* Frame Corner Accents */}
                    <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-retro-accent via-retro-primary/40 to-transparent transition-all duration-500 group-hover:w-24"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-12 bg-gradient-to-b from-retro-accent via-retro-primary/40 to-transparent transition-all duration-500 group-hover:h-24"></div>

                    <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-gradient-to-l from-retro-primary via-retro-accent/40 to-transparent transition-all duration-500 group-hover:w-24"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-gradient-to-t from-retro-primary via-retro-accent/40 to-transparent transition-all duration-500 group-hover:h-24"></div>

                    {/* Background Neon Glow */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-retro-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-retro-accent/8 transition-all duration-500"></div>

                    {/* Top Row: Meta Icons, Title, Status & Tenure Dial */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 relative z-10 pb-6 border-b border-retro-secondary/10">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-retro-primary/10 border border-retro-primary/20 rounded-xl text-retro-primary shrink-0 mt-1">
                          <Briefcase className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono font-bold tracking-widest text-retro-accent bg-retro-accent/10 px-2 py-0.5 rounded border border-retro-accent/25 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {item.duration}
                            </span>
                            <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border border-retro-secondary/35 text-retro-secondary bg-retro-secondary/10 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-retro-text tracking-tight mt-1">
                            {item.role}
                          </h2>
                          <p className="text-lg text-retro-text/80 font-bold font-sans flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-retro-primary" />
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Tenure Dial Meter */}
                      <div className="flex items-center gap-3 bg-black/20 border border-retro-secondary/15 rounded-2xl p-3 pr-4 self-start sm:self-center shrink-0 shadow-inner">
                        <div className="relative flex items-center justify-center">
                          <svg className="w-16 h-16 transform -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              className="stroke-retro-text/5"
                              strokeWidth="4.5"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              className="stroke-retro-primary"
                              strokeWidth="4.5"
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ strokeDashoffset }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                          <span className="absolute text-[10px] font-mono font-extrabold text-retro-text drop-shadow text-center leading-none">
                            {item.tenureMonths}<br /><span className="text-[7px] text-retro-text/60">mos</span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-retro-text/45 uppercase tracking-wider">Tenure</span>
                          <span className="text-sm font-black text-retro-accent">{item.formattedTenure.medium}</span>
                          <span className="text-[10px] font-mono text-retro-text/60 tracking-wider">{item.status.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mt-6 relative z-10 text-sm md:text-base leading-relaxed text-retro-text/90 pr-2">
                      <div className="[&>ul]:list-disc [&>ul]:list-outside [&>ul]:pl-5 [&>ul]:space-y-3 [&>ul>li]:pl-1">
                        {item.description}
                      </div>
                    </div>

                    {/* Skill Matrix */}
                    <div className="mt-8 pt-6 border-t border-retro-secondary/10 relative z-10">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-retro-text/55 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-retro-accent" />
                        Skills Matrix & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-black/30 hover:bg-retro-primary/10 border border-retro-secondary/15 hover:border-retro-primary/45 rounded-lg text-xs font-bold text-retro-text/80 hover:text-retro-text transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(var(--color-primary),0.08)] hover:-translate-y-0.5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};
