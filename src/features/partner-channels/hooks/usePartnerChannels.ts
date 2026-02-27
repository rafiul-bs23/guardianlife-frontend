import { useState, useEffect, useCallback } from 'react';
import { get_partner_channels } from '../api';
import type { PartnerChannel, UsePartnerChannelsResult } from '../types';

const usePartnerChannels = (): UsePartnerChannelsResult => {
    const [partner_channels, set_partner_channels] = useState<PartnerChannel[]>([]);
    const [is_loading, set_is_loading] = useState<boolean>(false);
    const [error, set_error] = useState<string | null>(null);
    const [selected_channel_id, set_selected_channel_id] = useState<string | null>(null);

    const fetch_partner_channels = useCallback(async () => {
        set_is_loading(true);
        set_error(null);
        try {
            const response = await get_partner_channels();
            set_partner_channels(response?.data?.partner_channels ?? []);
        } catch (err) {
            set_error(err instanceof Error ? err?.message : 'Failed to load partner channels.');
            set_partner_channels([]);
        } finally {
            set_is_loading(false);
        }
    }, []);

    useEffect(() => {
        fetch_partner_channels();
    }, [fetch_partner_channels]);

    const set_selected_channel = useCallback((id: string) => {
        set_selected_channel_id((prev) => (prev === id ? null : id));
    }, []);

    return {
        partner_channels,
        is_loading,
        error,
        selected_channel_id,
        set_selected_channel,
    };
};

export default usePartnerChannels;
