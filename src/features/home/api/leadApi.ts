import axiosClient from '../../../lib/axios';
import type { LeadRequest, LeadApiResult } from '../types';

export const post_real_lead = async (payload: LeadRequest): Promise<LeadApiResult> => {
    const { data } = await axiosClient.post<LeadApiResult>('/leads/create', payload);
    return data;
};
