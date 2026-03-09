export interface LeadRequest {
    full_name: string;
    email: string;
    phone: string;
    type: 'lead' | 'job';
    applying_position: string | null;
    message: string;
    channel?: string;
    file?: File | null;
}

export interface LeadApiSuccessResponse {
    status: true;
    transaction_id: string;
    message?: string;
    data?: {
        status: string;
        received_at: string;
    };
}

export interface LeadApiErrorResponse {
    status: false;
    transaction_id: string;
    message: string;
    errors?: {
        field: string;
        message: string;
    }[];
}

export type LeadApiResult = LeadApiSuccessResponse | LeadApiErrorResponse;
