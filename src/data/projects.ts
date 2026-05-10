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
        id: "jira-task-analytics",
        title: "Jira Task Analytics Dashboard",
        description: "Built React + Jira REST API analytics tool for engineering teams — visualizing task velocity, sprint burndown, and team productivity with dynamic charts and paginated grid views.",
        techStack: ["React", "Jira REST API", "JavaScript", "CSS"],
        imageFallback: "bg-gradient-to-br from-[#004d7a] to-[#008793]",
        featured: true,
        type: "Personal",
    },
    {
        id: "restaurant-table-booking",
        title: "Restaurant Table Booking & Pizza Ordering System",
        description: "Full-stack app with real-time order tracking and table reservation; Firebase Authentication for role-based access control.",
        techStack: ["React", "Node.js", "MongoDB", "Firebase"],
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
