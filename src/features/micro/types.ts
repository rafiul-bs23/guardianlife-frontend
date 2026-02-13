
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

export interface MicroSolution {
    title: string;
    subtitle: string;
    image: string;
    points: string[];
    footerHighlight: string;
}

export interface MicroSolutionsData {
    title: string;
    description: string;
    solutions: MicroSolution[];
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

export interface MicroPartner {
    partnerName: string;
    logoUrl: string;
    websiteUrl: string | null;
}

export interface MicroPartnersStatic {
    title: string;
    subtitle: string;
}

export interface MicroContactFormData {
    title: string;
    fields: {
        fullName: { label: string; placeholder: string; required: boolean };
        email: { label: string; placeholder: string; required: boolean };
        phone: { label: string; placeholder: string; required: boolean };
        message: { label: string; placeholder: string; required: boolean };
    };
    privacyPolicy: string;
    submitButton: string;
}

export interface MicroData {
    whyMicroMatters: WhyMicroMattersData;
    solutions: MicroSolutionsData;
    whyMicroinsurance: WhyMicroinsuranceData;
    impactStatic: MicroImpactStatic;
    impactMetrics: MicroImpactMetric[];
    partnersStatic: MicroPartnersStatic;
    partnersDynamic: MicroPartner[];
    contactForm: MicroContactFormData;
}

// API Response Types
export interface MicroSuccessResponse<T> {
    success: true;
    transactionId: string;
    message: string;
    data: T;
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface MicroErrorResponse {
    success: false;
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
