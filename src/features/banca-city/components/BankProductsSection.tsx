import React from 'react';
import type { BancaProduct } from '../types';
import Card from '../../../shared/Components/Card';
import Icon from '../../../shared/Components/Icon';

interface BankProductsSectionProps {
    products: BancaProduct[];
}

const BankProductsSection: React.FC<BankProductsSectionProps> = ({ products }) => {
    return (
        <section className="py-20 bg-[#F6F7F9]">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-[25px] font-extrabold text-[#1a1f36] mb-4 uppercase tracking-tighter">
                        LIFE INSURANCE SOLUTIONS AVAILABLE AT CITY BANK
                    </h2>
                    <p className="text-gray-600 text-[16px] font-medium leading-relaxed max-w-2xl mx-auto">
                        Guardian Life offers a range of insurance products through City Bank, designed to meet different financial goals and life stages.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Card key={index}>
                            {/* Card Header: Icon + Title */}
                            <div className="flex items-center gap-4 mb-4">

                                <Icon src={product.logo_url} />
                                <h3 className="text-[21px] font-bold text-[#212529] leading-6 tracking-tight">
                                    {product.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-[14px] font-medium leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Large Product Image */}
                            <div className="w-full mb-8">
                                <img
                                    src={product.thumbnail_url}
                                    alt={product.title}
                                    className="w-full h-auto aspect-[16/10] object-cover rounded-xl shadow-inner border border-gray-50"
                                />
                            </div>

                            {/* Footer: Ideal For */}
                            <div className="mt-auto bg-[#F6F7F9]/80 rounded-2xl p-5">
                                <p className="text-[#6C757D] text-[12px] font-bold mb-1 uppercase tracking-tight">
                                    {product.subtitle}:
                                </p>
                                <p className="text-[#212529] text-[13px] font-medium leading-snug">
                                    {product.subtitle_description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankProductsSection;
