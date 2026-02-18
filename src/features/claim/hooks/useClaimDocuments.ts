import { useState, useEffect } from 'react';
import { getClaimDocuments } from '../api';
import type { ClaimDocumentsData } from '../types';

export const useClaimDocuments = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ClaimDocumentsData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                setIsLoading(true);
                const result = await getClaimDocuments();
                setData(result);
            } catch (err) {
                setError("Failed to fetch claim documents");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDocs();
    }, []);

    return { data, isLoading, error };
};
