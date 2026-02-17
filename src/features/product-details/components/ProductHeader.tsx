import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface ProductHeaderProps {
    data: HeaderData;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ data }) => {
    const actions = (
        <>
            <Button
                label="Calculate Premium"
                variant="outline-white"
                onClick={() => console.log('Calculate Premium clicked')}
            />
            <Button
                label="AI Assistant"
                variant="solid-white"
                onClick={() => console.log('AI Assistant clicked')}
            />
        </>
    );

    return <GenericHeader data={data} mediaClassName="rounded-[20px]" actions={actions} descriptionClassName='text-white !text-xs ' />;
};

export default ProductHeader;
