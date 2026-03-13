import type { QuickBuySuccessResponse, QuickBuyErrorResponse, ProductInformationResponse, PremiumCalculationResponse } from "../types";
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": "TERM LIFE INSURANCE",
        "title": [
            {
                "text": "EASY LIFE",
                "color": "#FFFFFF"
            },
            {
                "text": "SPECIAL",
                "color": "#FFFFFF"
            }
        ],
        "description": "An attractive pure term life coverage at a very affordable price. Customers can get up to 10 lac taka coverage for up to 25 years.",
        "background_image_url": "assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "assets/images/category/headerImage.jpg"
        }
    }
};

export const MOCK_SUCCESS_DATA: QuickBuySuccessResponse = {
    status: true,
    transactionId: "GLIL-TXN-ID-SUCCESS-001",
    data: {
        plan_numbers: [
            {
                plan_no: "17",
                name: "Easylife Special"
            }
        ],
        glil_plan_id: 3,
        quick_product_section: {
            content: [
                { title: "COVERAGE", description: "1 to 10 Lac" },
                { title: "POLICY TERM", description: "10 - 25 Years" },
                { title: "ENTRY AGE", description: "18 - 45 Years" }
            ]
        },
        product_calculator_section: {
            product_name: "Easylife Special",
            sum_assured: 500000,
            term: 20,
            yearly_premium: 1766,
            stamp_fee: 500,
            total: 2266,
            life_coverage_from_day_one: true,
            premium_payment_mode: "Yearly",
            min_age: 18,
            max_age: 45,
            medical_test: "No need",
            maturity_benefit: false,
            surrender_option: false
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

export const MOCK_ERROR_DATA: QuickBuyErrorResponse = {
    status: false,
    transactionId: "GLIL-TXN-ID-ERROR-001",
    message: "Failed to fetch quick buy details.",
    errors: [
        {
            field: "product_code",
            message: "Quick buy details not found "
        }
    ]
};

export const MOCK_PRODUCT_INFORMATION: ProductInformationResponse = {
    "status": true,
    "transaction_id": "J1PEJZBXZ8APW",
    "data": {
        "id": 3,
        "plan_no": "17",
        "plan_name": "Easylife Special",
        "category": "Life",
        "tag": "Life Insurance",
        "remarks": "Term life insurance with low premium",
        "min_premium": 170,
        "coverages": [
            100000,
            200000,
            300000,
            400000,
            500000,
            600000,
            700000,
            800000,
            900000,
            1000000
        ],
        "terms": [
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25
        ],
        "mode": "Yearly",
        "max_coverage": 1000000,
        "benefits": {
            "Death/TPD Benefit": "Full Sum Assured",
            "Premium Payment Mode": "Yearly Throughout The Policy Term",
            "Sum Assured": "Maximum BDT 10 Lac",
            "Term": "10 to 25 Years",
            "Age": "18 to 45 Years Nearest Birthday"
        },
        "features": [],
        "options": [],
        "descriptions": [],
        "is_dependent_required": false,
        "is_nominee_required": true,
        "terms_conditions": ""
    }
};

export const MOCK_PREMIUM_CALCULATION: PremiumCalculationResponse = {
    "status": true,
    "transaction_id": "LXUTM0ANBH23T",
    "data": {
        "view": {
            "product_name": {
                "title": "Product Name",
                "value": "Jaya"
            },
            "premium": {
                "title": "Monthly Premium",
                "value": "BDT 350"
            },
            "coverage": null,
            "stamp_cost": null,
            "pay_mod": {
                "title": "Payment Mode",
                "value": "Monthly"
            },
            "term": {
                "title": "Policy Term (Years Of Coveage)",
                "value": "5 Years"
            },
            "total": {
                "title": "Total",
                "value": "BDT 352"
            },
            "surrender_value": {
                "title": "Surrender Value",
                "value": "Yes"
            },
            "premium_refund": null,
            "life_coverage_from_day_one": {
                "title": "Life Coverage From Day One",
                "value": "Yes"
            }
        },
        "calculation": {
            "product_name": "Jaya",
            "rate": 0.0,
            "premium": 350,
            "hi_premium": 0,
            "ci_premium": 2,
            "pdab_premium": 0,
            "diab_premium": 0,
            "total_premium": 350,
            "sum_assured": 16273,
            "ci_sum_assured": 16273,
            "ci_rate": 0.0,
            "stamp_cost": 0,
            "total": 352,
            "price": 0
        }
    }
};