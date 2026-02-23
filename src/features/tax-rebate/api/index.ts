import { getTaxRebateDetails as getRealTaxRebateDetails, getTaxRebateHeader as getRealTaxRebateHeader } from "./taxRebateApi";
import { getMockTaxRebateData, getMockTaxRebateHeader } from "./mockTaxRebateApi";
import type { TaxRebateDataResponse } from "../types";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getTaxRebateData = async (): Promise<TaxRebateDataResponse> => {
    if (USE_MOCK) {
        return getMockTaxRebateData();
    }
    return getRealTaxRebateDetails();
};

export const getTaxRebateHeaderData = async (): Promise<any> => {
    if (USE_MOCK) {
        return getMockTaxRebateHeader();
    }
    return getRealTaxRebateHeader();
}
