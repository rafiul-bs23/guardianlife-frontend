import React from 'react';
import { useTranslation } from 'react-i18next';
import type { BancaBranch, PaginationData } from '../types';
import Pagination from '../../../shared/Components/Pagination';

interface BranchTableSectionProps {
    branches: BancaBranch[];
    is_loading: boolean;
    error: string | null;
    pagination: PaginationData | null;
    current_page: number;
    on_page_change: (page: number) => void;
}

const SkeletonRow = ({ col_count }: { col_count: number }) => (
    <tr className="animate-pulse">
        {Array.from({ length: col_count }).map((_, i) => (
            <td key={i} className="px-8 py-5">
                <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
        ))}
    </tr>
);

const BranchTableSection: React.FC<BranchTableSectionProps> = ({
    branches,
    is_loading,
    error,
    pagination,
    current_page,
    on_page_change
}) => {
    const { t } = useTranslation('banca_city');
    const ITEMS_PER_PAGE = 10;
    const startIndex = (current_page - 1) * ITEMS_PER_PAGE;

    return (
        <section className="pb-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide">{t('table.headers.sl')}</th>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide">{t('table.headers.branch_name')}</th>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide">{t('table.headers.division')}</th>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide">{t('table.headers.district')}</th>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide">{t('table.headers.area')}</th>
                                    <th className="px-8 py-4 font-semibold whitespace-nowrap text-xs uppercase tracking-wide text-center">{t('table.headers.bancassurance')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {is_loading ? (
                                    Array.from({ length: 4 }).map((_, i) => (
                                        <SkeletonRow key={i} col_count={6} />
                                    ))
                                ) : error ? (
                                    <tr>
                                        <td colSpan={6} className="px-8 py-10 text-center text-red-500 font-medium">
                                            {error}
                                        </td>
                                    </tr>
                                ) : branches.length > 0 ? (
                                    branches.map((branch, index) => (
                                        <tr key={index} className="hover:bg-primary/10 transition-colors even:bg-gray-50">
                                            <td className="px-8 py-5 font-medium text-gray-500 whitespace-nowrap">
                                                {startIndex + index + 1}
                                            </td>
                                            <td className="px-8 py-5 whitespace-nowrap">
                                                <span className="font-semibold text-gray-800">
                                                    {branch.branch_name}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-gray-600 whitespace-nowrap">
                                                {branch.division_name || '—'}
                                            </td>
                                            <td className="px-8 py-5 text-gray-600 whitespace-nowrap">
                                                {branch.district_name || '—'}
                                            </td>
                                            <td className="px-8 py-5 text-gray-600 whitespace-nowrap">
                                                {branch.area_name || '—'}
                                            </td>
                                            <td className="px-8 py-5 text-center">
                                                {branch.bancassurance_available ? (
                                                    <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 uppercase tracking-tighter">
                                                        {t('table.status.available')}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-300 text-xs">—</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="px-8 py-10 text-center text-gray-400 font-medium">
                                            {t('table.empty_state')}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {pagination && (
                        <Pagination
                            pagination={pagination}
                            onPageChange={on_page_change}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default BranchTableSection;
