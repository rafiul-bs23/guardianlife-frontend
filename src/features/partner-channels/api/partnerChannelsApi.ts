import axiosClient from '../../../lib/axios';
import type { PartnerChannelApiSuccessResponse } from '../types';

export const get_real_partner_channels = async (): Promise<PartnerChannelApiSuccessResponse> => {
    const { data } = await axiosClient.get<PartnerChannelApiSuccessResponse>('/partner-channels');
    return data;
};
