import React from 'react';
import { Search, ShieldCheck, Wallet, Zap, ShieldAlert, ChevronDown } from 'lucide-react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface MetricBadgeProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ icon, value, label, className = "", size = "sm" }) => {
    const sizeClasses = {
        sm: "w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36",
        md: "w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40",
        lg: "w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48"
    };

    const valueSizeClasses = {
        sm: "text-[22px] md:text-[28px] lg:text-[34px]",
        md: "text-[26px] md:text-[32px] lg:text-[42px]",
        lg: "text-[32px] md:text-[40px] lg:text-[40px]"
    };

    const labelSizeClasses = {
        sm: "text-[10px] md:text-[11px] lg:text-[13px]",
        md: "text-[11px] md:text-xs lg:text-[15px]",
        lg: "text-xs md:text-sm lg:text-[16px]"
    };

    const iconContainerSize = {
        sm: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7",
        md: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",
        lg: "w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
    };

    return (
        <div className={`relative flex flex-col items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-transform hover:scale-105 ${sizeClasses[size]} ${className}`}>
            <div className={`flex items-center justify-center bg-[#FFD700] rounded-full mb-1 md:mb-1.5 ${iconContainerSize[size]}`}>
                {icon}
            </div>
            <span className={`font-black !text-[#FFD700] ${valueSizeClasses[size]} leading-none md:leading-[1.05] text-center max-w-[85%] mx-auto mt-0.5`}>
                {value}
            </span>
            {label && (
                <span className={`text-center mt-0.5 md:mt-1 text-[#E5E5E5] font-medium px-2 md:px-3 mx-auto leading-tight ${labelSizeClasses[size]}`}>
                    {label}
                </span>
            )}
        </div>
    );
};

interface HomeHeaderProps {
    data: HeaderData | null;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ data }) => {
    const { t } = useTranslation('home');

    return (
        <GenericHeader data={data} variant="immersive" className='min-h-[600px] lg:min-h-[780px] max-h-[600px] lg:max-h-[780px]'>
            <div className="absolute top-0 left-0 w-full h-full min-h-[600px] lg:min-h-[780px]  flex flex-col items-center justify-center px-4">

                {/* Bottom White Gradient/Fade Area */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#F4F4F4] via-white/100 to-transparent z-10" />

                {/* Central Section: Question and Search */}
                <div className="hidden absolute top-[25%] md:top-[20%] z-30 flex flex-col items-center gap-8 w-full max-w-4xl text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
                        {t('header.help_question')}
                    </h2>

                    <div className="relative w-[96%] md:w-full max-w-2xl group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white  z-50">
                            <Search size={20} className='text-white' />
                        </div>
                        <input
                            type="text"
                            placeholder={t('header.search_placeholder')}
                            className="w-full bg-black/30 backdrop-blur-md border border-white/30 rounded-full py-4 pl-16 pr-8 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-lg"
                        />
                    </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="relative w-full h-full max-w-screen mx-auto">

                        {/* Top Left: 98% Pay-Claim Ratio */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="absolute top-[20%]  left-[1%]"
                        >
                            <MetricBadge
                                icon={<ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-black" strokeWidth={2} />}
                                value="98%"
                                label={t('header.pay_claim_ratio')}
                                size="lg"
                            />
                        </motion.div>

                        {/* Bottom Left: 1.2 Cr Live Coverage */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="absolute bottom-[30%] left-[10%] md:left-[6%]"
                        >
                            <MetricBadge
                                icon={<Wallet className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-black" strokeWidth={2.5} />}
                                value="1.2 Cr"
                                label={t('header.live_coverage')}
                                size="md"
                            />
                        </motion.div>

                        {/* Middle Right: Quick Buy (Large) */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="absolute top-[20%] right-[0%] md:right-[6%] flex items-center justify-center"
                        >
                            <Link to="/quick-buy-category" className="pointer-events-auto relative">
                                {/* Pulse Rings */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute inset-0 rounded-full border-2 border-[#FFD700]"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{
                                            scale: 1.8,
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 1,
                                            ease: "linear",
                                            times: [0, 0.2, 1],
                                        }}
                                    />
                                ))}
                                <MetricBadge
                                    icon={<Zap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black fill-black" strokeWidth={2} />}
                                    value={t('header.quick_buy')}
                                    label=""
                                    size="lg"
                                    className="relative z-10"
                                />
                            </Link>
                        </motion.div>

                        {/* Bottom Right: 3 Days Claim Settlement */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="absolute bottom-[30%] right-[1%] "
                        >
                            <MetricBadge
                                icon={<ShieldAlert className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-black" strokeWidth={2.5} />}
                                value="3 Days"
                                label={t('header.claim_settlement')}
                                size="sm"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Large Bottom Text */}
                <div className="absolute bottom-24 md:bottom-20 lg:bottom-24 w-full text-center px-4 z-30 ">
                    <h1 className="text-2xl md:text-5xl lg:text-[70px] xl:text-[90px] font-black tracking-tighter leading-none [text-wrap:balance]">
                        <motion.span
                            className="text-primary block flex flex-wrap justify-center "
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 1.0,
                                    },
                                },
                            }}
                        >
                            {(() => {
                                const heroText = t('header.hero_text');
                                const words = heroText.split(" ");
                                // Use Intl.Segmenter to split by grapheme clusters instead of
                                // raw code units — this correctly handles complex scripts like
                                // Bengali where a single visible character (e.g. "জী") is made
                                // up of multiple Unicode code points.
                                const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
                                return words.map((word, wordIndex) => {
                                    const graphemes = Array.from(segmenter.segment(word), s => s.segment);
                                    return (
                                        <span key={wordIndex} className="inline-block whitespace-nowrap">
                                            {graphemes.map((char, charIndex) => (
                                                <motion.span
                                                    key={`${wordIndex}-${charIndex}`}
                                                    variants={{
                                                        hidden: { y: 50, opacity: 0 },
                                                        visible: {
                                                            y: 0,
                                                            opacity: 1,
                                                            transition: { type: "spring", damping: 12, stiffness: 100 }
                                                        },
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                            {/* Add space after each word except the last one */}
                                            {wordIndex < words.length - 1 && (
                                                <span className="whitespace-pre"> </span>
                                            )}
                                        </span>
                                    );
                                });
                            })()}
                        </motion.span>
                    </h1>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30"
                >
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('header.scroll')}</span>
                    <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary transition-colors hover:bg-orange-50 cursor-pointer">
                        <ChevronDown size={22} className="animate-bounce mt-1" />
                    </div>
                </motion.div>

            </div>
        </GenericHeader>
    );
};

export default HomeHeader;
