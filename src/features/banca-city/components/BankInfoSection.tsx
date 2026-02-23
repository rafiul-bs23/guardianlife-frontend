import React from 'react';
import type { BancaBank } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface BankInfoSectionProps {
    data: BancaBank;
}

const BankInfoSection: React.FC<BankInfoSectionProps> = ({ data }) => {
    return (
        <section className="py-20 bg-[#F6F7F9]">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        <h2 className="text-[19px] font-extrabold text-[#212529] tracking-tight">
                            {data.title || "Partnership Introduction"}
                        </h2>

                        {/* Assuming description might be long or have newlines, we preserve whitespace or just display it cleanly */}
                        <div className="text-gray-600 text-[15px] leading-relaxed font-medium space-y-4 whitespace-pre-line">
                            {data.description}
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#F37021]" fill="#F37021" stroke="white" strokeWidth={2} />
                            <p className="text-gray-600 font-bold text-sm">
                                {data.active_since || data.footer}
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Container */}
                    <div className="w-full lg:w-1/2 flex justify-end">
                        <div className="w-full max-w-[550px]">
                            <img
                                src={data.image_url}
                                alt={data.title}
                                className="w-full object-cover rounded-[20px] shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BankInfoSection;
