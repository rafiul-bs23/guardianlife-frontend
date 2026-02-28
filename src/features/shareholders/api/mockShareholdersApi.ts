import { mockShareholdersResponse } from './mockData';
import type { ShareholdersResponse } from '../types';

export const getMockShareholders = async (): Promise<ShareholdersResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockShareholdersResponse);
        }, 800);
    });
};
