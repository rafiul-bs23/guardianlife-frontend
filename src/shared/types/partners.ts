export interface Partner {
    partner_name: string;
    logo_url: string;
    website_url: string | null;
}

export interface PartnersSuccessResponse {
    status: true;
    transaction_id: string;
    data: Partner[];
}

export interface PartnersErrorResponse {
    status: false;
    transaction_id: string;
    message: string;
}

export type PartnersApiResult = PartnersSuccessResponse | PartnersErrorResponse;

export interface UsePartnersResult {
    data: Partner[] | null;
    is_loading: boolean;
    error: string | null;
}
