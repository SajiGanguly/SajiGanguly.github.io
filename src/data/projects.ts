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
    metrics: string[]; // Performance or target achievements
    keyContributions: string[]; // Detailed accomplishments
    mockupType: "portfolio" | "churn" | "jira" | "pizza" | "cleared";
}

export const projectsData: Project[] = [
    {
        id: "jira-task-analytics",
        title: "Jira Task Analytics Dashboard",
        description: "Built React + Jira REST API analytics tool for engineering teams — visualizing task velocity, sprint burndown, and team productivity with dynamic charts and paginated grid views.",
        techStack: ["React", "Jira REST API", "JavaScript", "CSS"],
        imageFallback: "bg-gradient-to-br from-[#004d7a] to-[#008793]",
        featured: true,
        type: "Personal",
        metrics: ["Velocity: +25%", "Latency: <200ms", "Chart Syncing"],
        keyContributions: [
            "Integrated Jira REST API endpoints with custom authentication proxies for real-time task extraction.",
            "Engineered dynamic velocity and sprint burndown chart visualizations using custom SVG rendering.",
            "Optimized data grid performance using pagination, custom filtering, and React view caching."
        ],
        mockupType: "jira",
    },
    {
        id: "Customer Churn",
        title: "Customer Churn Prediction",
        description: "Predicting customer churn using Kaggle Dataset with ML algorithms, mapping potential risk categories.",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        githubUrl: "https://github.com/SajiGanguly/Customer_Churn",
        imageFallback: "bg-gradient-to-br from-[#004d7a] to-[#008793]",
        featured: true,
        type: "Personal",
        metrics: ["Accuracy: 89%", "F1-Score: 0.86", "Dataset: 10k rows"],
        keyContributions: [
            "Trained and evaluated XGBoost and Random Forest classifiers on Kaggle retail datasets.",
            "Applied SMOTE technique to handle class imbalance, boosting model sensitivity by ~15%.",
            "Conducted detailed feature engineering (correlation matrices, scaling, PCA) to identify key attrition drivers."
        ],
        mockupType: "churn",
    },
    {
        id: "restaurant-table-booking",
        title: "Restaurant Booking & Pizza System",
        description: "Full-stack app with real-time order tracking, custom pizza customization calculation, and Firebase Auth role-based access control.",
        techStack: ["React", "Node.js", "MongoDB", "Firebase"],
        githubUrl: "https://github.com/SajiGanguly/Vite-React-Pizza-Customization-Calculator",
        liveUrl: "https://vite-react-pizza-customization-calculator.vercel.app/",
        imageFallback: "bg-gradient-to-br from-[#1d976c] to-[#93f9b9]",
        featured: true,
        type: "Personal",
        metrics: ["Real-time Sync", "RBAC Admin Panel", "Uptime: 99.9%"],
        keyContributions: [
            "Implemented real-time table occupancy status utilizing MongoDB change streams and WebSockets.",
            "Developed role-based admin dashboard to update order states and pizza pricing components.",
            "Integrated Firebase Client Authentication for secure user signup and profile state syncing."
        ],
        mockupType: "pizza",
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
        metrics: ["JWT / OAuth 2.0", "MERN Backend", "Responsive UI"],
        keyContributions: [
            "Co-authored responsive page designs facilitating secure messaging between cleared candidates and recruiters.",
            "Implemented JSON Web Token (JWT) authorization headers on MERN stack API controllers.",
            "Collaborated on visual aesthetics, optimizing CSS templates to lower bounce rate and increase time-on-site."
        ],
        mockupType: "cleared",
    },
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
        metrics: ["Next.js 16", "Framer Motion", "Tailwind CSS v4"],
        keyContributions: [
            "Built a state-controlled theme selector context offering Light Blue, Navy, and Clean Slate themes.",
            "Created responsive layout components incorporating fluid scroll-reveal animations and custom cursors.",
            "Engineered the 3D rotating coin ring visual to contextualize analytical data points."
        ],
        mockupType: "portfolio",
    },
];
