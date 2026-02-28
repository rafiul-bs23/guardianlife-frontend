import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface ContactHeaderProps {
    data: HeaderData;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ data }) => {
    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
        />
    );
};

export default ContactHeader;
