import type { CategoryApiResponse } from '../types';
import { digitalProducts, retailProducts } from './mockData';

export const getMockCategoryProducts = async (
    channel: string | null,
    category: string | null,
    subcategory: string | null
): Promise<CategoryApiResponse> => {
    let products = null;
    if (channel === 'retail') {
        products = retailProducts
    } else if (channel === 'digital') {
        products = digitalProducts
    } else if (category === 'term-life') {
        products = { ...digitalProducts, data: { ...digitalProducts.data, products: digitalProducts.data.products.slice(0, 2) } }
    } else if (category === 'savings') {
        products = { ...digitalProducts, data: { ...digitalProducts.data, products: digitalProducts.data.products.slice(2, 4) } }
    } else if (category === 'special-plans') {
        products = { ...digitalProducts, data: { ...digitalProducts.data, products: digitalProducts.data.products.slice(0, 2) } }
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            // Create a cloned response so we can modify the channel/category fields to match request
            const response = {
                ...products,
                data: {
                    ...products?.data,
                    channel: channel || 'retail',
                    category: category || null,
                    subcategory: subcategory || null,
                }
            } as CategoryApiResponse;

            resolve(response);
        }, 500); // Simulate network delay
    });
};
