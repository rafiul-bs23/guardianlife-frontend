import React, { useState, useRef, useEffect } from 'react';
import { usePartners } from '../hooks/usePartners';

interface PartnersSliderProps {
    channel: string;
    title?: string;
    subtitle?: string;
}

const PartnersSlider: React.FC<PartnersSliderProps> = ({
    channel,
    title = 'OUR MAJOR PARTNERS',
    subtitle = 'OUR MAJOR PARTNERS',
}) => {
    const { data: partners, is_loading, error } = usePartners(channel);
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);
    const scrollRef = useRef<HTMLDivElement>(null);

    const totalLogos = partners?.length || 0;
    const dotCount = Math.max(0, totalLogos - visibleCount + 1);

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth < 768 ? 3 : 5);
        };
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const scrollTo = (index: number) => {
        if (scrollRef.current) {
            const itemElement = scrollRef.current.children[0] as HTMLElement;
            if (itemElement) {
                const itemWidth = itemElement.offsetWidth;
                const gap = 32;
                scrollRef.current.scrollTo({ left: index * (itemWidth + gap), behavior: 'smooth' });
                setActiveIndex(index);
            }
        }
    };

    useEffect(() => {
        if (dotCount <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % dotCount;
                scrollTo(next);
                return next;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [dotCount]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const itemElement = scrollRef.current.children[0] as HTMLElement;
            if (itemElement) {
                const itemWidth = itemElement.offsetWidth;
                const index = Math.round(scrollRef.current.scrollLeft / (itemWidth + 32));
                const clamped = Math.min(index, dotCount - 1);
                if (clamped !== activeIndex) setActiveIndex(clamped);
            }
        }
    };

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-[26px] font-extrabold text-[#111827] uppercase tracking-wider">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-[13px] font-bold uppercase tracking-[0.2em] opacity-80">
                        {subtitle}
                    </p>
                </div>

                <div className="relative overflow-hidden px-4">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
                    >
                        {is_loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-[calc(33.33%-22px)] md:w-[calc(20%-26px)] h-[120px] md:h-[140px] bg-white rounded-[24px] md:rounded-[28px] border border-[#FDE6D7] animate-pulse"
                                />
                            ))
                        ) : error ? (
                            <div className="w-full text-center py-10">
                                <p className="text-red-500 font-bold">Failed to load partners</p>
                            </div>
                        ) : (
                            partners?.map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[calc(33.33%-22px)] md:w-[calc(20%-26px)] h-[100px] md:h-[140px] bg-white rounded-[24px] md:rounded-[28px] border border-[#FDE6D7] flex items-center justify-center p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 snap-start group"
                                >
                                    {partner.website_url ? (
                                        <a
                                            href={partner.website_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <img
                                                src={partner.logo_url}
                                                alt={partner.partner_name}
                                                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={partner.logo_url}
                                            alt={partner.partner_name}
                                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {dotCount > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: dotCount }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                onClick={() => scrollTo(dotIndex)}
                                className={`h-2.5 transition-all duration-500 rounded-full cursor-pointer ${
                                    activeIndex === dotIndex
                                        ? 'w-10 bg-[#EF6925]'
                                        : 'w-2.5 bg-[#FDBA74] hover:bg-[#FB923C]'
                                }`}
                                aria-label={`Go to slide ${dotIndex + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PartnersSlider;
