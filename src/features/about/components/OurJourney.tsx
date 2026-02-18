import React from 'react';
import type { OurJourneyData } from '../types';

interface OurJourneyProps {
    data: OurJourneyData;
}

const OurJourney: React.FC<OurJourneyProps> = ({ data }) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[28px] md:text-[32px] font-black text-[#111827] uppercase tracking-wide">
                        {data.title}
                    </h2>
                    <p className="text-[#4B5563] text-sm md:text-base leading-relaxed max-w-[800px] mx-auto opacity-90">
                        {data.description}
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                    {/* Left side: Timeline Image */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="rounded-[40px] overflow-hidden shadow-xl h-full border border-gray-100">
                            <img
                                src={`/${data.image}`}
                                alt="Our Journey Timeline"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side: Journey Cards */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center gap-6">
                        {data.cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/10 group"
                            >
                                <h4 className="text-[20px] font-black text-[#111827] mb-3 transition-colors group-hover:text-primary">
                                    {card.title}
                                </h4>
                                <p className="text-[#4B5563] text-sm md:text-base leading-relaxed opacity-80">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;
