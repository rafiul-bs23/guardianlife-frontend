import axiosClient from '../../../lib/axios';
import type { BancaBankInfoResponse, BancaBranchResponse } from '../types';

export const getBancaBankInfo = async (bankCode: string): Promise<BancaBankInfoResponse> => {
    const { data } = await axiosClient.get<BancaBankInfoResponse>(`/banca/bank-info/${bankCode}`);
    return data;
};

export const getBancaBranches = async (bankCode: string, params: {
    branch_name?: string;
    page?: number;
    limit?: number;
}): Promise<BancaBranchResponse> => {
    const { data } = await axiosClient.get<BancaBranchResponse>(`/banca/branches/${bankCode}`, { params });
    return data;
};
