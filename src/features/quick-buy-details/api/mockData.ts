import type { QuickBuySuccessResponse, QuickBuyErrorResponse } from "../types";
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "success": true,
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
        "background_image_url": "https://as1.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg",
        "media": {
            "type": "image",
            "url": "https://as1.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg"
        }
    }
};

export const MOCK_SUCCESS_DATA: QuickBuySuccessResponse = {
    success: true,
    transactionId: "GLIL-TXN-ID-SUCCESS-001",
    data: {
        quickProductSection: {
            content: [
                { title: "COVERAGE", description: "1 to 10 Lac" },
                { title: "POLICY TERM", description: "10 - 25 Years" },
                { title: "ENTRY AGE", description: "18 - 45 Years" }
            ]
        },
        productCalculatorSection: {
            productName: "Easylife Special",
            sumAssured: 500000,
            term: 20,
            yearlyPremium: 1766,
            stampFee: 500,
            total: 2266,
            lifeCoverageFromDayOne: true,
            premiumPaymentMode: "Yearly",
            minAge: 18,
            maxAge: 45,
            medicalTest: "No need",
            maturityBenefit: false,
            surrenderOption: false
        },


        planBenefitsSection: {
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


        productDocumentsSection: {
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

        learnMoreSection: {
            content: [
                {
                    title: "Product Overview",
                    videoUrl: "https://guardian-life-website-example.com/assets/videos/product-overview.mp4"
                },
                {
                    title: "How Claims Work",
                    videoUrl: "https://guardian-life-website-example.com/assets/videos/how-claims-work.mp4"
                }
            ]
        }
    }
};


export const MOCK_ERROR_DATA: QuickBuyErrorResponse = {
    success: false,
    transactionId: "GLIL-TXN-ID-ERROR-001",
    message: "Failed to fetch quick buy details.",
    errors: [
        {
            field: "productCode",
            message: "Quick buy details not found "
        }
    ]
};