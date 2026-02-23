"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons";
import { HomeIcon, Briefcase, GraduationCap, Code, Heart, Contact, Sun, Moon, Leaf, BookOpen, ArrowLeft, ArrowRight, CalendarDays, Clock, Share2, BookmarkPlus } from "lucide-react";
import { FaUser, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTheme } from "@/contexts/theme-context";

// Dummy content database
const articles = {
    "transition-to-data-science": {
        title: "The Transition: From Full-Stack to Data Science",
        category: "Career",
        date: "Oct 24, 2025",
        readTime: "5 min read",
        image: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
        content: `
      ## The Motivation Behind the Shift

      Starting my career as a Junior Software Engineer at Entiovi Technologies, I was deeply entrenched in the MERN stack. I loved building robust backends with Node.js and designing responsive frontends using React. However, as I integrated more reporting features and payment metrics into our platforms, I found myself increasingly fascinated not by *how* the data was stored, but *what* it was trying to tell us.

      This realization sparked my transition. The ability to extract meaningful narratives from raw datasets felt like a superpower.

      ## Upskilling: The Learning Curve

      The shift wasn't strictly linear. While my background in software engineering provided a solid foundation in programming logic, I had to adopt a new mindset:
      
      1. **Python over JavaScript:** Swapping \`console.log()\` for \`print()\`, but more importantly, mastering pandas for manipulation instead of just pulling JSON objects.
      2. **Thinking in Sets (SQL):** Moving from NoSQL documents (MongoDB) to writing complex window functions and CTEs in SQL.
      3. **The Art of Visualization:** Learning that a Power BI dashboard isn't just about throwing charts on a screen—it's about guiding stakeholder attention to actionable insights.

      ## Looking Ahead

      Currently pursuing the DSML program at Scaler Academy, I am diving deeper into machine learning models. The goal remains the same: solving real-world problems. Only now, instead of building the app, I'm building the intelligence that powers the decisions.
    `
    }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { theme, setTheme } = useTheme();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const article = articles[params.slug as keyof typeof articles];

    // If slug doesn't match our dummy data, show 404
    if (!article) {
        return notFound();
    }

    const navItems = [
        { title: "Home", icon: <HomeIcon className="h-full w-full text-retro-text" />, href: "/#hero" },
        { title: "About", icon: <FaUser className="h-full w-full text-retro-text" />, href: "/#about" },
        { title: "Experiences", icon: <Briefcase className="h-full w-full text-retro-text" />, href: "/#experiences" },
        { title: "Education", icon: <GraduationCap className="h-full w-full text-retro-text" />, href: "/#education" },
        { title: "Skills", icon: <Code className="h-full w-full text-retro-text" />, href: "/#skills" },
        { title: "Hobbies", icon: <Heart className="h-full w-full text-retro-text" />, href: "/#hobbies" },
        { title: "Contact", icon: <Contact className="h-full w-full text-retro-text" />, href: "/#contact" },
        { title: "Blog", icon: <BookOpen className="h-full w-full text-retro-text" />, href: "/blog" },
    ];

    return (
        <main className="min-h-screen relative w-full overflow-hidden bg-retro-bg text-retro-text transition-colors duration-500 font-sans pb-32">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-retro-primary via-purple-500 to-retro-accent origin-left z-50"
                style={{ scaleX }}
            />

            {/* Global Background Particles */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <SparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={100} className="w-full h-full opacity-20" particleColor="#9FE2BF" />
                <div className="absolute inset-0 w-full h-full bg-retro-bg [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>
            </div>

            <div className="relative z-0">
                <FloatingTechIcons />
            </div>

            {/* Navbar Fixed Top */}
            <div className="fixed top-4 inset-x-0 w-full flex justify-center z-50 pointer-events-none md:scale-100 scale-90">
                <div className="pointer-events-auto shadow-xl rounded-2xl">
                    <FloatingDock items={navItems} />
                </div>
                <div className="absolute right-4 top-2 md:top-0 pointer-events-auto flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "default" ? "dark" : theme === "dark" ? "mint" : "default")}
                        className="bg-retro-bg border-2 border-retro-secondary text-retro-secondary font-bold p-3 md:p-[14px] rounded-2xl outline-none shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex items-center justify-center"
                    >
                        {theme === "default" && <Sun className="w-5 h-5" />}
                        {theme === "dark" && <Moon className="w-5 h-5" />}
                        {theme === "mint" && <Leaf className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <article className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 lg:pt-40">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-retro-text/60 hover:text-retro-primary transition-colors font-mono text-sm mb-12">
                    <ArrowLeft className="w-4 h-4" /> cd .. /articles/
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-retro-accent/10 border border-retro-accent/30 text-retro-accent rounded-full text-xs font-bold font-mono shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.2)]">
                            {article.category}
                        </span>
                        <div className="flex gap-4 text-xs font-mono text-retro-text/60">
                            <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {article.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-outfit text-retro-text leading-tight mb-8">
                        {article.title}
                    </h1>

                    {/* Abstract Hero Image */}
                    <div
                        className="w-full h-48 md:h-72 rounded-3xl shadow-2xl relative overflow-hidden mb-8 border border-retro-text/10"
                        style={{ background: article.image }}
                    >
                        <div className="absolute inset-0 bg-retro-bg/10 backdrop-blur-[2px] flex items-center justify-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/20 border-dashed animate-[spin_30s_linear_infinite]" />
                            <div className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/40 border-dotted animate-[spin_20s_reverse_linear_infinite]" />
                            <BookOpen className="absolute w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-2xl opacity-80" />
                        </div>
                    </div>

                    {/* Author/Share Bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-y border-retro-secondary/30 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-retro-primary to-retro-accent flex items-center justify-center text-white font-bold shadow-md">
                                SG
                            </div>
                            <div>
                                <p className="text-sm font-bold text-retro-text">Saji Ganguly</p>
                                <p className="text-xs text-retro-text/60">Data Analyst & Developer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2 text-retro-text/60 hover:text-retro-primary hover:bg-retro-primary/10 rounded-full transition-colors"><Share2 className="w-4 h-4" /></button>
                            <button className="p-2 text-retro-text/60 hover:text-retro-accent hover:bg-retro-accent/10 rounded-full transition-colors"><BookmarkPlus className="w-4 h-4" /></button>
                            <div className="w-px h-6 bg-retro-secondary/30 mx-2"></div>
                            <button className="p-2 text-retro-text/60 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 rounded-full transition-colors"><FaTwitter className="w-4 h-4" /></button>
                            <button className="p-2 text-retro-text/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-colors"><FaLinkedin className="w-4 h-4" /></button>
                        </div>
                    </div>
                </header>

                {/* Article Body Elements */}
                <div className="prose prose-lg prose-invert max-w-none pb-24 font-serif text-retro-text/90 leading-relaxed marker:text-retro-primary prose-headings:font-outfit prose-headings:font-bold prose-headings:text-retro-text prose-a:text-retro-primary hover:prose-a:text-retro-accent prose-strong:text-retro-text prose-strong:font-bold prose-code:text-retro-accent prose-code:bg-retro-accent/10 prose-code:px-1 prose-code:rounded">
                    {/* Note: In a real app with markdown, you'd use a parser like react-markdown. Hardcoding some styled HTML here as a demonstration for this specific dummy post. */}
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-l-4 border-retro-primary pl-4">The Motivation Behind the Shift</h2>
                    <p className="mb-6">
                        Starting my career as a Junior Software Engineer at Entiovi Technologies, I was deeply entrenched in the MERN stack. I loved building robust backends with Node.js and designing responsive frontends using React. However, as I integrated more reporting features and payment metrics into our platforms, I found myself increasingly fascinated not by <em>how</em> the data was stored, but <em>what</em> it was trying to tell us.
                    </p>
                    <p className="mb-8">
                        This realization sparked my transition. The ability to extract meaningful narratives from raw datasets felt like a superpower.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 border-l-4 border-retro-accent pl-4">Upskilling: The Learning Curve</h2>
                    <p className="mb-6">
                        The shift wasn't strictly linear. While my background in software engineering provided a solid foundation in programming logic, I had to adopt a new mindset:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li><strong>Python over JavaScript:</strong> Swapping <code className="text-retro-accent bg-retro-accent/10 px-1.5 py-0.5 rounded font-mono text-sm">console.log()</code> for <code className="text-retro-accent bg-retro-accent/10 px-1.5 py-0.5 rounded font-mono text-sm">print()</code>, but more importantly, mastering <em>pandas</em> for manipulation instead of just pulling JSON objects.</li>
                        <li><strong>Thinking in Sets (SQL):</strong> Moving from NoSQL documents (MongoDB) to writing complex window functions and CTEs in SQL.</li>
                        <li><strong>The Art of Visualization:</strong> Learning that a Power BI dashboard isn't just about throwing charts on a screen—it's about <span className="text-retro-primary font-bold">guiding stakeholder attention</span> to actionable insights.</li>
                    </ul>

                    <blockquote className="border-l-4 border-retro-secondary bg-retro-secondary/5 py-4 px-6 italic rounded-r-lg my-10 font-sans text-xl shadow-inner">
                        "We are surrounded by data, but starved for insights."
                    </blockquote>

                    <h2 className="text-2xl font-bold mt-12 mb-6 border-l-4 border-purple-500 pl-4">Looking Ahead</h2>
                    <p className="mb-6">
                        Currently pursuing the DSML program at Scaler Academy, I am diving deeper into machine learning models. The goal remains the same: solving real-world problems. Only now, instead of building the app, I'm building the intelligence that powers the decisions.
                    </p>
                </div>

                {/* Read More Section */}
                <div className="border-t-2 border-dashed border-retro-secondary/30 pt-12 pb-24">
                    <h3 className="text-2xl font-bold font-outfit mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-retro-primary/20 flex items-center justify-center text-retro-primary">&gt;</span>
                        Continue Reading
                    </h3>
                    <Link href="/blog" className="block p-6 rounded-2xl border border-retro-secondary/20 hover:border-retro-primary/50 bg-retro-bg/50 backdrop-blur-sm transition-all group hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.1)] hover:-translate-y-1">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-retro-accent">Database</span>
                            <span className="text-xs font-mono text-retro-text/50">Nov 02, 2025</span>
                        </div>
                        <h4 className="text-xl font-bold text-retro-text group-hover:text-retro-primary transition-colors">Optimizing SQL Queries for Large Datasets</h4>
                        <div className="mt-4 flex items-center text-sm text-retro-text/60 font-bold group-hover:text-retro-text transition-colors">
                            Read Next <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </article>
        </main>
    );
}
