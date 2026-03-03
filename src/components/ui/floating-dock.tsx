import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

export const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden z-50", className)}>
            <AnimatePresence>
                {open && (
                    <div className="absolute inset-0 z-40 pointer-events-none">
                        {items.map((item, idx) => {
                            let radius = 100;
                            let angle = -90;

                            if (items.length === 8) {
                                if (idx < 3) {
                                    radius = 85;
                                    angle = -90 - (90 * (idx / 2));
                                } else {
                                    radius = 160;
                                    angle = -90 - (90 * ((idx - 3) / 4));
                                }
                            } else {
                                radius = 120;
                                angle = -90 - (90 * (idx / (items.length - 1 || 1)));
                            }

                            const radians = angle * (Math.PI / 180);
                            const x = Math.cos(radians) * radius;
                            const y = Math.sin(radians) * radius;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, x, y, scale: 1 }}
                                    exit={{ opacity: 0, x: 0, y: 0, scale: 0.5, transition: { delay: (items.length - 1 - idx) * 0.05 } }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 }}
                                    className="absolute top-1 left-1 pointer-events-auto"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="h-10 w-10 rounded-full bg-retro-bg flex flex-col items-center justify-center border-2 border-retro-secondary/50 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-retro-secondary/20 transition-all text-retro-text relative group"
                                    >
                                        <div className="h-4 w-4">{item.icon}</div>
                                        <span className="absolute -top-7 bg-retro-secondary text-retro-bg text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md font-bold">
                                            {item.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="relative z-50 h-12 w-12 rounded-full bg-gradient-to-tr from-retro-primary to-retro-accent shadow-[0_0_15px_rgba(159,226,191,0.5)] flex items-center justify-center border border-retro-primary/50 text-white"
            >
                <motion.div
                    animate={{ rotate: open ? -180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconLayoutNavbarCollapse className="h-6 w-6" />
                </motion.div>
            </button>
        </div>
    );
};

export const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-retro-bg/50 backdrop-blur-md px-4 pb-3 border border-retro-secondary/20",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-retro-secondary/10 flex items-center justify-center relative border border-retro-secondary/20 hover:bg-retro-secondary/20 transition-colors"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-nowrap rounded-md bg-retro-secondary border-retro-secondary/50 text-retro-bg absolute left-1/2 -translate-x-1/2 -bottom-8 w-fit text-xs font-bold"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center text-retro-primary"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
