import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import { Quote } from 'lucide-react';
import ChairmanImg from '../../../assets/images/boardDirectors/1.png';

interface ChairmanHeaderProps {
    data: HeaderData | null;
}

const ChairmanHeader: React.FC<ChairmanHeaderProps> = ({ data }) => {
    return (
        <GenericHeader data={data} variant="immersive" customBgStyles={{ backgroundColor: '#F5F5F5' }}>
            <div className="w-full h-full flex flex-col lg:flex-row items-center lg:items-end justify-between relative px-6 md:px-16 lg:px-24 py-12 lg:py-0 gap-10 lg:gap-0">
                {/* Quote Section Layer - Top on Mobile, Right on Desktop */}
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start relative z-10 self-center mt-12 lg:mt-0 order-1 lg:order-2">
                    {/* Background Quote Icon */}
                    <div className="absolute left-1/2 lg:left-0 top-0 lg:top-0 -translate-y-1/2 lg:-translate-y-1/2 opacity-20 pointer-events-none -translate-x-1/2 lg:-translate-x-12">
                        <Quote className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" fill="white" color="white" />
                    </div>

                    <div className="relative z-20 lg:pl-16 text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-[38px] font-bold text-[#2E3192] leading-[1.3] uppercase tracking-tight">
                            AT GUARDIAN LIFE, OUR CUSTOMERS ARE NOT JUST POLICYHOLDERS—THEY ARE OUR PRINCIPAL STAKEHOLDERS. PROTECTING THEIR FUTURE WITH INTEGRITY, PROFESSIONALISM, AND DIGNITY IS OUR FIRM COMMITMENT.
                        </h1>
                    </div>
                </div>

                {/* Chairman Image Layer - Bottom on Mobile, Left on Desktop */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start items-end relative z-10 order-2 lg:order-1">
                    <img
                        src={ChairmanImg}
                        alt="Chairman"
                        className="max-h-[300px] md:max-h-[450px] lg:max-h-[85%] object-contain"
                    />
                </div>
            </div>
        </GenericHeader>
    );
};

export default ChairmanHeader;
