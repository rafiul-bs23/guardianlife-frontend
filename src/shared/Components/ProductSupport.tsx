import React from 'react';
import type { ProductDocumentsSection, LearnMoreSection } from '../types/product';

import { FileText, ClipboardCheck, Search } from 'lucide-react';
import VideoThumbnail from './VideoSection';

interface ProductSupportProps {
    documents: ProductDocumentsSection;
    learnMore: LearnMoreSection;
}

const ProductSupport: React.FC<ProductSupportProps> = ({ documents, learnMore }) => {
    // Helper to get icon based on title
    const getDocIcon = (title: string) => {
        if (title.toLowerCase().includes('brochure')) return <FileText className="w-4 h-4 text-gray-600" />;
        if (title.toLowerCase().includes('policy')) return <ClipboardCheck className="w-4 h-4 text-gray-600" />;
        if (title.toLowerCase().includes('terms')) return <Search className="w-4 h-4 text-gray-600" />;
        return <FileText className="w-4 h-4 text-gray-600" />;
    };

    return (
        <section className="w-full max-w-[1514px] mx-auto px-4 py-16 md:px-8 border-t border-gray-100 mt-8">
            <div className="flex flex-col lg:flex-row gap-16">

                {/* Product Documents Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Documents</h2>
                    <div className="flex flex-wrap gap-4">
                        {documents?.content?.map((doc, index) => (
                            <a
                                key={index}
                                href={doc?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 border border-[#FF8D4D] rounded-xl hover:bg-orange-50 transition-colors bg-white shadow-sm"
                            >
                                {getDocIcon(doc?.title)}
                                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                                    {doc?.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Learn More Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Learn More</h2>
                    <div className="flex flex-wrap gap-6">
                        {learnMore?.content?.map((video, index) => (
                            <div key={index} className="flex flex-col gap-3 group cursor-pointer w-[240px]">
                                <VideoThumbnail
                                    thumbnail={"/assets/images/productDetails/videoOvarlay.png"}
                                    title={video?.title}
                                    aspectRatio="video"
                                    rounded="rounded-2xl"
                                    url={video?.video_url || ""}
                                />
                                <span className="text-sm font-bold text-gray-900 leading-tight">
                                    {video?.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductSupport;
