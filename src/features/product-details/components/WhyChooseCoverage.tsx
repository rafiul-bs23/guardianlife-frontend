import React from 'react';
import type { WhyChooseCoverageSection } from '../types';
import { Folder } from 'lucide-react';

interface WhyChooseCoverageProps {
    data: WhyChooseCoverageSection;
}

const WhyChooseCoverage: React.FC<WhyChooseCoverageProps> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="w-full max-w-[1514px] mx-auto mb-16 px-4 py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">
                    {data?.title}
                </h2>
                <p className="text-gray-600 font-medium">
                    {data?.description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Main Card */}
                <div
                    className="relative min-h-[400px] rounded-2xl overflow-hidden bg-cover bg-center p-12 flex flex-col justify-center"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${data?.main_card?.image})` }}
                >
                    <h3 className="text-3xl font-bold text-white mb-4 max-w-sm">
                        {data?.main_card?.title}
                    </h3>
                    <p className="text-white text-lg max-w-md leading-relaxed">
                        {data?.main_card?.description}
                    </p>
                </div>

                {/* Grid of smaller cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data?.cards?.map((card, index) => (
                        <div
                            key={index}
                            className="relative min-h-[190px] rounded-2xl overflow-hidden bg-cover bg-center p-6 flex flex-col justify-end group cursor-pointer"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${card?.image})` }}
                        >
                            <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                <Folder className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-white font-bold text-lg leading-tight group-hover:translate-x-1 transition-transform">
                                    {card?.title}
                                </h4>
                                <p className="text-white/80 text-xs font-medium">
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

export default WhyChooseCoverage;
