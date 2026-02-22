"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars-background-card";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { MoveRight, Mail, Phone, Palette, Video, Youtube, Tv, HomeIcon, Briefcase, GraduationCap, Code, Heart, Contact, Sun, Moon, Leaf } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FaLaptopCode, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    // Basic theme switcher logic for HTML attribute
    const htmlElement = document.documentElement;
    if (theme === "default") {
      htmlElement.removeAttribute("data-theme");
    } else {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const navItems = [
    { title: "Home", icon: <HomeIcon className="h-full w-full text-retro-text" />, href: "#hero" },
    { title: "About", icon: <FaUser className="h-full w-full text-retro-text" />, href: "#about" },
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
      title: "DSML (Data Science & Machine Learning) Program",
      subtitle: <span className="text-retro-primary font-bold">Scaler Academy (currently pursuing)</span>,
      description: (
        <ul className="list-disc list-inside space-y-2 text-retro-text">
          <li>Focused on advanced topics in data science, machine learning, and deep learning.</li>
          <li>Curriculum includes practical projects and real-world case studies.</li>
        </ul>
      ),
    },
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
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={200}
          className="w-full h-full opacity-30"
          particleColor="#9FE2BF"
        />
        {/* Subtle global edge fade */}
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
          <a href="#contact" className="p-3 md:p-[14px] bg-retro-bg border-2 border-retro-primary rounded-2xl text-retro-primary hover:text-white hover:bg-retro-primary hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center">
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

            <div className="flex items-center gap-2 text-retro-accent font-mono font-bold tracking-wider text-sm sm:text-base bg-retro-accent/10 px-4 py-1.5 rounded-full border border-retro-accent/20 shadow-sm mt-4">
              <span className="text-retro-text opacity-50">01.</span>
              <span>console.log("Hello World");</span>
            </div>

            <h2 className="text-lg md:text-xl font-bold tracking-widest text-retro-text opacity-70 uppercase mt-4">
              Data Analyst & Full-Stack Developer
            </h2>

            <div className="relative -ml-1 text-left w-full lg:w-auto overflow-hidden py-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-purple-400 to-retro-accent tracking-tighter leading-tight !text-left"
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


          </div>

          {/* Right Panel: Glassmorphism Avatar Layered Depth */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 lg:mt-0 min-h-[400px]">
            {/* Glowing Orbs behind the structure */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-retro-primary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-retro-accent/20 rounded-full blur-[60px] animate-pulse delay-1000 -bottom-10 -right-10"></div>

            {/* The Outer Frame / Rings */}
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">

              {/* 3D Rotating Rings */}
              <div className="absolute inset-0 rounded-full border-[2px] border-retro-primary/30 [border-top-color:var(--color-primary)] shadow-[0_0_15px_var(--color-primary)] animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-[2px] border-retro-accent/20 [border-bottom-color:var(--color-accent)] animate-[spin_15s_reverse_linear_infinite]"></div>
              <div className="absolute inset-8 rounded-full border-[1px] border-dashed border-retro-secondary/40 animate-[spin_25s_linear_infinite]"></div>

              {/* Central Glassmorphism Avatar Wrapper */}
              <div className="absolute inset-10 sm:inset-12 rounded-full bg-retro-text/5 backdrop-blur-2xl border border-retro-text/10 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105 group">
                {/* Inner image/placeholder container */}
                <div className="w-full h-full relative rounded-full overflow-hidden bg-gradient-to-br from-retro-primary/20 via-retro-bg/50 to-retro-accent/20 flex flex-col items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-br from-retro-primary/80 to-retro-accent/80 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    SG
                  </span>
                  {/* Inner shadow/vignette to blend */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] rounded-full border border-retro-text/10 mix-blend-overlay pointer-events-none"></div>
                </div>
              </div>

              {/* Floating elements providing depth */}
              {/* ONLINE Badge */}
              <div className="absolute top-10 right-0 sm:-right-4 bg-retro-bg/80 backdrop-blur-xl border border-retro-text/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl z-20 hover:scale-105 transition-transform cursor-default">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-retro-accent shadow-[0_0_10px_var(--color-accent)]"></span>
                </div>
                <span className="text-retro-accent text-xs font-bold font-mono tracking-wider">ONLINE</span>
              </div>

              {/* Code Snippet Tag */}
              <div className="absolute bottom-16 left-0 sm:-left-8 bg-retro-bg/80 backdrop-blur-xl border border-retro-text/10 p-3 sm:p-4 rounded-2xl shadow-xl z-20 rotate-[-12deg] hover:rotate-0 hover:scale-110 transition-all cursor-default">
                <span className="text-retro-accent font-mono font-bold text-lg sm:text-xl">&lt;/&gt;</span>
              </div>

              {/* Tech Symbol Tag */}
              <div className="absolute bottom-6 right-8 sm:-right-2 bg-retro-bg/80 backdrop-blur-xl border border-retro-text/20 p-3 sm:p-4 rounded-xl shadow-xl z-20 rotate-[15deg] hover:rotate-0 hover:scale-110 transition-all font-bold font-mono text-xl cursor-default text-retro-primary">
                {`{ }`}
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
                <h3 className="text-2xl font-bold text-retro-primary mb-4 font-mono">&gt; init_developer()</h3>
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
        {/* Experiences Section */}
        <section id="experiences" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24">
          <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-4">Experiences</h2>
          <HoverEffect items={experienceItems} />
        </section>

        {/* Education Section */}
        <section id="education" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24">
          <h2 className="text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-4">Education & Development</h2>
          <HoverEffect items={educationItems} />
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
              <Palette className="w-12 h-12 text-retro-secondary mb-4 drop-shadow-md" />
              <h3 className="font-bold text-xl text-retro-text">Painting</h3>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <Video className="w-12 h-12 text-retro-accent mb-4 drop-shadow-md" />
              <h3 className="font-bold text-xl text-retro-text">Video Editing</h3>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <Youtube className="w-12 h-12 text-retro-accent mb-4 drop-shadow-md" />
              <h3 className="font-bold text-xl text-retro-text">Social Media</h3>
              <p className="opacity-90 text-sm mt-1 text-retro-text">YouTube & IG</p>
            </GlowingStarsBackgroundCard>
            <GlowingStarsBackgroundCard className="min-h-[220px] flex flex-col items-center justify-center text-center">
              <Tv className="w-12 h-12 text-retro-primary mb-4 drop-shadow-md" />
              <h3 className="font-bold text-xl text-retro-text">Bingeing</h3>
              <p className="opacity-90 text-sm mt-1 text-retro-text">Netflix</p>
            </GlowingStarsBackgroundCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center py-24">
          <CardContainer className="inter-var w-full">
            <CardBody className="bg-retro-bg relative group/card border-black/[0.1] w-[90%] sm:w-[45rem] min-h-[400px] h-auto rounded-3xl p-0 border border-retro-secondary/50 overflow-hidden shadow-[0_0_30px_-5px_var(--color-secondary)]">
              <DottedGlowBackground
                className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
                opacity={1}
                gap={15}
                radius={2}
                colorLightVar="--color-primary"
                glowColorLightVar="--color-secondary"
                colorDarkVar="--color-primary"
                glowColorDarkVar="--color-secondary"
                backgroundOpacity={0.1}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
              />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-10">
                <CardItem translateZ="50" className="relative z-20">
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif text-retro-text border-b-4 border-retro-primary pb-2 inline-block mb-10 text-center drop-shadow-md bg-retro-bg/80 px-6 py-2 rounded-xl backdrop-blur-sm">Contact Me</h2>
                </CardItem>
                <CardItem translateZ="100" className="relative z-20 w-full flex flex-col items-center mt-2 px-4">
                  <div className="bg-retro-bg/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border-4 border-retro-primary shadow-xl mb-6">
                    <TextGenerateEffect
                      words="ganguly2904saji@gmail.com | +91 6290919566"
                      className="text-lg sm:text-2xl md:text-3xl text-retro-text !font-mono text-center"
                    />
                  </div>
                  <div className="flex gap-6 mt-2" suppressHydrationWarning>
                    <a href="https://github.com/SajiGanguly" target="_blank" rel="noopener noreferrer" className="p-3 bg-retro-bg border-2 border-retro-primary rounded-full text-retro-text hover:text-white hover:bg-black hover:border-black hover:-translate-y-1 transition-all shadow-md">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/29saji-ganguly-719613169" target="_blank" rel="noopener noreferrer" className="p-3 bg-retro-bg border-2 border-retro-primary rounded-full text-retro-text hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all shadow-md">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://leetcode.com/u/saji2904/" target="_blank" rel="noopener noreferrer" className="p-3 bg-retro-bg border-2 border-retro-primary rounded-full text-retro-text hover:text-[#FFA116] hover:bg-black hover:border-black hover:-translate-y-1 transition-all shadow-md">
                      <SiLeetcode className="w-6 h-6" />
                    </a>
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </section>
      </div>

    </main>
  );
}
