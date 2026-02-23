"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HomeIcon, Briefcase, GraduationCap, Code, Heart, Contact, Sun, Moon, Leaf, BookOpen, Clock, CalendarDays, ArrowRight, Plus, X } from "lucide-react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";

export default function Blog() {
    const { theme, setTheme } = useTheme();

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

    // State for blog posts (starts empty as requested)
    const [blogPosts, setBlogPosts] = useState<any[]>([]);

    // State for the modal form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostCategory, setNewPostCategory] = useState("Technology");
    const [newPostExcerpt, setNewPostExcerpt] = useState("");

    // Simple auto-gradient generator based on string length to give each post a unique look
    const generateGradient = (text: string) => {
        const colors = [
            "linear-gradient(135deg, #10b981 0%, #047857 100%)", // Emerald
            "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", // Indigo
            "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)", // Amber
            "linear-gradient(135deg, #ec4899 0%, #be185d 100%)", // Pink
            "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", // Violet
        ];
        return colors[text.length % colors.length];
    };

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();

        // Auto-generate details for the new post
        const newPost = {
            id: Date.now(),
            title: newPostTitle,
            category: newPostCategory,
            excerpt: newPostExcerpt,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: `${Math.max(1, Math.floor(newPostExcerpt.length / 100))} min read`,
            image: generateGradient(newPostTitle),
            // We just use a slug representation for the link since we aren't creating real DB routes here
            slug: newPostTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        };

        setBlogPosts(prev => [newPost, ...prev]);

        // Reset and close
        setNewPostTitle("");
        setNewPostCategory("Technology");
        setNewPostExcerpt("");
        setIsModalOpen(false);
    };

    return (
        <main className="min-h-screen relative w-full overflow-hidden bg-retro-bg text-retro-text transition-colors duration-500 font-sans pb-32">
            {/* Global Background Particles */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.2}
                    particleDensity={150}
                    className="w-full h-full opacity-30"
                    particleColor="#9FE2BF"
                />
                <div className="absolute inset-0 w-full h-full bg-retro-bg [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>
            </div>

            <div className="relative z-0">
                <FloatingTechIcons />
            </div>

            {/* Floating Dock & Theme Selector - Fixed Top */}
            <div className="fixed top-4 inset-x-0 w-full flex justify-center z-50 pointer-events-none md:scale-100 scale-90">
                <div className="pointer-events-auto shadow-xl rounded-2xl">
                    <FloatingDock items={navItems} />
                </div>
                <div className="absolute right-4 top-2 md:top-0 pointer-events-auto flex items-center gap-3">
                    <button
                        onClick={() => {
                            if (theme === "default") setTheme("dark");
                            else if (theme === "dark") setTheme("mint");
                            else setTheme("default");
                        }}
                        className="bg-retro-bg border-2 border-retro-secondary text-retro-secondary font-bold p-3 md:p-[14px] rounded-2xl outline-none shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group flex items-center justify-center"
                    >
                        {theme === "default" && <Sun className="w-5 h-5" />}
                        {theme === "dark" && <Moon className="w-5 h-5" />}
                        {theme === "mint" && <Leaf className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Blog Header */}
            <section className="relative z-10 w-full pt-40 pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-retro-accent font-mono font-bold tracking-wider text-sm sm:text-base bg-retro-accent/10 px-4 py-1.5 rounded-full border border-retro-accent/20 shadow-sm mb-6">
                        <span className="text-retro-text opacity-50">01.</span>
                        <span>./read_thoughts.sh</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-purple-400 to-retro-accent tracking-tighter mb-6">
                        MY ARTICLES
                    </h1>
                    <p className="text-lg md:text-xl text-retro-text/80 font-light leading-relaxed max-w-2xl mx-auto">
                        Insights, tutorials, and deep dives into Data Analytics, Python, SQL, and my journey shifting perspectives across the tech stack.
                    </p>
                </motion.div>

                {/* Action Buttons & Categories */}
                <div className="flex flex-col items-center gap-6 mt-10">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-2 bg-retro-primary text-retro-bg font-bold px-6 py-3 rounded-full hover:bg-retro-accent hover:-translate-y-1 transition-all shadow-lg shadow-retro-primary/20"
                    >
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        Write a New Blog
                    </button>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {['All Posts', 'Data Analytics', 'Python', 'Database', 'Career'].map((cat, i) => (
                            <button key={cat} className={`px-5 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${i === 0 ? 'bg-retro-primary text-retro-bg border-retro-primary' : 'bg-retro-bg/50 border-retro-text/20 text-retro-text hover:border-retro-primary hover:text-retro-primary backdrop-blur-sm'}`}>
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid with Tracing Beam */}
            <section className="relative z-10 w-full max-w-6xl mx-auto px-6">
                <TracingBeam className="px-2 md:px-6 py-10">
                    {blogPosts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <BookOpen className="w-16 h-16 text-retro-secondary/40 mb-4" />
                            <h3 className="text-2xl font-bold text-retro-text/60">No articles yet</h3>
                            <p className="text-retro-text/40 mt-2">Click "Write a New Blog" to create your first post.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-20">
                            {blogPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <CardContainer className="inter-var w-full border-retro-text">
                                        <CardBody className="bg-retro-bg/60 backdrop-blur-xl relative group/card hover:shadow-2xl hover:shadow-retro-primary/20 border-black/[0.1] w-full h-auto rounded-3xl p-6 border border-retro-secondary/30">

                                            {/* Abstract Header Image representation */}
                                            <CardItem
                                                translateZ="50"
                                                className="w-full h-48 mb-6 rounded-xl shadow-inner relative overflow-hidden"
                                                style={{ background: post.image }}
                                            >
                                                <div className="absolute inset-0 bg-retro-bg/20 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                                                    <BookOpen className="w-12 h-12 text-white drop-shadow-lg" />
                                                </div>
                                            </CardItem>

                                            {/* Meta data */}
                                            <CardItem translateZ="60" className="w-full flex justify-between items-center mb-4">
                                                <span className="px-3 py-1 bg-retro-accent/10 border border-retro-accent/20 text-retro-accent rounded-full text-xs font-bold font-mono">
                                                    {post.category}
                                                </span>
                                                <div className="flex gap-4 text-xs font-mono text-retro-text/60">
                                                    <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {post.date}</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                                </div>
                                            </CardItem>

                                            {/* Title & Excerpt */}
                                            <CardItem
                                                translateZ="70"
                                                className="text-2xl font-bold font-serif text-retro-text mb-3 line-clamp-2"
                                            >
                                                {post.title}
                                            </CardItem>

                                            <CardItem
                                                as="p"
                                                translateZ="80"
                                                className="text-retro-text/80 text-sm line-clamp-3 mb-8"
                                            >
                                                {post.excerpt}
                                            </CardItem>

                                            {/* Read Action */}
                                            <CardItem translateZ="100" className="w-full mt-auto flex justify-between items-center">
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="group flex items-center gap-2 text-retro-primary font-bold hover:text-retro-accent transition-colors"
                                                >
                                                    Read Article
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </CardItem>

                                        </CardBody>
                                    </CardContainer>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </TracingBeam>
            </section>

            {/* Create Post Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-retro-bg border-2 border-retro-secondary/50 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-retro-primary/20"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-retro-secondary/20 bg-retro-secondary/5">
                            <h2 className="text-2xl font-bold font-outfit text-retro-text flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-retro-primary" />
                                Create New Blog Post
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-retro-text/50 hover:text-retro-accent transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleCreatePost} className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-retro-text/80 mb-2 font-mono uppercase tracking-wider">Title</label>
                                <input
                                    required
                                    type="text"
                                    value={newPostTitle}
                                    onChange={(e) => setNewPostTitle(e.target.value)}
                                    placeholder="Enter your blog title..."
                                    className="w-full px-4 py-3 bg-retro-bg/50 border border-retro-secondary/30 rounded-xl text-retro-text outline-none focus:border-retro-primary hover:border-retro-primary/50 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-retro-text/80 mb-2 font-mono uppercase tracking-wider">Category</label>
                                <select
                                    value={newPostCategory}
                                    onChange={(e) => setNewPostCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-retro-bg/50 border border-retro-secondary/30 rounded-xl text-retro-text outline-none focus:border-retro-primary hover:border-retro-primary/50 transition-colors appearance-none cursor-pointer"
                                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239FE2BF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem top 50%", backgroundSize: "0.65rem auto" }}
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Data Analytics">Data Analytics</option>
                                    <option value="Python">Python</option>
                                    <option value="Database">Database</option>
                                    <option value="Career">Career</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-retro-text/80 mb-2 font-mono uppercase tracking-wider">Content / Facts</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={newPostExcerpt}
                                    onChange={(e) => setNewPostExcerpt(e.target.value)}
                                    placeholder="Write your facts, thoughts, or observations here... (Minimum 100 characters)"
                                    className="w-full px-4 py-3 bg-retro-bg/50 border border-retro-secondary/30 rounded-xl text-retro-text outline-none focus:border-retro-primary hover:border-retro-primary/50 transition-colors resize-none"
                                ></textarea>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-xs text-retro-text/50">* This content will be instantly formatted into your 3D blog card.</p>
                                    <p className={`text-xs font-mono font-bold ${newPostExcerpt.length < 100 ? 'text-red-400' : 'text-retro-primary'}`}>
                                        {newPostExcerpt.length} / 100
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-3 rounded-xl font-bold text-retro-text/70 hover:text-retro-accent hover:bg-retro-accent/10 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={newPostExcerpt.length < 100}
                                    className={`px-8 py-3 rounded-xl font-bold transition-all ${newPostExcerpt.length < 100
                                        ? 'bg-retro-secondary/30 text-retro-text/40 cursor-not-allowed'
                                        : 'bg-retro-primary text-retro-bg hover:bg-retro-accent hover:shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]'
                                        }`}
                                >
                                    Publish
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

        </main>
    );
}
