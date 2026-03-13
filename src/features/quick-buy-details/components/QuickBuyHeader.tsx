import React from 'react';
import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';
import { openReveChat } from '../../../shared/utils/revechat';

interface QuickBuyHeaderProps {
    data: HeaderData;
}

const QuickBuyHeader: React.FC<QuickBuyHeaderProps> = ({ data }) => {
    const { t } = useTranslation('quick_buy_details');
    const actions = (
        <Button
            label={t('header.ai_assistant')}
            variant="solid-white"
            onClick={openReveChat}
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
