import * as mancomApi from './mancomApi';
import * as mockMancomApi from './mockMancomApi';
import type { MancomResponse } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getMancomMembers = async (): Promise<MancomResponse> => {
    if (USE_MOCK) {
        return mockMancomApi.getMancomMembers();
    }
    return mancomApi.getMancomMembers();
};
