import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

const header_data: HeaderData = {
    title: [],
    background_image_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
};

const ShareholdersHeader = () => {
    const { t } = useTranslation('shareholders');
    return (
        <GenericHeader data={header_data} variant="immersive">
            <div className="w-full h-full min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4  items-center">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        {t('header.title')}
                    </span>
                    <p className="text-white text-lg font-medium max-w-full md:max-w-[90%]">{t('header.description')}</p>
                </h1>
            </div>
        </GenericHeader>
    );
};

export default ShareholdersHeader;
