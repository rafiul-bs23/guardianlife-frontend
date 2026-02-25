import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-GRP-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "GROUP INSURANCE ",
                "color": "#FFFFFF"
            },
            {
                "text": "SOLUTIONS",
                "color": "#FFFFFF"
            }
        ],
        "description": "GROUP INSURANCE IS MORE THAN JUST AN EMPLOYEE BENEFIT—IT IS A STRATEGIC INVESTMENT IN PEOPLE.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};

export const MOCK_BENEFITS_DATA = {
    header: {
        title: "Why Group Insurance Matters for Your Organization",
        description: "A Smarter Way to Care for Your Employees"
    },
    imgUrl: "https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid",
    benefits: [
        {
            id: 1,
            title: "Enhances Employee Loyalty and Retention",
            description: "Build stronger relationships with your workforce through comprehensive benefits that show you care about their well-being.",
        },
        {
            id: 2,
            title: "Demonstrates Organizational Commitment",
            description: "Show your dedication to employee well-being and create a positive workplace culture that attracts top talent.",
        },
        {
            id: 3,
            title: "Reduces Financial Stress",
            description: "Provide peace of mind during medical or life emergencies, allowing employees to focus on their work and recovery.",
        },
        {
            id: 4,
            title: "Strengthens Employer Branding",
            description: "Enhance your corporate governance and reputation as a responsible employer in the marketplace.",
        },
        {
            id: 5,
            title: "Cost-Effective Coverage",
            description: "Offer comprehensive protection at lower costs compared to individual insurance policies, maximizing your benefits budget.",
        },
    ]
};
