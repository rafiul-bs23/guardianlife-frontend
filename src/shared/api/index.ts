import { getMockFaqData, get_mock_partners, post_mock_lead } from './mockApi';
import { getRealFaqData, get_real_partners, post_real_lead } from './api';
import type { FaqApiResult } from '../types/faq';
import type { PartnersApiResult } from '../types/partners';
import type { LeadRequest, LeadApiResult } from '../types/contact';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getFaqData = async (): Promise<FaqApiResult> => {
    if (USE_MOCK) {
        return getMockFaqData();
    }
    return getRealFaqData();
};

export const get_partners = async (channel: string): Promise<PartnersApiResult> => {
    if (USE_MOCK) {
        return get_mock_partners(channel);
    }
    return get_real_partners(channel);
};

export const post_lead = async (payload: LeadRequest): Promise<LeadApiResult> => {
    if (USE_MOCK) {
        return post_mock_lead(payload);
    }
    return post_real_lead(payload);
};
