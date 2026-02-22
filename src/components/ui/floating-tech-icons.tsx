"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiHtml5,
    SiCss3
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaDatabase, FaChartBar } from "react-icons/fa";

const iconsList = [
    SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiMysql, FaChartBar, SiTailwindcss, SiHtml5, SiCss3, FaGithub, FaLinkedin, FaDatabase
];

export const FloatingTechIcons = () => {
    const [icons, setIcons] = useState<{ Icon: any; top: string; left: string; delay: number; duration: number; size: number }[]>([]);

    useEffect(() => {
        // Generate random positions and animation properties only on the client
        const generatedIcons = iconsList.map((Icon) => ({
            Icon,
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 15, // 15s to 30s for slow movement
            size: Math.random() * 20 + 20, // 20px to 40px
        }));

        // Add a second batch for higher density
        const moreIcons = [...generatedIcons, ...iconsList.map((Icon) => ({
            Icon,
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 20,
            size: Math.random() * 20 + 15,
        }))];

        setIcons(moreIcons);
    }, []);

    if (icons.length === 0) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
            {icons.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute text-retro-text mix-blend-overlay"
                    style={{
                        top: item.top,
                        left: item.left,
                    }}
                    animate={{
                        y: ["-30px", "30px", "-30px"],
                        x: ["-20px", "20px", "-20px"],
                        rotate: [0, 15, -15, 0]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay,
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}
        </div>
    );
};
