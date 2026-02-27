import { useState, useCallback, useEffect } from 'react';
import { getFaqData } from '../api';
import type { FaqItem, ValidationError } from '../api/types';

interface UseFaqResult {
    data: FaqItem[] | null;
    isLoading: boolean;
    error: string | null;
    fieldErrors: ValidationError[];
    refetch: () => void;
}

export const useFaq = (): UseFaqResult => {
    const [data, setData] = useState<FaqItem[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            setFieldErrors([]);

            const result = await getFaqData();

            if (result.status) {
                setData(result.data);
            } else {
                setError(result.message || 'Failed to fetch FAQ data');
                if (result.errors) {
                    setFieldErrors(result.errors);
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        isLoading,
        error,
        fieldErrors,
        refetch: fetchData
    };
};
