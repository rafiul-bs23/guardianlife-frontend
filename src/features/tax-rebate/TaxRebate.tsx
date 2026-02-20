import React from "react";
import TaxRebateHeader from "./components/TaxRebateHeader";
import InvestmentSectors from "./components/InvestmentSectors";
import ThingsToRemember from "./components/ThingsToRemember";
import ProfitableInvestment from "./components/ProfitableInvestment";
import { useHeader } from "./hooks/useHeader";
import { useTaxRebateData } from "./hooks/useTaxRebateData";
import InvestmentSectorsEditor from "./components/InvestmentSectorsEditor";

const TaxRebate = () => {
    const { data: headerData, isLoading: isHeaderLoading } = useHeader();
    const { data: detailsData, isLoading: isDetailsLoading } = useTaxRebateData();

    if (isHeaderLoading || isDetailsLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {headerData && <TaxRebateHeader data={headerData} />}

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
