"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ChecksBackgroundProps {
    className?: string;
    variant?: "checkerboard" | "retro-grid" | "crosses";
}

export function ChecksBackground({
    className,
    variant = "checkerboard",
}: ChecksBackgroundProps) {

    const getPattern = () => {
        switch (variant) {
            case "checkerboard":
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60"><rect width="50" height="50" fill="black" /><rect x="50" y="50" width="50" height="50" fill="black" /></svg>`;
            case "retro-grid":
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" stroke-width="3" /></svg>`;
            case "crosses":
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60"><path d="M 50 35 L 50 65 M 35 50 L 65 50" fill="none" stroke="black" stroke-width="4" /></svg>`;
            default:
                return "";
        }
    };

    const svgData = "data:image/svg+xml," + encodeURIComponent(getPattern());

    return (
        <div
            className={cn("absolute inset-0 h-full w-full pointer-events-none flex items-center justify-center", className)}
        >
            <div
                className="absolute inset-0 bg-retro-text"
                style={{
                    opacity: 0.04,
                    maskImage: `url("${svgData}")`,
                    WebkitMaskImage: `url("${svgData}")`,
                }}
            />
            {/* Central focus blur layer to create the 'blurred out checks' depth-of-field effect */}
            <div
                className="absolute inset-0 backdrop-blur-[3px]"
                style={{
                    maskImage: "radial-gradient(circle at center, transparent 10%, black 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, transparent 10%, black 80%)"
                }}
            />
        </div>
    );
}
