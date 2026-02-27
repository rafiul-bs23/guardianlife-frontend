export interface FaqItem {
    question_number: number;
    question: string;
    answer: string;
}

export interface FaqSuccessResponse {
    status: true;
    transaction_id: string;
    data: FaqItem[];
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface FaqErrorResponse {
    status: false;
    transaction_id: string;
    message: string;
    errors: ValidationError[];
}

export type FaqApiResult = FaqSuccessResponse | FaqErrorResponse;
