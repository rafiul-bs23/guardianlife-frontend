import { mock_shareholders_response } from './mockData';
import type { ShareholdersResponse } from '../types';

export const get_mock_shareholders = async (): Promise<ShareholdersResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock_shareholders_response);
        }, 800);
    });
};
