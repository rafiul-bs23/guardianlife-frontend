import { getMockMicroSolutions, getMockMicroImpact, getMockMicroPartners } from './mockMicroApi';
import { getRealMicroSolutions, getRealMicroImpact, getRealMicroPartners } from './microApi';
import type { MicroSolutionsData, MicroImpactMetric, MicroApiResult, MicroPartner } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getMicroSolutions = async (): Promise<MicroApiResult<MicroSolutionsData>> => {
    if (USE_MOCK) {
        return getMockMicroSolutions();
    }
    return getRealMicroSolutions();
};

export const getMicroImpact = async (): Promise<MicroApiResult<MicroImpactMetric[]>> => {
    if (USE_MOCK) {
        return getMockMicroImpact();
    }
    return getRealMicroImpact();
};

export const getMicroPartners = async (): Promise<MicroApiResult<MicroPartner[]>> => {
    if (USE_MOCK) {
        return getMockMicroPartners();
    }
    return getRealMicroPartners();
};
