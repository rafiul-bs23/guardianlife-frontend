import axiosClient from '../../lib/axios';
import type { FaqApiResult } from '../types/faq';
import type { PartnersApiResult } from '../types/partners';
import type { LeadRequest, LeadApiResult } from '../types/contact';
import type { HeaderResponse } from '../types/header';

export const getRealFaqData = async (): Promise<FaqApiResult> => {
    const { data } = await axiosClient.get<FaqApiResult>('/faqs');
    return data;
};

export const get_real_partners = async (channel: string): Promise<PartnersApiResult> => {
    const { data } = await axiosClient.get<PartnersApiResult>(`/about/partners/${channel}`);
    return data;
};

export const post_real_lead = async (payload: LeadRequest | FormData): Promise<LeadApiResult> => {
    const { data } = await axiosClient.post<LeadApiResult>('/leads/create', payload);
    return data;
};

export const get_real_header = async (section: string): Promise<HeaderResponse> => {
    const { data } = await axiosClient.get<HeaderResponse>(`/header/${section}`);
    return data;
};
