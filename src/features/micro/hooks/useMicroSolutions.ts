import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getMicroSolutions } from '../api/index.ts';
import type { MicroSolutionsData, UseMicroDataResult, ValidationError } from '../types';

export const useMicroSolutions = (): UseMicroDataResult<MicroSolutionsData> => {
    const [data, setData] = useState<MicroSolutionsData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFieldErrors([]);

        try {
            const response = await getMicroSolutions();

            if (response.success) {
                setData(response.data);
            } else {
                setError(response.message);
                if (response.errors) {
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
