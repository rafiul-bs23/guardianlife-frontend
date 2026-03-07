import { motion } from 'framer-motion';
import type { EmcMember } from '../types';

interface EmcCardProps {
    member: EmcMember;
}

const EmcCard: React.FC<EmcCardProps> = ({ member }) => {
    return (
        <motion.div


            className="relative overflow-hidden rounded-xl group cursor-pointer flex-auto w-[40%] sm:w-[25%] md:w-[20%] lg:w-[13%] hover:w-[50%] sm:hover:w-[35%] md:hover:w-[30%] lg:hover:w-[20%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] transition-all duration-300 ease-out"
        >
            <motion.img

                src={member.image_url}
                alt={member.name}
                className="w-full h-full object-cover"
            />
            {/* Overlay with gradient at the bottom only */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4 pb-6">
                <h3 className="text-white text-sm font-bold text-center leading-tight mb-0.5">
                    {member.name}
                </h3>
                <p className="text-white/80 text-[9px] text-center uppercase tracking-wider font-medium">
                    {member.designation}
                </p>
            </div>
        </motion.div>
    );
};

export default EmcCard;
