export interface EmcMember {
    name: string;
    designation: string;
    image_url: string;
}

export interface EmcApiResponse {
    success: boolean;
    transaction_id: string;
    data: EmcMember[];
    message?: string;
    errors?: ValidationError[];
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface UseEmcResult {
    data: EmcMember[] | null;
    isLoading: boolean;
    error: string | null;
    fieldErrors: ValidationError[];
    refetch: () => void;
}
