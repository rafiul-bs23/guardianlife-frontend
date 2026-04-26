import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { WhyMicroinsuranceData } from '../types';
import { ShieldCheck, DollarSign, Zap, HelpCircle, Check } from 'lucide-react';
import { getLightBgByIndex } from '../../../utils/colorUtils';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

interface WhyMicroinsuranceProps {
    data: WhyMicroinsuranceData;
}

const iconMap: Record<string, React.ReactNode> = {
    'shield-check': <ShieldCheck className="w-5 h-5" />,
    'dollar-sign': <DollarSign className="w-5 h-5" />,
    'zap': <Zap className="w-5 h-5" />,
    'help-circle': <HelpCircle className="w-5 h-5" />
};

const WhyMicroinsurance: React.FC<WhyMicroinsuranceProps> = ({ data }) => {
    const { t } = useTranslation('micro');
    const isMobile = useIsMobile();

    const title = t('why_guardian_micro.title');
    const subtitle = t('why_guardian_micro.subtitle');
    const cards = t('why_guardian_micro.features', { returnObjects: true }) as WhyMicroinsuranceData['cards'];
    const outcomesTitle = t('why_guardian_micro.outcomes_title');
    const outcomes = t('why_guardian_micro.outcomes', { returnObjects: true }) as WhyMicroinsuranceData['outcomes'];

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

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    {/* Left: Cards Grid and Outcomes */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col gap-10"
                    >
                        {/* 2x2 Grid — each card staggered */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Array.isArray(cards) && cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
                                    className={`${getLightBgByIndex(index)} rounded-[16px] p-6 flex flex-col gap-4 transition-all duration-300`}
                                >
                                    <div className={`w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm ${card.iconColor || data.cards[index]?.iconColor}`}>
                                        {iconMap[card.icon || data.cards[index]?.icon]}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="text-[17px] font-extrabold text-[#32367B] leading-tight">
                                            {card.title}
                                        </h4>
                                        <p className="text-gray-500 text-[13px] font-medium leading-relaxed max-w-[200px]">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Outcomes Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                            className="bg-[#F8FAFC] rounded-[24px] p-8 sm:p-10 flex flex-col gap-6"
                        >
                            <h4 className="text-[17px] font-extrabold text-[#32367B]">
                                {outcomesTitle}
                            </h4>
                            <div className="space-y-3">
                                {Array.isArray(outcomes) && outcomes.map((outcome, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.55 + index * 0.08 }}
                                        className="flex gap-3 items-center"
                                    >
                                        <div className="flex-shrink-0">
                                            <Check className="w-4 h-4 text-[#3B82F6] stroke-[3px]" />
                                        </div>
                                        <span className="text-gray-600 text-[14px] font-medium tracking-tight">
                                            {outcome}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Illustration Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Guardian Life Microinsurance"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyMicroinsurance;
