import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
    scrolled?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ scrolled = false }) => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'bn' : 'en';
        i18n.changeLanguage(newLang);
    };

    const currentLangLabel = i18n.language === 'en' ? 'BN' : 'EN';

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
