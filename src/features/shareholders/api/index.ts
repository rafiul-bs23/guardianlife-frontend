import { getMockShareholders } from './mockShareholdersApi';
import { getRealShareholders } from './shareholdersApi';
import type { ShareholdersResponse } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getShareholders = async (): Promise<ShareholdersResponse> => {
    if (USE_MOCK) {
        return getMockShareholders();
    }
    return getRealShareholders();
};
