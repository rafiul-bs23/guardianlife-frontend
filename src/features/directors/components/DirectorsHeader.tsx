import React from 'react';
import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface DirectorsHeaderProps {
    data: HeaderData;
}

const DirectorsHeader: React.FC<DirectorsHeaderProps> = ({ data }) => {
    const { t } = useTranslation('directors');

    return (
        <GenericHeader data={data} variant="immersive">
            <div className="w-full h-full min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        {t('header.line1')}
                    </span>
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        {t('header.line2')}
                    </span>
                </h1>
            </div>
        </GenericHeader>
    );
};

export default DirectorsHeader;
