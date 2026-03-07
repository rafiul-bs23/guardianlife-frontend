import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    glowColor?: string;
    strokeWidth?: number;
    lines?: number;      // Number of moving borders (1, 2, 3, etc.)
    dashLength?: number; // Length of the solid line (relative to 100)
    duration?: number;   // Speed of the animation in seconds
    borderRadius?: number; // Matches the container's border radius
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    color = '#d6662a',
    glowColor = '#EB6925',
    strokeWidth = 0.5,
    lines = 1,
    dashLength = 25,
    duration = 12,
    borderRadius = 12, // 12px matches Tailwind's 'rounded-xl'
}) => {
    // Math to ensure a perfect, unbreakable loop
    const segmentLength = 100 / lines;
    const gap = segmentLength - dashLength;
    const dashArray = `${dashLength} ${gap}`;

    return (
        <div
            className={`relative bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ${className}`}
            style={{ borderRadius: `${borderRadius}px` }}
        >
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx={borderRadius}
                    ry={borderRadius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray={dashArray}
                    style={{
                        filter: `drop-shadow(0 0 3px ${glowColor}) drop-shadow(0 0 6px ${glowColor})`
                    }}
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </svg>

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Card;