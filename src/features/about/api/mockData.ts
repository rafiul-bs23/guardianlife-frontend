import type { AboutData, AboutDynamicResponse, HeaderResponse } from '../types';

export const mockHeaderData: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "GUARDIAN LIFE ",
                "color": "#FFFFFF"
            },
            {
                "text": "INSURANCE LIMITED",
                "color": "#FFFFFF"
            }
        ],
        "description": "SINCE 2015, GUARDIAN LIFE INSURANCE LIMITED HAS BEEN COMMITTED TO RESHAPING THE INSURANCE LANDSCAPE OF BANGLADESH THROUGH TRUST, INNOVATION, AND PEOPLE-FIRST PROTECTION.",
        "background_image_url": "assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "assets/images/category/headerImage.jpg"
        }
    }
};

export const mockAboutData: AboutData = {
    who_we_are: {
        image: "assets/images/about/1.png",
    } as any,
    our_journey: {
        image: "assets/images/about/2.png",
    } as any,
    mission_vision: {
        image: "assets/images/about/3.png"
    } as any,
    our_achievements: {
        image: "assets/images/about/4.png",
    } as any,
    milestones: {
        image: "assets/images/about/5.png",
    } as any,
    governance_trust: {
        image: "assets/images/about/6.png",
        points: [
            {
                icon: "Shield",
                color: "blue"
            },
            {
                icon: "BarChart",
                color: "green"
            },
            {
                icon: "Lock",
                color: "purple"
            },
            {
                icon: "Briefcase",
                color: "orange"
            }
        ]
    } as any
};


export const MOCK_DYNAMIC_DATA: AboutDynamicResponse = {
    "transaction_id": "YOBDOZYUNZXC5Z",
    "status": true,
    "data": {
        "awards": [
            {
                "name": "Best Life Insurer 2024",
                "description": "Recognized as the best life insurance provider in Bangladesh."
            },
            {
                "name": "Customer Service Excellence",
                "description": "Awarded for exceptional customer service and support."
            },
            {
                "name": "Innovation in Insurance",
                "description": "Recognized for introducing innovative insurance products."
            },
            {
                "name": "Top Bancassurance Partner",
                "description": "Awarded for outstanding bancassurance partnerships."
            },
            {
                "name": "Best Digital Insurance Experience",
                "description": "Recognized for excellence in digital insurance solutions."
            }
        ],
        "milestones": [
            {
                "year": 2024,
                "points": [
                    "Adjustable premium options to suit your budget and coverage needs.",
                    "Dedicated support for all your insurance and policy inquiries."
                ]
            },
            {
                "year": 2023,
                "points": [
                    "Protection for your spouse and children under the same plan.",
                    "Dedicated support for all your insurance and policy inquiries."
                ]
            },
            {
                "year": 2022,
                "points": [
                    "Fast and reliable claim settlement for your convenience.",
                    "Dedicated support for all your insurance and policy inquiries."
                ]
            },
            {
                "year": 2021,
                "points": [
                    "Adjustable premium options to suit your budget and coverage needs.",
                    "Protection for your spouse and children under the same plan."
                ]
            },
            {
                "year": 2020,
                "points": [
                    "Manage your policy online with ease through our digital platform.",
                    "Fast and reliable claim settlement for your convenience."
                ]
            }
        ]
    }
};
