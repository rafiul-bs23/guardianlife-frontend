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
                        {data.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                    {data.directors.map((director) => (
                        <DirectorCard key={director.id} director={director} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardDirectorsList;
