import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useEmc } from '../hooks/useEmc';
import EmcCard from './EmcCard';

// ─── Breakpoint detection ─────────────────────────────────────────────────────
type Breakpoint = 'mobile' | 'sm' | 'lg';

const getBreakpoint = (): Breakpoint => {
    if (typeof window === 'undefined') return 'lg';
    if (window.innerWidth >= 1024) return 'lg';
    if (window.innerWidth >= 640) return 'sm';
    return 'mobile';
};

// ─── Per-breakpoint config ────────────────────────────────────────────────────
/**
 * cardsPerRow — max cards visible in one row
 *
 * hoverGrow   — the flexGrow given to the hovered card so it expands to
 *               ~100 % of the image's natural width, while all default cards
 *               show ~70 % of that natural width.
 *
 *   Formula: hoverGrow = (N − 1) / (0.7 × N − 1)
 *            N = 2 → 2.50 | N = 4 → 1.75 | N = 6 → 1.65
 *   (Values are slightly above the ideal to compensate for gap-1.5 spacing.)
 *
 * rowHeight   — fixed row height that makes the 70 % rule hold at the most
 *               common viewport width for each breakpoint.
 *               h = cardWidth / (0.70 × imageAspect)
 *               mobile/tablet  ≈ 350 px  |  desktop ≈ 430 px
 */
const CONFIG: Record<Breakpoint, { cardsPerRow: number }> = {
    mobile: { cardsPerRow: 2 },
    sm: { cardsPerRow: 4 },
    lg: { cardsPerRow: 6 },
};

// ─── Helper: split array into rows of n ──────────────────────────────────────
function chunk<T>(arr: T[], n: number): T[][] {
    return Array.from(
        { length: Math.ceil(arr.length / n) },
        (_, i) => arr.slice(i * n, i * n + n),
    );
}

// ─── Component ────────────────────────────────────────────────────────────────
const EmcList: React.FC = () => {
    const { t } = useTranslation('emc');
    const { data: members, isLoading, error } = useEmc();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

    useEffect(() => {
        const onResize = () => setBreakpoint(getBreakpoint());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const { cardsPerRow } = CONFIG[breakpoint];

    // Mathematically exact flex-grow required to un-clip from 70% to 100%
    const hoverGrow = (cardsPerRow - 1) / (0.7 * cardsPerRow - 1);

    // Responsive aspect ratio (Width/Height) keeps card height perfect at all screen sizes
    // Calculation: Cards * 70% clipped width * 5:8 image aspect ratio
    const rowAspectRatio = cardsPerRow * 0.7 * (5 / 8);

    const rows = chunk(members ?? [], cardsPerRow);

    return (
        <section className="py-16 px-4 md:px-12 max-w-full mx-auto">

            {/* Section title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#212529] uppercase tracking-wide">
                    {t('list.section_title')}
                </h2>
            </div>

            {/* States */}
            {isLoading ? (
                <div className="flex items-center justify-center min-h-[400px] bg-white rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
                </div>

            ) : error ? (
                <div className="text-center text-red-500 rounded-lg p-4 md:p-8 shadow-sm">
                    <p className="text-lg font-medium">{error}</p>
                </div>

            ) : (
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-gray-200/60">

                    {/* Stack of independent accordion rows */}
                    <div className="flex flex-col gap-2">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex flex-row gap-1.5 w-full"
                                style={{ aspectRatio: `${rowAspectRatio} / 1` }}
                            >
                                {/* Real cards */}
                                {row.map((member, cardIndex) => {
                                    const globalIndex = rowIndex * cardsPerRow + cardIndex;
                                    return (
                                        <EmcCard
                                            key={globalIndex}
                                            member={member}
                                            flexGrow={
                                                hoveredIndex === globalIndex
                                                    ? hoverGrow   // expand to ~100 % natural width
                                                    : 1           // default ~70 % natural width
                                            }
                                            onMouseEnter={() => setHoveredIndex(globalIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        />
                                    );
                                })}

                                {/* Invisible spacers — fill the last (incomplete) row so
                                    every card in every row has the same default width */}
                                {Array.from({ length: cardsPerRow - row.length }).map((_, i) => (
                                    <div
                                        key={`sp-${i}`}
                                        style={{ flexBasis: 0, flexGrow: 1, flexShrink: 1 }}
                                        className="invisible"
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {!members || members.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            {t('list.empty_state')}
                        </div>
                    ) : null}

                </div>
            )}
        </section>
    );
};

export default EmcList;
