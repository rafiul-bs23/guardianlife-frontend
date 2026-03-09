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
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">PRODUCT JOURNEY</h2>
                    <p className="text-gray-600 text-sm">Simple Steps to secure your policy</p>
                </div>

                {/* Timeline Container */}
                {(() => {
                    const topLabelSteps = data.content.filter(step => !!step.top_label);
                    const totalTopLabels = topLabelSteps.length;
                    const maxTopLevel = totalTopLabels > 2 ? 2 : (totalTopLabels === 2 ? 1 : 0);

                    const bottomLabelSteps = data.content.filter(step => !!step.bottom_label);
                    const totalBottomLabels = bottomLabelSteps.length;
                    const maxBottomLevel = totalBottomLabels > 2 ? 2 : (totalBottomLabels === 2 ? 1 : 0);

                    // Dynamic padding based on how high/low the labels go
                    const containerPaddingTop = maxTopLevel === 2 ? 'pt-80' : (maxTopLevel === 1 ? 'pt-48' : 'pt-24');
                    const containerPaddingBottom = maxBottomLevel === 2 ? 'pb-60' : (maxBottomLevel === 1 ? 'pb-36' : 'pb-20');

                    return (
                        <div className={`relative w-full max-w-5xl mx-auto ${containerPaddingTop} ${containerPaddingBottom}`}>

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
                            {data?.content?.map((step, index) => {
                                // Top label logic
                                const topLabelIndex = topLabelSteps.indexOf(step);
                                const topLevel = totalTopLabels <= 1 ? 0 : (topLabelIndex >= 0 ? topLabelIndex % 3 : 0);

                                // Bottom label logic
                                const bottomLabelIndex = bottomLabelSteps.indexOf(step);
                                const bottomLevel = totalBottomLabels <= 1 ? 0 : (bottomLabelIndex >= 0 ? bottomLabelIndex % 3 : 0);

                                const topMargins = ['mb-6', 'mb-[104px]', 'mb-[184px]'];
                                const topLineHeights = ['h-6', 'h-[104px]', 'h-[184px]'];

                                const bottomMargins = ['mt-4', 'mt-[64px]', 'mt-[124px]'];
                                const bottomLineHeights = ['h-4', 'h-[64px]', 'h-[124px]'];

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                                        style={{ left: `${step?.percentage}%` }}
                                    >
                                        {/* Top Label */}
                                        {step?.top_label && (
                                            <div className={`absolute bottom-full ${topMargins[topLevel]} w-48 text-center`}>
                                                <span className="text-sm font-bold text-gray-900 leading-tight block">
                                                    {step?.top_label}
                                                </span>
                                            </div>
                                        )}

                                        {/* The Dot */}
                                        <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#EB6925] border-2 border-[#2A2B68] shadow-sm z-10 relative">

                                            {/* Bottom Line Segment */}
                                            {step?.bottom_label && (
                                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 ${bottomLineHeights[bottomLevel]} bg-[#2A2B68]`}></div>
                                            )}
                                            {!step?.bottom_label && (
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#2A2B68]"></div>
                                            )}

                                            {/* Top Line Segment */}
                                            {step?.top_label && (
                                                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 ${topLineHeights[topLevel]} bg-[#2A2B68]`}></div>
                                            )}
                                        </div>

                                        {/* Bottom Label */}
                                        {step?.bottom_label && (
                                            <div className={`absolute top-full ${bottomMargins[bottomLevel]} w-48 text-center`}>
                                                <span className="text-sm font-bold text-gray-900 leading-tight block">
                                                    {step?.bottom_label}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })()}
            </div>
        </div>
    );
};

export default ProductJourney;
