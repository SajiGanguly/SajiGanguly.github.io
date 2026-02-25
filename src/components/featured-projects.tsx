"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function FeaturedProjects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="w-full flex flex-col items-center justify-center pt-4 pb-12 overflow-hidden px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-12 self-start md:self-center">
                Projects
            </h2>

            <div className="w-full max-w-5xl flex flex-col gap-0 border-t border-retro-text/10">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative w-full border-b border-retro-text/10 py-6 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500 hover:bg-retro-text/5 hover:px-4 md:hover:px-8 cursor-default"
                    >
                        {/* Hover Overlay Background (subtle glow) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-retro-primary/0 via-retro-primary/5 to-retro-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

                        {/* Left Side: Title & Description */}
                        <div className="flex-1 max-w-2xl relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                            <div className="flex items-center gap-4 mb-2">
                                <h3 className="text-3xl md:text-5xl font-black font-outfit text-retro-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-retro-primary group-hover:to-retro-accent transition-all duration-500">
                                    {project.title}
                                </h3>
                                <span className={`px-3 py-1 text-[10px] md:text-xs font-bold font-mono rounded-full uppercase tracking-wider border whitespace-nowrap hidden sm:inline-block ${project.type === 'Work Experience'
                                    ? 'bg-retro-accent/10 text-retro-accent border-retro-accent/30'
                                    : 'bg-retro-secondary/10 text-retro-secondary border-retro-secondary/30'
                                    }`}>
                                    {project.type}
                                </span>
                            </div>
                            {/* Mobile Badge Only */}
                            <span className={`inline-block sm:hidden mb-3 px-3 py-1 text-[10px] font-bold font-mono rounded-full uppercase tracking-wider border ${project.type === 'Work Experience'
                                ? 'bg-retro-accent/10 text-retro-accent border-retro-accent/30'
                                : 'bg-retro-secondary/10 text-retro-secondary border-retro-secondary/30'
                                }`}>
                                {project.type}
                            </span>
                            <p className="text-retro-text/60 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                {project.description}
                            </p>
                        </div>

                        {/* Right Side: Tech Stack & Links */}
                        <div className="flex flex-col items-start md:items-end gap-4 relative z-10 transition-transform duration-500 group-hover:-translate-x-2">
                            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-retro-text/10 border border-retro-text/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-retro-text uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="px-3 py-1 bg-retro-text/10 border border-retro-text/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-retro-text/50 uppercase tracking-wider">
                                        + {project.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-retro-text/50 hover:text-retro-text transition-colors p-2"
                                    title="View Source"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2 rounded-full border border-retro-text/20 text-retro-text text-sm font-bold shadow-sm hover:bg-retro-text hover:text-retro-bg transition-colors"
                                >
                                    View Live
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Floating Image Reveal (Hidden on Mobile, Shows on Hover) */}
                        <div className={`hidden lg:flex pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 w-[350px] h-[220px] rounded-2xl shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-20 ${project.imageFallback} flex items-center justify-center rotate-3 group-hover:rotate-0`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay rounded-2xl"></div>
                            <span className="text-4xl font-black text-white/50 uppercase tracking-widest text-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                {project.title.split(' ')[0]}
                            </span>
                        </div>

                    </div>
                ))}
            </div>

            {/* show more projects button */}
            <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 bg-transparent border-2 border-retro-primary text-retro-primary font-mono font-bold rounded-full hover:bg-retro-primary hover:text-retro-bg transition-colors text-sm tracking-widest uppercase">
                    Show More Projects
                </button>
            </div>
        </div>
    );
}
