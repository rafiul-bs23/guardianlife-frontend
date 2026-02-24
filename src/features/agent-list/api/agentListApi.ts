import axiosClient from '../../../lib/axios';
import type { AgentApiResult, AgentQueryParams } from '../types';

export const get_real_agents = async (params?: AgentQueryParams): Promise<AgentApiResult> => {
    const { data } = await axiosClient.get<AgentApiResult>('/agents', { params });
    return data;
};
