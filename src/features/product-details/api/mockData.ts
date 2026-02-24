import type { ProductSuccessResponse, ProductErrorResponse } from "../types";
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": "ANTICIPATED ENDOWMENT (THREE STAGE PAYMENT) INSURANCE PLAN - WITH PROFIT",
        "title": [
            {
                "text": "GUARDIAN 3",
                "color": "#FFFFFF"
            },
            {
                "text": "STAGE PLAN",
                "color": "#FFFFFF"
            }
        ],
        "description": "Enjoy your money today without compromising their tomorrow. Even if you've already withdrawn 50% of your funds, your family is still guaranteed 100% of the protection plus bonuses.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "video",
            "url": "https://www.youtube.com/watch?v=YBI6Y6uF2jM&pp=ygUXZ3VhcmRpYW4gbGlmZSBpbnN1cmFuY2U%3D"
        }
    }
};



export const MOCK_SUCCESS_DATA: ProductSuccessResponse = {
    status: true,
    transactionId: "GLIL-TXN-ID-SUCCESS-001",
    data: {
        quick_product_section: {
            content: [
                { title: "COVERAGE", description: "Up to 10 Lac" },
                { title: "POLICY TERM", description: "10 - 30 Years" },
                { title: "ENTRY AGE", description: "20 - 53 Years" },
                { title: "SUITABILITY", description: "Three Interim Payouts" }
            ]
        },
        product_journey_section: {
            content: [
                { percentage: 25, bottom_label: "25% Received", top_label: null },
                { percentage: 50, bottom_label: "25% Received", top_label: null },
                { percentage: 75, bottom_label: "50% Received", top_label: "Bonus" }
            ]
        },
        key_highlights_section: {
            description: "Meet your priorities: A liquid savings plan that will give back a partial sum assured in three different time periods for attaining your precious dreams at various stages of life. Now, you can have insurance, and savings and also cherish those major milestones of life.",
            points: [
                "Secure your family's future financially.",
                "Secure your family's future financially.",
                "Secure your family's future financially.",
                "Secure your family's future financially."
            ],
            cards: [
                {
                    title: "Fast Settlement",
                    description: "Claims settled within 4 hours*"
                },
                {
                    title: "Flexible Premium",
                    description: "Pay monthly, quarterly or yearly"
                },
                {
                    title: "100% Digital",
                    description: "No physical visits required"
                },
                {
                    title: "24/7 Support",
                    description: "Always here when you need us"
                }
            ]
        },
        plan_benefits_section: {
            description: "Meet your priorities: A liquid savings plan that will give back a partial sum assured",
            cards: [
                {
                    title: "Double Protection",
                    description: "Even if you've received your early payouts, your nominee receives the Full Sum Assured plus bonuses in the event of an untimely demise."
                },
                {
                    title: "Policy Loans",
                    description: "Need urgent cash? Access up to 90% of your policy's surrender value as a loan."
                },
                {
                    title: "Tax Savings",
                    description: "Enjoy annual income tax rebates on every premium payment."
                },
                {
                    title: "Guaranteed Value",
                    description: "Your policy builds \"Paid Up\" and \"Surrender Value\" after just two years of premiums."
                }
            ],
            points: [
                {
                    title: "Liquidity",
                    description: "It provides money at regular intervals (1/3rd and 2/3rd through the term) rather than only at the end."
                },
                {
                    title: "Full Protection",
                    description: "If the policyholder passes away, the nominee gets the full sum assured, regardless of how many installments have already been paid."
                },
                {
                    title: "Incentives",
                    description: "It offers bonuses on the full sum assured and tax benefits."
                },
                {
                    title: "Flexibility",
                    description: "Includes a loan facility and several \"riders\" (supplementary benefits) for disability or critical illness."
                }
            ]
        },
        supplementary_benefits_section: {
            content: [
                {
                    title: "PDAB",
                    description: "Permanent Disability Accidental Benefit"
                },
                {
                    title: "DIAB",
                    description: "Double Indemnity Accidental Benefit"
                },
                {
                    title: "HI",
                    description: "Health Insurance"
                },
                {
                    title: "CI",
                    description: "Critical Illness"
                }
            ]
        },
        plan_breakdown_section: {
            content: [
                {
                    title: "1. Choose Your Timeline (Flexible Terms)",
                    points: [
                        "Pick a duration that aligns with your life goals, whether it's a short-term project or long-term security.",
                        "Available Terms: 12, 15, 18, 21, or 24 years."
                    ],
                    additional_data: null
                },
                {
                    title: "2. Investment That Fits Your Budget",
                    points: [
                        "Start small or aim high. Your protection grows with your ambition.",
                        "Minimum Entry: Start with a Sum Assured of just BDT 1,00,000.",
                        "Maximum: Tailored to your needs."
                    ],
                    additional_data: null
                },
                {
                    title: "3. Eligibility at a Glance",
                    points: [
                        "Designed for young professionals and established providers alike.",
                        "Entry Age: 20 to 53 years."
                    ],
                    additional_data: { min: 20, max: 53 }
                },
                {
                    title: "4. Payments on Your Schedule",
                    points: [
                        "Life is unpredictable, but your payments don't have to be. Choose the frequency that matches your cash flow.",
                        "Payment Modes: Monthly, Quarterly, Half-Yearly, or Yearly.",
                        "Easy Conversion: We offer simple multipliers to help you switch between payment frequencies at any time."
                    ],
                    additional_data: null
                }
            ]
        },
        product_documents_section: {
            content: [
                {
                    type: "file",
                    title: "Brochure",
                    url: "https://guardian-life-website-example.com/assets/docs/brochure.pdf"
                },
                {
                    type: "file",
                    title: "Policy Wording",
                    url: "https://guardian-life-website-example.com/assets/docs/policy-wordings.pdf"
                },
                {
                    type: "file",
                    title: "Terms & Conditions",
                    url: "https://guardian-life-website-example.com/assets/docs/terms-and-conditions.pdf"
                }
            ]
        },
        why_choose_coverage_section: {
            title: "WHY CHOOSE THIS COVERAGE",
            description: "Built for people who value their time",
            main_card: {
                title: "Claims settled in three days",
                description: "No waiting around. No endless paperwork. Money reaches your family when they need it most",
                image: "https://t3.ftcdn.net/jpg/04/20/44/28/240_F_420442840_Ou3yjU6FXpJBFTz2kRqrDblP1TCtTXUi.jpg"
            },
            cards: [
                {
                    title: "Flexibility in how you pay",
                    description: "Monthly, quarterly or annual options",
                    image: "https://t3.ftcdn.net/jpg/04/20/44/28/240_F_420442840_Ou3yjU6FXpJBFTz2kRqrDblP1TCtTXUi.jpg"
                },
                {
                    title: "Digital policy from start to finish",
                    description: "Everything online, nothing in the mail",
                    image: "https://t3.ftcdn.net/jpg/04/20/44/28/240_F_420442840_Ou3yjU6FXpJBFTz2kRqrDblP1TCtTXUi.jpg"
                },
                {
                    title: "Coverage you can adjust later",
                    description: "Life changes. Your policy can too",
                    image: "https://t3.ftcdn.net/jpg/04/20/44/28/240_F_420442840_Ou3yjU6FXpJBFTz2kRqrDblP1TCtTXUi.jpg"
                },
                {
                    title: "Tax benefits built in",
                    description: "Deductions available under section",
                    image: "https://t3.ftcdn.net/jpg/04/20/44/28/240_F_420442840_Ou3yjU6FXpJBFTz2kRqrDblP1TCtTXUi.jpg"
                }
            ]
        },
        learn_more_section: {
            content: [
                {
                    title: "Product Overview",
                    video_url: "https://guardian-life-website-example.com/assets/videos/product-overview.mp4"
                },
                {
                    title: "How Claims Work",
                    video_url: "https://guardian-life-website-example.com/assets/videos/how-claims-work.mp4"
                }
            ]
        }
    }
};


export const MOCK_ERROR_DATA: ProductErrorResponse = {
    status: false,
    transactionId: "GLIL-TXN-ID-ERROR-001",
    message: "Failed to fetch product details.",
    errors: [
        {
            field: "productCode",
            message: "Product not found or invalid product code."
        }
    ]
};