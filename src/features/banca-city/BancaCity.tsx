
import BancaCityHeader from "./components/BancaCityHeader";
import { useHeader } from "./hooks/useHeader";
import { useBancaBankInfo } from "./hooks/useBancaBankInfo";
import BankInfoSection from "./components/BankInfoSection";
import BankProductsSection from "./components/BankProductsSection";
import BranchSearchSection from "./components/BranchSearchSection";
import BranchTableSection from "./components/BranchTableSection";
import { useBancaBranches } from "./hooks/useBancaBranches";

const BancaCity = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const { data: bankInfoData } = useBancaBankInfo('city-bank');

  const {
    branches,
    isLoading: isBranchesLoading,
    updateParams
  } = useBancaBranches();

  return (
    <main className="min-h-screen bg-white">
      {!isHeaderLoading && headerData && <BancaCityHeader data={headerData} />}

      {bankInfoData && (
        <>
          <BankInfoSection data={bankInfoData.bank} />
          {bankInfoData.products && bankInfoData.products.length > 0 && (
            <BankProductsSection products={bankInfoData.products} />
          )}
        </>
      )}

      <BranchSearchSection onSearch={updateParams} />

      {!isBranchesLoading && <BranchTableSection branches={branches} />}

      <div className="container mx-auto px-4 py-16">
        {/* Future content for City Bank partnership details can go here */}
      </div>
    </main>
  );
};

export default BancaCity;
