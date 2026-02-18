import React, { useState, useRef, useEffect } from 'react';
import { useMicroPartners } from '../hooks/useMicroPartners';
import { mockMicroData } from '../api/mockData';

const MicroPartners: React.FC = () => {
    const { data: partners, isLoading, error } = useMicroPartners();
    const staticData = mockMicroData.partnersStatic;
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);
    const scrollRef = useRef<HTMLDivElement>(null);

    const totalLogos = partners?.length || 0;
    const dotCount = Math.max(0, totalLogos - visibleCount + 1);

    // Determine visible logos based on screen width
    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(3);
            } else {
                setVisibleCount(5);
            }
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
                const gap = 32; // gap-8 is 32px
                scrollRef.current.scrollTo({
                    left: index * (itemWidth + gap),
                    behavior: 'smooth'
                });
                setActiveIndex(index);
            }
        }
    };

    // Auto-play logic
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
    }, [dotCount, activeIndex]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemElement = scrollRef.current.children[0] as HTMLElement;
            if (itemElement) {
                const itemWidth = itemElement.offsetWidth;
                const gap = 32;
                const index = Math.round(scrollLeft / (itemWidth + gap));

                const clampedIndex = Math.min(index, dotCount - 1);
                if (clampedIndex !== activeIndex) {
                    setActiveIndex(clampedIndex);
                }
            }
        }
    };

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-[26px] font-extrabold text-[#111827] uppercase tracking-wider">
                        {staticData.title}
                    </h2>
                    <p className="text-gray-500 text-[13px] font-bold uppercase tracking-[0.2em] opacity-80">
                        {staticData.subtitle}
                    </p>
                </div>

                {/* Partners Slider Container */}
                <div className="relative overflow-hidden px-4">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
                    >
                        {isLoading ? (
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
                                    {partner.websiteUrl ? (
                                        <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={partner.logoUrl}
                                                alt={partner.partnerName}
                                                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={partner.logoUrl}
                                            alt={partner.partnerName}
                                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Custom Slider Indicator - Only show if more logos than visible */}
                {dotCount > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: dotCount }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                onClick={() => scrollTo(dotIndex)}
                                className={`h-2.5 transition-all duration-500 rounded-full cursor-pointer ${activeIndex === dotIndex
                                    ? 'w-10 bg-[#EF6925]'
                                    : 'w-2.5 bg-[#FDBA74] hover:bg-[#FB923C]'
                                    }`}
                                aria-label={`Go to slide ${dotIndex + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    scroll-behavior: smooth;
                }
            `}</style>
        </section>
    );
};

export default MicroPartners;
