import { useState, useEffect } from 'react';
import type { ShareholderItem } from '../types';
import { get_shareholders } from '../api';

export const useShareholders = () => {
    const [shareholders_data, set_shareholders_data] = useState<ShareholderItem[]>([]);
    const [is_loading, set_is_loading] = useState(true);
    const [error_message, set_error_message] = useState<string | null>(null);

    useEffect(() => {
        const fetch_shareholders = async () => {
            try {
                const response = await get_shareholders();
                if (response?.status) {
                    set_shareholders_data(response?.data ?? []);
                } else {
                    set_error_message('Failed to fetch shareholders');
                }
            } catch (err) {
                set_error_message('An error occurred while fetching shareholders');
            } finally {
                set_is_loading(false);
            }
        };

        fetch_shareholders();
    }, []);

    return {
        shareholders: shareholders_data,
        is_loading,
        error_message
    };
};
