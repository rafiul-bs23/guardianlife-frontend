import React from 'react';
import type { MancomHeroData } from '../types';

interface MancomHeroProps {
    data: MancomHeroData;
}

const MancomHero: React.FC<MancomHeroProps> = ({ data }) => {
    return (
        <section className="pt-24 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-black text-[#111827] uppercase tracking-wider">
                        {data.title}
                    </h1>
                </div>

                <div className="relative  mx-auto">
                    {/* Shadow/Gradient overlay is built-in to the design usually, but we can add a subtle one if needed */}
                    <div className="relative rounded-t-[40px] overflow-hidden">
                        <img
                            src={`/${data.image}`}
                            alt={data.title}
                            className="w-full h-auto object-cover"
                        />
                        {/* Subtle dark gradient overlay at the bottom to match the design */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MancomHero;
