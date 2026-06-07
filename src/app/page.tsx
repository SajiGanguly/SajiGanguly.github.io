"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars-background-card";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { LampContainer } from "@/components/ui/lamp";
import { MoveRight, Mail, Phone, Palette, Video, Youtube, Tv, HomeIcon, Briefcase, GraduationCap, Code, Heart, Contact, Sun, Moon, Monitor, Download, BookOpen, FolderGit2 } from "lucide-react";
import { FloatingDockDesktop, FloatingDockMobile } from "@/components/ui/floating-dock";
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FaLaptopCode, FaGithub, FaLinkedin, FaUser, FaYoutube, FaInstagram, FaPalette } from "react-icons/fa";
import { SiLeetcode, SiNetflix, SiAdobepremierepro } from "react-icons/si";
import { useTheme } from "@/contexts/theme-context";
import { FeaturedProjects } from "@/components/featured-projects";
import { HeroProjectPin } from "@/components/hero-project-pin";
import { ExperienceHub } from "@/components/experience-hub";
import { EducationHub } from "@/components/education-hub";
import { ContactHub } from "@/components/contact-hub";
import { RotatingCoinRing } from "@/components/rotating-coin-ring";


export default function Home() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { title: "Home", icon: <HomeIcon className="h-full w-full text-retro-text" />, href: "#hero" },
    { title: "About", icon: <FaUser className="h-full w-full text-retro-text" />, href: "#about" },
    { title: "Projects", icon: <FolderGit2 className="h-full w-full text-retro-text" />, href: "#projects" },
    { title: "Experiences", icon: <Briefcase className="h-full w-full text-retro-text" />, href: "#experiences" },
    { title: "Education", icon: <GraduationCap className="h-full w-full text-retro-text" />, href: "#education" },
    { title: "Skills", icon: <Code className="h-full w-full text-retro-text" />, href: "#skills" },
    { title: "Hobbies", icon: <Heart className="h-full w-full text-retro-text" />, href: "#hobbies" },
    { title: "Contact", icon: <Contact className="h-full w-full text-retro-text" />, href: "#contact" },
  ];

  const experienceItems = [
    {
      role: "Data Analyst",
      company: "Enigma Data",
      location: "Delhi, India",
      duration: "Nov 2024 - May 2025",
      status: "Completed",
      tenureMonths: 7,
      progress: 100,
      skills: ["Power BI", "DAX", "Python Automation", "Selenium", "BeautifulSoup", "SQL Optimization", "Azure Blob Storage"],
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Delivered interactive Power BI dashboards with DAX for real-time business metric visibility across e-commerce platforms (Nykaa, Amazon), empowering stakeholder decisions with self-service analytics.</li>
          <li>Engineered automated Python scraping pipelines (Selenium/BeautifulSoup) to harvest large-scale market datasets, cutting manual effort by ~70% and enabling faster time-to-insight.</li>
          <li>Optimized multi-join SQL queries, reducing data retrieval latency by ~40% and streamlining end-to-end reporting pipelines.</li>
          <li>Architected Azure Blob Storage pipelines with automated error-handling, ensuring high data integrity across daily batch processes.</li>
          <li>Collaborated with cross-functional stakeholders to translate business requirements into analytical deliverables and dashboard metrics.</li>
        </ul>
      ),
    },
    {
      role: "Junior Software Engineer",
      company: "Entiovi Technologies",
      location: "Kolkata, India",
      duration: "Jun 2023 - Aug 2024",
      status: "Completed",
      tenureMonths: 15,
      progress: 100,
      skills: ["React.js", "Node.js", "Express.js", "RESTful APIs", "MySQL", "MongoDB", "JWT", "OAuth", "Agile Sprints"],
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Engineered full-stack MERN stack applications with JWT/OAuth authentication for the Cleared Talent hiring platform serving enterprise clients.</li>
          <li>Designed and maintained RESTful APIs (MySQL & MongoDB), ensuring reliable data flow and sub-200ms response times.</li>
          <li>Improved React.js front-end performance and responsive UX, contributing measurably to increased user engagement metrics.</li>
          <li>Delivered sprint commitments consistently in agile team; participated in code reviews and technical design discussions.</li>
        </ul>
      ),
    },
  ];

  const educationItems = [
    {
      title: "Scaler Academy",
      program: "DSML (Data Science & Machine Learning)",
      date: "2025 - Present",
      status: "In Progress",
      progress: 80,
      grade: "Active Program",
      skills: ["Machine Learning", "Deep Learning", "Data Science", "Python", "Advanced Statistics", "Data Modeling"],
      description: (
        <ul className="list-disc list-inside space-y-2 text-retro-text/90">
          <li>Pursuing advanced Data Science & ML expertise focusing on commercial viability.</li>
          <li>Rigorous syllabus covering deep learning architectures, advanced statistics, feature engineering, and neural network tuning.</li>
          <li>Collaborating on multi-dimensional predictive analytical pipelines and optimization algorithms.</li>
        </ul>
      ),
    },
    {
      title: "IEM Kolkata",
      program: "Bachelor of Technology (B.Tech)",
      date: "2018 - 2022",
      status: "Completed",
      progress: 100,
      grade: "GPA: 8.13",
      skills: ["Computer Science", "Software Engineering", "Data Structures", "Relational Databases", "Algorithms"],
      description: (
        <p className="text-retro-text/90 leading-relaxed font-medium">
          Acquired solid conceptual and hands-on grounding in computing paradigms, software engineering cycles, object-oriented systems, and core data architecture models. Graduated with a highly competitive 8.13 GPA, setting the baseline for subsequent data engineering ventures.
        </p>
      ),
    },
    {
      title: "Certifications",
      program: "Data Analytics & Python Certifications",
      date: "Various Platforms",
      status: "Completed",
      progress: 100,
      grade: "Certified Professional",
      skills: ["Power BI", "DAX", "SQL Automation", "Selenium", "BeautifulSoup", "API Integration"],
      description: (
        <ul className="list-disc list-inside space-y-3 text-retro-text/90">
          <li>
            <strong className="text-retro-primary">Microsoft Power BI Data Analyst:</strong> Industry credential certifying advanced capability in data ingestion, relationships modeling, security row filtering, and complex DAX measures.
          </li>
          <li>
            <strong className="text-retro-secondary">Python for Data Science (Learnbay):</strong> Rigorous industry specialization program validating end-to-end automation, scraper engines, and predictive analytics applications.
          </li>
        </ul>
      ),
    },
  ];

  const skillItems = [
    { quote: "", name: "Power BI & DAX", title: "Data & Analytics" },
    { quote: "", name: "Python (Pandas, Numpy, Selenium)", title: "Programming" },
    { quote: "", name: "Google Antigravity", title: "AI/Agentic" },
    { quote: "", name: "React.js & Node.js", title: "Frontend & Backend" },
    { quote: "", name: "Azure Blob Storage & RESTful APIs", title: "Cloud & DevOps" },
    { quote: "", name: "SQL (PostgreSQL, MySQL)", title: "Data & Analytics" },
    { quote: "", name: "JavaScript & HTML5/CSS3", title: "Programming" },
    { quote: "", name: "MongoDB & Firebase", title: "Databases" },
    { quote: "", name: "Git & Jira", title: "Tools" },
    { quote: "", name: "Data Modelling & Machine Learning", title: "Data & Analytics" },
  ];

  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-retro-bg text-retro-text transition-colors duration-500 font-sans">

      {/* Global Background Particles & Icons */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <AuroraBackground className="opacity-100" />
        {/* Subtle global edge fade */}
        <div className="absolute inset-0 w-full h-full bg-retro-bg [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>
      </div>

      <div className="relative z-0">
        <FloatingTechIcons />
      </div>

      {/* Floating Dock & Theme Selector - Fixed Top */}
      <div className="fixed top-4 inset-x-0 w-full flex justify-center z-50 pointer-events-none md:scale-100 scale-90">
        <div className="pointer-events-auto shadow-xl rounded-2xl hidden md:block">
          <FloatingDockDesktop items={navItems} />
        </div>
        <div className="absolute right-4 top-2 md:top-0 pointer-events-auto flex items-center gap-3">
          <a href="mailto:ganguly2904saji@gmail.com" className="p-3 md:p-[14px] bg-retro-bg border-2 border-retro-primary rounded-2xl text-retro-primary hover:text-white hover:bg-retro-primary hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </a>
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
            {theme === "mint" && <Monitor className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-[92vh] flex flex-col items-center justify-center p-4 md:p-6 lg:p-12 mx-auto overflow-hidden pb-12 pt-28">

        {/* Dynamic Rotating Tech/Data Coins Ring */}
        <div className="absolute inset-0 w-full h-full z-0">
          <RotatingCoinRing />
        </div>

        {/* Dynamic Center Backdrop Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-retro-primary/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0"></div>

        {/* Cinematic Content Block - Set pointer-events-none so mouse events pass through to coins */}
        {/* The zIndex is set to 10 so it overlays back coins (zIndex 5-9) and sits behind front coins (zIndex 11-15) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center pointer-events-none select-none py-8 md:py-12">

          {/* Pulsating Analytics Visualizer Monogram / Logo */}
          <div className="flex gap-2 items-end justify-center h-8 mb-6 pointer-events-auto hover:scale-105 transition-transform duration-300">
            <div className="w-1.5 md:w-2 bg-retro-primary rounded-full animate-[pulse_1.5s_infinite] h-8 shadow-[0_0_8px_var(--color-primary)]"></div>
            <div className="w-1.5 md:w-2 bg-retro-accent rounded-full animate-[pulse_1.8s_infinite] h-5 shadow-[0_0_8px_var(--color-accent)]"></div>
            <div className="w-1.5 md:w-2 bg-retro-secondary rounded-full animate-[pulse_1.2s_infinite] h-6 shadow-[0_0_8px_var(--color-secondary)]"></div>
          </div>

          {/* Subtitle above Header */}
          <h2 className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-[0.2em] md:tracking-[0.25em] text-retro-text/60 uppercase mb-4 max-w-md sm:max-w-lg font-mono px-2">
            Aspiring Data Analyst and Analytics engineer
          </h2>

          {/* Large Bold Cinematic Brand Header */}
          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-retro-text uppercase font-outfit leading-[1] max-w-4xl mx-auto"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-retro-accent to-retro-secondary drop-shadow-sm pb-1">
              SAJI GANGULY
            </span>
          </motion.h1>

          {/* Subtag/Tagline directly below Name */}
          <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold tracking-wider sm:tracking-[0.15em] md:tracking-[0.18em] text-retro-text/95 font-mono mt-4 uppercase max-w-xs sm:max-w-xl md:max-w-2xl text-center px-4">
            DATA × ANALYTICS FOR DECISIONS & CONTROL
          </h3>

          {/* Description Copy */}
          <p className="text-base sm:text-lg md:text-xl text-retro-text/75 font-light leading-relaxed max-w-2xl mx-auto mt-6 px-4 [font-family:var(--font-geist-sans)]">
            I design <span className="font-semibold text-retro-primary">automated pipelines</span>, <span className="font-semibold text-retro-secondary">interactive dashboards</span> and <span className="font-semibold text-retro-accent">analytics systems</span> for companies where decisions cost millions.
          </p>

          {/* Skill Pills - Center Inline */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-xl pointer-events-auto">
            {['PYTHON', 'SQL', 'POWER BI', 'PANDAS', 'SELENIUM', 'GITHUB'].map((skill) => (
              <span key={skill} className="px-3 py-1 border border-retro-accent/20 text-retro-accent/80 hover:text-retro-accent hover:border-retro-accent/40 text-[10px] font-bold font-mono rounded transition-colors cursor-default backdrop-blur-sm shadow-sm bg-retro-bg/30">
                {skill}
              </span>
            ))}
          </div>

          {/* Brackets Framed Cyberpunk CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
          >
            <a
              href="/resume/Saji_Ganguly_Resume.pdf"
              download="Saji_Ganguly_Resume.pdf"
              className="relative px-8 py-3 bg-retro-bg/40 backdrop-blur-md border border-retro-text/20 hover:border-retro-primary hover:text-retro-primary text-retro-text font-mono text-sm tracking-widest uppercase transition-all duration-300 group flex items-center gap-3 active:scale-95 shadow-md hover:shadow-lg"
            >
              {/* Sleek Custom Corner Brackets */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-retro-text/30 group-hover:border-retro-primary transition-all duration-300"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-retro-text/30 group-hover:border-retro-primary transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-retro-text/30 group-hover:border-retro-primary transition-all duration-300"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-retro-text/30 group-hover:border-retro-primary transition-all duration-300"></span>

              <span>DOWNLOAD RESUME</span>
              <Download className="w-4 h-4 group-hover:-translate-y-[2px] transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-transparent hover:border-retro-text/10 text-retro-text/60 hover:text-retro-text font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <span>CONNECT WITH ME</span>
              <MoveRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* Glassmorphic Profile Overlay (Bottom Left Corner) */}
        <div className="fixed bottom-6 left-6 z-45 hidden xl:flex items-center gap-3.5 bg-retro-bg/85 backdrop-blur-xl border border-retro-text/10 p-3.5 rounded-2xl max-w-[320px] shadow-2xl hover:scale-[1.02] transition-all cursor-default select-none group">
          <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-retro-primary/10 border border-retro-primary/30 flex items-center justify-center font-mono text-xs font-bold text-retro-primary group-hover:border-retro-primary/50 transition-colors">
            SG
            <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-retro-accent rounded-full border-2 border-retro-bg shadow-[0_0_8px_var(--color-accent)] animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-retro-text/50 uppercase tracking-widest font-bold">SYSTEM.STATUS // ONLINE</span>
            <span className="text-[11px] font-medium text-retro-text/85 mt-0.5 leading-relaxed font-sans">
              I make complex data structures simple for stakeholders.
            </span>
          </div>
        </div>
      </section>


      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* About Me Section */}
        <section id="about" className="relative w-full flex flex-col justify-center max-w-4xl mx-auto py-12 md:py-16 scroll-mt-24">
          <TracingBeam className="px-6">
            <div className="w-full antialiased pt-4 lg:pt-0">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block drop-shadow-md mb-8">About Me</h2>
              <div className="bg-retro-bg/80 border-retro-secondary/50 border-2 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
                <p className="text-lg text-retro-text mb-4 opacity-90 leading-relaxed">
                  Results-driven Data Analyst with 2+ years building data-driven applications, automated dashboards, and highly optimized data processes. Skilled in bridging business requirements with technical implementation — from interactive Power BI dashboards to automated Python web-scraping pipelines and robust database structures.
                </p>
                <p className="text-lg text-retro-text mb-6 opacity-90 leading-relaxed">
                  Adept at cross-functional collaboration, agile delivery, and cloud-integrated data solutions. Currently pursuing advanced Data Science & Machine Learning expertise at Scaler Academy to further hone my analytical capabilities.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="px-4 py-1.5 bg-retro-primary/20 text-retro-primary rounded-full text-sm font-bold border border-retro-primary/50 shadow-sm">Data Analytics</span>
                  <span className="px-4 py-1.5 bg-retro-secondary/20 text-retro-secondary rounded-full text-sm font-bold border border-retro-secondary/50 shadow-sm">Business Intelligence</span>
                  <span className="px-4 py-1.5 bg-retro-accent/20 text-retro-accent rounded-full text-sm font-bold border border-retro-accent/50 shadow-sm">Data Visualization</span>
                  <span className="px-4 py-1.5 bg-retro-primary/20 text-retro-primary rounded-full text-sm font-bold border border-retro-primary/50 shadow-sm">Dashboards</span>
                </div>
              </div>
            </div>
          </TracingBeam>
        </section>

        {/* Key Milestones Section */}
        <section id="milestones" className="relative w-full py-10 md:py-12 scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block drop-shadow-md mb-6">
            Key Milestones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1: 70% Reduction */}
            <div className="group relative p-6 bg-black/20 border border-retro-primary/20 hover:border-retro-primary/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.08)] hover:-translate-y-1 backdrop-blur-xl flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-retro-primary font-outfit mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                  70%
                </div>
                <h3 className="font-bold text-lg text-retro-text mb-2">Reporting Automation</h3>
                <p className="text-sm text-retro-text/75 leading-relaxed">
                  Automated manual market reporting processes, reducing the team's weekly data preparation workload by 70% and accelerating insights delivery.
                </p>
              </div>
              <div className="h-1 w-0 bg-retro-primary group-hover:w-full transition-all duration-300 mt-4 rounded-full"></div>
            </div>

            {/* Card 2: 40% Speedup */}
            <div className="group relative p-6 bg-black/20 border border-retro-accent/20 hover:border-retro-accent/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.08)] hover:-translate-y-1 backdrop-blur-xl flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-retro-accent font-outfit mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                  40%
                </div>
                <h3 className="font-bold text-lg text-retro-text mb-2">Dashboard Optimization</h3>
                <p className="text-sm text-retro-text/75 leading-relaxed">
                  Optimized relational data models and reporting structures, speeding up dashboard load-times by 40% to improve decision-making speed.
                </p>
              </div>
              <div className="h-1 w-0 bg-retro-accent group-hover:w-full transition-all duration-300 mt-4 rounded-full"></div>
            </div>

            {/* Card 3: 99%+ Uptime */}
            <div className="group relative p-6 bg-black/20 border border-retro-primary/20 hover:border-retro-primary/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.08)] hover:-translate-y-1 backdrop-blur-xl flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-retro-primary font-outfit mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                  99%+
                </div>
                <h3 className="font-bold text-lg text-retro-text mb-2">Data Quality Control</h3>
                <p className="text-sm text-retro-text/75 leading-relaxed">
                  Implemented robust validation and error-checking protocols, maintaining over 99% data pipeline uptime and ensuring accurate weekly reporting.
                </p>
              </div>
              <div className="h-1 w-0 bg-retro-primary group-hover:w-full transition-all duration-300 mt-4 rounded-full"></div>
            </div>

            {/* Card 4: Collaborative Delivery */}
            <div className="group relative p-6 bg-black/20 border border-retro-accent/20 hover:border-retro-accent/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.08)] hover:-translate-y-1 backdrop-blur-xl flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-retro-accent font-outfit mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                  AGILE
                </div>
                <h3 className="font-bold text-lg text-retro-text mb-2">Collaborative Delivery</h3>
                <p className="text-sm text-retro-text/75 leading-relaxed">
                  Partnered within cross-functional team sprints to deliver data platform enhancements and user features, ensuring high-quality releases.
                </p>
              </div>
              <div className="h-1 w-0 bg-retro-accent group-hover:w-full transition-all duration-300 mt-4 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="relative w-full flex flex-col justify-center py-12 md:py-16 scroll-mt-24">
          <FeaturedProjects />
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="relative w-full flex flex-col justify-center py-12 md:py-16 scroll-mt-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-4">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Experiences</h2>
          </div>
          <ExperienceHub items={experienceItems} />
        </section>

        {/* Education Section */}
        <section id="education" className="relative w-full flex flex-col justify-center py-12 md:py-16 scroll-mt-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-4">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Education & Development</h2>
          </div>
          <EducationHub items={educationItems} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-16 scroll-mt-24">
          <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-6 self-start">Skills</h2>
          <InfiniteMovingCards
            items={skillItems}
            direction="right"
            speed="normal"
          />
          <InfiniteMovingCards
            items={skillItems.slice().reverse()}
            direction="left"
            speed="normal"
          />
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="relative w-full flex flex-col justify-center py-12 md:py-16 scroll-mt-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-6">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Beyond the Code</h2>
            <p className="mt-4 text-retro-text/70 max-w-2xl text-lg">Exploring creativity and narratives through various mediums when I'm away from the keyboard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full px-4 md:px-0">
            {/* Card 1 */}
            <div className="group p-8 bg-black/20 border border-retro-primary/20 hover:border-retro-primary/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.1)] hover:-translate-y-1 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-retro-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-retro-primary/20 transition-all duration-300">
                <Palette className="w-8 h-8 text-retro-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-retro-text mb-2">Visual Arts</h3>
              <p className="text-sm text-retro-text/60">Digital & Traditional Painting</p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-black/20 border border-retro-accent/20 hover:border-retro-accent/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.1)] hover:-translate-y-1 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-retro-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-retro-accent/20 transition-all duration-300">
                <Video className="w-8 h-8 text-retro-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-retro-text mb-2">Video Production</h3>
              <p className="text-sm text-retro-text/60">Editing & Post-Production</p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-black/20 border border-retro-primary/20 hover:border-retro-primary/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.1)] hover:-translate-y-1 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-retro-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-retro-primary/20 transition-all duration-300">
                <Youtube className="w-8 h-8 text-retro-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-retro-text mb-2">Content Creation</h3>
              <p className="text-sm text-retro-text/60">YouTube & Social Media</p>
            </div>

            {/* Card 4 */}
            <div className="group p-8 bg-black/20 border border-retro-accent/20 hover:border-retro-accent/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.1)] hover:-translate-y-1 backdrop-blur-xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-retro-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-retro-accent/20 transition-all duration-300">
                <Tv className="w-8 h-8 text-retro-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-retro-text mb-2">Film & Media</h3>
              <p className="text-sm text-retro-text/60">Exploring Narratives</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-12 md:py-16 scroll-mt-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-6">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Let's Connect</h2>
          </div>
          <ContactHub />
        </section>
      </div>

      {/* Simple Footer */}
      <footer className="w-full py-8 mt-12 border-t border-retro-secondary/20 bg-retro-bg flex items-center justify-center relative z-10">
        <p className="text-retro-text/70 font-mono text-sm sm:text-base text-center px-4">
          built by <span className="text-retro-primary font-bold">Saji Ganguly</span> <span className="mx-2 text-retro-accent">-</span> Creative Technologist
        </p>
      </footer>

      {/* Mobile Floating Dock */}
      <FloatingDockMobile items={navItems} className="fixed bottom-6 right-6" />

    </main>
  );
}
