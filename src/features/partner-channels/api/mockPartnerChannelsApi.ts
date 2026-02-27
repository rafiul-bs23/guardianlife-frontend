import { mock_partner_channel_data } from './mockData';
import type { PartnerChannelApiSuccessResponse } from '../types';

export const get_mock_partner_channels = async (): Promise<PartnerChannelApiSuccessResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transaction_id: `GLIL-TXN-${Math.random().toString(36).substring(2, 11)}`,
                data: {
                    partner_channels: mock_partner_channel_data,
                },
            });
        }, 700);
    });
};
