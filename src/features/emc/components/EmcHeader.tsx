import React from 'react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface EmcHeaderProps {
    data: HeaderData | null;
}

const EmcHeader: React.FC<EmcHeaderProps> = ({ data }) => {
    return (
        <GenericHeader data={data} variant="immersive">
            <div className="flex flex-col  justify-end w-full min-h-[400px] md:min-h-[500px] pb-12 md:pb-16 lg:pb-24">
                <h3 className="text-4xl md:text-4xl  font-bold text-white uppercase   drop-shadow-2xl px-4">
                    The Bridge Between Vision and Execution
                </h3>
                <p className="text-lg md:text-xl   text-black uppercase   drop-shadow-2xl px-4 mt-4">
                    The Bridge Between Vision and ExecutionEmpowering teams, aligning priorities, and delivering results across Guardian Life.
                </p>
            </div>
        </GenericHeader >
    );
};

export default EmcHeader;
