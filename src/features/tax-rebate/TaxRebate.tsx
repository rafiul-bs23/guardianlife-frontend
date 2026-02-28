import TaxRebateHeader from "./components/TaxRebateHeader";
import InvestmentSectors from "./components/InvestmentSectors";
import ThingsToRemember from "./components/ThingsToRemember";
import ProfitableInvestment from "./components/ProfitableInvestment";
import { useHeader } from "./hooks/useHeader";
import { useTaxRebateData } from "./hooks/useTaxRebateData";

const TaxRebate = () => {
    const { data: headerData, isLoading: isHeaderLoading } = useHeader();
    const { data: detailsData } = useTaxRebateData();

    return (
        <main className="min-h-screen bg-white">
            {!isHeaderLoading && headerData && <TaxRebateHeader data={headerData} />}

            <InvestmentSectors />
            {/* <InvestmentSectorsEditor /> */}

            {detailsData && (
                <>
                    <ThingsToRemember data={detailsData.thingsToRemember} />
                    <ProfitableInvestment data={detailsData.profitableInvestment} />
                </>
            )}

            <div className="container mx-auto px-4 py-16">
                {/* Additional Tax Rebate content can go here */}
            </div>
        </main>
    );
};

export default TaxRebate;
