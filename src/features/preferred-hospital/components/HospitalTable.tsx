import type { Hospital, HospitalType } from '../types';

interface HospitalTableProps {
    hospitals: Hospital[];
    is_loading: boolean;
    error: string | null;
    active_type: HospitalType;
}

const is_international = (type: HospitalType) => type === 'international_hospital';

const get_columns = (type: HospitalType): string[] => {
    if (is_international(type)) {
        return ['SL', 'Hospital Name', 'Country', 'Address', 'Facilities', 'Contact Details', 'Remark'];
    }
    return ['SL', 'Hospital Name', 'Division', 'District', 'Area', 'Address', 'Facilities', 'Contact Details', 'Remark'];
};

const SkeletonRow = ({ col_count }: { col_count: number }) => (
    <tr className="animate-pulse">
        {Array.from({ length: col_count }).map((_, i) => (
            <td key={i} className="px-4 py-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
        ))}
    </tr>
);

const HospitalTable = ({ hospitals, is_loading, error, active_type }: HospitalTableProps) => {
    const columns = get_columns(active_type);
    const intl = is_international(active_type);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    {/* Header */}
                    <thead className="bg-primary text-white">
                        <tr>
                            {columns?.map((col) => (
                                <th
                                    key={col}
                                    className="px-4 py-3.5 font-semibold whitespace-nowrap text-xs uppercase tracking-wide"
                                >
                                    {col}
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
                                    No hospitals found for the selected filters.
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
                                        {index + 1}
                                    </td>

                                    {/* Hospital Name */}
                                    <td className="px-4 py-3.5 whitespace-nowrap">
                                        <span className="font-semibold text-gray-800">
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

            {/* Results count */}
            {!is_loading && !error && (hospitals?.length ?? 0) > 0 && (
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-500">
                    Showing{' '}
                    <span className="font-semibold text-gray-700">{hospitals?.length}</span>{' '}
                    result{hospitals?.length !== 1 ? 's' : ''}
                </div>
            )}
        </div>
    );
};

export default HospitalTable;
