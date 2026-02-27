import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface CategoryHeaderProps {
    data: HeaderData;
    onExploreClick?: () => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ data, onExploreClick }) => {
    const actions = (
        <>
            <Button
                label="Explore Our Products"
                variant="outline-white"
                className="!py-1"
                onClick={onExploreClick || (() => console.log('Explore Our Products clicked'))}
            />
            <Button
                label="Get A Quote"
                variant="solid-white"
                className="!py-1"
                href='https://saleslead.myguardianbd.com/lead-form'
            />
        </>
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            actions={actions}
            titleClassName="!text-3xl lg:!text-[42px] !leading-normal max-w-3xl"
        />
    );
};

export default CategoryHeader;
