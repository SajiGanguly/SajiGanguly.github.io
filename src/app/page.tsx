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
import { MoveRight, Mail, Phone, Palette, Video, Youtube, Tv, HomeIcon, Briefcase, GraduationCap, Code, Heart, Contact, Sun, Moon, Leaf, Download, BookOpen, FolderGit2 } from "lucide-react";
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
      title: "Data Analyst",
      subtitle: "Enigma Data (11/2024 - 05/2025)",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Built Power BI dashboards, optimized SQL queries, and automated web scraping using Python.</li>
          <li>Set up Azure Blob Storage and implemented pipeline error handling.</li>
          <li>Delivered custom data solutions with cross-functional teams.</li>
        </ul>
      ),
    },
    {
      title: "Jr. Software Engineer",
      subtitle: "Entiovi Technologies (06/2023 - 08/2024)",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Built full-stack MERN apps with features like JWT/OAuth auth, product management, and payments.</li>
          <li>Developed RESTful APIs with MySQL/MongoDB; enhanced performance and UX via code reviews.</li>
          <li>Contributed HTML/CSS for Cleared Talent hiring platform.</li>
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
          <li>Python for Data Science - Learnbay</li>
          <li>HTML, CSS, and React - Udemy</li>
          <li>Microsoft Power BI Desktop</li>
        </ul>
      ),
    },
    {
      title: "DSML (Data Science & Machine Learning) Program",
      subtitle: <span className="text-retro-primary font-bold">Scaler Academy (currently pursuing)</span>,
      description: (
        <ul className="list-disc list-inside space-y-2 text-retro-text font-medium drop-shadow-sm">
          <li>Focused on advanced topics in data science, machine learning, and deep learning.</li>
          <li>Curriculum includes practical projects and real-world case studies.</li>
        </ul>
      ),
    }
  ];

  const skillItems = [
    { quote: "", name: "Python", title: "Data / Backend" },
    { quote: "", name: "SQL", title: "Database" },
    { quote: "", name: "Power BI & DAX", title: "Data Visualization" },
    { quote: "", name: "Data Modelling", title: "Data Engineering" },
    { quote: "", name: "Web Scraping", title: "Data Extraction" },
    { quote: "", name: "JavaScript", title: "Programming" },
    { quote: "", name: "React.js", title: "Frontend" },
    { quote: "", name: "Node.js & Express", title: "Backend" },
    { quote: "", name: "MongoDB & MySQL", title: "Databases" },
    { quote: "", name: "Git & Jira", title: "Tools" },
    { quote: "", name: "Azure Blob Storage", title: "Cloud" },
  ];

  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-retro-bg text-retro-text transition-colors duration-500 font-sans pb-32">

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
            {theme === "mint" && <Leaf className="w-5 h-5" />}
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
                className="text-6xl sm:text-7xl lg:text-8xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-purple-400 to-retro-accent tracking-tighter leading-tight text-center lg:text-left"
              >
                SAJI GANGULY
              </motion.h1>
            </div>

            <p className="text-lg md:text-xl text-retro-text/80 font-light leading-relaxed max-w-lg mt-4 [font-family:var(--font-geist-sans)]">
              Passionate software engineer specializing in building
              <span className="font-bold text-retro-primary px-1">Meaningful and Insightful</span>
              applications and <span className="font-bold text-retro-accent px-1">data-driven</span> solutions.
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
                href="/resume.pdf"
                download="Saji_Ganguly_Resume.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-retro-primary via-purple-500 to-retro-accent rounded-full text-white font-black tracking-wide text-lg overflow-hidden shadow-[0_0_20px_rgba(159,226,191,0.5)] hover:shadow-[0_0_35px_rgba(159,226,191,0.8)] hover:-translate-y-1 transition-all duration-300"
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
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-retro-primary/10 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-retro-accent/15 rounded-full blur-[60px] animate-pulse delay-1000 -bottom-10 -right-10"></div>

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
                  I am an adaptable and detail-oriented professional transitioning fully into the data analytics space. With a foundational background in full-stack development, I have recently pivoted my focus toward my true passion: extracting meaningful stories from raw data.
                </p>
                <p className="text-lg text-retro-text mb-6 opacity-90 leading-relaxed">
                  I am currently expanding my analytical expertise through an advanced Data Science and Machine Learning program , actively honing my skills in Python, SQL, and Power BI. I am eager to bring my creative problem-solving approach to a Junior Data Analyst role, where I can learn, grow, and contribute to impactful data-driven projects.
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
          <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-12">When I'm Not Coding</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <FaPalette className="w-12 h-12 mb-4 drop-shadow-xl" style={{ color: "#FFaa00" }} />
              <h3 className="font-bold text-xl text-retro-text">Painting</h3>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <div
                className="w-12 h-12 mb-4 drop-shadow-xl flex items-center justify-center rounded-lg"
                style={{ backgroundColor: "#00005C" }}
              >
                <SiAdobepremierepro className="w-8 h-8" style={{ color: "#99A5FF" }} />
              </div>
              <h3 className="font-bold text-xl text-retro-text">Video Editing</h3>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <div className="flex gap-4 mb-4 drop-shadow-xl">
                <FaYoutube className="w-12 h-12" style={{ color: "#FF0000" }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" }}
                >
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-retro-text">Social Media</h3>
              <p className="opacity-90 text-sm mt-1 text-retro-text">YouTube & IG</p>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <SiNetflix className="w-12 h-12 mb-4 drop-shadow-xl" style={{ color: "#E50914" }} />
              <h3 className="font-bold text-xl text-retro-text">Bingeing</h3>
              <p className="opacity-90 text-sm mt-1 text-retro-text">Netflix</p>
            </GlowingStarsBackgroundCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full z-10">
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
