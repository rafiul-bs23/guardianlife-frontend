import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface QuickBuyHeaderProps {
    data: HeaderData;
}

const QuickBuyHeader: React.FC<QuickBuyHeaderProps> = ({ data }) => {
    const actions = (
        <Button
            label="AI Assistant"
            variant="solid-white"
            onClick={() => console.log('AI Assistant clicked')}
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
