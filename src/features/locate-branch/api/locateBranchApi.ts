import axiosClient from '../../../lib/axios';
import type { BranchApiResult, BranchQueryParams } from '../types';

export const getRealBranches = async (params?: BranchQueryParams): Promise<BranchApiResult> => {
    const { data } = await axiosClient.get<BranchApiResult>('/retail/branches', { params });
    return data;
};
