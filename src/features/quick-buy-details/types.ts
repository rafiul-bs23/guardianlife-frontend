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
    productName: string;
    sumAssured: number;
    term: number;
    yearlyPremium: number;
    stampFee: number;
    total: number;
    lifeCoverageFromDayOne: boolean;
    premiumPaymentMode: string;
    minAge: number;
    maxAge: number;
    medicalTest: string;
    maturityBenefit: boolean;
    surrenderOption: boolean;
}

export interface QuickBuyData {
    quickProductSection: QuickProductSection;
    productCalculatorSection: ProductCalculatorSection;
    planBenefitsSection: PlanBenefitsSection;
    productDocumentsSection: ProductDocumentsSection;
    learnMoreSection: LearnMoreSection;
}

export interface QuickBuySuccessResponse {
    success: true;
    transactionId: string;
    data: QuickBuyData;
}

// Error Response 
export interface ValidationError {
    field: string;
    message: string;
}

export interface QuickBuyErrorResponse {
    success: false;
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
