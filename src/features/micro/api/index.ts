import { getMockMicroSolutions, getMockMicroImpact } from './mockMicroApi';
import { getRealMicroSolutions, getRealMicroImpact } from './microApi';
import type { MicroProductsData, MicroImpactMetric, MicroApiResult } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getMicroSolutions = async (): Promise<MicroApiResult<MicroProductsData>> => {
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

