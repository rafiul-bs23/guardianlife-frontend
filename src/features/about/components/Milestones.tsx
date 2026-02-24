import React from 'react';
import type { MilestonesData } from '../types';

interface MilestonesProps {
    data: MilestonesData;
}

const Milestones: React.FC<MilestonesProps> = ({ data }) => {
    return (
        <section className="py-24 bg-[#F0F7FF]/50">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[28px] md:text-[32px] font-black text-[#111827] uppercase tracking-wide">
                        {data?.title}
                    </h2>
                    <p className="text-[#4B5563] text-sm md:text-base leading-relaxed max-w-[800px] mx-auto opacity-90">
                        {data?.description}
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                    {/* Left side: Timeline Illustration */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl bg-[#0F172A]">
                            <img
                                src={data?.image ? `/${data.image}` : ''}
                                alt="Timeline Illustration"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side: Vertical Timeline */}
                    <div className="w-full lg:w-[55%] space-y-12 relative">
                        {/* Vertical line connector */}
                        <div className="absolute left-[35px] top-2 bottom-12 w-0.5 bg-blue-200 hidden md:block" />

                        {data?.milestones?.map((milestone, index) => {
                            const milestoneItems = milestone?.items || milestone?.points || [];

                            return (
                                <div key={index} className="relative pl-0 md:pl-20">
                                    {/* Year Marker */}
                                    <div className="hidden md:flex absolute left-0 top-0 w-[70px] h-8 bg-blue-600 text-white rounded-full items-center justify-center font-semibold text-xs shadow-lg shadow-blue-200 z-10">
                                        {milestone?.year}
                                    </div>

                                    {/* Mobile Year Marker */}
                                    <div className="md:hidden inline-flex px-6 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm mb-6">
                                        {milestone?.year}
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-transparent space-y-4 pt-8">
                                        <ul className="space-y-4">
                                            {milestoneItems.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-4">
                                                    <div className="min-w-[10px] h-[10px] rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                                    <span className="text-[#4B5563] text-sm md:text-base leading-relaxed font-medium opacity-90">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestones;
