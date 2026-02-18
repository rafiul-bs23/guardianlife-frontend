import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface GroupHeaderProps {
    data: HeaderData;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ data }) => {
    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            titleClassName=" max-w-2xl !mb-8"
            descriptionClassName="!text-[#1E3161] !text-2xl lg:!text-3xl !font-semibold !normal-case !tracking-normal max-w-2xl !leading-tight"
        />
    );
};

export default GroupHeader;
