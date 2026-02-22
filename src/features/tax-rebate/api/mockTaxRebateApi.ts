import { createMockAxiosError } from "../../../utils/mockAxiosError";
import { MOCK_TAX_REBATE_DETAILS, MOCK_TAX_REBATE_HEADER_DATA } from "./mockData";
import type { TaxRebateDataResponse } from "../types";

export const getMockTaxRebateData = (): Promise<TaxRebateDataResponse> => {
    const SHOULD_ERROR = import.meta.env.VITE_USE_MOCK_API_ERROR === 'true';

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (SHOULD_ERROR) {
                const error = createMockAxiosError(404, {}, 'Data Not Found');
                reject(error);
            } else {
                resolve(MOCK_TAX_REBATE_DETAILS);
            }
        }, 1000);
    });
};

export const getMockTaxRebateHeader = (): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_TAX_REBATE_HEADER_DATA);
        }, 800);
    });
}
