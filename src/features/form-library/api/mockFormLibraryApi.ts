import { mockFormLibraryResponse } from './mockData';
import type { FormLibraryResponse } from '../types';

export const getMockFormLibrary = async (): Promise<FormLibraryResponse> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFormLibraryResponse);
        }, 800);
    });
};
