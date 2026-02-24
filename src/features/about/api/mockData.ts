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
        "description": "SINCE 2014, GUARDIAN LIFE INSURANCE LIMITED HAS BEEN COMMITTED TO RESHAPING THE INSURANCE LANDSCAPE OF BANGLADESH THROUGH TRUST, INNOVATION, AND PEOPLE-FIRST PROTECTION.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};

export const mockAboutData: AboutData = {
    who_we_are: {
        title: "WHO WE ARE",
        paragraphs: [
            "Guardian Life Insurance Limited commenced its business operations on 1st January 2014 with a clear purpose — to help build a safer and more secure future for the people of Bangladesh.",
            "With a paid-up capital of BDT 33.67 Crores and an authorized capital of BDT 200 Crores, Guardian Life has established a strong financial foundation backed by sound governance and prudent risk management.",
            "Through spontaneous service, ethical practices, and customer-centric innovation, Guardian Life continues to earn trust across the insurance ecosystem. Our dynamic, caring, and knowledge-driven workforce remains committed to exceeding customer expectations by delivering world-class insurance products and reliable service experiences.",
            "Innovation, disciplined investment strategies, and robust risk management remain our core tools for ensuring sustainable growth and maximum financial benefit for our valued customers."
        ],
        image: "src/assets/images/about/1.png",
        stats: [
            {
                value: "BDT 33.67 CR",
                label: "Paid-up Capital"
            },
            {
                value: "BDT 200 CR",
                label: "Authorized Capital"
            }
        ]
    },
    our_journey: {
        title: "OUR JOURNEY",
        description: "Since inception, Guardian Life Insurance Limited has grown steadily to become a respected name in Bangladesh's life insurance industry. Over the years, we have expanded our product portfolio, strengthened our operational capabilities, and embraced digital transformation to serve customers more efficiently.",
        image: "src/assets/images/about/2.png",
        cards: [
            {
                title: "Steady Growth",
                description: "Our journey reflects a consistent commitment to customer satisfaction, technological advancement, and long-term value creation."
            },
            {
                title: "Digital Transformation",
                description: "We have embraced digital innovation to serve customers more efficiently and enhance their insurance experience."
            },
            {
                title: "Trusted Partner",
                description: "Positioning Guardian Life as a forward-thinking and reliable insurance partner for individuals and organizations."
            }
        ]
    },
    mission_vision: {
        title: "OUR MISSION & VISION",
        description: "See how we've helped thousands of families during their most challenging times. These are real experiences from real customers.",
        mission: {
            title: "Mission",
            description: "To become the most trusted life insurance brand in Bangladesh, driven by the philosophy of \"Insurance for All.\"",
            points: [
                "Transform how insurance is sold and perceived in Bangladesh",
                "Create a global-standard local insurance brand",
                "Shift focus from selling products to delivering meaningful protection",
                "Expand insurance awareness through concept-driven engagement"
            ]
        },
        vision: {
            title: "Vision",
            description: "To change the landscape of the insurance industry in Bangladesh by becoming a torchbearer of ethical growth, innovation, and inclusive protection.",
            points: [
                "Play an active role in the overall development of the insurance sector",
                "Promote inclusive insurance aligned with \"Insurance for All\"",
                "Help policyholders build a safer future through world-class products and service excellence"
            ]
        },
        image: "src/assets/images/about/3.png"
    },
    our_achievements: {
        title: "OUR ACHIEVEMENTS",
        description: "Each recognition reflects our commitment to excellence, innovation, and customer trust.",
        image: "src/assets/images/about/4.png",

    },
    milestones: {
        title: "MILESTONES WE ACHIEVED",
        description: "Since inception, Guardian Life Insurance Limited has consistently progressed through innovation, expansion, and customer-centric transformation. Each milestone represents our dedication to growth, governance, and service excellence.",
        image: "src/assets/images/about/5.png",

    },
    governance_trust: {
        title: "Governance & Trust",
        description: "Guardian Life Insurance Limited operates under strong regulatory compliance and ethical governance frameworks. Regulated by the appropriate authorities, we emphasize transparency, accountability, and responsible risk management to safeguard the interests of our policyholders and stakeholders.",
        image: "src/assets/images/about/6.png",
        points: [
            {
                icon: "Shield",
                title: "IDRA Regulated",
                description: "Fully compliant with Insurance Development & Regulatory Authority guidelines",
                color: "blue"
            },
            {
                icon: "BarChart",
                title: "AA3 CRAB Rating",
                description: "Recognized for financial stability and operational excellence",
                color: "green"
            },
            {
                icon: "Lock",
                title: "Risk Management",
                description: "Robust frameworks ensuring policyholder protection and sustainable growth",
                color: "purple"
            },
            {
                icon: "Briefcase",
                title: "Strong Capital Base",
                description: "BDT 33.67 Crores paid-up capital with BDT 200 Crores authorized capital",
                color: "orange"
            }
        ]
    }
};


export const MOCK_DYNAMIC_DATA: AboutDynamicResponse = {
    "transaction_id": "YOBDOZYUNZXC5Z",
    "status": true,
    "data": {
        "awards": [
            {
                "name": "Best Life Insurer 2022",
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
