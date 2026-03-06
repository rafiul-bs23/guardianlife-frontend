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
    // Flexbox items will handle responsive widths dynamically

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

                {/* Flex Container */}
                <div className="max-w-[1248px] mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {data.content.map((item: ContentItem, index: number) => {
                            // Dynamic width based on total items to mimic grid
                            let widthClass = 'w-full'; // Mobile default

                            if (itemCount === 1) {
                                widthClass = 'w-full max-w-[400px]';
                            } else if (itemCount === 2) {
                                widthClass = 'w-full md:w-[calc(50%-12px)] lg:max-w-[580px]';
                            } else if (itemCount === 4) {
                                widthClass = 'w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]';
                            } else {
                                // Default for 3 or > 4 items (3 columns)
                                widthClass = 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]';
                            }

                            return (
                                <div
                                    key={index}
                                    className={`${widthClass} bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-5 transition-all hover:shadow-md group`}
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickProductView;
