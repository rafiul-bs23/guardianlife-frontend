import React from 'react';
import type { ProductJourneySection } from '../types';

interface ProductJourneyProps {
    data: ProductJourneySection;
}

const ProductJourney: React.FC<ProductJourneyProps> = ({ data }) => {
    if (!data?.content) return null;

    return (
        <div className='bg-white'>
            <div className="w-full max-w-[1514px] mx-auto mb-16 px-4 bg-white py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">PRODUCT JOURNEY</h2>
                    <p className="text-gray-600 text-sm">Simple Steps to secure your policy</p>
                </div>

                {/* Timeline Container */}
                <div className="relative w-full max-w-5xl mx-auto pt-10 pb-20">

                    {/* Main Horizontal Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1.5 bg-[#2A2B68] -translate-y-1/2 rounded-full"></div>

                    {/* Start Point (0%) */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center">
                        <div className="absolute right-full mr-12 whitespace-nowrap text-sm font-bold text-gray-900">
                            Start Policy
                        </div>
                    </div>

                    {/* End Point (100%) */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center">
                        <div className="absolute left-full ml-12 whitespace-nowrap text-sm font-bold text-gray-900">
                            Maturity
                        </div>
                    </div>

                    {/* Intermediate Points */}
                    {data.content.map((step, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                            style={{ left: `${step.percentage}%` }}
                        >
                            {/* Top Label */}
                            {step.topLabel && (
                                <div className="absolute bottom-full mb-6 whitespace-nowrap">
                                    <span className="text-sm font-bold text-gray-900">{step.topLabel}</span>
                                </div>
                            )}

                            {/* The Dot */}
                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#EB6925] border-2 border-[#2A2B68] shadow-sm z-10 relative">

                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#2A2B68]"></div>

                                {step.topLabel && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#2A2B68]"></div>
                                )}
                            </div>

                            {/* Bottom Label */}
                            {step.bottomLabel && (
                                <div className="absolute top-full mt-6 whitespace-nowrap">
                                    <span className="text-sm font-bold text-gray-900">{step.bottomLabel}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductJourney;
