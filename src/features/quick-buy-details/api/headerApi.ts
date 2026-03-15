import { MOCK_HEADER_DATA } from './mockData';
import type { HeaderResponse } from '../../../shared/types/header';

/**
 * Fetches header data for a specific quick buy product.
 * @param productId The product ID.
 * @returns Promise with header data.
 */
export const fetchHeaderData = async (productId: string): Promise<HeaderResponse> => {
    console.log(productId)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_HEADER_DATA);
        }, 500);
    });
};
