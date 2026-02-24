import { getMockFaqData } from './mockFaqApi';
import { getRealFaqData } from './faqApi';
import type { FaqApiResult } from './types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getFaqData = async (): Promise<FaqApiResult> => {
    if (USE_MOCK) {
        return getMockFaqData();
    }
    return getRealFaqData();
};
