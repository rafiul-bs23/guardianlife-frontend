import axiosClient from '../../../lib/axios';
import type { CategoryApiResponse } from '../types';

export const getRealCategoryProducts = async (
    channel: string | null,
    category: string | null,
    subcategory: string | null
): Promise<CategoryApiResponse> => {
    // Construct the query parameters
    const params = new URLSearchParams();
    if (channel) params.append('channel', channel);
    if (category) params.append('category', category);
    if (subcategory) params.append('subcategory', subcategory);

    const queryString = params.toString();
    const url = `/products/${queryString ? `?${queryString}` : ''}`;

    const { data } = await axiosClient.get<CategoryApiResponse>(url);
    return data;
};
