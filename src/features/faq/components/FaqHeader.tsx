import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

const HEADER_DATA: HeaderData = {
    title: [],
    background_image_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
};

const FaqHeader = () => {
    return (
        <GenericHeader data={HEADER_DATA} variant="immersive">
            <div className="w-full  min-h-[300px] md:min-h-[350px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        FAQ
                    </span>
                </h1>
            </div>
        </GenericHeader>
    );
};

export default FaqHeader;
