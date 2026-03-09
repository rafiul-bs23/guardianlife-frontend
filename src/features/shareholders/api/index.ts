import { get_mock_shareholders } from './mockShareholdersApi';
import { get_real_shareholders } from './shareholdersApi';
import type { ShareholdersResponse } from '../types';

const use_mock = import.meta.env.VITE_USE_MOCK_API === 'true';

export const get_shareholders = async (): Promise<ShareholdersResponse> => {
    if (use_mock) {
        return get_mock_shareholders();
    }
    return get_real_shareholders();
};
