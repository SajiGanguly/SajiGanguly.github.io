"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "default" | "dark" | "mint";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Start with 'default', but we'll override it immediately if we find a saved theme
    const [theme, setThemeState] = useState<Theme>("default");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Run once on mount to get the saved theme
        const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
        if (savedTheme && ["default", "dark", "mint"].includes(savedTheme)) {
            setThemeState(savedTheme);
        }
        setMounted(true);
    }, []);

    // Custom setter to also update localStorage
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    };

    useEffect(() => {
        if (!mounted) return;

        // Apply the theme to the HTML element
        const htmlElement = document.documentElement;
        if (theme === "default") {
            htmlElement.removeAttribute("data-theme");
        } else {
            htmlElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {!mounted ? (
                <div style={{ visibility: 'hidden' }}>{children}</div>
            ) : (
                children
            )}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
