import React from 'react';
import { useMicroSolutions } from '../hooks/useMicroSolutions';
import { Check } from 'lucide-react';

const MicroSolutions: React.FC = () => {
    const { data, isLoading, error } = useMicroSolutions();

    if (isLoading) {
        return (
            <div className="py-20 bg-[#F8FAFC] flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="py-20 bg-[#F8FAFC] flex items-center justify-center min-h-[400px]">
                <p className="text-red-500 font-bold">Failed to load solutions: {error || 'Data not found'}</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {data.solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Card Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden aspect-[4/3]">
                                <img
                                    src={`/${solution.image}`}
                                    alt={solution.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-[19px] font-black text-gray-900 mb-2 leading-tight">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-500 font-bold text-[13px] mb-6 leading-relaxed">
                                    {solution.subtitle}
                                </p>

                                {/* Points List */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {solution.points.map((point, pIndex) => (
                                        <div key={pIndex} className="flex gap-2 items-start">
                                            <div className="mt-1 flex-shrink-0">
                                                <Check className="w-4 h-4 text-primary stroke-[3px]" />
                                            </div>
                                            <span className="text-gray-600 text-[13px] font-medium leading-relaxed">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Highlight Footer */}
                                <div className="pt-4 mt-auto">
                                    <p className="text-[#EB6925] text-[13px] font-bold leading-relaxed">
                                        {solution.footerHighlight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MicroSolutions;
