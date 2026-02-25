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

export const MOCK_COVERAGE_DATA = {
    header: {
        title: "Comprehensive Coverage Under One Group Policy",
        description: "Guardian Life offers a complete range of group insurance coverages that can be tailored to your organization's size, industry, and budget."
    },
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png",
    coverages: [
        {
            id: 1,
            iconName: "ShieldIcon",
            iconColor: "#4A90D9",
            title: "Life Coverage",
            description: "Comprehensive life insurance including death benefits, accidental death, disability coverage, and critical illness protection for complete financial security.",
        },
        {
            id: 2,
            iconName: "HeartIcon",
            iconColor: "#4CAF82",
            title: "Health Coverage",
            description: "Extensive medical coverage including in-patient treatment, maternity benefits, and out-patient care for everyday medical needs.",
        },
        {
            id: 3,
            iconName: "StarIcon",
            iconColor: "#9B6FD4",
            title: "Specialized Benefits",
            description: "Additional coverage for dental and optical care, ensuring comprehensive healthcare support for all aspects of employee well-being.",
        },
    ]
};
