"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { ChecksBackground } from "@/components/ui/checks-background";
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
import { ExperienceTabs } from "@/components/experience-tabs";
import { EducationTimeline } from "@/components/education-timeline";

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
      title: "Data Analyst & Power BI Developer",
      subtitle: "Enigma Data, Delhi, India (Nov 2024 - May 2025)",
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
      title: "Junior Software Engineer",
      subtitle: "Entiovi Technologies, Kolkata, India (Jun 2023 - Aug 2024)",
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
      title: "Bachelor of Technology (B.Tech)",
      subtitle: "Institute of Engineering and Management (July 2018 - Jun 2022)",
      description: <p className="font-bold">GPA: 8.13</p>,
    },
    {
      title: "Certifications",
      subtitle: "Various platforms",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Microsoft Power BI Data Analyst</li>
          <li>Python for Data Science (Learnbay)</li>
        </ul>
      ),
    },
    {
      title: "DSML (Data Science & Machine Learning) Program",
      subtitle: <span className="text-retro-primary font-bold">Scaler Academy (Aug 2025 - Present)</span>,
      description: (
        <ul className="list-disc list-inside space-y-2 text-retro-text font-medium drop-shadow-sm">
          <li>Pursuing advanced Data Science & ML expertise.</li>
          <li>Focused on advanced topics in data science, machine learning, and deep learning.</li>
        </ul>
      ),
    }
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
        <ChecksBackground variant="checkerboard" className="opacity-100" />
        {/* You can also try:
          <ChecksBackground variant="retro-grid" />
          <ChecksBackground variant="crosses" /> 
        */}
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
      <section id="hero" className="relative z-10 w-full min-h-[100dvh] flex flex-col p-6 lg:p-12 mx-auto overflow-hidden pb-12 pt-24 mt-2">

        <div className="w-full my-auto flex flex-col lg:flex-row items-center justify-between z-10 max-w-7xl mx-auto gap-12 pt-16">

          {/* Left Panel: Text & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">


            <h2 className="text-lg md:text-xl font-bold tracking-widest text-retro-text opacity-70 uppercase mt-4">
              Data Analyst & Full-Stack Developer
            </h2>

            <div className="relative -ml-1 text-center lg:text-left w-full lg:w-auto overflow-hidden py-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-retro-primary to-retro-accent tracking-tighter leading-tight text-center lg:text-left"
              >
                SAJI GANGULY
              </motion.h1>
            </div>

            <p className="text-lg md:text-xl text-retro-text/80 font-light leading-relaxed max-w-lg mt-4 [font-family:var(--font-geist-sans)]">
              Results-driven Data Analyst & Full-Stack Developer with 2+ years building
              <span className="font-bold text-retro-primary px-1">data-driven applications</span>,
              automated dashboards, and scalable <span className="font-bold text-retro-accent px-1">web solutions</span>.
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
        <section id="about" className="relative w-full min-h-[100dvh] flex flex-col justify-center max-w-4xl mx-auto py-24">
          <TracingBeam className="px-6">
            <div className="w-full antialiased pt-4 lg:pt-0">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block drop-shadow-md mb-8">About Me</h2>
              <div className="bg-retro-bg/80 border-retro-secondary/50 border-2 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
                <p className="text-lg text-retro-text mb-4 opacity-90 leading-relaxed">
                  Results-driven Data Analyst & Full-Stack Developer with 2+ years building data-driven applications, automated dashboards, and scalable web solutions. Skilled in bridging business requirements with technical implementation — from Power BI dashboards to MERN stack apps and automated Python pipelines.
                </p>
                <p className="text-lg text-retro-text mb-6 opacity-90 leading-relaxed">
                  Adept at cross-functional collaboration, agile delivery, and cloud-integrated data solutions. Currently pursuing advanced Data Science & Machine Learning expertise at Scaler Academy to further hone my analytical capabilities.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="px-4 py-1.5 bg-retro-primary/20 text-retro-primary rounded-full text-sm font-bold border border-retro-primary/50 shadow-sm">Data Analytics</span>
                  <span className="px-4 py-1.5 bg-retro-secondary/20 text-retro-secondary rounded-full text-sm font-bold border border-retro-secondary/50 shadow-sm">Full-Stack Dev</span>
                  <span className="px-4 py-1.5 bg-retro-accent/20 text-retro-accent rounded-full text-sm font-bold border border-retro-accent/50 shadow-sm">UI/UX Design</span>
                </div>
              </div>
            </div>
          </TracingBeam>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="relative w-full flex flex-col justify-center py-24">
          <FeaturedProjects />
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-4">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Experiences</h2>
          </div>
          <ExperienceTabs items={experienceItems} />
        </section>

        {/* Education Section */}
        <section id="education" className="relative w-full flex flex-col justify-center py-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-4">
            <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block">Education & Development</h2>
          </div>
          <EducationTimeline items={educationItems} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-24">
          <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-12 self-start">Skills</h2>
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
        <section id="hobbies" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24">
          <div className="w-full max-w-5xl mx-auto pl-4 md:pl-0 mb-12">
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
        <section id="contact" className="relative w-full z-10 scroll-mt-32">
          <LampContainer>
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center justify-center text-center w-full max-w-5xl z-50 pt-12 lg:pt-24 px-6 overflow-hidden"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-retro-text mb-6">
                Let's Connect<span className="text-retro-primary">.</span>
              </h2>
              <p className="text-retro-text/60 font-mono text-base md:text-lg max-w-md mx-auto mb-16">
                Have a question ? <br />Drop me a message to get started.
              </p>

              {/* Contact Cards */}
              <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
                {/* Email Card */}
                <a href="mailto:ganguly2904saji@gmail.com" className="group w-full md:w-1/2 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-6 sm:p-8 bg-black/20 border border-retro-primary/30 hover:border-retro-primary hover:bg-retro-primary/10 rounded-2xl transition-all hover:-translate-y-1 shadow-2xl backdrop-blur-xl">
                  <div className="w-14 h-14 bg-retro-primary/20 rounded-full flex shrink-0 items-center justify-center group-hover:bg-retro-primary/40 transition-colors">
                    <Mail className="w-6 h-6 text-retro-primary" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs text-retro-text/50 font-mono uppercase tracking-widest mb-2">Email Me At</p>
                    <p className="text-lg md:text-xl font-bold font-outfit text-retro-text group-hover:text-retro-primary transition-colors truncate">ganguly2904saji@gmail.com</p>
                  </div>
                </a>

                {/* Phone Card */}
                <a href="tel:+916290919566" className="group w-full md:w-1/2 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-6 sm:p-8 bg-black/20 border border-retro-accent/30 hover:border-retro-accent hover:bg-retro-accent/10 rounded-2xl transition-all hover:-translate-y-1 shadow-2xl backdrop-blur-xl">
                  <div className="w-14 h-14 bg-retro-accent/20 rounded-full flex shrink-0 items-center justify-center group-hover:bg-retro-accent/40 transition-colors">
                    <Phone className="w-6 h-6 text-retro-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-retro-text/50 font-mono uppercase tracking-widest mb-2">Call Me At</p>
                    <p className="text-lg md:text-xl font-bold font-outfit text-retro-text group-hover:text-retro-accent transition-colors">+91 6290919566</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="w-full flex flex-col items-center mt-12 border-t border-retro-secondary/30 pt-10">
                <p className="text-xs font-mono text-retro-text/50 mb-6 uppercase tracking-widest">Also Find Me On</p>
                <div className="flex gap-6" suppressHydrationWarning>
                  <a href="https://github.com/SajiGanguly" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/20 border border-retro-text/10 rounded-full text-retro-text hover:text-white hover:bg-black hover:border-black hover:-translate-y-2 transition-all shadow-xl backdrop-blur-md">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/29saji-ganguly-719613169" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/20 border border-retro-text/10 rounded-full text-retro-text hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-2 transition-all shadow-xl backdrop-blur-md">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="https://leetcode.com/u/saji2904/" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/20 border border-retro-text/10 rounded-full text-retro-text hover:text-[#FFA116] hover:bg-black hover:border-black hover:-translate-y-2 transition-all shadow-xl backdrop-blur-md">
                    <SiLeetcode className="w-6 h-6" />
                  </a>
                </div>
              </div>

            </motion.div>
          </LampContainer>
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
