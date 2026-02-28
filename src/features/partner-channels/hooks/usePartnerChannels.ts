import { useState, useEffect, useCallback } from 'react';
import { get_partner_channels } from '../api';
import type { PartnerChannel, UsePartnerChannelsResult } from '../types';

const usePartnerChannels = (): UsePartnerChannelsResult => {
    const [partner_channels, set_partner_channels] = useState<PartnerChannel[]>([]);
    const [is_loading, set_is_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);

    const fetch_partner_channels = useCallback(async () => {
        set_is_loading(true);
        set_error(null);
        try {
            const result = await get_partner_channels();
            if (result?.status) {
                set_partner_channels(result?.data ?? []);
            } else {
                set_error('Failed to load partners.');
            }
        } catch (err) {
            set_error(err instanceof Error ? err?.message : 'Failed to load partners.');
            set_partner_channels([]);
        } finally {
            set_is_loading(false);
        }
    }, []);

    useEffect(() => {
        fetch_partner_channels();
    }, [fetch_partner_channels]);

    return { partner_channels, is_loading, error };
};

export default usePartnerChannels;
