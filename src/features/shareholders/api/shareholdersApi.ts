import axiosClient from '../../../lib/axios';
import type { ShareholdersResponse } from '../types';

export const getRealShareholders = async (): Promise<ShareholdersResponse> => {
    const { data } = await axiosClient.get<ShareholdersResponse>('/api/v1/shareholders');
    return data;
};
