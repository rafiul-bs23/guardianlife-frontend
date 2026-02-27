import { get_mock_agents } from './mockAgentListApi';
import { get_real_agents } from './agentListApi';
import type { AgentApiResult, AgentQueryParams } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const get_agents = async (params?: AgentQueryParams): Promise<AgentApiResult> => {
    if (USE_MOCK) {
        return get_mock_agents(params);
    }
    return get_real_agents(params);
};
