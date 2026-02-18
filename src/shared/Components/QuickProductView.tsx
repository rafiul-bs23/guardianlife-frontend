import React from 'react';
import type { QuickProductSection, ContentItem } from '../types/product';
import { Zap } from 'lucide-react';

interface QuickProductViewProps {
    data: QuickProductSection;
    title?: string;
    subtitle?: string;
}

const QuickProductView: React.FC<QuickProductViewProps> = ({
    data,
    title = "QUICK PRODUCT",
    subtitle = "Key Plan Details At A Glance",
}) => {
    if (!data?.content?.length) return null;

    const itemCount = data.content.length;
    // Dynamic grid columns based on user request:
    // 2 items -> lg:grid-cols-2
    // 3 items -> lg:grid-cols-3
    // 4 items -> lg:grid-cols-4
    // > 4 items -> lg:grid-cols-3
    const lgGridCols = itemCount <= 4 ? `lg:grid-cols-${itemCount}` : 'lg:grid-cols-3';

    return (
        <div className='bg-[#F8F9FA]'>
            <div className="w-full max-w-[1514px] mx-auto py-16 px-4">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* Grid Container */}
                <div className="max-w-[1200px] mx-auto">
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${lgGridCols} gap-6`}>
                        {data.content.map((item: ContentItem, index: number) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-5 transition-all hover:shadow-md group"
                            >
                                {/* Icon Circle */}
                                <div className="w-12 h-12 rounded-full bg-[#FFEEE5] flex items-center justify-center p-2.5 group-hover:bg-[#FFE4D5] transition-colors">
                                    <Zap className="w-full h-full text-[#EB6925]" />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.1em]">
                                        {item.title}
                                    </span>
                                    <span className="text-lg font-bold text-[#2A2B68] leading-tight">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickProductView;
