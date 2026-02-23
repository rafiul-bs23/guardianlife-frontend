import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ThingsToRememberData } from '../types';

interface ThingsToRememberProps {
    data: ThingsToRememberData;
}

const ThingsToRemember: React.FC<ThingsToRememberProps> = ({ data }) => {
    return (
        <section className="mb-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#212529] text-center uppercase mb-12 tracking-wide">
                    {data.title}
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <img
                                src={data.image}
                                alt="Tax Rebate Tips"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="space-y-6">
                            {data.descriptionPoints.map((point, index) => (
                                <p
                                    key={index}
                                    className={`text-[17px] leading-relaxed ${point.isBold ? 'font-bold text-gray-900' :
                                        point.isHighlighted ? 'text-[#F37021] font-medium' :
                                            'text-gray-600 font-medium'
                                        }`}
                                >
                                    {point.text}
                                </p>
                            ))}
                        </div>

                        <div className="mt-4">
                            <button className="group flex items-center bg-[#F37021] text-white rounded-full pl-6 pr-1 py-1.5 hover:bg-[#d95d15] transition-all duration-300 shadow-lg shadow-orange-200">
                                <span className="text-sm font-bold uppercase tracking-wider mr-4">{data.ctaText}</span>
                                <div className="bg-white rounded-full p-2 text-[#F37021] group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={18} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsToRemember;
