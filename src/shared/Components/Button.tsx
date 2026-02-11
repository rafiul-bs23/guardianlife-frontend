import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

export type ButtonVariant = 'outline-orange' | 'solid-orange' | 'solid-black' | 'ghost-orange' | 'solid-white';

interface BaseButtonProps {
    label: string;
    variant: ButtonVariant;
    onClick?: () => void;
    className?: string;
    icon?: LucideIcon;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
    label,
    variant,
    onClick,
    className = '',
    icon: Icon = ChevronRight,
    type = 'button',
    disabled = false
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'outline-orange':
                return {
                    button: 'bg-white border-2 border-[#FF8D4D] text-[#FF8D4D] hover:bg-orange-50 pl-8 pr-1.5 py-1.5 shadow-md',
                    iconCircle: 'bg-[#FF8D4D] text-white',
                    labelClass: 'text-xl font-extrabold'
                };
            case 'solid-orange':
                return {
                    button: 'bg-[#FF8D4D] text-white hover:bg-[#FF7D35] px-12 py-4 shadow-lg active:shadow-inner',
                    iconCircle: null,
                    labelClass: 'text-2xl font-bold'
                };
            case 'solid-black':
                return {
                    button: 'bg-[#0F1115] border-2 border-white text-white hover:bg-black pl-8 pr-2 py-2 shadow-lg',
                    iconCircle: 'bg-white text-[#2A2B68]',
                    labelClass: 'text-xl font-bold'
                };
            case 'ghost-orange':
                return {
                    button: 'bg-white text-[#FF8D4D] border border-gray-100 shadow-sm hover:shadow-md pl-8 pr-1.5 py-1.5',
                    iconCircle: 'bg-[#FF8D4D] text-white',
                    labelClass: 'text-xl font-bold'
                };
            case 'solid-white':
                return {
                    button: 'bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 shadow-lg active:shadow-inner',
                    iconCircle: null,
                    labelClass: 'text-lg font-bold'
                };
            default:
                return { button: '', iconCircle: '', labelClass: '' };
        }
    };

    const styles = getVariantStyles();

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                group flex items-center justify-center rounded-full transition-all active:scale-[0.98]
                ${styles.button}
                ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}
                ${className}
            `}
        >
            <span className={`tracking-tight leading-none ${styles.labelClass}`}>{label}</span>
            {styles.iconCircle && (
                <div className={`ml-8 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${styles.iconCircle}`}>
                    <Icon className="w-6 h-6" />
                </div>
            )}
        </button>
    );
};

export default BaseButton;
