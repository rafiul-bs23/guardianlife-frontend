import { useTranslation } from 'react-i18next';
import Pagination from '../../../shared/Components/Pagination';
import type { PaginationData } from '../../../shared/types/pagination';
import type { Hospital, HospitalType } from '../types';

interface HospitalTableProps {
    hospitals: Hospital[];
    pagination: PaginationData | null;
    is_loading: boolean;
    error: string | null;
    current_page: number;
    on_page_change: (page: number) => void;
    active_type: HospitalType;
}

const is_international = (type: HospitalType) => type === 'international_hospital';

const SkeletonRow = ({ col_count }: { col_count: number }) => (
    <tr className="animate-pulse">
        {Array.from({ length: col_count }).map((_, i) => (
            <td key={i} className="px-4 py-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
        ))}
    </tr>
);

const HospitalTable = ({
    hospitals,
    pagination,
    is_loading,
    error,
    current_page,
    on_page_change,
    active_type
}: HospitalTableProps) => {
    const { t } = useTranslation('preferred_hospital');
    const intl = is_international(active_type);
    const startIndex = (current_page - 1) * 10;

    const get_columns = (type: HospitalType): { id: string; label: string }[] => {
        if (is_international(type)) {
            return [
                { id: 'sl', label: t('table.col_sl') },
                { id: 'hospital_name', label: t('table.col_hospital_name') },
                { id: 'country', label: t('table.col_country') },
                { id: 'address', label: t('table.col_address') },
                { id: 'facilities', label: t('table.col_facilities') },
                { id: 'contact_details', label: t('table.col_contact_details') },
                { id: 'remark', label: t('table.col_remark') },
            ];
        }
        return [
            { id: 'sl', label: t('table.col_sl') },
            { id: 'hospital_name', label: t('table.col_hospital_name') },
            { id: 'division', label: t('table.col_division') },
            { id: 'district', label: t('table.col_district') },
            { id: 'area', label: t('table.col_area') },
            { id: 'address', label: t('table.col_address') },
            { id: 'facilities', label: t('table.col_facilities') },
            { id: 'contact_details', label: t('table.col_contact_details') },
            { id: 'remark', label: t('table.col_remark') },
        ];
    };

    const columns = get_columns(active_type);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    {/* Header */}
                    <thead className="bg-primary text-white">
                        <tr>
                            {columns?.map((col) => (
                                <th
                                    key={col.id}
                                    className="px-4 py-3.5 font-semibold whitespace-nowrap text-xs uppercase tracking-wide"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-100">
                        {is_loading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <SkeletonRow key={i} col_count={columns?.length ?? 9} />
                            ))
                        ) : error ? (
                            <tr>
                                <td
                                    colSpan={columns?.length}
                                    className="px-4 py-10 text-center text-red-500 font-medium"
                                >
                                    {error}
                                </td>
                            </tr>
                        ) : (hospitals?.length ?? 0) === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns?.length}
                                    className="px-4 py-10 text-center text-gray-400 font-medium"
                                >
                                    {t('table.empty')}
                                </td>
                            </tr>
                        ) : (
                            hospitals?.map((hospital, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-primary/10 transition-colors even:bg-gray-50"
                                >
                                    {/* SL */}
                                    <td className="px-4 py-3.5 font-medium text-gray-500 whitespace-nowrap">
                                        {startIndex + index + 1}
                                    </td>

                                    {/* Hospital Name */}
                                    <td className="px-4 py-3.5 min-w-[200px] max-w-[300px]">
                                        <span className="font-semibold text-gray-800 line-clamp-2">
                                            {hospital?.hospital_name ?? '—'}
                                        </span>
                                    </td>

                                    {/* Country (International only) */}
                                    {intl && (
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                {hospital?.country_name ?? '—'}
                                            </span>
                                        </td>
                                    )}

                                    {/* Division (National only) */}
                                    {!intl && (
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                            {hospital?.division_name ?? '—'}
                                        </td>
                                    )}

                                    {/* District (National only) */}
                                    {!intl && (
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                            {hospital?.district_name ?? '—'}
                                        </td>
                                    )}

                                    {/* Area (National only) */}
                                    {!intl && (
                                        <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                                            {hospital?.area_name ?? '—'}
                                        </td>
                                    )}

                                    {/* Address */}
                                    <td className="px-4 py-3.5 text-gray-600 max-w-[180px]">
                                        <span className="line-clamp-2 text-xs">
                                            {hospital?.address ?? '—'}
                                        </span>
                                    </td>

                                    {/* Facilities */}
                                    <td className="px-4 py-3.5 max-w-[220px]">
                                        {hospital?.facilities ? (
                                            <span className="line-clamp-3 text-xs text-gray-600">
                                                {hospital.facilities}
                                            </span>
                                        ) : (
                                            <span className="text-gray-400 text-xs">—</span>
                                        )}
                                    </td>

                                    {/* Contact Details */}
                                    <td className="px-4 py-3.5 whitespace-nowrap">
                                        <div className="flex flex-col gap-1">
                                            {(hospital?.contact_person_phone_number?.length ?? 0) > 0 ? (
                                                hospital?.contact_person_phone_number?.map((phone, i) => (
                                                    <a
                                                        key={i}
                                                        href={`tel:${phone}`}
                                                        className="text-xs text-primary hover:underline"
                                                    >
                                                        {phone}
                                                    </a>
                                                ))
                                            ) : (
                                                <span className="text-gray-400 text-xs">—</span>
                                            )}
                                            {hospital?.contact_person_email?.map((email, i) => (
                                                <a
                                                    key={i}
                                                    href={`mailto:${email}`}
                                                    className="text-xs text-primary/70 hover:underline"
                                                >
                                                    {email}
                                                </a>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Remark */}
                                    <td className="px-4 py-3.5 max-w-[160px]">
                                        {hospital?.remarks ? (
                                            <span className="text-xs text-gray-500 italic line-clamp-2">
                                                {hospital.remarks}
                                            </span>
                                        ) : (
                                            <span className="text-gray-300 text-xs">—</span>
                                        )}
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
                    onPageChange={on_page_change}
                />
            )}
        </div>
    );
};

export default HospitalTable;
