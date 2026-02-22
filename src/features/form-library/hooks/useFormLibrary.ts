import { useState, useEffect } from 'react';
import type { FormLibraryItem } from '../types';
import { getFormLibrary } from '../api';

export const useFormLibrary = () => {
    const [forms, setForms] = useState<FormLibraryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await getFormLibrary();
                if (response.success) {
                    setForms(response.data);
                } else {
                    setError('Failed to fetch forms');
                }
            } catch (err) {
                setError('An error occurred while fetching forms');
            } finally {
                setLoading(false);
            }
        };

        fetchForms();
    }, []);

    return { forms, loading, error };
};
