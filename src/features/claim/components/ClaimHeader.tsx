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
                href='https://acps.myguardianbd.com/client_login/'
            />
            <Button
                label="Track Your Claim"
                variant="solid-white"
                href='https://acps.myguardianbd.com/client_login/'
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
