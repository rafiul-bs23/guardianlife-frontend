import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import type { BancaBankInfoData } from '../types';
import { getBancaBankInfo } from '../api';

export interface UseBancaBankInfoResult {
    data: BancaBankInfoData | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useBancaBankInfo = (bankCode: string): UseBancaBankInfoResult => {
    const [data, setData] = useState<BancaBankInfoData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await getBancaBankInfo(bankCode);

            if (response.status) {
                setData(response.data);
            } else {
                setError(response.message || 'Failed to fetch bank info');
            }
        } catch (err) {
            const axiosError = err as AxiosError<{ message?: string }>;
            // Try to extract an inner API error message, fallback to generic axios error message
            const errorMessage = axiosError.response?.data?.message || axiosError.message || 'An unexpected error occurred.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [bankCode]);

    useEffect(() => {
        if (bankCode) {
            fetchData();
        }
    }, [fetchData, bankCode]);

    return { data, isLoading, error, refetch: fetchData };
};
