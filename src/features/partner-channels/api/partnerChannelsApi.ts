import axiosClient from '../../../lib/axios';
import type { PartnerChannelsApiResult } from '../types';

export const get_real_partner_channels = async (): Promise<PartnerChannelsApiResult> => {
    const { data } = await axiosClient.get<PartnerChannelsApiResult>('/about/partners');
    return data;
};
