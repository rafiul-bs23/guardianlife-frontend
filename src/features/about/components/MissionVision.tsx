import React from 'react';
import { Zap, Eye } from 'lucide-react';
import type { MissionVisionData } from '../types';

interface MissionVisionProps {
    data: MissionVisionData;
}

const MissionVision: React.FC<MissionVisionProps> = ({ data }) => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
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

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {/* Mission Card */}
                    <div className="bg-[#FDE6D7]/60 rounded-[40px] p-8 md:p-12 border border-transparent transition-all duration-300 hover:shadow-xl hover:bg-[#FDE6D7]/80 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EB6925]">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-black text-[#111827]">
                                {data.mission.title}
                            </h3>
                        </div>

                        <p className="text-[#111827] font-bold text-lg mb-8 leading-snug">
                            {data.mission.description}
                        </p>

                        <ul className="space-y-4">
                            {data.mission.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="min-w-[10px] h-[10px] rounded-full bg-[#EB6925] mt-1.5 shrink-0" />
                                    <span className="text-[#4B5563] text-sm md:text-base leading-relaxed opacity-90">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#E5E7EB]/60 rounded-[40px] p-8 md:p-12 border border-transparent transition-all duration-300 hover:shadow-xl hover:bg-[#E5E7EB]/80 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#4B4897]">
                                <Eye size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-[#111827]">
                                {data.vision.title}
                            </h3>
                        </div>

                        <p className="text-[#111827] font-bold text-lg mb-8 leading-snug">
                            {data.vision.description}
                        </p>

                        <ul className="space-y-4">
                            {data.vision.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="min-w-[10px] h-[10px] rounded-full bg-[#4B4897] mt-1.5 shrink-0" />
                                    <span className="text-[#4B5563] text-sm md:text-base leading-relaxed opacity-90">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Illustration */}
                <div className="max-w-[1000px] mx-auto rounded-[40px] overflow-hidden shadow-2xl">
                    <img
                        src={`/${data.image}`}
                        alt="Mission and Vision Illustration"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
