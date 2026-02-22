

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`bg-white rounded-lg shadow-sm overflow-hidden flex flex-col group p-8 border border-primary/30 hover:shadow-xl hover:border-primary/60 hover:scale-[1.01] transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};

export default Card;