import type { HeaderResponse } from "../../../shared/types/header";
import type { BancaBankInfoResponse, BancaBranchResponse } from "../types";


export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-BNC-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "SECURE TOMORROW, ",
                "color": "#FFFFFF"
            },
            {
                "text": "STARTING TODAY",
                "color": "#1E3161"
            }
        ],
        "description": "CITY BANK, IN PARTNERSHIP WITH GUARDIAN LIFE INSURANCE LIMITED, BRINGS YOU TRUSTED LIFE INSURANCE SOLUTIONS DESIGNED TO PROTECT YOUR SAVINGS, FAMILY, AND FUTURE.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};


export const MOCK_BANK_INFO_DATA: BancaBankInfoResponse = {
    "transaction_id": "9P0A8M0S4NGZPF",
    "status": true,
    "data": {
        "bank": {
            "title": "Partnership Introduction",
            "description": "City Bank PLC Has Partnered With Guardian Life Insurance Limited To Offer Reliable And Customer-Centric Life Insurance Solutions Through Its Banking Network.\n\nThis Bancassurance Partnership Officially Commenced On March 3, 2024, Enabling City Bank Customers To Access Carefully Designed Insurance Plans Directly From Selected City Bank Branches—Ensuring Convenience, Trust, And Long-Term Financial Protection Under One Roof.\nWith This Collaboration, Customers Can Now Safeguard Their Future While Continuing Their Banking Journey With Confidence.",
            "image_url": "data:image/png;base64,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",
            "footer": "Partnership Active Since March 2024",
            "active_since": "Partnership Active Since March 2024"
        },
        "products": [
            {
                "title": "Guardian Sanchay",
                "description": "A savings-oriented life insurance plan that helps you build long-term financial security while ensuring life protection.",
                "logo_url": "https://cdn-icons-png.freepik.com/512/9195/9195850.png",
                "thumbnail_url": "data:image/png;base64,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",
                "subtitle": "Ideal for",
                "subtitle_description": "Individuals looking for disciplined savings with insurance benefits.",

            },
            {
                "title": "Four Stage Plan",
                "description": "A structured life insurance solution that supports you through four important stages of life with increasing financial benefits.",
                "logo_url": "https://cdn-icons-png.freepik.com/512/9195/9195850.png",
                "thumbnail_url": "data:image/png;base64,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",
                "subtitle": "Ideal for",
                "subtitle_description": "Professionals and families planning future milestones.",

            },
            {
                "title": "Child Protection Plan",
                "description": "Secure your child's future with guaranteed financial support for education and key life goals, even in your absence.",
                "logo_url": "https://cdn-icons-png.freepik.com/512/9195/9195850.png",
                "thumbnail_url": "data:image/png;base64,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",
                "subtitle": "Ideal for",
                "subtitle_description": "Parents planning for their child's education and future needs.",

            }
        ]
    }
};

export const MOCK_BRANCHES_DATA: BancaBranchResponse = {
    "transaction_id": "ZX6Q20VP9C5P5M",
    "status": true,
    "data": {
        "pagination": {
            "current_page": 1,
            "total_pages": 2,
            "total_records": 15,
            "has_next": true,
            "has_previous": false
        },
        "branches": [
            {
                "branch_name": "City Bank PLC",
                "area_name": "Gulshan",
                "district_name": "Dhaka",
                "division_name": "Dhaka",
                "bancassurance_available": true
            },
            {
                "branch_name": "City Bank PLC",
                "area_name": "Dhanmondi",
                "district_name": "Dhaka",
                "division_name": "Dhaka",
                "bancassurance_available": true
            },
            {
                "branch_name": "City Bank PLC",
                "area_name": "Agrabad",
                "district_name": "Chattogram",
                "division_name": "Chattogram",
                "bancassurance_available": true
            },
            {
                "branch_name": "City Bank PLC",
                "area_name": "Zindabazar",
                "district_name": "Sylhet",
                "division_name": "Sylhet",
                "bancassurance_available": true
            },
            {
                "branch_name": "City Bank PLC",
                "area_name": "Sonadanga",
                "district_name": "Khulna",
                "division_name": "Khulna",
                "bancassurance_available": true
            },
            {
                "branch_name": "Mutual Trust Bank PLC",
                "area_name": "Uttara",
                "district_name": "Dhaka",
                "division_name": "Dhaka",
                "bancassurance_available": true
            },
            {
                "branch_name": "Mutual Trust Bank PLC",
                "area_name": "Banani",
                "district_name": "Dhaka",
                "division_name": "Dhaka",
                "bancassurance_available": true
            },
            {
                "branch_name": "Mutual Trust Bank PLC",
                "area_name": "Nasirabad",
                "district_name": "Chattogram",
                "division_name": "Chattogram",
                "bancassurance_available": true
            },
            {
                "branch_name": "Mutual Trust Bank PLC",
                "area_name": "Rajshahi Sadar",
                "district_name": "Rajshahi",
                "division_name": "Rajshahi",
                "bancassurance_available": true
            },
            {
                "branch_name": "Mutual Trust Bank PLC",
                "area_name": "Barisal Sadar",
                "district_name": "Barisal",
                "division_name": "Barisal",
                "bancassurance_available": true
            }
        ]
    }
};