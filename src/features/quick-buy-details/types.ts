import type {
    ContentItem,
    PlanBenefitsSection,
    ProductDocumentsSection,
    LearnMoreSection,
} from '../../shared/types/product';

export interface QuickProductSection {
    content: ContentItem[];
}

// PlanBenefitsSection is now imported from shared

// ProductDocumentsSection is now imported from shared

// LearnMoreSection is now imported from shared

export interface ProductCalculatorSection {
    product_name: string;
    sum_assured: number;
    term: number;
    yearly_premium: number;
    stamp_fee: number;
    total: number;
    life_coverage_from_day_one: boolean;
    premium_payment_mode: string;
    min_age: number;
    max_age: number;
    medical_test: string;
    maturity_benefit: boolean;
    surrender_option: boolean;
}

export interface QuickBuyData {
    quick_product_section: QuickProductSection;
    product_calculator_section: ProductCalculatorSection;
    plan_benefits_section: PlanBenefitsSection;
    product_documents_section: ProductDocumentsSection;
    learn_more_section: LearnMoreSection;
}

export interface QuickBuySuccessResponse {
    status: true;
    transactionId: string;
    data: QuickBuyData;
}

// Error Response 
export interface ValidationError {
    field: string;
    message: string;
}

export interface QuickBuyErrorResponse {
    status: false;
    transactionId: string;
    message: string;
    errors: ValidationError[];
}

export type QuickBuyApiResponse = QuickBuySuccessResponse | QuickBuyErrorResponse;

export interface UseQuickBuyResult {
    data: QuickBuyData | null;
    isLoading: boolean;
    error: string | null;
    fieldErrors: ValidationError[];
    refetch: () => void;
}
