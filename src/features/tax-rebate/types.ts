export interface ContentItem {
    text: string;
    isHighlighted?: boolean;
    isBold?: boolean;
}

export interface ThingsToRememberData {
    title: string;
    image: string;
    descriptionPoints: ContentItem[];
    ctaText: string;
}

export interface ProfitableInvestmentPoint {
    id: number;
    text: string;
}

export interface ProfitableInvestmentData {
    title: string;
    points: ProfitableInvestmentPoint[];
}

export interface TaxRebateDetails {
    thingsToRemember: ThingsToRememberData;
    profitableInvestment: ProfitableInvestmentData;
}

export interface TaxRebateDataResponse {
    status: boolean;
    transaction_id: string;
    data: TaxRebateDetails;
}
