import { get_real_partner_channels } from './partnerChannelsApi';
import { get_mock_partner_channels } from './mockPartnerChannelsApi';
import type { PartnerChannelsApiResult } from '../types';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const get_partner_channels = async (): Promise<PartnerChannelsApiResult> => {
    if (USE_MOCK) {
        return get_mock_partner_channels();
    }
    return get_real_partner_channels();
};
