import axiosClient from "../../../lib/axios";
import type { TaxRebateDataResponse } from "../types";

export const getTaxRebateDetails = async (): Promise<TaxRebateDataResponse> => {
    const { data } = await axiosClient.get<TaxRebateDataResponse>("/tax-rebate-details");
    return data;
};

export const getTaxRebateHeader = async (): Promise<any> => {
    const { data } = await axiosClient.get("/tax-rebate-header");
    return data;
}
