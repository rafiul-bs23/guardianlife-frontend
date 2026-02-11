import React from 'react';
import type { PlanBenefitsSection as PlanBenefitsSectionType } from '../types';
import Button from '../../../shared/Components/Button';
import { ShieldCheck } from 'lucide-react';

interface PlanBenefitsSectionProps {
    data: PlanBenefitsSectionType;
}

const PlanBenefitsSection: React.FC<PlanBenefitsSectionProps> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full bg-[#F4F7F9]">
            <div className="max-w-[1514px] mx-auto px-4 py-20 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-[42px] font-bold text-gray-900 mb-4 uppercase tracking-tight">PLAN BENEFITS</h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                        {data.description}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Left Side: Cards Grid */}
                    <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-row items-start gap-5 transition-all hover:shadow-lg hover:border-orange-200 group min-h-[160px]"
                            >
                                {/* Icon Circle */}
                                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FFEEE5] flex items-center justify-center p-2.5 group-hover:bg-[#FFE4D5] transition-colors shadow-sm">
                                    <ShieldCheck className="w-6 h-6 text-[#EB6925]" />
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-extrabold text-[#2A2B68] leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Benefit Points List */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-between self-stretch py-2">
                        <div className="flex flex-col gap-6 mb-12">
                            {data.points.map((point, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <p className="text-[15px] leading-relaxed">
                                        <span className="font-extrabold text-gray-900">{point.title}:</span>{' '}
                                        <span className="text-gray-800 font-medium">{point.description}</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Calculate Tax Button */}
                        <div className="flex justify-start">
                            <Button
                                label="Calculate Tax"
                                variant="outline-orange"
                                onClick={() => console.log('Calculate Tax clicked')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanBenefitsSection;
