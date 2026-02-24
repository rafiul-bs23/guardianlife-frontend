import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getMicroImpact } from '../api';
import type { MicroImpactMetric, UseMicroDataResult, ValidationError } from '../types';

export const useMicroImpact = (): UseMicroDataResult<MicroImpactMetric[]> => {
    const [data, setData] = useState<MicroImpactMetric[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFieldErrors([]);

        try {
            const response = await getMicroImpact();

            if (response.status) {
                setData(response.data);
            } else {
                setError(response.message);
                if ('errors' in response && response.errors) {
                    setFieldErrors(response.errors);
                }
            }
        } catch (err) {
            const axiosError = err as AxiosError;
            const errorMessage = axiosError.message || 'An unexpected error occurred.';
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
