import axiosClient from '../../../lib/axios';
import type { MancomResponse } from '../types';

export const getMancomMembers = async (): Promise<MancomResponse> => {
    const response = await axiosClient.get<MancomResponse>('/about/mancom');
    return response.data;
};
