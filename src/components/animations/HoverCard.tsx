import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
    children: ReactNode;
    className?: string;
    scale?: number;
}

export const HoverCard = ({
    children,
    className = "",
    scale = 1.02,
}: HoverCardProps) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: scale,
                transition: { duration: 0.2, ease: "easeOut" },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
