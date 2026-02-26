import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';
import type { BoostCoverageItem } from '../types';

interface BoostCoverageModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: BoostCoverageItem | null;
    shortTitle?: string; // e.g. "HI", "CI"
}

// Indian/BD number format: 1,00,000 instead of 100,000
const formatBDT = (amount: number) => amount.toLocaleString('en-IN');

const BoostCoverageModal: React.FC<BoostCoverageModalProps> = ({
    isOpen,
    onClose,
    data,
    shortTitle,
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !data) return null;


    const tableLabel = shortTitle ? `${shortTitle} Plan` : 'Plan';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal card */}
            <div className="app-popup relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">

                {/* Scrollable body */}
                <div className="overflow-y-auto flex-1 px-8 sm:px-12 py-8">

                    {/* Title row */}
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                            {data.title}
                        </h2>
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#F37021] text-[#F37021] hover:bg-orange-50 transition-colors"
                        >
                            <X className="w-4 h-4 stroke-[2.5px]" />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-justify mb-2">
                        {data.description}
                    </p>

                    {/* Highlights: first item as heading, rest as ➤ bullets */}
                    {data.highlights && (
                        <div className="mb-2">

                            <ul >
                                {data.highlights.map((point, i) => (
                                    <li key={i} className="flex items-start gap-1 text-sm text-gray-600">
                                        <span className="text-gray-800 text-[10px] mt-1 flex-shrink-0">➤</span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Plans table */}
                    {data.plans.length > 0 && (
                        <div className="overflow-x-auto rounded-xl border border-orange-200 mb-3">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr>
                                        {/* First column header — orange tinted */}
                                        <th className="bg-orange-50 text-left px-5 py-3 font-semibold text-gray-800 border-r border-orange-200 whitespace-nowrap">
                                            {tableLabel}
                                        </th>
                                        {data.plans.map((plan, i) => (
                                            <th
                                                key={i}
                                                className="px-4 py-3 font-medium text-gray-700 text-center whitespace-nowrap"
                                            >
                                                {plan.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-orange-200">
                                        {/* First column data — orange tinted */}
                                        <td className="bg-orange-50 px-5 py-3 font-semibold text-gray-800 border-r border-orange-200 whitespace-nowrap">
                                            Limit Per Year (BDT)
                                        </td>
                                        {data.plans.map((plan, i) => (
                                            <td
                                                key={i}
                                                className="px-4 py-3 text-center text-gray-700 whitespace-nowrap"
                                            >
                                                {formatBDT(plan.limit_per_year)}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Brochure download — outline style, bottom left */}
                    <a
                        href={data.brochure_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#F37021] text-[#F37021] text-sm font-medium hover:bg-orange-50 transition-colors"
                    >
                        <FileText className="w-4 h-4" />
                        Brochure
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BoostCoverageModal;
