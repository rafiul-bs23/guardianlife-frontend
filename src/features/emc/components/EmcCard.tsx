import { motion } from 'framer-motion';
import type { EmcMember } from '../types';

interface EmcCardProps {
    member: EmcMember;
    /** 1 = default (shows ~70% of portrait width)
     *  hoverGrow = shows ~100% of natural image width */
    flexGrow: number;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const EmcCard: React.FC<EmcCardProps> = ({ member, flexGrow, onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl h-full min-w-0 cursor-pointer"
            /* flexBasis:0 → all width distributed purely via flexGrow ratio */
            style={{ flexBasis: 0, flexShrink: 1 }}
            animate={{ flexGrow }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={member.image_url}
                alt={member.name}
                className="w-full h-full object-cover object-center"
            />

            {/* Gradient overlay — name & designation */}
            <div className="absolute inset-x-0 bottom-0 h-2/5
                            bg-gradient-to-t from-black/90 via-black/50 to-transparent
                            flex flex-col justify-end px-3 pb-4">
                <h3 className="text-white text-xs md:text-sm font-bold text-center leading-snug">
                    {member.name}
                </h3>
                <p className="text-white/70 text-[8px] md:text-xs text-center uppercase tracking-wider font-medium mt-0.5">
                    {member.designation}
                </p>
            </div>
        </motion.div>
    );
};

export default EmcCard;
