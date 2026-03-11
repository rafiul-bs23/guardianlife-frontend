import React from 'react';
import type { PaginationData } from '../types/pagination';

interface PaginationProps {
    pagination: PaginationData;
    onPageChange: (page: number) => void;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange, className = "" }) => {
    const { current_page, total_pages, total_records } = pagination;

    // if (total_pages <= 1) return null;

    const getPaginationRange = () => {
        const delta = 1; // neighbors
        const range = [];
        const rangeWithDots = [];

        // Always include first 2
        range.push(1);
        if (total_pages > 1) range.push(2);

        // Neighbors of current page
        for (let i = current_page - delta; i <= current_page + delta; i++) {
            if (i > 2 && i < total_pages - 2) {
                range.push(i);
            }
        }

        // Always include last 3
        if (total_pages > 2) {
            if (total_pages > 3) range.push(total_pages - 2);
            range.push(total_pages - 1);
            range.push(total_pages);
        }

        // Filter duplicates and sort
        const uniqueRange = Array.from(new Set(range)).sort((a, b) => a - b);

        // Add ellipses
        let l;
        for (const i of uniqueRange) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6 border-t border-gray-100 bg-white ${className}`}>
            {/* Left Side: Stats */}
            <div className="text-[14px] text-[#6B7280] font-normal order-2 md:order-1">
                Page <span className="font-bold text-[#111827]">{current_page}</span> of <span className="font-bold text-[#111827]">{total_pages}</span>
                <span className="mx-1.5">·</span>
                <span className="font-bold text-[#111827]">{total_records}</span> total records
            </div>

            {/* Right Side: Controls */}
            <div className="flex items-center justify-center gap-2 order-1 md:order-2 w-full md:w-auto">
                {/* Prev Button */}
                <button
                    onClick={() => onPageChange(current_page - 1)}
                    disabled={current_page === 1}
                    className="h-10 px-4 rounded-lg border border-[#E5E7EB] text-[#3B82F6] text-[14px] font-medium bg-white hover:bg-gray-50 disabled:opacity-50 disabled:bg-gray-50 disabled:text-[#9CA3AF] disabled:cursor-not-allowed transition-all duration-200"
                >
                    ‹ Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {getPaginationRange().map((page, index) => {
                        if (page === '...') {
                            return (
                                <span key={`dots-${index}`} className="text-[#3B82F6] font-bold px-1">
                                    ...
                                </span>
                            );
                        }

                        const pageNum = page as number;
                        const isActive = pageNum === current_page;

                        return (
                            <button
                                key={pageNum}
                                onClick={() => onPageChange(pageNum)}
                                className={`min-w-[40px] h-10 px-2 rounded-lg text-[14px] font-bold transition-all duration-200 border ${isActive
                                    ? 'bg-[#EB6925] border-[#EB6925] text-white shadow-md'
                                    : 'bg-white border-[#E5E7EB] text-[#3B82F6] hover:border-[#3B82F6]'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(current_page + 1)}
                    disabled={current_page === total_pages}
                    className="h-10 px-4 rounded-lg border border-[#E5E7EB] text-[#3B82F6] text-[14px] font-medium bg-white hover:bg-gray-50 disabled:opacity-50 disabled:bg-gray-50 disabled:text-[#9CA3AF] disabled:cursor-not-allowed transition-all duration-200"
                >
                    Next ›
                </button>
            </div>
        </div>
    );
};

export default Pagination;
