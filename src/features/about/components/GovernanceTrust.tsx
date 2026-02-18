import React from 'react';
import { Shield, BarChart, Lock, Briefcase } from 'lucide-react';
import type { GovernanceTrustData } from '../types';

interface GovernanceTrustProps {
    data: GovernanceTrustData;
}

const GovernanceTrust: React.FC<GovernanceTrustProps> = ({ data }) => {
    const getIcon = (iconName: string, color: string) => {
        const props = { size: 24, className: "text-white" };
        switch (iconName) {
            case 'Shield': return <Shield {...props} />;
            case 'BarChart': return <BarChart {...props} />;
            case 'Lock': return <Lock {...props} />;
            case 'Briefcase': return <Briefcase {...props} />;
            default: return <Shield {...props} />;
        }
    };

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue': return { bg: 'bg-[#EFF6FF]', icon: 'bg-blue-600' };
            case 'green': return { bg: 'bg-[#F0FDF4]', icon: 'bg-green-600' };
            case 'purple': return { bg: 'bg-[#FAF5FF]', icon: 'bg-purple-600' };
            case 'orange': return { bg: 'bg-[#FFF7ED]', icon: 'bg-orange-600' };
            default: return { bg: 'bg-gray-50', icon: 'bg-gray-600' };
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-white rounded-[48px] p-8 md:p-12 lg:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] border border-gray-100">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left Side: Content and Grid */}
                        <div className="w-full lg:w-3/5 space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-[28px] md:text-[36px] font-black text-[#111827] leading-tight">
                                    {data.title}
                                </h2>
                                <p className="text-[#4B5563] text-sm md:text-base leading-relaxed opacity-90 max-w-2xl">
                                    {data.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.points.map((point, index) => {
                                    const classes = getColorClasses(point.color);
                                    return (
                                        <div
                                            key={index}
                                            className={`${classes.bg} rounded-[32px] p-8 space-y-4 transition-all duration-300 hover:shadow-md border border-transparent hover:border-black/5`}
                                        >
                                            <div className={`${classes.icon} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-black/5`}>
                                                {getIcon(point.icon, point.color)}
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-[18px] font-black text-[#111827]">
                                                    {point.title}
                                                </h4>
                                                <p className="text-[#4B5563] text-sm leading-relaxed opacity-80">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full lg:w-2/5">
                            <div className="rounded-[40px] overflow-hidden h-full shadow-2xl border border-gray-100">
                                <img
                                    src={`/${data.image}`}
                                    alt="Governance and Trust"
                                    className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GovernanceTrust;
