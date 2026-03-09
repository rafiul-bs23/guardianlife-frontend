import React from 'react';
import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface BancaCityHeaderProps {
    data: HeaderData;
    on_explore_click?: () => void;
}

const BancaCityHeader: React.FC<BancaCityHeaderProps> = ({ data, on_explore_click }) => {
    const { t } = useTranslation('banca_city');
    const actions = (
        <Button
            label={t('header.explore_btn')}
            variant="solid-white"
            onClick={on_explore_click || (() => console.log('Explore Products clicked'))}
        />
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            titleClassName="!text-3xl lg:!text-[54px]/[1] max-w-2xl !mb-8"
            descriptionClassName="!text-black !text-lg lg:!text-xl !font-semibold !normal-case !tracking-normal max-w-[550px] !leading-snug !mb-12"
            actions={actions}
        />
    );
};

export default BancaCityHeader;
