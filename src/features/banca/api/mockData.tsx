import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-BAN-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "BANCASSURANCE SOLUTIONS BY ",
                "color": "#FFFFFF"
            },
            {
                "text": "GUARDIAN LIFE",
                "color": "#1E3161"
            }
        ],
        "description": "A SMARTER WAY TO PROTECT BANKING RELATIONSHIPS",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};

export type BenefitSection = {
    id: number;
    icon: React.ReactNode;
    title: string;
    image: string;
    dotColor: string;
    bgColor: string;
    points: string[];
};

export const bancassuranceBenefitsSections: BenefitSection[] = [
    {
        id: 1,
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z"
                    fill="#E8823A"
                />
            </svg>
        ),
        title: "Benefits for Bank's Customers",
        image:
            "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        dotColor: "bg-[#E8823A]",
        bgColor: "bg-[#F5E6DC]",
        points: [
            "Protects families from the burden of loan repayment after the borrower's death",
            "Financial relief during permanent disability or severe health conditions",
            "Health coverage as an add-on benefit with life protection",
            "Peace of mind with minimal effort and maximum security",
        ],
    },
    {
        id: 2,
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#4CAF82" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="3" fill="#4CAF82" />
            </svg>
        ),
        title: "Benefits for Banks",
        image:
            "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        dotColor: "bg-[#3B6FD4]",
        bgColor: "bg-[#E8EDF5]",
        points: [
            "Increased revenue through insurance sales with minimal investment risk",
            "Reduced credit risk exposure in mortgage, personal, SME loans, and credit cards",
            "Better utilization of existing branches and sales channels",
            "Motivated workforce through commission and incentive opportunities",
            "Enhanced attractiveness of existing banking products",
        ],
    },
];

import { Dock, House, Banknote } from 'lucide-react';
import React from 'react';

export type SolutionsSection = {
    id: number;
    icon: React.ReactNode;
    title: string;
    image: string;
    points: string[];
};

export const bancassuranceProductSections: SolutionsSection[] = [
    {
        id: 1,
        icon: (
            <Dock
                size={30}
                className="text-[var(--color-primary)]"
            />
        ),
        title: "Credit Shield Products",
        image:
            "https://glilapi.guardianlife.com.bd/images/1725268173315-560204496-Early%20Cash.jpg",
        points: [
            "Coverage up to 200% of outstanding credit card balance",
            "Protection against natural death and permanent total disability",
            "Critical illness coverage",
            "Optional IPD and OPD health benefit",
        ],
    },
    {
        id: 2,
        icon: (
            <House
                size={30}
                className="text-[var(--color-primary)]"
            />
        ),
        title: "Mortgage / Home Loan",
        image:
            "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        points: [
            "Protection of outstanding loan principal",
            "Coverage for natural death, accidental death and permanent total disability",
        ],
    },
    {
        id: 3,
        icon: (
            <Banknote
                size={30}
                className="text-[var(--color-primary)]"
            />
        ),
        title: "Personal Loan",
        image:
            "https://glilapi.guardianlife.com.bd/images/1725268173315-560204496-Early%20Cash.jpg",
        points: [
            "Loan repayment assurance in case of death or disability of the borrower",
        ],
    },
];

export type ServiceCard = {
    id: number;
    image: string;
    title: string;
    points: string[];
};

export const serviceCards: ServiceCard[] = [
    {
        id: 1,
        image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        title: "Customized Solutions",
        points: [
            "Customized insurance product design",
            "Integration with banking products and processes",
        ],
    },
    {
        id: 2,
        image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        title: "Training & Support",
        points: [
            "Training and sales support for bank staff",
            "Marketing and customer communication assistance",
        ],
    },
    {
        id: 3,
        image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
        title: "Complete Management",
        points: [
            "Policy administration and claims management",
            "Dedicated relationship and support teams",
        ],
    },
];

import image1 from "../../../assets/images/banca/image1.png"
import image2 from "../../../assets/images/banca/image2.png"
import image3 from "../../../assets/images/banca/image3.png"

export type BankPartner = {
    id: number;
    logo: string;
    alt: string;
};

export const bankPartners: BankPartner[] = [
    { id: 1, logo: image1, alt: "Bank 1" },
    { id: 2, logo: image2, alt: "Bank 2" },
    { id: 3, logo: image3, alt: "Bank 3" },
];

export const MOCK_WHY_BANCASSURANCE_DATA = {
    header: {
        title: "Why Bancassurance Matters",
        description: "In an evolving financial landscape, banks are increasingly exposed to credit risk while customers seek greater financial security. Bancassurance bridges this gap by integrating life insurance protection directly into banking products—ensuring continuity, protection, and long-term value for all stakeholders."
    },
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    whatIsBancassurance: {
        title: "What Is Bancassurance?",
        subtitle1: "Bancassurance Is A Strategic Collaboration Between Banks And Life Insurance Companies That Enables Banks To Offer Insurance Solutions Through Their Existing Distribution Channels.",
        subtitle2: "This Partnership Enhances Traditional Banking Products By Embedding Life Insurance Coverage, Helping To:",
        bulletPoints: [
            "Protect Customers And Their Families Against Financial Uncertainty",
            "Mitigate Credit Risk Arising From Death, Disability, Or Critical Illness",
            "Strengthen Long-Term Customer Relationships",
        ],
        footer: "When Implemented With The Right Strategy And Operational Excellence, Bancassurance Creates A Win-Win Ecosystem For Customers, Banks, And Insurers Alike."
    }
};

export const MOCK_FACILITIES_DATA = {
    header: {
        title: "Facilities of Bancassurance with Guardian Life",
        description: "We provide end-to-end Bancassurance support to ensure seamless integration and long-term success"
    }
};

export const MOCK_BANCA_BENEFITS_DATA = {
    header: {
        title: "Benefits of Bancassurance",
        description: "Discover how Guardian Life's Bancassurance solutions create value for both customers and banking partners"
    }
};

export const MOCK_PRODUCT_SOLUTIONS_DATA = {
    header: {
        title: "Bancassurance Product Solutions",
        description: "Comprehensive protection solutions designed for diverse banking needs"
    }
};
