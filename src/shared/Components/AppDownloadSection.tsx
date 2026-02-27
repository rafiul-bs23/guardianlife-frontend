import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { sharedAppDownloadData } from '../api/mockData';
import AppStoreButtons from './AppStoreButtons';

const AppDownloadSection: React.FC = () => {
    const data = sharedAppDownloadData;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                {/* Header */}
                <div className="mb-12 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Image Area with Hand Holding Phone */}
                    <div className="relative w-full max-w-[500px]">
                        <div className="rounded-[60px] overflow-hidden">
                            <img
                                src={`/${data.image}`}
                                alt="Download App"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <AppStoreButtons className='flex flex-col sm:flex-row gap-6' />

                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
