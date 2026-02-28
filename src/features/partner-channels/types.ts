export interface PartnerChannel {
    partner_name: string;
    logo_url: string;
    website_url: string;
}

export interface PartnerChannelsApiResult {
    transaction_id: string;
    status: boolean;
    data: PartnerChannel[];
}

export interface UsePartnerChannelsResult {
    partner_channels: PartnerChannel[];
    is_loading: boolean;
    error: string | null;
}
