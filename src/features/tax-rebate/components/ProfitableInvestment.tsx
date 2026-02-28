import React from 'react';
import type { ProfitableInvestmentData } from '../types';

interface ProfitableInvestmentProps {
    data: ProfitableInvestmentData;
}

const ProfitableInvestment: React.FC<ProfitableInvestmentProps> = ({ data }) => {
    return (
        <section className="pb-24 pt-10 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#212529] md:max-w-4xl mb-12 leading-relaxed">
                    {data.title}
                </h2>

                <div className="space-y-6 ml-2">
                    {data.points.map((point) => (
                        <div key={point.id} className="flex items-start gap-4 group">
                            {/* Dot Bullet */}
                            <div className="mt-2 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-black group-hover:scale-125 transition-transform duration-300" />
                            </div>

                            {/* Point Text */}
                            <p className="text-[17px] font-extrabold text-[#212529] tracking-tight uppercase">
                                {point.id}. {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfitableInvestment;
