import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';

interface QuickBuyHeaderProps {
    data: HeaderData;
}

const QuickBuyHeader: React.FC<QuickBuyHeaderProps> = ({ data }) => {
    const { showPopup } = usePopup();
    const actions = (
        <Button
            label="AI Assistant"
            variant="solid-white"
            onClick={() => showPopup()}
        />
    );

    return (
        <GenericHeader
            data={data}
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            actions={actions}
            descriptionClassName='text-white !text-xs'
        />
    );
};

export default QuickBuyHeader;
