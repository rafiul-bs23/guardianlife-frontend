import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { calculatePremium } from '../api/quickBuyApi';
import type { PremiumCalculationRequest, PremiumCalculationData, PremiumCalculationResponse } from '../types';

export const usePremiumCalculation = () => {
    const [data, setData] = useState<PremiumCalculationData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const calculate = useCallback(async (payload: PremiumCalculationRequest) => {
        setIsLoading(true);
        setError(null);

        try {
            const response: PremiumCalculationResponse = await calculatePremium(payload);
            if (response?.status) {
                setData(response?.data);
                return response.data;
            } else {
                setError('Failed to calculate premium');
                return null;
            }
        } catch (err) {
            const axiosError = err as AxiosError;
            const errorMessage =
                axiosError.response?.data && typeof axiosError.response.data === 'object' && 'message' in axiosError.response.data
                    ? (axiosError.response.data as any).message
                    : axiosError.message || 'An unexpected network error occurred.';
            setError(errorMessage);
            return null;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setData(null);
        setError(null);
    }, []);

    return { calculate, data, isLoading, error, reset };
};
