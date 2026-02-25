import type { Agent, Pagination } from '../types';

interface AgentTableProps {
    agents: Agent[];
    pagination: Pagination | null;
    is_loading: boolean;
    error: string | null;
    current_page: number;
    on_page_change: (page: number) => void;
}

const TABLE_COLUMNS = [
    'SL',
    'Name',
    'Mobile',
    'FA Code',
    'UM Code',
    'License No.',
    'Issue Date',
    'Expiry Date',
    'Working Area',
    'Address',
];

const SkeletonRow = () => (
    <tr className="animate-pulse">
        {Array.from({ length: TABLE_COLUMNS.length }).map((_, i) => (
            <td key={i} className="px-4 py-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
        ))}
    </tr>
);

const format_date = (date_str?: string | null): string => {
    if (!date_str) return '—';
    const date = new Date(date_str);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

const is_expired = (expiry_date?: string | null): boolean => {
    if (!expiry_date) return false;
    return new Date(expiry_date) < new Date();
};

const AgentTable = ({
    agents,
    pagination,
    is_loading,
    error,
    current_page,
    on_page_change,
}: AgentTableProps) => {
    const start_index = (current_page - 1) * 10;

    const page_numbers = Array.from(
        { length: pagination?.total_pages ?? 0 },
        (_, i) => i + 1
    );

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-primary text-white">
                        <tr>
                            {TABLE_COLUMNS.map((col) => (
                                <th
                                    key={col}
                                    className="px-4 py-3.5 font-semibold whitespace-nowrap text-xs uppercase tracking-wide"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {is_loading ? (
                            Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
                        ) : error ? (
                            <tr>
                                <td
                                    colSpan={TABLE_COLUMNS.length}
                                    className="px-4 py-10 text-center text-red-500 font-medium"
                                >
                                    {error}
                                </td>
                            </tr>
                        ) : (agents?.length ?? 0) === 0 ? (
                            <tr>
                                <td
                                    colSpan={TABLE_COLUMNS.length}
                                    className="px-4 py-10 text-center text-gray-400 font-medium"
                                >
                                    No agents found.
                                </td>
                            </tr>
                        ) : (
                            agents?.map((agent, index) => {
                                const expired = is_expired(agent?.license_expiry_date);
                                return (
                                    <tr
                                        key={index}
                                        className="hover:bg-primary/10 transition-colors even:bg-gray-50"
                                    >
                                        {/* SL */}
                                        <td className="px-4 py-3.5 font-medium text-gray-500 whitespace-nowrap">
                                            {start_index + index + 1}
                                        </td>

                                        {/* Name */}
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            <span className="font-semibold text-gray-800">
                                                {agent?.name ?? '—'}
                                            </span>
                                            <p className="text-xs text-gray-400 mt-0.5 max-w-[160px] truncate">
                                                {agent?.national_id ?? '—'}
                                            </p>
                                        </td>

                                        {/* Mobile */}
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                            {agent?.mobile_number ?? '—'}
                                        </td>

                                        {/* FA Code */}
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                                {agent?.fa_code ?? '—'}
                                            </span>
                                        </td>

                                        {/* UM Code */}
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            {agent?.um_code ? (
                                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                                                    {agent.um_code}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 text-xs">N/A</span>
                                            )}
                                        </td>

                                        {/* License Number */}
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap font-mono text-xs">
                                            {agent?.license_number ?? '—'}
                                        </td>

                                        {/* Issue Date */}
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                            {format_date(agent?.license_issue_date)}
                                        </td>

                                        {/* Expiry Date */}
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            <span
                                                className={`text-sm font-medium ${expired ? 'text-red-500' : 'text-green-600'
                                                    }`}
                                            >
                                                {format_date(agent?.license_expiry_date)}
                                            </span>
                                            {expired && (
                                                <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 uppercase">
                                                    Expired
                                                </span>
                                            )}
                                        </td>

                                        {/* Working Area */}
                                        <td className="px-4 py-3.5 text-gray-600 max-w-[160px] truncate">
                                            {agent?.working_area ?? '—'}
                                        </td>

                                        {/* Address */}
                                        <td className="px-4 py-3.5 text-gray-500 max-w-[180px] truncate text-xs">
                                            {agent?.address ?? '—'}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {(pagination?.total_pages ?? 0) > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-500">
                        Page{' '}
                        <span className="font-semibold text-gray-700">
                            {pagination?.current_page}
                        </span>{' '}
                        of{' '}
                        <span className="font-semibold text-gray-700">
                            {pagination?.total_pages}
                        </span>
                        {' · '}
                        <span className="font-semibold text-gray-700">
                            {pagination?.total_records}
                        </span>{' '}
                        total records
                    </p>

                    <div className="flex items-center gap-1 flex-wrap justify-center">
                        {/* Prev */}
                        <button
                            onClick={() => on_page_change(current_page - 1)}
                            disabled={!pagination?.has_previous}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                            ‹ Prev
                        </button>

                        {/* Page Numbers */}
                        {page_numbers.map((p) => (
                            <button
                                key={p}
                                onClick={() => on_page_change(p)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${p === current_page
                                        ? 'bg-primary text-white border-primary'
                                        : 'border-gray-300 text-gray-600 bg-white hover:bg-gray-100'
                                    }`}
                            >
                                {p}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            onClick={() => on_page_change(current_page + 1)}
                            disabled={!pagination?.has_next}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                            Next ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentTable;
