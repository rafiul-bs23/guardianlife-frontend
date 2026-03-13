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

export interface ProductInformationData {
    id: number;
    plan_no: string;
    plan_name: string;
    category: string;
    tag: string;
    remarks: string;
    min_premium: number;
    coverages: number[];
    terms: number[];
    mode: string;
    max_coverage: number;
    benefits: Record<string, string>;
    features: any[];
    options: any[];
    descriptions: any[];
    is_dependent_required: boolean;
    is_nominee_required: boolean;
    terms_conditions: string;
}

export interface ProductInformationResponse {
    status: boolean;
    transaction_id: string;
    data: ProductInformationData;
}

export interface PremiumCalculationRequest {
    product_id: number;
    category: string;
    plan_no: string;
    date_of_birth: string;
    term: number;
    sum_assured: number | null;
    premium: number;
    mode: string;
    validity: string | null;
}

export interface PremiumViewItem {
    title: string;
    value: string;
}

export interface PremiumView {
    product_name?: PremiumViewItem | null;
    premium?: PremiumViewItem | null;
    coverage?: PremiumViewItem | null;
    stamp_cost?: PremiumViewItem | null;
    pay_mod?: PremiumViewItem | null;
    term?: PremiumViewItem | null;
    total?: PremiumViewItem | null;
    surrender_value?: PremiumViewItem | null;
    premium_refund?: PremiumViewItem | null;
    life_coverage_from_day_one?: PremiumViewItem | null;
    [key: string]: PremiumViewItem | null | undefined;
}

export interface PremiumCalculationDetails {
    product_name: string;
    rate: number;
    premium: number;
    hi_premium: number;
    ci_premium: number;
    pdab_premium: number;
    diab_premium: number;
    total_premium: number;
    sum_assured: number;
    ci_sum_assured: number;
    ci_rate: number;
    stamp_cost: number;
    total: number;
    price: number;
}

export interface PremiumCalculationData {
    view: PremiumView;
    calculation: PremiumCalculationDetails;
}

export interface PremiumCalculationResponse {
    status: boolean;
    transaction_id: string;
    data: PremiumCalculationData;
}

export interface PlanNumber {
    plan_no: string;
    name: string;
}

export interface QuickBuyData {
    plan_numbers: PlanNumber[];
    glil_plan_id: number;
    quick_product_section: QuickProductSection;
    product_calculator_section: ProductCalculatorSection | null;
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
