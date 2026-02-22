import axiosClient from '../../../lib/axios';
import type { BancaBankInfoResponse, BancaBranchResponse } from '../types';

export const getBancaBankInfo = async (bankCode: string): Promise<BancaBankInfoResponse> => {
    const { data } = await axiosClient.get<BancaBankInfoResponse>(`/banca/bank-info/${bankCode}`);
    return data;
};

export const getBancaBranches = async (params: {
    branch_name?: string;
    area_name?: string;
    division_name?: string;
    district_name?: string;
    page?: number;
    limit?: number;
}): Promise<BancaBranchResponse> => {
    const { data } = await axiosClient.get<BancaBranchResponse>('/banca/branches', { params });
    return data;
};
