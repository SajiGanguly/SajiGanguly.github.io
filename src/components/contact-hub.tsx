"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, Copy, Check, MapPin, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const ContactHub = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("ganguly2904saji@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full text-left max-w-5xl mx-auto relative z-20">
      {/* 3-Column Uniform Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Card 1: Email Card (With Click-to-Copy widget) */}
        <div className="group flex flex-col justify-between p-6 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur-xl border border-retro-primary/20 hover:border-retro-primary rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-lg relative overflow-hidden">
          {/* Subtle neon glow and border frame accents */}
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-retro-primary to-transparent"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-retro-primary to-transparent"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-retro-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-retro-primary/10 transition-all duration-500"></div>

          <div>
            <div className="w-12 h-12 bg-retro-primary/10 border border-retro-primary/20 rounded-xl flex items-center justify-center mb-6 text-retro-primary group-hover:bg-retro-primary/20 transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-retro-text/45 mb-1">
              Email Me
            </h3>
            <p className="text-base lg:text-lg font-bold font-sans text-retro-text truncate">
              ganguly2904saji@gmail.com
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 w-full">
            <a
              href="mailto:ganguly2904saji@gmail.com"
              className="flex-1 text-center py-2.5 bg-retro-primary/10 hover:bg-retro-primary border border-retro-primary/30 hover:border-retro-primary text-retro-primary hover:text-white font-mono font-bold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
            >
              LAUNCH MAIL
            </a>
            
            <button
              onClick={handleCopyEmail}
              title="Copy to Clipboard"
              className={cn(
                "p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 shadow-sm",
                copied
                  ? "border-retro-secondary/40 bg-retro-secondary/15 text-retro-secondary shadow-[0_0_12px_rgba(var(--color-secondary),0.1)]"
                  : "border-retro-text/10 bg-black/30 text-retro-text/40 hover:text-retro-text hover:border-retro-text/30"
              )}
            >
              {copied ? <Check className="w-4 h-4 animate-[scale-up_0.2s_ease-out]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Card 2: Phone Card */}
        <a
          href="tel:+916290919566"
          className="group flex flex-col justify-between p-6 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur-xl border border-retro-accent/20 hover:border-retro-accent rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-lg relative overflow-hidden"
        >
          {/* Subtle neon glow and border frame accents */}
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-retro-accent to-transparent"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-retro-accent to-transparent"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-retro-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-retro-accent/10 transition-all duration-500"></div>

          <div>
            <div className="w-12 h-12 bg-retro-accent/10 border border-retro-accent/20 rounded-xl flex items-center justify-center mb-6 text-retro-accent group-hover:bg-retro-accent/20 transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-retro-text/45 mb-1">
              Call Me
            </h3>
            <p className="text-base lg:text-lg font-bold font-sans text-retro-text">
              +91 6290919566
            </p>
          </div>

          <div className="mt-8 text-center py-2.5 bg-retro-accent/10 group-hover:bg-retro-accent border border-retro-accent/30 group-hover:border-retro-accent text-retro-accent group-hover:text-white font-mono font-bold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-sm">
            PLACE CALL
          </div>
        </a>

        {/* Card 3: Location & Social Work Portfolio Card */}
        <div className="group flex flex-col justify-between p-6 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur-xl border border-retro-secondary/20 rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-lg relative overflow-hidden">
          {/* Subtle neon glow and border frame accents */}
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-retro-secondary to-transparent"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-retro-secondary to-transparent"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-retro-secondary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-retro-secondary/10 transition-all duration-500"></div>

          {/* Location details */}
          <div className="flex items-center gap-3 bg-black/25 border border-retro-secondary/10 rounded-xl p-3.5 mb-5 shadow-inner">
            <div className="p-2 bg-retro-secondary/10 border border-retro-secondary/20 rounded-lg text-retro-secondary">
              <MapPin className="w-4 h-4 animate-bounce" />
            </div>
            <div className="text-left">
              <p className="text-[8px] text-retro-text/40 font-mono uppercase tracking-widest">Based In</p>
              <p className="text-sm font-bold font-sans text-retro-text">Kolkata, India</p>
            </div>
          </div>

          {/* Social icons matrix */}
          <div className="w-full border-t border-retro-secondary/10 pt-4 mt-auto">
            <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-retro-text/40 mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-retro-accent" />
              Work Portfolio
            </h4>
            <div className="flex gap-2 items-center w-full">
              {/* GitHub */}
              <a
                href="https://github.com/SajiGanguly"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn p-2.5 bg-black/35 border border-retro-text/10 rounded-xl text-retro-text hover:text-white hover:bg-black hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow flex items-center justify-center flex-1"
              >
                <FaGithub className="w-4 h-4 group-hover/btn:scale-105" />
              </a>
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/29saji-ganguly-719613169"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn p-2.5 bg-black/35 border border-retro-text/10 rounded-xl text-retro-text/80 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-0.5 transition-all duration-300 shadow flex items-center justify-center flex-1"
              >
                <FaLinkedin className="w-4 h-4 group-hover/btn:scale-105" />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/saji2904/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn p-2.5 bg-black/35 border border-retro-text/10 rounded-xl text-retro-text/80 hover:text-[#FFA116] hover:bg-black hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow flex items-center justify-center flex-1"
              >
                <SiLeetcode className="w-4 h-4 group-hover/btn:scale-105" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
