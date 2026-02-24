import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

const HEADER_DATA: HeaderData = {
    title: [],
    background_image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
};

const LocateBranchHeader = () => {
    return (
        <GenericHeader data={HEADER_DATA} variant="immersive">
            <div className="w-full h-full min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-end text-center">
                <h1 className="flex flex-col gap-4">
                    <span className="text-5xl md:text-7xl lg:text-[100px] font-semibold text-white uppercase tracking-tighter leading-none">
                        Locate a Branch
                    </span>
                </h1>
            </div>
        </GenericHeader>
    );
};

export default LocateBranchHeader;
