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
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};

export const mockMicroData: MicroData = {
    whyMicroMatters: {
        title: "WHY MICROINSURANCE MATTERS",
        subtitle: "Microinsurance is designed for real lives and real challenges. Because one unexpected event should never destroy a lifetime of hard work.",
        image: "src/assets/images/micro/1.png",
        benefits: [
            {
                title: "Stay Financially Protected",
                description: "Against Life And Health Risks That Could Devastate Family Finances"
            },
            {
                title: "Access Affordable Insurance",
                description: "Plans Specifically Designed For Low-Income Households"
            },
            {
                title: "Understand Policies Easily",
                description: "Simple Terms With Minimal Exclusions And Clear Benefits"
            },
            {
                title: "Feel Secure And Peaceful",
                description: "Knowing Protection Is There When Life Takes Unexpected Turns"
            },
            {
                title: "Submit Claims Simply",
                description: "Hassle-Free Process With Fast Settlement And Support"
            },
            {
                title: "Improve Living Standards",
                description: "Building Financial Resilience And Long-Term Security Over Time"
            }
        ]
    },
    whyMicroinsurance: {
        title: "WHY GUARDIAN LIFE'S MICROINSURANCE",
        subtitle: "Families trust Guardian Life because we go beyond policies.",
        cards: [
            {
                icon: "shield-check",
                title: "Simplified Products",
                description: "Designed for everyday people with easy-to-understand terms",
                iconColor: "text-blue-500"
            },
            {
                icon: "dollar-sign",
                title: "Affordable Pricing",
                description: "No hidden costs, transparent and fair pricing for all",
                iconColor: "text-green-500"
            },
            {
                icon: "zap",
                title: "Fast Claims",
                description: "Automated processing for faster settlement when you need it most",
                iconColor: "text-purple-500"
            },
            {
                icon: "help-circle",
                title: "24/7 Support",
                description: "Customer support in Bangla & English whenever you need help",
                iconColor: "text-orange-500"
            }
        ],
        outcomesTitle: "We focus on outcomes that truly matter:",
        outcomes: [
            "Protecting funds",
            "Reducing financial risk",
            "Strengthening credit confidence",
            "Creating long-term value for partners and beneficiaries"
        ],
        image: "src/assets/images/micro/2.png"
    },
    impactStatic: {
        title: "OUR IMPACT AT A GLANCE",
        subtitle: "Behind every number is a family that didn't fall behind.",
        image: "src/assets/images/micro/1.png",
        awardsTitle: "Recognition & Awards",
        awards: [
            { title: "Insurance Asia Awards", description: "Winner 2017, 2018 & 2019" }
        ],
        bannerTitle: "One Of The Fastest Claim Settlement Records In The Country",
        bannerSubtitle: "When Families Need Support Most, We're There With Quick And Reliable Service."
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
