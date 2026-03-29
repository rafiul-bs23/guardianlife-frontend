export interface CategoryProduct {
    title: string;
    product_code: string;
    logo_url: string | null;
    thumbnail_url: string;
    description: string;
    footer: string | null;
    points: string[];
    is_women_product?: boolean;
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
