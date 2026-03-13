import { MOCK_MANCOM_MEMBERS_DATA } from './mockData';
import type { MancomResponse } from '../types';

export const getMancomMembers = async (): Promise<MancomResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_MANCOM_MEMBERS_DATA as MancomResponse);
        }, 500);
    });
};
