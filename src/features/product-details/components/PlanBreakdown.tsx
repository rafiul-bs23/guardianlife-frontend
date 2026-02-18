import React from 'react';
import type { PlanBreakdownSection, BreakdownItem } from '../types';

interface PlanBreakdownProps {
    data: PlanBreakdownSection;
}

const PlanBreakdown: React.FC<PlanBreakdownProps> = ({ data }) => {
    if (!data?.content?.length) return null;

    return (
        <section className="w-full max-w-[1514px] mx-auto mb-16 px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">
                    Your Plan, Your Way
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                    Flexible options designed to fit your unique financial journey.
                </p>
            </div>

            {/* Breakdown Blocks */}
            <div className="flex flex-col gap-6  mx-auto">
                {data.content.map((item, index) => (
                    <BreakdownBlock key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

const BreakdownBlock: React.FC<{ item: BreakdownItem }> = ({ item }) => {
    const isEligibilityItem = item.title.includes('Eligibility');

    return (
        <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Block Header */}
            <div className="bg-[#FFEEE5] px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                </h3>
            </div>

            {/* Block Body */}
            <div className="bg-white p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    {item.points.map((point, idx) => (
                        <p key={idx} className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {point}
                        </p>
                    ))}
                </div>

                {/* Dynamic Content for Eligibility Scale */}
                {isEligibilityItem && item.additionalData && (
                    <EligibilityScale min={item.additionalData.min} max={item.additionalData.max} />
                )}
            </div>
        </div>
    );
};

const EligibilityScale: React.FC<{ min: number; max: number }> = ({ min, max }) => {


    const labels = [20, 30, 40, 60, 50, 65];
    const maxScaleVal = 65;
    const minScaleVal = 20;

    // Calculate percentage positions for labels for a 20-65 range
    const getPos = (val: number) => ((val - minScaleVal) / (maxScaleVal - minScaleVal)) * 100;

    return (
        <div className="mt-8 mb-12 px-4">
            <div className="relative w-full h-12 flex items-end">
                {/* Scale Ticks and Labels */}
                {labels.map((label, idx) => (
                    <div
                        key={idx}
                        className="absolute flex flex-col items-center gap-2"
                        style={{ left: `${getPos(label)}%`, transform: 'translateX(-50%)' }}
                    >
                        <span className="text-xs font-bold text-gray-600">{label}</span>
                        <div className="w-0.5 h-4 bg-gray-400"></div>
                    </div>
                ))}

                {/* Red/Orange Bar Background (Dashed/Dotted Look) */}
                <div className="absolute w-full h-px border-t-2 border-dashed border-gray-400" style={{ bottom: '2px' }}></div>
            </div>

            {/* Progress Bar with Handles */}
            <div className="relative w-full h-8 mt-2 bg-gray-200 rounded-full overflow-visible">
                <div
                    className="absolute h-full bg-[#EB6925] rounded-full flex items-center justify-between"
                    style={{ left: `${getPos(min)}%`, right: `${100 - getPos(max)}%` }}
                >
                    {/* Left Handle */}
                    <div className="w-8 h-8 bg-[#EB6925] rounded-full border-4 border-white shadow-md -ml-0 shrink-0 transition-transform hover:scale-110"></div>
                    {/* Right Handle */}
                    <div className="w-8 h-8 bg-[#EB6925] rounded-full border-4 border-white shadow-md -mr-0 shrink-0 transition-transform hover:scale-110"></div>
                </div>
            </div>
        </div>
    );
};

export default PlanBreakdown;
