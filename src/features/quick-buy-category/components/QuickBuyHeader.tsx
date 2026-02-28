import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface QuickBuyHeaderProps {
    data: HeaderData;
}

const QuickBuyHeader: React.FC<QuickBuyHeaderProps> = ({ data }) => {
    return (
        <GenericHeader
            data={data}
            variant="immersive"
            innerWrapperClassName="!items-end"
            contentWrapperClassName="!pb-0 !pt-10"
            mediaContainerClassName="!aspect-auto !max-w-[450px] !w-full"
            mediaClassName="!shadow-none !bg-transparent !overflow-visible !rounded-none"
            imgClassName="!object-contain !h-auto !max-h-[550px]"
            titleClassName="!text-3xl lg:!text-[42px] !leading-normal max-w-2xl mb-20"
        />
    );
};

export default QuickBuyHeader;
