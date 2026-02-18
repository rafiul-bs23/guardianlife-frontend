import React from 'react';
import type { WhyMicroMattersData } from '../types';
import { Check } from 'lucide-react';

interface WhyMicroMattersProps {
    data: WhyMicroMattersData;
}

const WhyMicroMatters: React.FC<WhyMicroMattersProps> = ({ data }) => {
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

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Left: Image Container */}
                    <div className="relative w-full max-w-[500px]">
                        <div className="rounded-[60px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Microinsurance concept"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Benefits List */}
                    <div className="flex flex-col gap-8 max-w-[600px]">
                        <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                            It helps families:
                        </h3>

                        <div className="space-y-6">
                            {data.benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-5 group">
                                    {/* Orange Checkmark Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            <Check className="w-5 h-5 text-white stroke-[3px]" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h4 className="text-[17px] font-extrabold text-[#32367B] leading-tight">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMicroMatters;
