import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEmc } from '../hooks/useEmc';
import EmcCard from './EmcCard';

const EmcList: React.FC = () => {
    const { t } = useTranslation('emc');
    const { data: members, isLoading, error } = useEmc();

    return (
        <section className="py-16 px-4 md:px-12 max-w-full mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#212529] uppercase tracking-wide">
                    {t('list.section_title')}
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
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        {members?.map((member, index) => (
                            <EmcCard key={index} member={member} />
                        ))}
                        {/* Spacers to prevent last row flex items from over-stretching */}
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={`spacer-${i}`} className="h-0 flex-auto w-[40%] sm:w-[25%] md:w-[20%] lg:w-[13%] invisible" aria-hidden="true" />
                        ))}
                    </div>

                    {!members || members.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            {t('list.empty_state')}
                        </div>
                    ) : null}
                </div>
            )}
        </section>
    );
};

export default EmcList;
