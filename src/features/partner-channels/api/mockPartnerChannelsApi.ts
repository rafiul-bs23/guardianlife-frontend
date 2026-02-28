import type { PartnerChannelsApiResult } from '../types';
import { MOCK_PARTNER_CHANNELS_RESPONSE } from './mockData';

export const get_mock_partner_channels = async (): Promise<PartnerChannelsApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_PARTNER_CHANNELS_RESPONSE);
        }, 600);
    });
};
