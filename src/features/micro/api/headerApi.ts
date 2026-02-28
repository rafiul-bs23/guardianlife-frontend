import { MOCK_HEADER_DATA } from './mockData';
import type { HeaderResponse } from '../../../shared/types/header';

/**
 * Fetches header data for the micro feature.
 * @returns Promise with header data.
 */
export const fetchHeaderData = async (): Promise<HeaderResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetching header data for micro feature');
            resolve(MOCK_HEADER_DATA);
        }, 500);
    });
};
