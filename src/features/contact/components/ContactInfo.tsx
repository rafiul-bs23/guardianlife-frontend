import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const SOCIAL_LINKS = {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#"
};

const ContactInfo: React.FC = () => {
    const { t } = useTranslation('contact');

    return (
        <div className="bg-[#EB6925] text-white p-10 rounded-[40px] shadow-xl h-full flex flex-col justify-between">
            <div className="space-y-10">
                {/* Visit Us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{t('info.visit_us.title')}</h3>
                    <p className="text-white/80 font-medium">{t('info.visit_us.subtitle')}</p>
                    <p className="font-bold leading-snug max-w-[300px]">
                        {t('info.visit_us.address')}
                    </p>
                </div>

                {/* Call Us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{t('info.call_us.title')}</h3>
                    <p className="text-white/80 font-medium leading-tight">
                        {t('info.call_us.subtitle')}
                    </p>
                    <div className="space-y-1">
                        <p className="text-2xl font-bold">{t('info.call_us.phone1')}</p>
                        <p className="text-lg font-bold">{t('info.call_us.phone2')}</p>
                    </div>
                </div>

                {/* Chat with us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{t('info.chat_with_us.title')}</h3>
                    <p className="text-white/80 font-medium">{t('info.chat_with_us.subtitle')}</p>
                    <p className="text-xl font-bold">{t('info.chat_with_us.email')}</p>
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 space-y-4">
                <h3 className="text-xl font-bold">{t('info.social_media.title')}</h3>
                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.facebook} className="hover:opacity-80 transition-opacity">
                        <Facebook size={24} fill="white" />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} className="hover:opacity-80 transition-opacity">
                        <Linkedin size={24} fill="white" />
                    </a>
                    <a href={SOCIAL_LINKS.instagram} className="hover:opacity-80 transition-opacity">
                        <Instagram size={24} />
                    </a>
                    <a href={SOCIAL_LINKS.youtube} className="hover:opacity-80 transition-opacity">
                        <Youtube size={24} fill="white" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
