import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { sharedAppDownloadData } from '../api/mockData';
import AppStoreButtons from './AppStoreButtons';
import { useIsMobile } from '../hooks/useMediaQuery';

const AppDownloadSection: React.FC = () => {
    const { t } = useTranslation('shared');
    const isMobile = useIsMobile();
    const data = sharedAppDownloadData;

    const vp = { once: true, amount: isMobile ? 0.1 : 0.2 } as const;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mb-12 max-w-[900px] mx-auto"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {t('app_download.title')}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {t('app_download.subtitle')}
                    </p>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="relative w-full max-w-[500px]"
                    >
                        <div className="rounded-[60px] overflow-hidden">
                            <img
                                src={`/${data.image}`}
                                alt="Download App"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
                    >
                        <AppStoreButtons className='flex flex-col sm:flex-row items-center gap-6' />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
