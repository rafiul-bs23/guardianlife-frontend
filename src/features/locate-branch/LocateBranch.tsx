import LocateBranchHeader from "./components/LocateBranchHeader";
import BranchFilter from "./components/BranchFilter";
import BranchTable from "./components/BranchTable";
import { useLocateBranch } from "./hooks/useLocateBranch";

const LocateBranch = () => {
    const {
        branches,
        pagination,
        isLoading,
        error,
        filters,
        setFilters,
        resetFilters,
        goToPage,
    } = useLocateBranch();

    return (
        <main className="min-h-screen bg-white">
            <LocateBranchHeader />

            <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Section Title */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
                        Find a Branch
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Use the filters below to locate a Guardian Life branch near you.
                    </p>
                </div>

                {/* Filters */}
                <BranchFilter
                    filters={filters}
                    onFilterChange={setFilters}
                    onReset={resetFilters}
                />

                {/* Table */}
                <BranchTable
                    branches={branches}
                    pagination={pagination}
                    isLoading={isLoading}
                    error={error}
                    currentPage={filters.page ?? 1}
                    onPageChange={goToPage}
                />
            </section>
        </main>
    );
};

export default LocateBranch;
