import { useState, useRef } from "react";
import BancaCityHeader from "./components/BancaCityHeader";
import { useBancaBankInfo } from "./hooks/useBancaBankInfo";
import BankInfoSection from "./components/BankInfoSection";
import BankProductsSection from "./components/BankProductsSection";
import BranchSearchSection from "./components/BranchSearchSection";
import BranchTableSection from "./components/BranchTableSection";
import { useBancaBranches } from "./hooks/useBancaBranches";
import { useParams } from "react-router-dom";
import { useHeader } from "../../shared/hooks/useHeader";

const BancaCity = () => {
  const { bank_code } = useParams();
  const { data: headerData, isLoading: isHeaderLoading } = useHeader(`banca-bank-${bank_code}`);
  const { data: bankInfoData } = useBancaBankInfo(bank_code as string);
  const productsRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState({
    division_name: '',
    district_name: '',
    area_name: '',
    branch_name: '',
  });

  const {
    branches,
    isLoading: isBranchesLoading,
    updateParams
  } = useBancaBranches(bank_code as string);

  const onFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    if (newFilters.branch_name !== filters.branch_name) {
      updateParams({ branch_name: newFilters.branch_name });
    }
  };

  const onReset = () => {
    const resetFilters = {
      division_name: '',
      district_name: '',
      area_name: '',
      branch_name: '',
    };
    setFilters(resetFilters);
    updateParams({ branch_name: '' });
  };

  const filteredBranches = branches.filter(branch => {
    if (filters.division_name && branch.division_name !== filters.division_name) return false;
    if (filters.district_name && branch.district_name !== filters.district_name) return false;
    if (filters.area_name && branch.area_name !== filters.area_name) return false;
    return true;
  });

  const divisionOptions = Array.from(new Set(branches.map(b => b.division_name))).filter(Boolean);
  const districtOptions = Array.from(new Set(branches.filter(b => !filters.division_name || b.division_name === filters.division_name).map(b => b.district_name))).filter(Boolean);
  const areaOptions = Array.from(new Set(branches.filter(b => !filters.district_name || b.district_name === filters.district_name).map(b => b.area_name))).filter(Boolean);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {!isHeaderLoading && headerData && (
        <BancaCityHeader
          data={headerData}
          on_explore_click={scrollToProducts}
        />
      )}

      {bankInfoData && (
        <>
          <BankInfoSection data={bankInfoData.bank} />
          {bankInfoData.products && bankInfoData.products.length > 0 && (
            <div ref={productsRef}>
              <BankProductsSection products={bankInfoData.products} />
            </div>
          )}
        </>
      )}

      <BranchSearchSection
        frontend_filters={filters}
        division_options={divisionOptions}
        district_options={districtOptions}
        area_options={areaOptions}
        on_filter_change={onFilterChange}
        on_reset={onReset}
      />

      <BranchTableSection
        branches={filteredBranches}
        is_loading={isBranchesLoading}
        error={null}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Future content for City Bank partnership details can go here */}
      </div>
    </main>
  );
};

export default BancaCity;
