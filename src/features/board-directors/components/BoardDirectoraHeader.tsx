import React from 'react';
import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface BoardDirectoraHeaderProps {
    data: HeaderData;
}

const BoardDirectoraHeader: React.FC<BoardDirectoraHeaderProps> = ({ data }) => {
    const { t } = useTranslation('board_directors');

    return (
        <GenericHeader data={data} variant="immersive">
            <div className="w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-end items-start h-full min-h-[400px] md:min-h-[400px] lg:min-h-[500px]">
                {/* Text Content */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-8 leading-none">
                        {t('header.title')}
                    </h1>
                    <p className="text-black text-lg md:text-2xl font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
                        {t('header.subtitle')}
                    </p>
                </div>
            </div>
        </GenericHeader>
    );
};

export default BoardDirectoraHeader;
