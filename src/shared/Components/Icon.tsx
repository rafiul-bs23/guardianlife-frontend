// create an icon component with props src and className

import React from 'react';

interface IconProps {
    src?: string;
    className?: string;
    children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ src, className, children }) => {
    return (
        <div className={`w-16 h-16 object-contain bg-primary/25 rounded-full flex items-center justify-center p-3  ${className}`}>
            {src ? <img src={src} alt="" className='w-full h-full object-contain' /> : children}
        </div>
    );
};

export default Icon;
