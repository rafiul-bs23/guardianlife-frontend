import React from "react";

export interface BankPartner {
    id: number;
    logo: string;
    alt?: string;
    name?: string;
    link?: string;
}

export interface ServiceCard {
    id: number;
    image: string;
    title: string;
    points: string[];
}

export interface BenefitSection {
    id: number;
    icon: React.ReactNode;
    title: string;
    image: string;
    dot_color: string;
    bg_color: string;
    points: string[];
}

export interface Product {
    title: string;
    product_code: string;
    plan_no: string | null;
    glil_plan_id: string | null;
    glil_plan_category: string | null;
    logo_url: string | null;
    thumbnail_url: string | null;
    description: string | null;
    footer: string | null;
    points: string[];
}

export interface BancaProductsData {
    channel: string;
    category: string;
    subcategory: string | null;
    products: Product[];
}

export interface BancaProductsResponse {
    transaction_id: string;
    status: boolean;
    data: BancaProductsData;
}

export interface WhyBancassuranceData {
    header: {
        title: string;
        description: string;
    };
    image_url: string;
    what_is_bancassurance: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        bullet_points: string[];
        footer: string;
    };
}
