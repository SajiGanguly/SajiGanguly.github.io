"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function FeaturedProjects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [expandedTech, setExpandedTech] = useState<Record<string, boolean>>({});

    const toggleTech = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setExpandedTech(prev => ({ ...prev, [id]: !prev[id] }));
    };

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
                            <span className={`inline-block mb-3 px-3 py-1 text-[10px] md:text-xs font-bold font-mono rounded-full uppercase tracking-wider border whitespace-nowrap ${project.type === 'Work Experience'
                                ? 'bg-retro-accent/10 text-retro-accent border-retro-accent/30'
                                : 'bg-retro-secondary/10 text-retro-secondary border-retro-secondary/30'
                                }`}>
                                {project.type}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black font-outfit text-retro-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-retro-primary group-hover:to-retro-accent transition-all duration-500 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-retro-text/60 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                {project.description}
                            </p>
                        </div>

                        {/* Right Side: Tech Stack & Links */}
                        <div className="flex flex-col items-start md:items-end gap-4 relative z-10 transition-transform duration-500 group-hover:-translate-x-2">
                            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                {project.techStack.slice(0, expandedTech[project.id] ? project.techStack.length : 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-retro-text/10 border border-retro-text/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-retro-text uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && !expandedTech[project.id] && (
                                    <button
                                        onClick={(e) => toggleTech(project.id, e)}
                                        className="px-3 py-1 bg-retro-text/10 border border-retro-text/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-retro-text/50 hover:text-retro-text hover:bg-retro-text/20 uppercase tracking-wider cursor-pointer transition-colors focus:outline-none"
                                    >
                                        + {project.techStack.length - 3}
                                    </button>
                                )}
                                {expandedTech[project.id] && project.techStack.length > 3 && (
                                    <button
                                        onClick={(e) => toggleTech(project.id, e)}
                                        className="px-3 py-1 bg-retro-text/10 border border-retro-text/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-retro-text/50 hover:text-retro-text hover:bg-retro-text/20 uppercase tracking-wider cursor-pointer transition-colors focus:outline-none"
                                    >
                                        - Less
                                    </button>
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
