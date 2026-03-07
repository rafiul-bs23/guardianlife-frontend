import React from 'react';

interface BranchSearchSectionProps {
    frontend_filters: {
        division_name: string;
        district_name: string;
        area_name: string;
        branch_name: string;
    };
    division_options: string[];
    district_options: string[];
    area_options: string[];
    on_filter_change: (filters: any) => void;
    on_reset: () => void;
}

const BranchSearchSection: React.FC<BranchSearchSectionProps> = ({
    frontend_filters,
    division_options,
    district_options,
    area_options,
    on_filter_change,
    on_reset,
}) => {
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
        <section className="py-12 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                        FIND A CITY BANK BRANCH OFFERING GUARDIAN LIFE INSURANCE
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto font-medium">
                        Guardian Life insurance products are available at selected City Bank branches across
                        Bangladesh. Use the filters below to find the nearest branch offering Bancassurance services.
                    </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Branch Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Branch Name
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
                                    placeholder="Search branch..."
                                    value={frontend_filters?.branch_name ?? ''}
                                    onChange={(e) =>
                                        on_filter_change({
                                            ...frontend_filters,
                                            branch_name: e.target.value,
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
        </section>
    );
};

export default BranchSearchSection;
