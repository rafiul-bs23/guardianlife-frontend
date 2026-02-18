import React from 'react';
import { Search, ShieldCheck, Wallet, Zap, ShieldAlert, ChevronDown } from 'lucide-react';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';

interface MetricBadgeProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ icon, value, label, className = "", size = "sm" }) => {
    const isLarge = size === 'lg';
    const isMedium = size === 'md';

    return (
        <div className={`flex flex-col items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-transform hover:scale-105 ${isLarge ? 'w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56' : isMedium ? 'w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40' : 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36'} ${className}`}>
            <div className="text-[#FFD700] mb-1">
                {icon}
            </div>
            <span className={`font-black ${isLarge ? 'text-xl md:text-2xl lg:text-3xl' : isMedium ? 'text-lg md:text-xl lg:text-2xl' : 'text-sm md:text-lg lg:text-xl'} leading-tight text-center`}>
                {value}
            </span>
            <span className="text-[8px] md:text-[10px] lg:text-xs font-semibold uppercase tracking-tighter text-center px-2">
                {label}
            </span>
        </div>
    );
};

interface HomeHeaderProps {
    data: HeaderData | null;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ data }) => {
    return (
        <GenericHeader data={data} variant="immersive">
            <div className="relative w-full h-full min-h-[700px] md:min-h-[850px] lg:min-h-[750px] flex flex-col items-center justify-center px-4 overflow-hidden">

                {/* Bottom White Gradient/Fade Area */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

                {/* Central Section: Question and Search */}
                <div className="absolute top-[25%] md:top-[20%] z-30 flex flex-col items-center gap-8 w-full max-w-4xl text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
                        How can we help?
                    </h2>

                    <div className="relative w-[96%] md:w-full max-w-2xl group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white  z-50">
                            <Search size={20} className='text-white' />
                        </div>
                        <input
                            type="text"
                            placeholder="How to claim online.."
                            className="w-full bg-black/30 backdrop-blur-md border border-white/30 rounded-full py-4 pl-16 pr-8 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-lg"
                        />
                    </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="relative w-full h-full max-w-screen mx-auto">

                        {/* Top Left: 98% Pay-Claim Ratio */}
                        <MetricBadge
                            icon={<ShieldCheck size={28} className="md:size-8 lg:size-10" />}
                            value="98%"
                            label="Pay-Claim Ratio"
                            className="absolute top-[5%] md:top-[10%] left-[0%] md:left-[0%]"
                            size="lg"
                        />

                        {/* Bottom Left: 1.2 Cr Live Coverage */}
                        <MetricBadge
                            icon={<Wallet size={28} className="md:size-8 lg:size-10" />}
                            value="1.2 Cr"
                            label="Live Coverage"
                            className="absolute bottom-[35%] left-[10%] md:left-[6%]"
                            size="md"
                        />

                        {/* Middle Right: Quick Buy (Large) */}
                        <button onClick={() => { }}>
                            <MetricBadge
                                icon={<Zap size={32} className="md:size-10 lg:size-14" />}
                                value="Quick"
                                label="Buy"
                                size="lg"
                                className="absolute md:top-[10%] top-[-0%] right-[0%] md:right-[6%] !text-[#FFD700]"
                            />
                        </button>

                        {/* Bottom Right: 3 Days Claim Settlement */}
                        <MetricBadge
                            icon={<ShieldAlert size={28} className="md:size-8 lg:size-10" />}
                            value="3 Days"
                            label="Claim Settlement"
                            className="absolute bottom-[35%] right-[0%] md:right-[0%]"
                            size="md"
                        />
                    </div>
                </div>

                {/* Large Bottom Text: LET'S TALK ABOUT LIFE. MORE! */}
                <div className="absolute bottom-24 md:bottom-20 lg:bottom-24 w-full text-center px-4 z-30">
                    <h1 className="text-4xl md:text-7xl lg:text-[90px] font-black tracking-tighter leading-none [text-wrap:balance]">
                        <span className="text-primary block">
                            LET'S TALK ABOUT LIFE. MORE!
                        </span>
                    </h1>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Scroll</span>
                    <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary transition-colors hover:bg-orange-50 cursor-pointer">
                        <ChevronDown size={22} className="animate-bounce mt-1" />
                    </div>
                </div>

            </div>
        </GenericHeader>
    );
};

export default HomeHeader;
