import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';

interface ProductHeaderProps {
    data: HeaderData;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ data }) => {
    const { showPopup } = usePopup();
    const actions = (
        <>
            <Button
                label="Calculate Premium"
                variant="outline-white"
                onClick={() => showPopup()}
            />
            <Button
                label="AI Assistant"
                variant="solid-white"
                onClick={() => showPopup()}
            />
        </>
    );

    return <GenericHeader data={data} mediaClassName="rounded-[20px]" actions={actions} descriptionClassName='text-white !text-xs ' />;
};

export default ProductHeader;
