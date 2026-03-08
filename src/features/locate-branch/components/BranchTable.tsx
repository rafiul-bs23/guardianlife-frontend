import { useTranslation } from 'react-i18next';
import Pagination from '../../../shared/Components/Pagination';
import type { PaginationData } from '../../../shared/types/pagination';
import type { Branch } from '../types';

interface BranchTableProps {
    branches: Branch[];
    pagination: PaginationData | null;
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const SkeletonRow = () => (
    <tr className="animate-pulse">
        {Array.from({ length: 9 }).map((_, i) => (
            <td key={i} className="px-4 py-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
        ))}
    </tr>
);

const BranchTable = ({
    branches,
    pagination,
    isLoading,
    error,
    currentPage,
    onPageChange,
}: BranchTableProps) => {
    const { t } = useTranslation('locate_branch');
    const startIndex = pagination ? (currentPage - 1) * 10 : 0;

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-primary text-white">
                        <tr>
                            {[
                                { key: 'sl', label: t('table.headers.sl') },
                                { key: 'category', label: t('table.headers.category') },
                                { key: 'name', label: t('table.headers.name') },
                                { key: 'division', label: t('table.headers.division') },
                                { key: 'district', label: t('table.headers.district') },
                                { key: 'area', label: t('table.headers.area') },
                                { key: 'address', label: t('table.headers.address') },
                                { key: 'contact', label: t('table.headers.contact') },
                                { key: 'map', label: t('table.headers.map') },
                            ].map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-3.5 font-semibold whitespace-nowrap text-xs uppercase tracking-wide"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
                        ) : error ? (
                            <tr>
                                <td
                                    colSpan={9}
                                    className="px-4 py-10 text-center text-red-500 font-medium"
                                >
                                    {error}
                                </td>
                            </tr>
                        ) : branches.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={9}
                                    className="px-4 py-10 text-center text-gray-400 font-medium"
                                >
                                    {t('table.no_branches')}
                                </td>
                            </tr>
                        ) : (
                            branches.map((branch, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-primary/10 transition-colors even:bg-gray-50"
                                >
                                    <td className="px-4 py-3.5 font-medium text-gray-500 whitespace-nowrap">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="px-4 py-3.5 whitespace-nowrap">
                                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                            {branch.office_category}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3.5 font-medium text-gray-800 whitespace-nowrap">
                                        {branch.office_name}
                                    </td>
                                    <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                        {branch.division_name}
                                    </td>
                                    <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                        {branch.district_name}
                                    </td>
                                    <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                        {branch.area_name}
                                    </td>
                                    <td className="px-4 py-3.5 text-gray-600 max-w-[200px] truncate">
                                        {branch.address}
                                    </td>
                                    <td className="px-4 py-3.5 whitespace-nowrap">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-medium text-gray-700">
                                                {branch.contact_person_name}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {branch.contact_person_phone_number}
                                            </span>
                                            {branch.contact_person_email && (
                                                <span className="text-xs text-primary">
                                                    {branch.contact_person_email}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3.5 whitespace-nowrap">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary/80 px-3 py-1.5 rounded-lg transition"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            {t('table.map_btn')}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {pagination && (
                <Pagination
                    pagination={pagination}
                    onPageChange={onPageChange}
                />
            )}
        </div>
    );
};

export default BranchTable;
