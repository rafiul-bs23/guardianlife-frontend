import { MOCK_HEADER_DATA } from './mockData';
import type { HeaderResponse } from '../../../shared/types/header';

/**
 * Fetches header data for a specific quick buy product.
 * @param productId The product ID.
 * @returns Promise with header data.
 */
export const fetchHeaderData = async (productId: string): Promise<HeaderResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetching header data for quick-buy product: ${productId}`);
            resolve(MOCK_HEADER_DATA);
        }, 500);
    });
};
