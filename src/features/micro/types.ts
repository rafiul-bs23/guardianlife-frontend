
export interface MicroBenefit {
    title: string;
    description: string;
}

export interface WhyMicroMattersData {
    title: string;
    subtitle: string;
    image: string;
    benefits: MicroBenefit[];
}

export interface MicroProduct {
    title: string;
    product_code: string;
    logo_url: string | null;
    thumbnail_url: string;
    description: string;
    footer: string;
    points: string[];
}

export interface MicroProductsData {
    channel: string;
    category: string | null;
    subcategory: string | null;
    products: MicroProduct[];
}

export interface MicroCard {
    icon: string;
    title: string;
    description: string;
    iconColor: string
}

export interface WhyMicroinsuranceData {
    title: string;
    subtitle: string;
    cards: MicroCard[];
    outcomesTitle: string;
    outcomes: string[];
    image: string;
}

export interface MicroAward {
    title: string;
    description: string;
}

export interface MicroImpactMetric {
    metric: string;
    title: string;
    description: string;
}

export interface MicroImpactStatic {
    title: string;
    subtitle: string;
    image: string;
    awardsTitle: string;
    awards: MicroAward[];
    bannerTitle: string;
    bannerSubtitle: string;
}

export interface MicroData {
    whyMicroMatters: WhyMicroMattersData;
    whyMicroinsurance: WhyMicroinsuranceData;
    impactStatic: MicroImpactStatic;
}

// API Response Types
export interface MicroSuccessResponse<T> {
    status: true;
    transactionId: string;
    message: string;
    data: T;
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface MicroErrorResponse {
    status: false;
    transactionId: string;
    message: string;
    errors: ValidationError[];
}

export type MicroApiResult<T> = MicroSuccessResponse<T> | MicroErrorResponse;

// Hook Result Types
export interface UseMicroDataResult<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    fieldErrors: ValidationError[];
    refetch: () => void;
}
