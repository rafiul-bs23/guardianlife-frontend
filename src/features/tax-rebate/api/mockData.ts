import type { HeaderResponse } from "../../../shared/types/header";
import type { TaxRebateDataResponse } from "../types";
import taxImage from "../../../assets/images/tax-rebate/tax.png";

export const MOCK_TAX_REBATE_HEADER_DATA: HeaderResponse = {
    "success": true,
    "transaction_id": "GLIL-TR-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "INTRODUCTION",
                "color": "#FFFFFF"
            }
        ],
        "description": "LIFE INSURANCE IS THE ONLY WISE OPTION TO FINANCIALLY PROTECT YOUR LIFE WHILE STILL HAVING A WORRY-FREE AND REWARDING INVESTMENT. IF YOU INVEST IN ANY OF THE GUARDIAN LIFE PRODUCTS, YOU WILL RECEIVE A MAXIMUM INCOME TAX REBATE OF 15% WITH INSURANCE BENEFITS. AT THE SAME TIME, FINANCIAL SECURITY WILL BE PRESERVED. INVEST IN ANY OF GUARDIAN LIFE'S POLICIES BY JUNE 30TH TO RECEIVE NUMEROUS BENEFITS.",
        "background_image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop",
        "media": {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=3270&auto=format&fit=crop"
        }
    }
};

export const MOCK_TAX_REBATE_DETAILS: TaxRebateDataResponse = {
    "success": true,
    "transaction_id": "GLIL-TR-DETAILS-TXN-ID",
    "data": {
        "thingsToRemember": {
            "title": "THINGS TO REMEMBER",
            "image": taxImage,
            "descriptionPoints": [
                {
                    "text": "Payment of a minimum income tax of BDT 5000 is compulsory for the eligible taxpayer irrespective of the rebate amount.",
                    "isBold": true
                },
                {
                    "text": "Invest the amount equal to or greater than the allowable amount in Guardian Life policy before 30th June to get tax rebate.",
                    "isHighlighted": true
                },
                {
                    "text": "Investment on insurance is the maximum amount that you can annually invest in life insurance premium."
                },
                {
                    "text": "Tax rebate is applicable on the premium of any revived lapsed policy."
                },
                {
                    "text": "Any type of insurance, whether life or health, provides the highest tax benefits...."
                }
            ],
            "ctaText": "Read More"
        },
        "profitableInvestment": {
            "title": "WHY INVESTING IN GUARDIAN LIFE'S INSURANCE POLICIES IS PROFITABLE?",
            "points": [
                {
                    "id": 1,
                    "text": "MORE THAN 11 MILLION LIVES PROTECTED"
                },
                {
                    "id": 2,
                    "text": "1300+ CRORES PAID IN CLAIMS"
                },
                {
                    "id": 3,
                    "text": "98% CLAIM PAYMENT RATIO"
                },
                {
                    "id": 4,
                    "text": "CLAIM SETTLEMENT WITHIN 3-5 DAYS OF THE CLAIM SUBMISSION"
                },
                {
                    "id": 5,
                    "text": "ONLINE CLAIM SUBMISSION THROUGH ACPS PLATFORM"
                }
            ]
        }
    }
};
