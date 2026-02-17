import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface ClaimHeaderProps {
    data: HeaderData;
}

const ClaimHeader: React.FC<ClaimHeaderProps> = ({ data }) => {
    const actions = (
        <>
            <Button
                label="Submit Your Claim"
                variant="outline-white"
                onClick={() => console.log('Submit Your Claim clicked')}
            />
            <Button
                label="Track Your Claim"
                variant="solid-white"
                onClick={() => console.log('Track Your Claim clicked')}
            />
        </>
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            actions={actions}
            descriptionClassName='text-black !text-2xl !mb-20'
        />
    );
};

export default ClaimHeader;
