import { get_mock_hospitals } from './mockPreferredHospitalApi';
import { get_real_hospitals } from './preferredHospitalApi';
import type { HospitalApiResult, HospitalQueryParams } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const get_hospitals = async (params?: HospitalQueryParams): Promise<HospitalApiResult> => {
    if (USE_MOCK) {
        return get_mock_hospitals(params);
    }
    return get_real_hospitals(params);
};
