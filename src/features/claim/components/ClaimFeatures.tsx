import React from 'react';
import type { FeaturesSection } from '../types';

interface ClaimFeaturesProps {
    data: FeaturesSection;
}

const ClaimFeatures: React.FC<ClaimFeaturesProps> = ({ data }) => {
    if (!data?.items?.length) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#FFDCC8] rounded-[24px] p-8 flex flex-col gap-6 hover:shadow-lg transition-all duration-300 h-full group"
                        >
                            {/* Card Header: Icon + Title */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-[19px] font-extrabold text-gray-900 leading-tight group-hover:text-[#EB6925] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Card Body: Description */}
                            <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClaimFeatures;
