import { getMockFormLibrary } from './mockFormLibraryApi';
import { getRealFormLibrary } from './formLibraryApi';
import type { FormLibraryResponse } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getFormLibrary = async (): Promise<FormLibraryResponse> => {
    if (USE_MOCK) {
        return getMockFormLibrary();
    }
    return getRealFormLibrary();
};
