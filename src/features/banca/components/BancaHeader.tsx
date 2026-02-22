import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface BancaHeaderProps {
    data: HeaderData;
}

const BancaHeader: React.FC<BancaHeaderProps> = ({ data }) => {
    const actions = (
        <>
            <Button
                label="Partner"
                variant="outline-white"
                onClick={() => console.log('Partner clicked')}
            />
            <Button
                label="Explore"
                variant="solid-white"
                onClick={() => console.log('Explore clicked')}
            />
        </>
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            titleClassName="!text-3xl lg:!text-[54px]/[1] max-w-2xl !mb-8"
            descriptionClassName="!text-black !text-lg lg:!text-xl !font-semibold !normal-case !tracking-normal max-w-2xl !leading-tight !mb-12"
            actions={actions}
        />
    );
};

export default BancaHeader;
