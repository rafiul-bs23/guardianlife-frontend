import type { HospitalType, HospitalFrontendFilters } from '../types';

interface HospitalFilterProps {
    active_type: HospitalType;
    frontend_filters: HospitalFrontendFilters;
    division_options: string[];
    district_options: string[];
    area_options: string[];
    country_options: string[];
    on_type_change: (type: HospitalType) => void;
    on_filter_change: (filters: HospitalFrontendFilters) => void;
    on_reset: () => void;
}

const NAT_SUB_TABS: { label: string; value: HospitalType }[] = [
    { label: 'Hospital', value: 'national_hospital' },
    { label: 'Diagnostic Center', value: 'national_diagnostic' },
];

const HospitalFilter = ({
    active_type,
    frontend_filters,
    division_options,
    district_options,
    area_options,
    country_options,
    on_type_change,
    on_filter_change,
    on_reset,
}: HospitalFilterProps) => {
    const is_international = active_type === 'international_hospital';
    const is_national = !is_international;

    const handle_division_change = (value: string) => {
        on_filter_change({
            ...frontend_filters,
            division_name: value,
            district_name: '',
            area_name: '',
        });
    };

    const handle_district_change = (value: string) => {
        on_filter_change({
            ...frontend_filters,
            district_name: value,
            area_name: '',
        });
    };

    return (
        <div className="mb-8">
            {/* ── Main Type Tabs: National | International ── */}
            <div className="flex gap-3 mb-4 flex-wrap">
                <button
                    onClick={() => on_type_change('national_hospital')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold border transition ${is_national
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-primary border-primary hover:bg-primary/10'
                        }`}
                >
                    National
                </button>
                <button
                    onClick={() => on_type_change('international_hospital')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold border transition ${is_international
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-primary border-primary hover:bg-primary/10'
                        }`}
                >
                    International
                </button>
            </div>

            {/* ── Sub-Tabs: Hospital | Diagnostic Center (National only) ── */}
            {is_national && (
                <div className="flex gap-2 mb-5 flex-wrap">
                    {NAT_SUB_TABS.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => on_type_change(tab.value)}
                            className={`px-5 py-2 rounded-lg text-sm font-medium border transition ${active_type === tab.value
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}

            {/* ── Filter Row ── */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

                {/* ── National: 4-column grid ── */}
                {is_national && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Hospital Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Hospital Name
                            </label>
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search hospital..."
                                    value={frontend_filters?.hospital_name ?? ''}
                                    onChange={(e) =>
                                        on_filter_change({
                                            ...frontend_filters,
                                            hospital_name: e.target.value,
                                        })
                                    }
                                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Division */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Choose Division
                            </label>
                            <select
                                value={frontend_filters?.division_name ?? ''}
                                onChange={(e) => handle_division_change(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            >
                                <option value="">All Divisions</option>
                                {division_options?.map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        {/* District */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Select District
                            </label>
                            <select
                                value={frontend_filters?.district_name ?? ''}
                                onChange={(e) => handle_district_change(e.target.value)}
                                disabled={!frontend_filters?.division_name}
                                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="">All Districts</option>
                                {district_options?.map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        {/* Area */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Select Area
                            </label>
                            <select
                                value={frontend_filters?.area_name ?? ''}
                                onChange={(e) =>
                                    on_filter_change({
                                        ...frontend_filters,
                                        area_name: e.target.value,
                                    })
                                }
                                disabled={!frontend_filters?.district_name}
                                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="">All Areas</option>
                                {area_options?.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                {/* ── International: search 3/4 + country 1/4 ── */}
                {is_international && (
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Hospital Name – 3/4 */}
                        <div className="flex flex-col gap-1 flex-[3]">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Hospital Name
                            </label>
                            <div className="relative">
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search international hospital..."
                                    value={frontend_filters?.hospital_name ?? ''}
                                    onChange={(e) =>
                                        on_filter_change({
                                            ...frontend_filters,
                                            hospital_name: e.target.value,
                                        })
                                    }
                                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Country – 1/4 */}
                        <div className="flex flex-col gap-1 flex-[1]">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Choose Country
                            </label>
                            <select
                                value={frontend_filters?.country_name ?? ''}
                                onChange={(e) =>
                                    on_filter_change({
                                        ...frontend_filters,
                                        country_name: e.target.value,
                                    })
                                }
                                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            >
                                <option value="">All Countries</option>
                                {country_options?.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                {/* Reset */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={on_reset}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HospitalFilter;
