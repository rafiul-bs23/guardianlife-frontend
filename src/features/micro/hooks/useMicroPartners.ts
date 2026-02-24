import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getMicroPartners } from '../api';
import type { MicroPartner, UseMicroDataResult, ValidationError } from '../types';

export const useMicroPartners = (): UseMicroDataResult<MicroPartner[]> => {
    const [data, setData] = useState<MicroPartner[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFieldErrors([]);

        try {
            const response = await getMicroPartners();

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
