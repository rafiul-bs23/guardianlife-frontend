import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getEmcData } from '../api';
import type { EmcApiResponse, EmcMember, UseEmcResult, ValidationError } from '../types';

export const useEmc = (): UseEmcResult => {
    const [data, setData] = useState<EmcMember[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFieldErrors([]);

        try {
            const response: EmcApiResponse = await getEmcData();

            if (response.success) {
                setData(response.data);
            } else {
                console.warn('API Business Error:', response.message);
                setError(response.message || 'Failed to fetch EMC members');

                if (response.errors) {
                    setFieldErrors(response.errors);
                }
            }
        } catch (err) {
            const axiosError = err as AxiosError;

            const errorMessage =
                axiosError.response?.data && typeof axiosError.response.data === 'object' && 'message' in axiosError.response.data
                    ? (axiosError.response.data as any).message
                    : axiosError.message || 'An unexpected network error occurred.';

            console.error('Network Error:', errorMessage);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, fieldErrors, refetch: fetchData };
};
