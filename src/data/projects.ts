import { ReactNode } from "react";

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageFallback: string; // CSS gradient class representing the image
    featured: boolean;
    type: "Personal" | "Work Experience"; // Defines if this was a personal project or professional work
}

export const projectsData: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio",
        description: "Where I showcase my work and skills.",
        techStack: ["React", "Tailwind CSS", "TypeScript", "Aceternity UI"],
        githubUrl: "https://github.com/SajiGanguly/portfolio",
        liveUrl: "https://sajiganguly.github.io/",
        imageFallback: "bg-gradient-to-br from-[#004d7a] to-[#008793]",
        featured: true,
        type: "Personal",
    },
    {
        id: "Customer Churn",
        title: "Customer Churn Prediction",
        description: "Predicting customer churn using Kaggle Dataset.",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        githubUrl: "https://github.com/SajiGanguly/Customer_Churn",
        imageFallback: "bg-gradient-to-br from-[#004d7a] to-[#008793]",
        featured: true,
        type: "Personal",
    },
    {
        id: "Pizza Customization Calculator",
        title: "Pizza Customization Calculator",
        description: "A simple yet effective pizza customization calculator that helps users calculate the cost of their pizza based on the size, crust, and toppings they choose.",
        techStack: ["React", "Express", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/SajiGanguly/Vite-React-Pizza-Customization-Calculator",
        liveUrl: "https://vite-react-pizza-customization-calculator.vercel.app/",
        imageFallback: "bg-gradient-to-br from-[#1d976c] to-[#93f9b9]",
        featured: true,
        type: "Personal",
    },
    {
        id: "cleared-talent",
        title: "Cleared Talent Platform",
        description: "A specialized hiring platform connecting cleared professionals with recruiters. Teamed up with the development team to build few pages for this website with designing and development.",
        techStack: ["HTML/CSS", "JavaScript", "React", "Node.Js"],
        liveUrl: "https://www.clearedtalent.com/",
        imageFallback: "bg-gradient-to-br from-[#4b6cb7] to-[#182848]",
        featured: true,
        type: "Work Experience",
    },
];
