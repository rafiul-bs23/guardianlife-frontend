import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

const HEADER_DATA: HeaderData = {
    title: [],
    background_image_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
};

const ShareholdersHeader = () => {
    return (
        <GenericHeader data={HEADER_DATA} variant="immersive">
            <div className="w-full h-full min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4  items-center">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        Shareholders
                    </span>
                    <p className="text-white text-lg font-medium max-w-full md:max-w-[90%]">The leading institutions and individual of the country have continuously been bestowing their confidence upon us and we thrive to provide the best output they expect. We follow Shareholding structure of GLIL as per the Audited Account 2022.</p>
                </h1>
            </div>
        </GenericHeader>
    );
};

export default ShareholdersHeader;
