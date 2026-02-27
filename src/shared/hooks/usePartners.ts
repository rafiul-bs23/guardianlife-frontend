import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { get_partners } from '../api';
import type { Partner, UsePartnersResult } from '../types/partners';

export const usePartners = (channel: string): UsePartnersResult => {
    const [data, set_data] = useState<Partner[] | null>(null);
    const [is_loading, set_is_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);

    const fetch_data = useCallback(async () => {
        set_is_loading(true);
        set_error(null);

        try {
            const response = await get_partners(channel);

            if (response.success) {
                set_data(response.data);
            } else {
                set_error(response.message ?? 'Failed to fetch partners.');
                set_data(null);
            }
        } catch (err) {
            const axios_error = err as AxiosError;
            set_error(axios_error.message ?? 'An unexpected error occurred.');
            set_data(null);
        } finally {
            set_is_loading(false);
        }
    }, [channel]);

    useEffect(() => {
        fetch_data();
    }, [fetch_data]);

    return { data, is_loading, error };
};
