import React from 'react';
import type { SupplementaryBenefitsSection } from '../types';
import { Plus, Activity } from 'lucide-react';

interface SupplementaryBenefitsProps {
    data: SupplementaryBenefitsSection;
}

const SupplementaryBenefits: React.FC<SupplementaryBenefitsProps> = ({ data }) => {
    if (!data?.content?.length) return null;

    return (
        <section className="bg-[#FFEEE5] py-16 px-4">
            <div className="max-w-[1514px] mx-auto text-center">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">
                    BOOST YOUR COVERAGE
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-12">
                    You Can Add Supplementary Benefits To Smart Add-Ons
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.content.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4 relative hover:shadow-md transition-shadow duration-300 min-h-[160px]"
                        >
                            {/* Plus Icon Badge */}
                            <div className="absolute top-4 right-4 bg-[#FFEEE5] rounded-full p-1 border border-orange-200">
                                <Plus className="w-3 h-3 text-[#EB6925] stroke-[4px]" />
                            </div>

                            {/* Main Icon */}
                            <div className="w-10 h-10 rounded-full bg-[#FFEEE5] flex items-center justify-center p-2">
                                <Activity className="w-6 h-6 text-[#EB6925]" />
                            </div>

                            {/* Text Content */}
                            <div className="text-left flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-normal">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupplementaryBenefits;
