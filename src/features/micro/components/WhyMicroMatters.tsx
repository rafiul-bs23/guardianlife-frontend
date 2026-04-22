import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import type { WhyMicroMattersData } from '../types';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

interface WhyMicroMattersProps {
    data: WhyMicroMattersData;
}

const WhyMicroMatters: React.FC<WhyMicroMattersProps> = ({ data }) => {
    const { t } = useTranslation('micro');
    const isMobile = useIsMobile();

    const title = t('why_micro_matters.title');
    const subtitle = t('why_micro_matters.subtitle');
    const benefits = t('why_micro_matters.benefits', { returnObjects: true }) as WhyMicroMattersData['benefits'];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16 max-w-[900px] mx-auto"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="relative w-full max-w-[500px]"
                    >
                        <div className="rounded-[60px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Microinsurance concept"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Benefits List */}
                    <div className="flex flex-col gap-8 max-w-[600px]">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
                            className="text-xl font-extrabold text-gray-900 mb-2"
                        >
                            {t('why_micro_matters.list_title')}
                        </motion.h3>

                        <div className="space-y-6">
                            {Array.isArray(benefits) && benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
                                    className="flex gap-5 group"
                                >
                                    {/* Orange Checkmark Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            <Check className="w-5 h-5 text-white stroke-[3px]" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h4 className="text-[17px] font-extrabold text-[#32367B] leading-tight">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMicroMatters;
