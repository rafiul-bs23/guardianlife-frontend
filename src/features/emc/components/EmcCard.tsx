import React from 'react';
import type { EmcMember } from '../types';

interface EmcCardProps {
    member: EmcMember;
}

const EmcCard: React.FC<EmcCardProps> = ({ member }) => {
    return (
        <div className="relative aspect-[1/2.6] overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img
                src={member.image_url}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        </div>
    );
};

export default EmcCard;
