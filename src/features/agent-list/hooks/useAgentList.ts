import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { get_agents } from '../api/index';
import type { Agent, Pagination, UseAgentListResult } from '../types';

export const useAgentList = (): UseAgentListResult => {
    const [agents, set_agents] = useState<Agent[]>([]);
    const [pagination, set_pagination] = useState<Pagination | null>(null);
    const [is_loading, set_is_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);
    const [current_page, set_current_page] = useState<number>(1);

    const fetch_agents = useCallback(async (page: number) => {
        set_is_loading(true);
        set_error(null);

        try {
            const response = await get_agents({ page, limit: 10 });

            if (response?.success) {
                set_agents(response?.data?.agents ?? []);
                set_pagination(response?.data?.pagination ?? null);
            } else {
                set_error(response?.message ?? 'Failed to fetch agents.');
                set_agents([]);
                set_pagination(null);
            }
        } catch (err) {
            const axios_error = err as AxiosError;
            set_error(axios_error?.message ?? 'An unexpected error occurred.');
            set_agents([]);
            set_pagination(null);
        } finally {
            set_is_loading(false);
        }
    }, []);

    useEffect(() => {
        fetch_agents(current_page);
    }, [current_page, fetch_agents]);

    const go_to_page = useCallback((page: number) => {
        set_current_page(page);
    }, []);

    return { agents, pagination, is_loading, error, current_page, go_to_page };
};
