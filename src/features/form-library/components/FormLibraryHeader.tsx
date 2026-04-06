import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

export const HEADER_DATA: HeaderData = {
    title: [],
    background_image_url: '/assets/images/headers/form-library-hero.jpg',
};

const FormLibraryHeader = () => {
    const { t } = useTranslation('form_library');
    return (
        <GenericHeader data={HEADER_DATA} variant="immersive">
            <div className="w-full h-full min-h-[400px] md:min-h-[450px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        {t('header.title')}
                    </span>

                </h1>
            </div>
        </GenericHeader>
    );
};

export default FormLibraryHeader;
