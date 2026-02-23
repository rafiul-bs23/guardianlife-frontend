import React from 'react';
import type { QuickProductSection } from '../types';
import { Zap } from 'lucide-react';

interface QuickProductProps {
    data: QuickProductSection;
}

const QuickProduct: React.FC<QuickProductProps> = ({ data }) => {
    if (!data?.content?.length) return null;

    return (
        <div className='bg-[#F8F9FA]'>
            <div className="w-full max-w-[1514px] mx-auto  py-8">
                <div className="  rounded-lg overflow-hidden">

                    {/* Title Section */}
                    <div className="text-center py-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">QUICK PRODUCT</h2>
                        <p className="text-gray-600 text-sm">Key Plan Details At A Glance</p>
                    </div>


                    <div className="px-4 pb-8 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data?.content?.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                                >
                                    {/* Icon Circle */}
                                    <div className="w-10 h-10 rounded-full bg-[#FFEEE5] flex items-center justify-center p-2">
                                        <Zap className="w-6 h-6 text-[#EB6925]" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            {item?.title}
                                        </span>
                                        <span className="text-lg font-bold text-gray-900 leading-tight">
                                            {item?.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickProduct;
