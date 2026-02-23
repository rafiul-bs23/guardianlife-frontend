import { useState, useEffect, useCallback } from 'react';
import { getTaxRebateHeaderData } from '../api/index';
import type { HeaderData } from '../../../shared/types/header';

export const useHeader = () => {
    const [data, setData] = useState<HeaderData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getTaxRebateHeaderData();
            if (response.success) {
                setData(response.data);
            }
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, refetch: fetchData };
};
