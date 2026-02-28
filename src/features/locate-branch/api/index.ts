import { getMockBranches } from './mockLocateBranchApi';
import { getRealBranches } from './locateBranchApi';
import type { BranchApiResult, BranchQueryParams } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getBranches = async (params?: BranchQueryParams): Promise<BranchApiResult> => {
    if (USE_MOCK) {
        return getMockBranches(params);
    }
    return getRealBranches(params);
};
