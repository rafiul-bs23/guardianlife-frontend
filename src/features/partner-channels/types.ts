export interface PartnerChannel {
    id: string;
    channel_name: string;
    logo_url: string;
    tags: string[];
    is_featured: boolean;
}

export interface PartnerChannelListData {
    partner_channels: PartnerChannel[];
}

export interface PartnerChannelApiSuccessResponse {
    success: boolean;
    transaction_id: string;
    data: PartnerChannelListData;
}

export interface PartnerChannelApiErrorResponse {
    success: boolean;
    message: string;
}

export type PartnerChannelApiResult =
    | PartnerChannelApiSuccessResponse
    | PartnerChannelApiErrorResponse;

export interface UsePartnerChannelsResult {
    partner_channels: PartnerChannel[];
    is_loading: boolean;
    error: string | null;
    selected_channel_id: string | null;
    set_selected_channel: (id: string) => void;
}
