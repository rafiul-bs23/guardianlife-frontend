import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'bn' : 'en';
        i18n.changeLanguage(newLang);
    };

    const currentLangLabel = i18n.language === 'en' ? 'BN' : 'EN';

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/50 text-white hover:text-white transition-all duration-300 font-medium text-sm"
            title={t('common:toggle_language', { defaultValue: 'Toggle Language' })}
        >
            <Globe size={16} className="text-white" />
            <span>{currentLangLabel}</span>
        </button>
    );
};

export default LanguageToggle;
