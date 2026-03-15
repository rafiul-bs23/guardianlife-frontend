import React, { useState } from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';
import CalculatePremiumModal from './CalculatePremiumModal';
import { openReveChat } from '../../../shared/utils/revechat';
import type {PlanNumber} from "../types.ts";

interface ProductHeaderProps {
    data: HeaderData;
    planNumbers?: PlanNumber[];
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ data, planNumbers }) => {
    const [isCalculateModalOpen, setIsCalculateModalOpen] = useState(false);

    const actions = (
        <>
            <Button
                label="Calculate Premium"
                variant="outline-white"
                onClick={() => setIsCalculateModalOpen(true)}
            />
            <Button
                label="AI Assistant"
                variant="solid-white"
                onClick={openReveChat}
            />
        </>
    );

    return (
        <>
            <GenericHeader data={data} mediaClassName="rounded-[20px]" actions={actions} descriptionClassName='text-white !text-xs ' />
            <CalculatePremiumModal
                isOpen={isCalculateModalOpen}
                onClose={() => setIsCalculateModalOpen(false)}
                planNumbers={planNumbers}
            />
        </>
    );
};

export default ProductHeader;
