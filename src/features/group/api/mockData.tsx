import { ShieldIcon, HeartIcon, StarIcon } from "lucide-react";
import type { LifeCoverageType } from "../types";

export const comprehensiveData = [
    {
        id: 1,
        icon: <ShieldIcon size={18} color="#4A90D9" />,
        title: "Life Coverage",
        description: "Comprehensive life insurance including death benefits, accidental death, disability coverage, and critical illness protection for complete financial security.",
    },
    {
        id: 2,
        icon: <HeartIcon size={18} color="#4CAF82" />,
        title: "Health Coverage",
        description: "Extensive medical coverage including in-patient treatment, maternity benefits, and out-patient care for everyday medical needs.",
    },
    {
        id: 3,
        icon: <StarIcon size={18} color="#9B6FD4" />,
        title: "Specialized Benefits",
        description: "Additional coverage for dental and optical care, ensuring comprehensive healthcare support for all aspects of employee well-being.",
    },
];

export const lifeCoveragedata: LifeCoverageType[] = [
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
];

export const mockGroupApiResponse = {
    success: true,
    transactionId: "GLIL-TXN-ID",
    data: {
        channel: "retail",
        category: null,
        subcategory: null,
        products: [
            {
                title: "Dental Out-Patient Treatment Benefit",
                description: "Dental OPD coverage provides access to essential dental care without hospitalization.",
                productCode: "NRB-SP",
                logoUrl: null,
                thumbnailUrl: "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
                footer: null,
                points: [
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
                title: "Optical Out-Patient Treatment Benefit",
                description: "Optical OPD benefits cover eye care and vision correction needs on an outpatient basis.",
                productCode: "JAYA-01",
                logoUrl: "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
                thumbnailUrl: "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
                footer: "Ideal for digital buyers",
                points: [
                    "Consultation",
                    "Vision Tests for Refractive Errors",
                    "Medication",
                    "Lenses & Spectacles"
                ]
            }
        ]
    }
};
