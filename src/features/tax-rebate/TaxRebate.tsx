import TaxRebateHeader from "./components/TaxRebateHeader";
import InvestmentSectors from "./components/InvestmentSectors";
import ThingsToRemember from "./components/ThingsToRemember";
import ProfitableInvestment from "./components/ProfitableInvestment";
import { MOCK_TAX_REBATE_DETAILS } from "./api/mockData";
import { useHeader } from "../../shared/hooks/useHeader";

const TaxRebate = () => {
    const { data: headerData, isLoading: isHeaderLoading } = useHeader("tax-rebate");

    return (
        <main className="min-h-screen bg-white">
            {!isHeaderLoading && headerData && <TaxRebateHeader data={headerData} />}

            <InvestmentSectors />

            <>
                <ThingsToRemember data={MOCK_TAX_REBATE_DETAILS.data.thingsToRemember} />
                <ProfitableInvestment data={MOCK_TAX_REBATE_DETAILS.data.profitableInvestment} />
            </>


            <div className="container mx-auto px-4 py-16">
                {/* Additional Tax Rebate content can go here */}
            </div>
        </main>
    );
};

export default TaxRebate;
