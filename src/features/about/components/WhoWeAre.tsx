import React from 'react';
import type { WhoWeAreData } from '../types';

interface WhoWeAreProps {
    data: WhoWeAreData;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ data }) => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[28px] md:text-[32px] font-black text-[#111827] uppercase tracking-wide">
                        {data.title}
                    </h2>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left side: Text and Stats */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-6 text-[#4B5563] text-sm md:text-base leading-relaxed text-justify opacity-90">
                            {data.paragraphs.map((p, index) => (
                                <p key={index}>{p}</p>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            {data.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FDE6D7] rounded-[20px] p-6 flex flex-col items-center justify-center min-w-[200px] border border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                                >
                                    <span className="text-[#EB6925] text-[22px] font-black leading-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-gray-500 text-[13px] font-bold mt-1 uppercase tracking-wide">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Image Container */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200/50">
                            <img
                                src={`/${data.image}`}
                                alt="Who We Are"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
