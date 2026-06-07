"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ExternalLink, ChevronDown, ChevronUp, Filter, Sparkles, Database, Terminal, Shield } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Helper components for the live mockups that animate when row is hovered
function JiraMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full bg-[#0b0f19]/80 rounded-xl border border-retro-primary/20 p-3 flex flex-col justify-between overflow-hidden shadow-inner select-none font-mono">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[8px] text-slate-500 font-bold">
        <span className="flex items-center gap-1">
          <Terminal className="w-2.5 h-2.5 text-retro-primary" /> Velocity Chart
        </span>
        <span className="text-emerald-400">SPRINT_42</span>
      </div>
      
      {/* Bars Chart */}
      <div className="flex-1 flex items-end gap-3 px-2 pt-2 pb-1">
        {[40, 75, 55, 90, 65].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div 
              className="w-full bg-gradient-to-t from-retro-primary to-retro-accent rounded-t"
              initial={{ height: "20%" }}
              animate={{ height: isHovered ? `${height}%` : "30%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
            <span className="text-[7px] text-slate-600 font-bold">S{i+1}</span>
          </div>
        ))}
      </div>

      {/* Burn-down sparkline */}
      <div className="h-7 border-t border-slate-900 pt-1 flex items-center justify-between text-[7px]">
        <span className="text-slate-600 font-bold">BURNDOWN</span>
        <svg className="w-24 h-5 overflow-visible" viewBox="0 0 100 20">
          <motion.path
            d="M 0,2 L 25,8 L 50,7 L 75,18 L 100,12"
            fill="none"
            stroke="var(--color-accent, #0ea5e9)"
            strokeWidth="1.5"
            initial={{ pathLength: 0.2 }}
            animate={{ pathLength: isHovered ? 1 : 0.4 }}
            transition={{ duration: 1.2 }}
          />
        </svg>
      </div>
    </div>
  );
}

function ChurnMockup({ isHovered }: { isHovered: boolean }) {
  // SVG Plot of classification boundary
  return (
    <div className="w-full h-full bg-[#0b0f19]/80 rounded-xl border border-retro-secondary/20 p-3 flex flex-col justify-between overflow-hidden shadow-inner select-none font-mono">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[8px] text-slate-500 font-bold">
        <span className="flex items-center gap-1">
          <Database className="w-2.5 h-2.5 text-retro-secondary" /> XGBoost Classifier
        </span>
        <span className="text-amber-400">ACC: 89%</span>
      </div>

      <div className="flex-1 relative flex items-center justify-center my-1.5">
        <svg className="w-full h-full min-h-[50px] overflow-visible" viewBox="0 0 120 60">
          {/* Classification line */}
          <motion.line
            x1="10" y1="50" x2="110" y2="10"
            stroke="var(--color-primary, #0369a1)"
            strokeWidth="1.5"
            strokeDasharray="4"
            animate={{ 
              y1: isHovered ? 45 : 50,
              y2: isHovered ? 15 : 10
            }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
          />

          {/* Dots group (simulating data clusters) */}
          {/* Retained dots */}
          <circle cx="20" cy="40" r="2.5" fill="#22c55e" className="opacity-80" />
          <circle cx="40" cy="45" r="2.5" fill="#22c55e" className="opacity-80" />
          <circle cx="35" cy="30" r="2.5" fill="#22c55e" className="opacity-80" />
          {/* Churned dots */}
          <circle cx="85" cy="15" r="2.5" fill="#ef4444" className="opacity-80" />
          <circle cx="95" cy="25" r="2.5" fill="#ef4444" className="opacity-80" />
          <circle cx="75" cy="20" r="2.5" fill="#ef4444" className="opacity-80" />

          {/* Glowing user marker that moves to classification line on hover */}
          <motion.circle
            cx={isHovered ? 60 : 30}
            cy={isHovered ? 30 : 20}
            r="4"
            fill="var(--color-accent, #0ea5e9)"
            className="shadow-[0_0_8px_var(--color-accent)]"
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>

      <div className="text-[7px] text-slate-500 font-bold border-t border-slate-900 pt-1 flex justify-between">
        <span>F1_SCORE // 0.86</span>
        <span>ATTRITION: HIGH</span>
      </div>
    </div>
  );
}

function PizzaMockup({ isHovered }: { isHovered: boolean }) {
  // Visual layout showing node grid mappings
  return (
    <div className="w-full h-full bg-[#0b0f19]/80 rounded-xl border border-emerald-500/20 p-3 flex flex-col justify-between overflow-hidden shadow-inner select-none font-mono">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[8px] text-slate-500 font-bold">
        <span>SEATING NODE MAP</span>
        <span className="text-emerald-400">SYNCED</span>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-2.5 items-center justify-center p-1.5">
        {[...Array(8)].map((_, i) => {
          const isReserved = i === 1 || i === 4 || i === 7;
          return (
            <motion.div
              key={i}
              className={`h-4 rounded border flex items-center justify-center text-[7px] font-bold ${
                isReserved 
                  ? "bg-rose-500/10 border-rose-500/30 text-rose-500" 
                  : "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
              }`}
              animate={{
                scale: isHovered && !isReserved ? [1, 1.1, 1] : 1,
                opacity: isHovered && isReserved ? [0.6, 1, 0.6] : 0.8
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              T{i+1}
            </motion.div>
          );
        })}
      </div>

      <div className="text-[7px] text-slate-500 font-bold border-t border-slate-900 pt-1 flex justify-between">
        <span>CAPACITY // 5/8 BLOCKED</span>
        <span>1.2s LOAD TIME</span>
      </div>
    </div>
  );
}

function ClearedMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full bg-[#0b0f19]/80 rounded-xl border border-indigo-500/20 p-3 flex flex-col justify-between overflow-hidden shadow-inner select-none font-mono">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[8px] text-slate-500 font-bold">
        <span>SECURITY_PROTOCOL</span>
        <span className="text-indigo-400">AES_256</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative my-1">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute w-12 h-12 rounded-full border-2 border-dashed border-indigo-500/30 flex items-center justify-center"
        />
        <div className="relative z-10 p-2 bg-indigo-500/10 rounded-full border border-indigo-500/30 text-indigo-400">
          <Shield className="w-6 h-6" />
        </div>
      </div>

      <div className="text-[7px] text-slate-500 font-bold border-t border-slate-900 pt-1 flex justify-between">
        <span>JWT AUTH // SECURE</span>
        <span>MERN STACK GATEWAY</span>
      </div>
    </div>
  );
}

function PortfolioMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-full bg-[#0b0f19]/80 rounded-xl border border-retro-accent/20 p-3 flex flex-col justify-between overflow-hidden shadow-inner select-none font-mono">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[8px] text-slate-500 font-bold">
        <span>THEME ENGINE</span>
        <span className="text-retro-accent">MINT_DARK_DEF</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-1.5 p-1">
        {/* Mock Wireframe Grid */}
        <div className="h-2 w-3/4 bg-retro-primary/20 rounded animate-pulse" />
        <div className="h-5 bg-[#040712] rounded border border-slate-800/80 flex items-center justify-between px-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-retro-primary" />
            <span className="w-1.5 h-1.5 rounded-full bg-retro-secondary" />
            <span className="w-1.5 h-1.5 rounded-full bg-retro-accent" />
          </div>
          {/* Animated cursor pointer */}
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white]"
            animate={{
              x: isHovered ? [0, 15, -10, 0] : 0,
              y: isHovered ? [0, -4, 4, 0] : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        <div className="h-2 w-1/2 bg-retro-secondary/20 rounded" />
      </div>

      <div className="text-[7px] text-slate-500 font-bold border-t border-slate-900 pt-1 flex justify-between">
        <span>NEXTJS_16 // FAST</span>
        <span>FRAMER_MOTION</span>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Filtering States
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Personal" | "Work Experience">("All");
  const [techFilter, setTechFilter] = useState<string>("All");
  
  // Pagination State
  const [visibleCount, setVisibleCount] = useState(3);

  // Extract all unique technologies from data to populate dynamic tech filter
  const allTechs = ["All", ...Array.from(new Set(projectsData.flatMap(p => p.techStack)))];

  // Filter projects based on selections
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = categoryFilter === "All" || project.type === categoryFilter;
    const matchesTech = techFilter === "All" || project.techStack.includes(techFilter);
    return matchesCategory && matchesTech;
  });

  const hasActiveFilters = categoryFilter !== "All" || techFilter !== "All";

  // Toggle Project Expand/Collapse details
  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedId(prev => (prev === id ? null : id));
  };

  // Toggle Show More pagination
  const handleShowMoreToggle = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(3);
      // Smooth scroll back to section header
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(filteredProjects.length);
    }
  };

  return (
    <div id="projects-container" className="w-full flex flex-col items-center justify-center pt-4 pb-12 overflow-hidden px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-8 self-start md:self-center">
        Projects
      </h2>

      {/* FILTER CONTROL DECK */}
      <div className="w-full max-w-5xl bg-black/15 border border-retro-secondary/10 rounded-2xl p-4 md:p-6 mb-10 flex flex-col gap-4">
        
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-retro-text/50 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          <div className="flex flex-wrap gap-2">
            {(["All", "Personal", "Work Experience"] as const).map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoryFilter(cat);
                    setVisibleCount(3); // Reset pagination
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all cursor-pointer border ${
                    isActive
                      ? "bg-retro-primary/15 border-retro-primary text-retro-text shadow-sm"
                      : "bg-black/20 border-retro-secondary/10 text-retro-text/60 hover:border-retro-secondary/30 hover:text-retro-text"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-retro-secondary/5 pt-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-retro-text/50 flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-3.5 h-3.5" /> Skill Filter:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["All", "Python", "React", "Power BI", "SQL", "MongoDB", "Node.js", "TypeScript"].map((tech) => {
              const isActive = techFilter === tech;
              return (
                <button
                  key={tech}
                  onClick={() => {
                    setTechFilter(tech);
                    setVisibleCount(3); // Reset pagination
                  }}
                  className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wide transition-all cursor-pointer border ${
                    isActive
                      ? "bg-retro-accent/15 border-retro-accent text-retro-accent"
                      : "bg-black/25 border-retro-secondary/5 text-retro-text/55 hover:border-retro-secondary/20 hover:text-retro-text"
                  }`}
                >
                  {tech.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* PROJECTS LIST STACK */}
      <div className="w-full max-w-5xl flex flex-col gap-0 border-t border-retro-text/10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 border-b border-retro-text/10 font-mono text-retro-text/50"
            >
              No projects found matching the selected filters.
            </motion.div>
          ) : (
            filteredProjects.slice(0, visibleCount).map((project) => {
              const isHovered = hoveredProject === project.id;
              const isExpanded = expandedId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout="position"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative w-full border-b border-retro-text/10 py-6 md:py-8 flex flex-col transition-all duration-300 hover:bg-retro-text/5 hover:px-4 md:hover:px-6 cursor-default"
                >
                  {/* Subtle background glow hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-retro-primary/0 via-retro-primary/3 to-retro-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

                  {/* Main content grid */}
                  <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    
                    {/* Left details pane */}
                    <div className="flex-1 max-w-xl transition-transform duration-500 group-hover:translate-x-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 text-[9px] font-bold font-mono rounded-full uppercase tracking-wider border whitespace-nowrap ${
                          project.type === 'Work Experience'
                            ? 'bg-retro-accent/10 text-retro-accent border-retro-accent/20'
                            : 'bg-retro-secondary/10 text-retro-secondary border-retro-secondary/20'
                        }`}>
                          {project.type}
                        </span>

                        {/* Glow performance metrics badges */}
                        {project.metrics.map((metric, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 bg-black/25 text-retro-text/75 hover:text-retro-text font-mono text-[9px] font-semibold rounded border border-retro-secondary/5 tracking-wide transition-all shadow-inner"
                          >
                            ⚡ {metric}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3.5xl font-black font-outfit text-retro-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-retro-primary group-hover:to-retro-accent transition-all duration-500 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-retro-text/65 text-sm md:text-[15px] leading-relaxed group-hover:text-retro-text/80 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* View Details trigger */}
                      <button
                        onClick={(e) => toggleExpand(project.id, e)}
                        className="mt-4 flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-retro-primary hover:text-retro-accent transition-colors focus:outline-none cursor-pointer"
                      >
                        {isExpanded ? (
                          <>Hide Key Contributions <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>View Key Contributions <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>

                    {/* Middle Column: Visual Mockup preview (Desktop only) */}
                    <div className="hidden lg:block w-44 h-28 shrink-0 relative z-20">
                      {project.mockupType === "jira" && <JiraMockup isHovered={isHovered} />}
                      {project.mockupType === "churn" && <ChurnMockup isHovered={isHovered} />}
                      {project.mockupType === "pizza" && <PizzaMockup isHovered={isHovered} />}
                      {project.mockupType === "cleared" && <ClearedMockup isHovered={isHovered} />}
                      {project.mockupType === "portfolio" && <PortfolioMockup isHovered={isHovered} />}
                    </div>

                    {/* Right Side: Links & Tech Badges */}
                    <div className="flex flex-col items-start md:items-end gap-3.5 shrink-0 transition-transform duration-500 group-hover:-translate-x-1 w-full md:w-auto">
                      <div className="flex flex-wrap gap-1.5 justify-start md:justify-end max-w-xs">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-retro-text/5 border border-retro-text/10 rounded text-[9px] font-mono font-bold text-retro-text/80 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 w-full md:w-auto justify-end mt-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-retro-text/45 hover:text-retro-text transition-colors p-2 hover:bg-black/10 rounded-full"
                            title="View Source"
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-5 py-1.5 rounded-full border border-retro-text/15 text-retro-text text-xs font-bold hover:bg-retro-text hover:text-retro-bg transition-colors shadow-sm whitespace-nowrap"
                          >
                            View Live
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* KEY CONTRIBUTIONS DRAWER (Accordion) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10 w-full"
                      >
                        <div className="pt-5 mt-4 border-t border-retro-secondary/10 flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-retro-accent mb-3">
                              🛠️ Engineering Accomplishments & Focus
                            </h4>
                            <ul className="space-y-2">
                              {project.keyContributions.map((bullet, idx) => (
                                <li key={idx} className="text-xs text-retro-text/80 leading-relaxed flex items-start gap-2">
                                  <span className="text-retro-primary mt-1 shrink-0 font-bold">✓</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Extra layout block inside drawer matching data specs */}
                          <div className="w-full md:w-56 bg-black/20 border border-retro-secondary/5 rounded-xl p-3 flex flex-col justify-between shrink-0 gap-2">
                            <div className="flex flex-col gap-1">
                              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                                STACK PROFILE
                              </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {project.techStack.map(t => (
                                  <span key={t} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-retro-primary">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-[8px] font-mono text-retro-text/40 pt-1.5 border-t border-retro-secondary/5">
                              ID: {project.id.toUpperCase()}<br/>
                              STATUS: PRODUCTION // STABLE
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* FUNCTIONAL PAGINATION OR SHOW MORE CONTROLLER */}
      {filteredProjects.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleShowMoreToggle}
            className="px-8 py-3 bg-transparent border-2 border-retro-primary text-retro-primary font-mono font-bold rounded-full hover:bg-retro-primary hover:text-retro-bg transition-colors text-xs tracking-widest uppercase cursor-pointer"
          >
            {visibleCount >= filteredProjects.length ? "Show Less Projects" : "Show More Projects"}
          </button>
        </div>
      )}
    </div>
  );
}
