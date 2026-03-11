import React from 'react';
import { useMancom } from '../hooks/useMancom';

const MancomSection: React.FC = () => {
    const { members, isLoading, error } = useMancom();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members?.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                            style={{ aspectRatio: '3/4' }}
                        >
                            {/* Full-card image */}
                            <img
                                src={member?.image_url}
                                alt={member?.name}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* White footer section — expands to 100% height and turns transparent black on hover */}
                            <div className="absolute bottom-0 left-0 right-0  px-4 transition-all duration-500 ease-in-out h-[90px] group-hover:h-full flex flex-col items-center justify-center bg-white group-hover:bg-black/60">
                                <h3 className="font-bold text-lg leading-tight text-center duration-500 text-gray-900 group-hover:text-white ">
                                    {member?.name}
                                </h3>
                                <p className="font-semibold text-sm mt-1 uppercase tracking-wide leading-tight text-center duration-500 text-amber-500 group-hover:text-amber-400 ">
                                    {member?.designation}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MancomSection;
