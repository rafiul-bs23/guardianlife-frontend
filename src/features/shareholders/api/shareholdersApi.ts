import axiosClient from '../../../lib/axios';
import type { ShareholdersResponse } from '../types';

export const get_real_shareholders = async (): Promise<ShareholdersResponse> => {
    const { data } = await axiosClient.get<ShareholdersResponse>('/about/shareholders');
    return data;
};
