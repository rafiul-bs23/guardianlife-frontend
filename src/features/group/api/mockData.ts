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

export const MOCK_LIFE_COVERAGE_DATA = {
    header: {
        title: "Life Coverage for Financial Protection & Peace of Mind",
        description: "Group Life Insurance ensures financial security for employees and their families while reinforcing an organization's commitment to long-term employee welfare. This coverage helps mitigate uncertainty and provides assurance during life-altering events"
    },
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png",
    coverages: [
        {
            id: 1,
            title: "Death Benefit (Natural Death)",
            description: "If an insured employee passes away due to natural causes during the policy period, Guardian Life Insurance, upon receiving written proof of death, will pay the sum insured to the organization or the nominated beneficiary of the employee.",
        },
        {
            id: 2,
            title: "Accidental Death Benefit (ADB)",
            description: "In the event of an insured employee's death caused directly by an accident involving external and violent means, the Accidental Death Benefit provides an additional sum insured over and above the standard death benefit.",
        },
        {
            id: 3,
            title: "Permanent & Total Disability (PTD)",
            description: "If an insured employee becomes permanently and totally disabled due to an accident resulting in bodily injury, Guardian Life will pay the full sum insured to the organization, offering financial support during a life-changing situation.",
        },
        {
            id: 4,
            title: "Permanent Partial Disability (PPD)",
            description: "When an accident results in permanent partial disability, Guardian Life provides fixed financial benefits to the employer or employee in accordance with the Labor Law of Bangladesh, ensuring continued financial stability.",
        },
    ]
};

export const MOCK_CRITICAL_ILLNESS_DATA = {
    header: {
        title: "Protection Against Major Life-Threatening Diseases",
        description: "The Critical Illness Benefit is a supplementary coverage designed to support employees and their families financially if diagnosed with any of the specified critical illnesses. This benefit helps manage high treatment costs and income disruption."
    },
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    illnesses: [
        { id: 1, name: "Cancer" },
        { id: 2, name: "Heart Attack (Myocardial Infarction)" },
        { id: 3, name: "Stroke" },
        { id: 4, name: "Coronary Artery Bypass Surgery" },
        { id: 5, name: "Kidney Failure (End Stage Renal Disease)" },
        { id: 6, name: "Major Organ Transplantation" },
        { id: 7, name: "Paralysis" },
        { id: 8, name: "Multiple Sclerosis" },
        { id: 9, name: "Loss of Limbs" },
        { id: 10, name: "Blindness / Loss of Sight" },
        { id: 11, name: "Heart Valve Replacement" },
        { id: 12, name: "Surgery of Aorta" },
        { id: 13, name: "Aplastic Anemia" },
        { id: 14, name: "Benign Brain Tumor" },
        { id: 15, name: "Chronic Lung Disease / End Stage Lung Disease" },
        { id: 16, name: "Deafness / Loss of Hearing" },
        { id: 17, name: "Major Head Trauma" },
        { id: 18, name: "Loss of Speech" },
    ]
};

export const MOCK_TREATMENT_PLAN_DATA = {
    header: {
        title: "Health Coverage That Supports Everyday Medical Needs",
        description: "With rising healthcare costs and evolving family responsibilities, Guardian Life's Group Health Insurance plans are designed to provide extensive medical coverage—both for hospitalization and routine medical expenses."
    },
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    plans: [
        {
            id: 1,
            title: "In-Patient Treatment (IPD) Plan",
            description: "The In-Patient Treatment plan provides financial protection for medical expenses incurred during hospitalization of at least 24 hours due to illness or accidental injury within the policy period.",
        },
        {
            id: 2,
            title: "General Out-Patient Treatment (OPD) Plan",
            description: "The OPD plan covers medical expenses that do not require hospitalization, allowing employees to claim for routine healthcare costs.",
            bulletPoints: [
                "Doctor Consultation Fees",
                "Medicine Costs",
                "Diagnostic & Investigation Expenses",
            ],
        },
    ]
};

export const MOCK_MATERNITY_DATA = {
    title: "Supporting Employees During Life's Important Moments",
    description: "Maternity benefits offer financial assistance and peace of mind for female married employees or spouses up to 45 years of age",
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    items: [
        { id: 1, label: "Normal Delivery" },
        { id: 2, label: "Caesarean / Ectopic / Extra-uterine Pregnancy" },
        { id: 3, label: "Legal Abortion or Miscarriage" },
    ]
};

export const MOCK_OUTPATIENT_DATA = [
    {
        "title": "Dental Out-Patient Treatment Benefit",
        "description": "Dental OPD coverage provides access to essential dental care without hospitalization.",
        "productCode": "NRB-SP",
        "logoUrl": null,
        "thumbnailUrl": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
        "footer": null,
        "points": [
            "Doctor Consultation Fees",
            "Amalgam, Resin Plastic & Temporary/Permanent Fillings",
            "Routine Extraction",
            "Medication",
            "X-rays & Investigations",
            "Root Canal Treatment (including bridging and capping)",
            "Scaling & Polishing (once per year per member)"
        ]
    },
    {
        "title": "Optical Out-Patient Treatment Benefit",
        "description": "Optical OPD benefits cover eye care and vision correction needs on an outpatient basis.",
        "productCode": "JAYA-01",
        "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
        "thumbnailUrl": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
        "footer": "Ideal for digital buyers",
        "points": [
            "Consultation",
            "Vision Tests for Refractive Errors",
            "Medication",
            "Lenses & Spectacles"
        ]
    }
];
