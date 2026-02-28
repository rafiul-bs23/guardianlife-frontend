import React from 'react';
import type { Director } from '../types';

interface DirectorCardProps {
    director: Director;
}

const DirectorCard: React.FC<DirectorCardProps> = ({ director }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            {/* Gradient Background Container */}
            <div className="relative w-full aspect-[2.5/4.5] overflow-hidden bg-gradient-to-t from-primary via-primary to-[#f9fafb]">
                {/* Director PNG Image - Positioned at bottom */}
                {director?.image_url ? (
                    <img
                        src={`/${director.image_url}`}
                        alt={director?.name || 'Director'}
                        className="absolute bottom-0 left-0 w-full h-[95%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-bold text-center p-4">
                        Image Unavailable
                    </div>
                )}
            </div>

            <div className="w-full pt-6 text-left space-y-2">
                <h4 className="text-[18px] md:text-[20px] font-black text-[#111827] leading-tight mb-1">
                    {director?.name}
                </h4>
                <p className="text-[14px] font-bold text-[#EB6925] uppercase tracking-wide opacity-90">
                    {director?.designation}
                </p>
            </div>
        </div>
    );
};

export default DirectorCard;
