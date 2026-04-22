import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import Button from './Button';
import { sharedCashlessNetworkData } from '../api/mockData';
import { useIsMobile } from '../hooks/useMediaQuery';

const CashlessNetwork: React.FC = () => {
    const { t } = useTranslation('shared');
    const isMobile = useIsMobile();
    const data = sharedCashlessNetworkData;

    // Load translated data
    const localizedStats = t('cashless_network.stats', { returnObjects: true });
    const stats = Array.isArray(localizedStats) ? localizedStats : [];

    const localizedSteps = t('cashless_network.steps', { returnObjects: true });
    const steps = Array.isArray(localizedSteps) ? localizedSteps : [];

    const vp = { once: true, amount: isMobile ? 0.1 : 0.15 } as const;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="bg-[#F6DECE] rounded-[48px] p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden shadow-sm"
                >
                    {/* Content Left */}
                    <div className="flex-1 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-bold text-gray-900 tracking-tight">{t('cashless_network.title')}</h2>
                            <p className="text-gray-700 text-[15px] font-medium leading-relaxed max-w-xl">
                                {t('cashless_network.description')}
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <div className="flex gap-16 lg:gap-24">
                            {stats.map((stat: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={vp}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 + index * 0.12 }}
                                    className="flex flex-col gap-1"
                                >
                                    <div className="text-4xl font-black text-gray-900 leading-none">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* How it works */}
                        <div className="space-y-6 pt-4">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={vp}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
                                className="text-base font-extrabold text-gray-900"
                            >
                                {t('cashless_network.steps_title')}
                            </motion.h3>
                            <div className="space-y-4">
                                {steps.map((step: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={vp}
                                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-orange-500/20">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-800 text-sm font-bold tracking-tight">{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                            className="pt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
                        >
                            <Button
                                label={t('cashless_network.buttons.cashless')}
                                variant="solid-orange"
                                className="w-full sm:w-fit rounded-full "
                                labelClass="text-sm font-bold"
                                href='https://acps.myguardianbd.com/claim/online/gop/request/'
                            />
                            <Button
                                label={t('cashless_network.buttons.hospital_list')}
                                variant="outline-orange"
                                className="w-full sm:w-fit rounded-full"
                                labelClass="text-sm font-bold"
                                to='/preferred-hospital'
                            />
                        </motion.div>
                    </div>

                    {/* Image Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="flex-1 w-full max-w-[550px]"
                    >
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Cashless Hospital"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CashlessNetwork;
