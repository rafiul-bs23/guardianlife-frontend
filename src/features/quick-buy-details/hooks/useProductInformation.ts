import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getProductInformation } from '../api/quickBuyApi';
import type { ProductInformationData, ProductInformationResponse } from '../types';

export const useProductInformation = (planId?: number, planNo?: string) => {
    const [data, setData] = useState<ProductInformationData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (planId === undefined || !planNo) return;

        setIsLoading(true);
        setError(null);

        try {
            const response: ProductInformationResponse = await getProductInformation(planId, planNo);
            if (response?.status) {
                setData(response?.data);
            } else {
                setError('Failed to fetch product information');
            }
        } catch (err) {
            const axiosError = err as AxiosError;
            const errorMessage =
                axiosError.response?.data && typeof axiosError.response.data === 'object' && 'message' in axiosError.response.data
                    ? (axiosError.response.data as any).message
                    : axiosError.message || 'An unexpected network error occurred.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [planId, planNo]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, refetch: fetchData };
};
