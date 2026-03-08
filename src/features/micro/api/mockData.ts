import type { MicroData } from '../types';
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "PROTECTION THAT",
                "color": "#FFFFFF"
            },
            {
                "text": "STANDS BESIDE EVERY",
                "color": "#FFFFFF"
            },
            {
                "text": "FAMILY",
                "color": "#2E3192"
            }
        ],
        "description": "LIFE IS UNPREDICTABLE - AND FOR MILLIONS OF FAMILIES IN BANGLADESH, ONE UNEXPECTED LOSS CAN MEAN FINANCIAL HARDSHIP.",
        "background_image_url": "assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "assets/images/category/headerImage.jpg"
        }
    }
};

export const mockMicroData: MicroData = {
    whyMicroMatters: {
        title: "",
        subtitle: "",
        image: "assets/images/micro/1.png",
        benefits: []
    },
    whyMicroinsurance: {
        title: "",
        subtitle: "",
        cards: [
            {
                icon: "shield-check",
                title: "",
                description: "",
                iconColor: "text-blue-500"
            },
            {
                icon: "dollar-sign",
                title: "",
                description: "",
                iconColor: "text-green-500"
            },
            {
                icon: "zap",
                title: "",
                description: "",
                iconColor: "text-purple-500"
            },
            {
                icon: "help-circle",
                title: "",
                description: "",
                iconColor: "text-orange-500"
            }
        ],
        outcomesTitle: "",
        outcomes: [],
        image: "assets/images/micro/2.png"
    },
    impactStatic: {
        title: "",
        subtitle: "",
        image: "assets/images/micro/1.png",
        awardsTitle: "",
        awards: [],
        bannerTitle: "",
        bannerSubtitle: ""
    }
};

export const mockMicroImpactResponse = {
    "success": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": [
        { metric: "11M+", title: "Lives Covered", description: "Families protected nationwide" },
        { metric: "99%", title: "Claim Payout Ratio", description: "Reliable claim settlement" },
        { metric: "160K+", title: "Claims Settled", description: "Families supported in need" },
        { metric: "৳768+", title: "Crore Paid", description: "In total claims" }
    ]
};

export const mockMicroProductsResponse = {
    "transaction_id": "NYV1KI5CTP9EN0",
    "status": true,
    "data": {
        "channel": "micro",
        "category": null,
        "subcategory": null,
        "products": [
            {
                "title": "Life Coverage",
                "product_code": "micro-life-coverage",
                "logo_url": null,
                "thumbnail_url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/micro-matters.png",
                "description": "Protecting your family when they need it most",
                "footer": "Simple protection for every family at every income level",
                "points": []
            },
            {
                "title": "Health Protection",
                "product_code": "micro-health-protection",
                "logo_url": null,
                "thumbnail_url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/micro-csi.png",
                "description": "Because getting sick should never mean going broke",
                "footer": "Keeping families healthy without the financial worry",
                "points": []
            },
            {
                "title": "Accident Coverage",
                "product_code": "micro-accident-coverage",
                "logo_url": null,
                "thumbnail_url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/micro-ssi.png",
                "description": "Accident Coverage",
                "footer": "Real support for real people during the hardest moments",
                "points": []
            },
            {
                "title": "Savings Linked Plans",
                "product_code": "micro-savings-linked-plans",
                "logo_url": null,
                "thumbnail_url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/micro-savings.jpg",
                "description": "Save regularly. Stay protected. Build for the future",
                "footer": "Perfect for families who want to save and stay covered",
                "points": []
            }
        ]
    }
};
