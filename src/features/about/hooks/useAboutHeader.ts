import { useState, useEffect } from 'react';
import { fetchHeaderData } from '../api/headerApi';
import type { HeaderData } from '../types';

export const useAboutHeader = (section: string = 'about') => {
    const [data, setData] = useState<HeaderData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getHeaderData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchHeaderData(section);
                if (response.success) {
                    setData(response.data);
                } else {
                    setError('Failed to fetch header data');
                }
            } catch (err) {
                setError('An error occurred while fetching header data');
                console.error('Error fetching header data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        getHeaderData();
    }, [section]);

    return { data, isLoading, error };
};
