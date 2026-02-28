export interface LeadRequest {
    full_name: string;
    email: string;
    phone: string;
    type: 'lead' | 'job';
    applying_position: string | null;
    message: string;
    channel?: string;
    cv?: File | null;
}

export interface LeadApiSuccessResponse {
    success: true;
    transaction_id: string;
    data: {
        status: string;
        received_at: string;
    };
}

export interface LeadApiErrorResponse {
    success: false;
    transaction_id: string;
    message: string;
}

export type LeadApiResult = LeadApiSuccessResponse | LeadApiErrorResponse;
