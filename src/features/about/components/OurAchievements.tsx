import React from 'react';
import { Star } from 'lucide-react';
import type { OurAchievementsData } from '../types';

interface OurAchievementsProps {
    data: OurAchievementsData;
}

const OurAchievements: React.FC<OurAchievementsProps> = ({ data }) => {
    return (
        <section className="py-24 bg-[#FDE6D7]/30">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[28px] md:text-[32px] font-black text-[#111827] uppercase tracking-wide">
                        {data.title}
                    </h2>
                    <p className="text-[#4B5563] text-sm md:text-base leading-relaxed max-w-[800px] mx-auto opacity-90">
                        {data.description}
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left side: Achievement Cards */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        {data.achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] p-6 pr-10 border border-transparent shadow-sm flex items-center gap-6 transition-all duration-300 hover:shadow-lg hover:border-primary/10 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#FDE6D7] flex items-center justify-center text-[#EB6925] shrink-0">
                                    <Star size={28} fill="currentColor" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[18px] md:text-[20px] font-black text-[#111827] leading-tight">
                                        {achievement.title}
                                    </h4>
                                    <span className="text-[#4B5563] text-sm md:text-base font-bold opacity-70 mt-1">
                                        {achievement.subtitle}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Trophies Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Our Achievements Trophies"
                                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievements;
