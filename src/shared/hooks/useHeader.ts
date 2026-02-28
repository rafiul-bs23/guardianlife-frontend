import { useState, useEffect, useCallback } from 'react';
import { get_real_header } from '../api/api';
import type { HeaderData, HeaderResponse } from '../types/header';

interface UseHeaderResult {
    data: HeaderData | null;
    isLoading: boolean;
    error: string | null;
}

/**
 * useHeader(section, isMockLoad?, mockData?)
 *
 * isMockLoad = true  → processes mockData (HeaderResponse) the same way as a real response
 * isMockLoad = false → GET /header/{section}
 */
export const useHeader = (
    section: string,
    isMockLoad: boolean = false,
    mockData: HeaderResponse | null = null,
): UseHeaderResult => {
    // Seed state from mockData.data if available, to avoid a loading flash
    const [data, setData] = useState<HeaderData | null>(
        isMockLoad && mockData?.status ? mockData.data : null,
    );
    const [isLoading, setIsLoading] = useState<boolean>(!isMockLoad);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (isMockLoad) {
            if (mockData?.status) {
                setData(mockData.data);
            } else {
                setError('Failed to fetch header data');
            }
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const result = await get_real_header(section);

            if (result.status) {
                setData(result.data);
            } else {
                setError('Failed to fetch header data');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }, [section, isMockLoad, mockData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error };
};
