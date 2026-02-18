import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface EmployeesHeaderProps {
    data: HeaderData | null;
}

const EmployeesHeader: React.FC<EmployeesHeaderProps> = ({ data }) => {
    return (
        <GenericHeader data={data} variant="immersive">
            <div className="flex flex-col items-center justify-end w-full min-h-[400px] md:min-h-[500px] pb-12 md:pb-16 lg:pb-24">
                <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black text-white uppercase tracking-tight text-center drop-shadow-2xl px-4">
                    GUARDIAN FAMILY
                </h1>
            </div>
        </GenericHeader >
    );
};

export default EmployeesHeader;
