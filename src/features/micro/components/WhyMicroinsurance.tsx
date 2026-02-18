import React from 'react';
import type { WhyMicroinsuranceData } from '../types';
import { ShieldCheck, DollarSign, Zap, HelpCircle, Check } from 'lucide-react';
import { getLightBgByIndex } from '../../../utils/colorUtils';

interface WhyMicroinsuranceProps {
    data: WhyMicroinsuranceData;
}

const iconMap: Record<string, React.ReactNode> = {
    'shield-check': <ShieldCheck className="w-5 h-5" />,
    'dollar-sign': <DollarSign className="w-5 h-5" />,
    'zap': <Zap className="w-5 h-5" />,
    'help-circle': <HelpCircle className="w-5 h-5" />
};

const WhyMicroinsurance: React.FC<WhyMicroinsuranceProps> = ({ data }) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    {/* Left: Cards Grid and Outcomes */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        {/* 2x2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`${getLightBgByIndex(index)} rounded-[16px] p-6 flex flex-col gap-4 transition-all duration-300`}
                                >
                                    <div className={`w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm ${card.iconColor}`}>
                                        {iconMap[card.icon]}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="text-[17px] font-extrabold text-[#32367B] leading-tight">
                                            {card.title}
                                        </h4>
                                        <p className="text-gray-500 text-[13px] font-medium leading-relaxed max-w-[200px]">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Outcomes Section */}
                        <div className="bg-[#F8FAFC] rounded-[24px] p-8 sm:p-10 flex flex-col gap-6">
                            <h4 className="text-[17px] font-extrabold text-[#32367B]">
                                {data.outcomesTitle}
                            </h4>
                            <div className="space-y-3">
                                {data.outcomes.map((outcome, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        <div className="flex-shrink-0">
                                            <Check className="w-4 h-4 text-[#3B82F6] stroke-[3px]" />
                                        </div>
                                        <span className="text-gray-600 text-[14px] font-medium tracking-tight">
                                            {outcome}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Illustration Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Guardian Life Microinsurance"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMicroinsurance;
