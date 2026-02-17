import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface MicroHeaderProps {
    data: HeaderData;
}

const MicroHeader: React.FC<MicroHeaderProps> = ({ data }) => {
    const actions = (
        <>
            <Button
                label="About Our Solutions"
                variant="outline-white"
                onClick={() => console.log('About Our Solutions clicked')}
            />
            <Button
                label="Get Protected Today"
                variant="solid-white"
                onClick={() => console.log('Get Protected Today clicked')}
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

export default MicroHeader;
