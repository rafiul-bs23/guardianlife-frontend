import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface MicroHeaderProps {
    data: HeaderData;
    onScrollToSolutions?: () => void;
    onScrollToContact?: () => void;
}

const MicroHeader: React.FC<MicroHeaderProps> = ({ data, onScrollToSolutions, onScrollToContact }) => {
    const actions = (
        <>
            <Button
                label="About Our Solutions"
                variant="outline-white"
                onClick={onScrollToSolutions}
            />
            <Button
                label="Get Protected Today"
                variant="solid-white"
                onClick={onScrollToContact}
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
