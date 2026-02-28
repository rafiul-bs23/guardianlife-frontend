import type { BranchQueryParams } from '../types';

interface BranchFilterProps {
    filters: BranchQueryParams;
    onFilterChange: (filters: BranchQueryParams) => void;
    onReset: () => void;
}

const BranchFilter = ({ filters, onFilterChange, onReset }: BranchFilterProps) => {
    const handleQueryChange = (value: string) => {
        onFilterChange({ ...filters, query: value || undefined });
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-end">
                {/* Search Query */}
                <div className="flex-1 flex flex-col gap-1.5 w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                        Search Branches
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name, category, division, district, area or address..."
                            value={filters.query ?? ''}
                            onChange={(e) => handleQueryChange(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                        />
                    </div>
                </div>

                {/* Reset Button */}
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95"
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
    );
};

export default BranchFilter;
