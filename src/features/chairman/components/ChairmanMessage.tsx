import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ChairmanLocale } from '../types';

interface ChairmanMessageProps {
    chairmanImageUrl: string;
}

const ChairmanMessage: React.FC<ChairmanMessageProps> = ({ chairmanImageUrl }) => {
    const { t } = useTranslation('chairman');

    const localizedMessage = t('message', { returnObjects: true }) as ChairmanLocale;
    const paragraphs = Array.isArray(localizedMessage.paragraphs) ? localizedMessage.paragraphs : [];

    return (
        <section className="py-20 px-4 md:px-12 max-w-[1400px] mx-auto ">
            <div className=" rounded-lg p-4 md:p-12 xl:p-16  ">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#212529] uppercase tracking-wide">
                        {t('message.title')}
                    </h2>
                </div>

                <div className="space-y-12 text-[#212529]">
                    <p className="text-base md:text-lg leading-relaxed text-justify font-bold uppercase">
                        {paragraphs[0]}
                    </p>

                    <div className="flex flex-col md:flex-row gap-24 items-start">
                        <div className="md:w-1/2 space-y-12">
                            {paragraphs.slice(1).map((para, index) => (
                                <p key={index} className="text-base md:text-lg leading-relaxed text-justify font-bold uppercase">
                                    {para}
                                </p>
                            ))}
                        </div>

                        <div className="md:w-1/2 space-y-6">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src={chairmanImageUrl}
                                    alt={t('message.chairman.name')}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl md:text-3xl font-black text-[#212529] uppercase">
                                    {t('message.chairman.name')}
                                </h3>
                                <p className="text-lg font-bold text-[#212529] uppercase">
                                    {t('message.chairman.designation')}
                                </p>
                                <p className="text-sm font-bold text-[#212529] uppercase tracking-tighter">
                                    {t('message.labels.phone')}: {t('message.chairman.phone')}
                                </p>
                                <p className="text-sm font-bold text-[#212529] uppercase tracking-tighter">
                                    {t('message.labels.email')}: {t('message.chairman.email')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;
