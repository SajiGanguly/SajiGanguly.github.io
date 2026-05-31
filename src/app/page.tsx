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
      <section id="hero" className="relative z-10 w-full min-h-[85vh] flex flex-col p-6 lg:p-12 mx-auto overflow-hidden pb-6 pt-24 mt-2">

        <div className="w-full my-auto flex flex-col lg:flex-row items-center justify-between z-10 max-w-7xl mx-auto gap-12 pt-8">

          {/* Left Panel: Text & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">


            <h2 className="text-lg md:text-xl font-bold tracking-widest text-retro-text opacity-70 uppercase mt-4">
              Data Analyst & Analytics Engineer
            </h2>

            <div className="relative -ml-1 text-center lg:text-left w-full lg:w-auto overflow-hidden py-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-retro-primary to-retro-accent tracking-tighter leading-tight text-center lg:text-left"
              >
                SAJI GANGULY
              </motion.h1>
            </div>

            <p className="text-lg md:text-xl text-retro-text/80 font-light leading-relaxed max-w-lg mt-4 [font-family:var(--font-geist-sans)]">
              Data Analyst with experience in creating dashboards, working with data, and generating insights using <span className="font-bold text-retro-primary px-1">Power BI, SQL, and Python</span>.
            </p>

            {/* Skill Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              {['PYTHON', 'SQL', 'POWER BI', 'REACT', 'NODE.JS'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 border border-retro-accent/30 text-retro-accent text-xs font-bold font-mono rounded-md hover:bg-retro-accent/20 transition-colors cursor-default backdrop-blur-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume Download CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-4 flex justify-center lg:justify-start w-full"
            >
              <a
                href="/resume/Saji_Ganguly_Resume.pdf"
                download="Saji_Ganguly_Resume.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-retro-primary to-retro-accent rounded-full text-white font-black tracking-wide text-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/30 group-hover:animate-[shimmer_1s_forwards]"></div>
                <span>DOWNLOAD RESUME</span>
                <Download className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </a>
            </motion.div>


          </div>

          {/* Right Panel: 3D Globe in Grid */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 lg:mt-0 min-h-[400px] lg:min-h-[500px]">
            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-retro-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-retro-accent/5 rounded-full blur-[80px] -bottom-10 -right-10"></div>

            {/* Grid background & Globe Container */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4 sm:p-8">
              {/* Grid outline/frame */}
              <div className="absolute inset-8 sm:inset-4 border border-retro-text/10 rounded-3xl bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group">

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay"></div>

                {/* 4 corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-retro-primary/80 rounded-tl-3xl pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-retro-primary/80 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-retro-accent/80 rounded-bl-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-retro-accent/80 rounded-br-3xl pointer-events-none"></div>

                {/* Decorative HUD Elements */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-retro-primary/60 tracking-widest hidden sm:block">SYS.GLOBAL.VIEW</div>
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-retro-accent/60 tracking-widest hidden sm:block">LAT: VAR // LNG: VAR</div>

                {/* The Interactive Project Pin */}
                <div className="relative w-full h-full z-10 flex items-center justify-center">
                  <HeroProjectPin />
                </div>
              </div>

              {/* ONLINE Badge (Moved out of the grid box) */}
              <div className="absolute top-4 right-0 bg-retro-bg/90 backdrop-blur-xl border border-retro-text/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl z-20 hover:scale-105 transition-transform cursor-default sm:right-0">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-retro-accent shadow-[0_0_10px_var(--color-accent)]"></span>
                </div>
                <span className="text-retro-accent text-xs font-bold font-mono tracking-wider">ONLINE</span>
              </div>
            </div>
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
