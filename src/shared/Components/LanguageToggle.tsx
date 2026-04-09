import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
    scrolled?: boolean;
    variant?: 'default' | 'switch';
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ scrolled = false, variant = 'default' }) => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'bn' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isEn = i18n.language === 'en';
    const currentLangLabel = isEn ? 'BN' : 'EN';

    if (variant === 'switch') {
        return (
            <div 
                onClick={toggleLanguage}
                className="flex items-center cursor-pointer border border-orange-200 rounded-[20px] p-0.5 bg-white"
                title={t('common:toggle_language')}
            >
                <div className={`px-3 py-1 rounded-[20px] text-[12px] font-bold tracking-widest transition-all duration-300 ${isEn ? 'bg-primary text-white' : 'text-orange-400 hover:text-primary'}`}>
                    EN
                </div>
                <div className={`px-3 py-1 rounded-[20px] text-[12px] font-bold tracking-widest transition-all duration-300 ${!isEn ? 'bg-primary text-white' : 'text-orange-400 hover:text-primary'}`}>
                    BN
                </div>
            </div>
        );
    }

    const colorClasses = scrolled
        ? 'border-primary text-primary hover:bg-primary/10'
        : 'border-white/20 text-white hover:border-white/50';

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 font-medium text-sm ${colorClasses}`}
            title={t('common:toggle_language')}
        >
            <Globe size={16} className={scrolled ? 'text-primary' : 'text-white'} />
            <span>{currentLangLabel}</span>
        </button>
    );
};

export default LanguageToggle;
