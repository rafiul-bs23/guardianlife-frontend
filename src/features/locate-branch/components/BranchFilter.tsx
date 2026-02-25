import type { BranchQueryParams } from '../types';
import { mockBranchData } from '../api/mockData';

interface BranchFilterProps {
    filters: BranchQueryParams;
    onFilterChange: (filters: BranchQueryParams) => void;
    onReset: () => void;
}

// Derive unique filter options from mock data (used for dropdown population)
const allBranches = mockBranchData.data.branches;
const unique = <T,>(arr: T[]): T[] => [...new Set(arr)];

const OFFICE_CATEGORIES = unique(allBranches.map((b) => b.office_category));
const DIVISIONS = unique(allBranches.map((b) => b.division_name));
const DISTRICTS = unique(allBranches.map((b) => b.district_name));
const AREAS = unique(allBranches.map((b) => b.area_name));

const BranchFilter = ({ filters, onFilterChange, onReset }: BranchFilterProps) => {
    const handleChange = (key: keyof BranchQueryParams, value: string) => {
        onFilterChange({ ...filters, [key]: value || undefined });
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Office Category */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Office Category
                    </label>
                    <select
                        value={filters.office_category ?? ''}
                        onChange={(e) => handleChange('office_category', e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                        <option value="">All Categories</option>
                        {OFFICE_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Division */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Division
                    </label>
                    <select
                        value={filters.division_name ?? ''}
                        onChange={(e) => handleChange('division_name', e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                        <option value="">All Divisions</option>
                        {DIVISIONS.map((div) => (
                            <option key={div} value={div}>
                                {div}
                            </option>
                        ))}
                    </select>
                </div>

                {/* District */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        District
                    </label>
                    <select
                        value={filters.district_name ?? ''}
                        onChange={(e) => handleChange('district_name', e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                        <option value="">All Districts</option>
                        {DISTRICTS.map((dist) => (
                            <option key={dist} value={dist}>
                                {dist}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Area */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Area
                    </label>
                    <select
                        value={filters.area_name ?? ''}
                        onChange={(e) => handleChange('area_name', e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                        <option value="">All Areas</option>
                        {AREAS.map((area) => (
                            <option key={area} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-400 transition"
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
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default BranchFilter;
