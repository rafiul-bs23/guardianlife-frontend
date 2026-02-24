import React from 'react';
import DirectorCard from './DirectorCard';
import type { BoardDirectorsData } from '../types';

interface BoardDirectorsListProps {
    data: BoardDirectorsData;
}

const BoardDirectorsList: React.FC<BoardDirectorsListProps> = ({ data }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-black text-[#111827] uppercase tracking-widest">
                        BOARD OF DIRECTORS
                    </h2>
                </div>
                {data?.directors?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                        {data?.directors?.map((director, index) => (
                            <DirectorCard key={director?.id || index} director={director} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-500">No board directors found</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BoardDirectorsList;
