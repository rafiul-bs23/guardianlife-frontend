export interface CategoryProduct {
    title: string;
    productCode: string;
    logoUrl: string | null;
    thumbnailUrl: string;
    description: string;
    footer: string | null;
    points: string[];
}

export interface CategoryProductsData {
    channel: string;
    category: string | null;
    subcategory: string | null;
    products: CategoryProduct[];
}

export interface CategoryApiResponse {
    status: boolean;
    transactionId: string;
    data: CategoryProductsData;
}
