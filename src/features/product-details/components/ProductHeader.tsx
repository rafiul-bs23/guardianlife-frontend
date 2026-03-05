import React, { useState } from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';
import CalculatePremiumModal from './CalculatePremiumModal';

interface ProductHeaderProps {
    data: HeaderData;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ data }) => {
    const { showPopup } = usePopup();
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
                onClick={() => showPopup()}
            />
        </>
    );

    return (
        <>
            <GenericHeader data={data} mediaClassName="rounded-[20px]" actions={actions} descriptionClassName='text-white !text-xs ' />
            <CalculatePremiumModal
                isOpen={isCalculateModalOpen}
                onClose={() => setIsCalculateModalOpen(false)}
            />
        </>
    );
};

export default ProductHeader;
