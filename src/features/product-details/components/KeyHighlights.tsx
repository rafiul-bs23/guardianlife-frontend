import React from 'react';
import type { KeyHighlightsSection } from '../types';
import { Zap } from 'lucide-react';

interface KeyHighlightsProps {
    data: KeyHighlightsSection;
}

const KeyHighlights: React.FC<KeyHighlightsProps> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full max-w-[1514px] mx-auto mb-16 px-4 py-8">
            {/* Header */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase">
                Key Highlights
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Description and Points */}
                <div className="flex flex-col gap-8">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {data?.description}
                    </p>

                    <div className="flex flex-col gap-3">
                        {data?.points?.map((point, index) => (
                            <div
                                key={index}
                                className="bg-[#FFEEE5] px-4 py-2 rounded-full text-sm font-medium text-gray-800 flex items-baseline gap-2"
                            >
                                <span className="shrink-0">{index + 1}.</span>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data?.cards?.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                        >
                            {/* Icon */}
                            <div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-[#FFEEE5] flex items-center justify-center">
                                <Zap className="w-6 h-6 text-[#EB6925]" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                                    {card?.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {card?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyHighlights;
