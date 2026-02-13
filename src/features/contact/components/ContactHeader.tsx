import React from 'react';
import type { ContactHeaderData } from '../types';

interface ContactHeaderProps {
    data: ContactHeaderData;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ data }) => {
    return (
        <div className="text-center max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                {data.title}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {data.description}
            </p>
        </div>
    );
};

export default ContactHeader;
