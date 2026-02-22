import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface TaxRebateHeaderProps {
    data: HeaderData;
}

const TaxRebateHeader: React.FC<TaxRebateHeaderProps> = ({ data }) => {
    const actions = (
        <Button
            label="Tax Rebate Calculator"
            variant="outline-white"
            onClick={() => console.log('Tax Rebate Calculator clicked')}
        />
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            titleClassName="!text-5xl lg:!text-[64px] font-black tracking-tight mb-8"
            descriptionClassName="!text-black !text-base lg:!text-lg !font-bold !normal-case !tracking-normal max-w-xl !leading-relaxed !mb-12 text-justify"
            innerWrapperClassName="pt-12"
            actions={actions}
        />
    );
};

export default TaxRebateHeader;
