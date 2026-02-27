import { getMockCategoryProducts } from './mockCategoryApi';
import { getRealCategoryProducts } from './categoryApi';
import type { CategoryApiResponse } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getCategoryProducts = async (
    channel: string | null = null,
    category: string | null = null,
    subcategory: string | null = null
): Promise<CategoryApiResponse> => {
    if (USE_MOCK) {
        return getMockCategoryProducts(channel, category, subcategory);
    }
    return getRealCategoryProducts(channel, category, subcategory);
};
