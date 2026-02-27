import { post_mock_lead } from './mockLeadApi';
import { post_real_lead } from './leadApi';
import type { LeadRequest, LeadApiResult } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const post_lead = async (payload: LeadRequest): Promise<LeadApiResult> => {
    if (USE_MOCK) {
        return post_mock_lead(payload);
    }
    return post_real_lead(payload);
};
