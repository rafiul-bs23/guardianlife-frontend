import { useState, useCallback, useEffect } from 'react';
import { getCategoryProducts } from '../api';
import type { CategoryProduct } from '../types';

interface UseCategoryProductsResult {
    data: CategoryProduct[] | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useCategoryProducts = (
    channel: string | null,
    category: string | null,
    subcategory: string | null
): UseCategoryProductsResult => {
    const [data, setData] = useState<CategoryProduct[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const result = await getCategoryProducts(channel, category, subcategory);

            if (result.status) {
                setData(result.data.products);
            } else {
                setError('Failed to fetch category products');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }, [channel, category, subcategory]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        isLoading,
        error,
        refetch: fetchData
    };
};
