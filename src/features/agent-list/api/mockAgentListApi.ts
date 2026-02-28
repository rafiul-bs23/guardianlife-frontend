import { mock_agent_data } from './mockData';
import type { AgentApiResult, AgentQueryParams } from '../types';

export const get_mock_agents = async (params?: AgentQueryParams): Promise<AgentApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const all_agents = mock_agent_data?.data?.agents ?? [];

            // Pagination
            const page = params?.page ?? 1;
            const limit = params?.limit ?? 10;
            const total_records = all_agents.length;
            const total_pages = Math.ceil(total_records / limit) || 1;
            const start = (page - 1) * limit;
            const paginated = all_agents.slice(start, start + limit);

            resolve({
                success: true,
                transaction_id: "GLIL-TXN-ID",
                data: {
                    pagination: {
                        current_page: page,
                        total_pages,
                        total_records,
                        has_next: page < total_pages,
                        has_previous: page > 1,
                    },
                    agents: paginated,
                },
            });
        }, 700);
    });
};
