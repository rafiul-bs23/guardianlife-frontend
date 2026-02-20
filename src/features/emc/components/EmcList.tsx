import React from 'react';
import { useEmc } from '../hooks/useEmc';
import EmcCard from './EmcCard';

const EmcList: React.FC = () => {
    const { data: members, isLoading, error } = useEmc();

    return (
        <section className="py-16 px-4 md:px-12 max-w-full mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#212529] uppercase tracking-wide">
                    EXTENDED MANAGEMENT COMMITTEE
                </h2>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center min-h-[400px] bg-white rounded-lg ">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : error ? (
                <div className="text-center  text-red-500 rounded-lg p-4  md:p-8 shadow-sm">
                    <p className="text-lg font-medium">{error}</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg p-4  md:p-8 shadow-xl shadow-gray-200/50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        {members?.map((member, index) => (
                            <EmcCard key={index} member={member} />
                        ))}
                    </div>

                    {!members || members.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            No members found for the Extended Management Committee.
                        </div>
                    ) : null}
                </div>
            )}
        </section>
    );
};

export default EmcList;
