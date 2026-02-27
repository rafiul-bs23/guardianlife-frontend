import type { CategoryApiResponse } from '../types';
import { apiResponse } from './mockData';

export const getMockCategoryProducts = async (
    channel: string | null,
    category: string | null,
    subcategory: string | null
): Promise<CategoryApiResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Create a cloned response so we can modify the channel/category fields to match request
            const response = {
                ...apiResponse,
                data: {
                    ...apiResponse.data,
                    channel: channel || 'retail',
                    category: category || null,
                    subcategory: subcategory || null,
                }
            } as CategoryApiResponse;

            resolve(response);
        }, 500); // Simulate network delay
    });
};
