import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

export type ButtonVariant = 'base' | 'outline-orange' | 'solid-orange' | 'outline-white' | 'solid-white';

interface BaseButtonProps {
    label: string;
    variant: ButtonVariant;
    onClick?: () => void;
    className?: string;
    icon?: LucideIcon;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    labelClass?: string;
}

const Button: React.FC<BaseButtonProps> = ({
    label,
    variant,
    onClick,
    className = '',
    icon: Icon = ChevronRight,
    type = 'button',
    disabled = false,
    labelClass = ''
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'base':
                return {
                    button: 'bg-primary text-white hover:bg-[#FF7D35] px-8 py-2.5 shadow-md',
                    iconCircle: null
                };
            case 'outline-orange':
                return {
                    button: ' border-2 border-primary text-primary hover:bg-primary/20 pl-8 pr-1.5 py-1.5 shadow-md',
                    iconCircle: 'bg-primary text-white',
                };
            case 'outline-white':
                return {
                    button: ' border-2 border-white text-white hover:bg-white/20 pl-8 pr-1.5 py-1.5 shadow-md',
                    iconCircle: 'bg-white text-primary',
                };
            case 'solid-orange':
                return {
                    button: 'bg-primary text-white hover:bg-primary/60 pl-8 pr-1.5 py-1.5 shadow-md',
                    iconCircle: 'bg-white text-primary',
                };
            case 'solid-white':
                return {
                    button: 'bg-white text-primary border border-gray-100 shadow-sm hover:shadow-md pl-8 pr-1.5 py-1.5',
                    iconCircle: 'bg-primary text-white',
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
            <span className={`tracking-tight leading-none text-lg font-semibold ${labelClass}`}>{label}</span>
            {styles.iconCircle && (
                <div className={`ml-8 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${styles.iconCircle}`}>
                    <Icon className="w-6 h-6" />
                </div>
            )}
        </button>
    );
};

export default Button;
