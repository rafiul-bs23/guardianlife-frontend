import React from 'react';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

interface GuideYouProps {
    data: {
        image: string;
    };
}

const GuideYou: React.FC<GuideYouProps> = ({ data }) => {
    const { t } = useTranslation('home');
    const { showPopup } = usePopup();
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 h-auto lg:h-[437px] w-full mt-16 lg:mt-[140px] px-4 lg:px-0">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
                className="flex-1 rounded-tr-[32px] rounded-br-[32px] rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px] overflow-hidden hidden md:block"
            >

                <img
                    src={data.image}
                    alt="Guide You"
                    className="w-full h-[500px] lg:h-full object-cover"
                />

            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
                className="flex-1 flex flex-col py-12 lg:py-[62.5px] lg:pl-8 justify-center gap-4 px-4 text-center lg:text-left items-center lg:items-start">
                <p className="subheading text-[#1E3161] ">{t('guide_you.title')}</p>
                <p className="heading">
                    {t('guide_you.description')}
                </p>
                <Button
                    label={t('guide_you.button')}
                    className=""
                    onClick={() => showPopup()}
                />
            </motion.div >
        </div >
    );
};

export default GuideYou;
