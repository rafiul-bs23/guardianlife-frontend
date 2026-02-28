import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';


interface MancomHeaderProps {
    data: HeaderData;
}

const MancomHeader: React.FC<MancomHeaderProps> = ({ data }) => {
    return (
        <GenericHeader data={data} variant="immersive">
            <div className="w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-end items-start h-full min-h-[400px] md:min-h-[400px] lg:min-h-[500px]">
                {/* Compass Icon */}


                {/* Text Content */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-8 leading-none">
                        THE CAPTAINS OF  THE SHIP
                    </h1>
                    <p className="text-black text-lg md:text-2xl font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
                        SETTING DIRECTION, STEERING STRATEGY, AND ENSURING GUARDIAN LIFE'S LONG-TERM GROWTH AND GOVERNANCE.
                    </p>
                </div>
            </div>
        </GenericHeader>
    );
};

export default MancomHeader;
