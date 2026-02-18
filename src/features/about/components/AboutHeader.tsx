import React from 'react';
import type { HeaderData } from '../types';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface AboutHeaderProps {
    data: HeaderData;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ data }) => {
    return <GenericHeader data={data} mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]" />;
};

export default AboutHeader;
