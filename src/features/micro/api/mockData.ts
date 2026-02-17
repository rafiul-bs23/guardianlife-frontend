import type { MicroData } from '../types';
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "success": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "PROTECTION THAT",
                "color": "#FFFFFF"
            },
            {
                "text": "STANDS BESIDE EVERY",
                "color": "#FFFFFF"
            },
            {
                "text": "FAMILY",
                "color": "#2E3192"
            }
        ],
        "description": "LIFE IS UNPREDICTABLE - AND FOR MILLIONS OF FAMILIES IN BANGLADESH, ONE UNEXPECTED LOSS CAN MEAN FINANCIAL HARDSHIP.",
        "background_image_url": "https://as1.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg",
        "media": {
            "type": "image",
            "url": "https://as1.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg"
        }
    }
};

export const mockMicroData: MicroData = {
    whyMicroMatters: {
        title: "WHY MICROINSURANCE MATTERS",
        subtitle: "Microinsurance is designed for real lives and real challenges. Because one unexpected event should never destroy a lifetime of hard work.",
        image: "src/assets/images/micro/1.png",
        benefits: [
            {
                title: "Stay Financially Protected",
                description: "Against Life And Health Risks That Could Devastate Family Finances"
            },
            {
                title: "Access Affordable Insurance",
                description: "Plans Specifically Designed For Low-Income Households"
            },
            {
                title: "Understand Policies Easily",
                description: "Simple Terms With Minimal Exclusions And Clear Benefits"
            },
            {
                title: "Feel Secure And Peaceful",
                description: "Knowing Protection Is There When Life Takes Unexpected Turns"
            },
            {
                title: "Submit Claims Simply",
                description: "Hassle-Free Process With Fast Settlement And Support"
            },
            {
                title: "Improve Living Standards",
                description: "Building Financial Resilience And Long-Term Security Over Time"
            }
        ]
    },
    solutions: {
        title: "MICROINSURANCE SOLUTIONS WE OFFER",
        description: "Comprehensive protection designed for real lives and real challenges, with affordable plans that fit your needs.",
        solutions: [
            {
                title: "Credit Shield Insurance (CSI)",
                subtitle: "Protecting borrowers and their families",
                image: "src/assets/images/claim/Subtract.png",
                points: [
                    "Clears outstanding loan amounts in case of death or disability",
                    "Provides funeral cash benefit for immediate needs",
                    "Covers the full maturity risk of the loan"
                ],
                footerHighlight: "Ideal for microfinance borrowers and small entrepreneurs"
            },
            {
                title: "Savings Shield Insurance (SSI)",
                subtitle: "Secure savings. Guaranteed protection.",
                image: "src/assets/images/claim/Subtract.png",
                points: [
                    "Full maturity value paid to the policyholder",
                    "Enjoy attractive maturity payouts",
                    "Protects savings from market uncertainty"
                ],
                footerHighlight: "A smart way to grow and protect savings together"
            },
            {
                title: "Education Protection Plan",
                subtitle: "Because your child's future must go on",
                image: "src/assets/images/claim/Subtract.png",
                points: [
                    "Ensures continuation of children's education",
                    "Financial protection in case of loss of legal guardian",
                    "Tax-free benefit payments"
                ],
                footerHighlight: "Designed to safeguard dreams, even during life's hardest moments"
            },
            {
                title: "Savings Insurance",
                subtitle: "Save regularly. Stay protected.",
                image: "src/assets/images/claim/Subtract.png",
                points: [
                    "Monthly savings plan with insurance coverage",
                    "Maturity value payable upon death during policy term",
                    "Dual benefit of savings and protection"
                ],
                footerHighlight: "Perfect for disciplined savers seeking security"
            },
            {
                title: "Term Life Insurance",
                subtitle: "Simple, reliable life protection",
                image: "src/assets/images/claim/Subtract.png",
                points: [
                    "Fixed benefit paid to nominee during policy term",
                    "Affordable and easy to understand",
                    "Essential protection for families"
                ],
                footerHighlight: "Straightforward coverage when it matters most"
            }
        ]
    },
    whyMicroinsurance: {
        title: "WHY GUARDIAN LIFE'S MICROINSURANCE",
        subtitle: "Families trust Guardian Life because we go beyond policies.",
        cards: [
            {
                icon: "shield-check",
                title: "Simplified Products",
                description: "Designed for everyday people with easy-to-understand terms",
                iconColor: "text-blue-500"
            },
            {
                icon: "dollar-sign",
                title: "Affordable Pricing",
                description: "No hidden costs, transparent and fair pricing for all",
                iconColor: "text-green-500"
            },
            {
                icon: "zap",
                title: "Fast Claims",
                description: "Automated processing for faster settlement when you need it most",
                iconColor: "text-purple-500"
            },
            {
                icon: "help-circle",
                title: "24/7 Support",
                description: "Customer support in Bangla & English whenever you need help",
                iconColor: "text-orange-500"
            }
        ],
        outcomesTitle: "We focus on outcomes that truly matter:",
        outcomes: [
            "Protecting funds",
            "Reducing financial risk",
            "Strengthening credit confidence",
            "Creating long-term value for partners and beneficiaries"
        ],
        image: "src/assets/images/micro/2.png"
    },
    impactStatic: {
        title: "OUR IMPACT AT A GLANCE",
        subtitle: "Behind every number is a family that didn't fall behind.",
        image: "src/assets/images/micro/1.png",
        awardsTitle: "Recognition & Awards",
        awards: [
            { title: "Insurance Asia Awards", description: "Winner 2017, 2018 & 2019" }
        ],
        bannerTitle: "One Of The Fastest Claim Settlement Records In The Country",
        bannerSubtitle: "When Families Need Support Most, We're There With Quick And Reliable Service."
    },
    impactMetrics: [
        { metric: "11M+", title: "Lives Covered", description: "Families protected nationwide" },
        { metric: "99%", title: "Claim Payout Ratio", description: "Reliable claim settlement" },
        { metric: "160K+", title: "Claims Settled", description: "Families supported in need" },
        { metric: "৳768+", title: "Crore Paid", description: "In total claims" }
    ],
    partnersStatic: {
        title: "OUR MAJOR PARTNERS",
        subtitle: "OUR MAJOR PARTNERS",
    },
    partnersDynamic: [
        {
            partnerName: "Square",
            logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAk1BMVEX///9IuV/tHCQ1tFGZ1KTn9OmCzI89tldEuFzW7drO6tNfwXNvxX9bvm5CuVu74sKk2a4nskfsAADy+fT++PjtGRvsAAz2rK784+TzhYb+8vP5yMn96er5wsP2p6n2o6X72dr1mJr6z9DwWlzwYWPzfH/4ubvvRUrxa2zuMjT0jI/tJCzuPkLwUVXydXWu3beO0JpWFS+UAAAE3klEQVR4nO2aa3ebSAyGCWlz2zRtpmjAXAzYGIPBpP//1+1IGjDtnsOlJ81mN3q/xBYCntG8o/EhOI5I9NZ6eZzWzWfM+jST9egsybr5vpzr0/XTlG6/ENfNTNatsyTryxqu26sp3Vmu6ayrO+a6m0766825noRLuIRLuIRLuIRLuIRLuIRLuIRLuIRLuP5lrtd/bvLjeVpPxPU4k/XsLMm6WsElEn1EPXyb1gutoa8zWd+cJVkvq55H306K+9fjTNY1XetmOuv67Z9Hv9d+L1zCJVzCJVzCJVzCJVzCJVzCJVzCJVzC9T/keo33Hp/se4+300lruD7fz+j7oqxl11qOJRL9UX1+mBH5/n4uy1metUw/nq8ndWX/bzWdxf+3upnJkveje32gfUi4hEu4hEu4hEu4hEu4hEu4hEu4hEu43inXn3g/+jWeM/F7j3NZa54z3X+dEV3rYS7LWZ4lEon+mwqjbbot43Eo89O0DIavHuryyftnfDg0ClwiP4eXKStAk4qeLM4bjhwzvnylAXRByQ0AKN/e9mziABY/UWDltl1EFHsNFzU/DXxWqdYuS7chRaJaAUdAE0Hcmu/qRDfHZIh6EjotsRdSbi/Q6oChBtxLrFhVMJ9uxGxqwxG8GvAlFVYsw88q4VGYj01gy0U5OucrddodSe3MeEZYrt6swQprc64u8hMODRoT2eGwQR33hEezF2FIEczJ3BxaPrdkEH1gygJ4hJrqprbmPEpgS2iVruHCqQCcv7JGeU58RMDazFSGs+c2mZ0hjdPgVWBZzecj2Ami6afJ1ifPC33iMg7YIledsevDVdN4oupszZXjIA5MSbbKToKZUGWnr8IiHam8F6fxYcMGLRl6RzQlAu+BDXAazlutDRUdmsq3q6W9FCRQ9k401zRbse5vToi6wGHorK+8q/AquwYrbovrtj5qG63jSuwi0kpVycDCKyy2XB7BkD1GTsNJUlmphhVBk52mKVoVcJGSJYxVSfk6Lq/re4Lxp7FqSZxYAI9XgI6cjP6Ww81d9BMuGNh7xEX37AaTo6kwOxh3iXIdl+PljdLWwDqwljCzEZxDgqgDXncNWY6cdvYsoeluEZ63x0PtuCmQA3dqtBx3K7nMyJOu5m5l5uxguYJGFWhfMFbLkYvNfeydRqvPLN+sRmY8xEbVQIOktkoLwz2QNuE6JhQO7WANveG+6bWaOyt6fDMUKaAC4B6QY385+2mOXCq0xtR5WaYt8uEwDqNet05x3bZtjSVmj2e2Tfj9eqBOS6wtmv2krfvCpm+ifW9PBmOmfToVt/stLqwJtFEWkXH2IQ/bODlhu+iop4G9X3ZUk8qxbe+yxWw5QsaknQ3OpoQ0sPPGas1EehXdEhoYdsC9XVZ8Q1ppibWO1nZxmDrTafzjgbe+DvqtGe2Itgx0fxruQvUqg2UwrCLgDhXUo+1Xd7R5nC8hgL6CujL7QxCTiSovxD0cqPcegEnL8T5uUtZwOYkpDY5a69p2ZAPGEdB9awrOin9ImV9kaMZAYQV45efms2pjPEtTtldgZMNHBtm9a7k8/1Cci+402ieSTXXed3nmK2gzGzpV+33R5Zy1S83OUnIBgi1uM2FMmw1tBAltPJ4T0RGrbbaSy8Fm8WuNPQ51EP8aehd6PyQikegj629ohehj8qp4sQAAAABJRU5ErkJggg==",
            websiteUrl: null
        },
        {
            partnerName: "Puma",
            logoUrl: "data:image/png;base64,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",
            websiteUrl: "https://www.puma.com"
        },
        {
            partnerName: "Runner",
            logoUrl: "data:image/png;base64,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",
            websiteUrl: null
        },
        {
            partnerName: "Square",
            logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAk1BMVEX///9IuV/tHCQ1tFGZ1KTn9OmCzI89tldEuFzW7drO6tNfwXNvxX9bvm5CuVu74sKk2a4nskfsAADy+fT++PjtGRvsAAz2rK784+TzhYb+8vP5yMn96er5wsP2p6n2o6X72dr1mJr6z9DwWlzwYWPzfH/4ubvvRUrxa2zuMjT0jI/tJCzuPkLwUVXydXWu3beO0JpWFS+UAAAE3klEQVR4nO2aa3ebSAyGCWlz2zRtpmjAXAzYGIPBpP//1+1IGjDtnsOlJ81mN3q/xBYCntG8o/EhOI5I9NZ6eZzWzWfM+jST9egsybr5vpzr0/XTlG6/ENfNTNatsyTryxqu26sp3Vmu6ayrO+a6m0766825noRLuIRLuIRLuIRLuIRLuIRLuIRLuIRLuP5lrtd/bvLjeVpPxPU4k/XsLMm6WsElEn1EPXyb1gutoa8zWd+cJVkvq55H306K+9fjTNY1XetmOuv67Z9Hv9d+L1zCJVzCJVzCJVzCJVzCJVzCJVzCJVzC9T/keo33Hp/se4+300lruD7fz+j7oqxl11qOJRL9UX1+mBH5/n4uy1metUw/nq8ndWX/bzWdxf+3upnJkveje32gfUi4hEu4hEu4hEu4hEu4hEu4hEu4hEu43inXn3g/+jWeM/F7j3NZa54z3X+dEV3rYS7LWZ4lEon+mwqjbbot43Eo89O0DIavHuryyftnfDg0ClwiP4eXKStAk4qeLM4bjhwzvnylAXRByQ0AKN/e9mziABY/UWDltl1EFHsNFzU/DXxWqdYuS7chRaJaAUdAE0Hcmu/qRDfHZIh6EjotsRdSbi/Q6oChBtxLrFhVMJ9uxGxqwxG8GvAlFVYsw88q4VGYj01gy0U5OucrddodSe3MeEZYrt6swQprc64u8hMODRoT2eGwQR33hEezF2FIEczJ3BxaPrdkEH1gygJ4hJrqprbmPEpgS2iVruHCqQCcv7JGeU58RMDazFSGs+c2mZ0hjdPgVWBZzecj2Ami6afJ1ifPC33iMg7YIledsevDVdN4oupszZXjIA5MSbbKToKZUGWnr8IiHam8F6fxYcMGLRl6RzQlAu+BDXAazlutDRUdmsq3q6W9FCRQ9k401zRbse5vToi6wGHorK+8q/AquwYrbovrtj5qG63jSuwi0kpVycDCKyy2XB7BkD1GTsNJUlmphhVBk52mKVoVcJGSJYxVSfk6Lq/re4Lxp7FqSZxYAI9XgI6cjP6Ww81d9BMuGNh7xEX37AaTo6kwOxh3iXIdl+PljdLWwDqwljCzEZxDgqgDXncNWY6cdvYsoeluEZ63x0PtuCmQA3dqtBx3K7nMyJOu5m5l5uxguYJGFWhfMFbLkYvNfeydRqvPLN+sRmY8xEbVQIOktkoLwz2QNuE6JhQO7WANveG+6bWaOyt6fDMUKaAC4B6QY385+2mOXCq0xtR5WaYt8uEwDqNet05x3bZtjSVmj2e2Tfj9eqBOS6wtmv2krfvCpm+ifW9PBmOmfToVt/stLqwJtFEWkXH2IQ/bODlhu+iop4G9X3ZUk8qxbe+yxWw5QsaknQ3OpoQ0sPPGas1EehXdEhoYdsC9XVZ8Q1ppibWO1nZxmDrTafzjgbe+DvqtGe2Itgx0fxruQvUqg2UwrCLgDhXUo+1Xd7R5nC8hgL6CujL7QxCTiSovxD0cqPcegEnL8T5uUtZwOYkpDY5a69p2ZAPGEdB9awrOin9ImV9kaMZAYQV45efms2pjPEtTtldgZMNHBtm9a7k8/1Cci+402ieSTXXed3nmK2gzGzpV+33R5Zy1S83OUnIBgi1uM2FMmw1tBAltPJ4T0RGrbbaSy8Fm8WuNPQ51EP8aehd6PyQikegj629ohehj8qp4sQAAAABJRU5ErkJggg==",
            websiteUrl: null
        },
        {
            partnerName: "Puma",
            logoUrl: "data:image/png;base64,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",
            websiteUrl: "https://www.puma.com"
        },
        {
            partnerName: "Runner",
            logoUrl: "data:image/png;base64,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",
            websiteUrl: null
        },
    ],
    contactForm: {
        title: "PLEASE FILL UP THE FORM",
        fields: {
            fullName: { label: "Full Name", placeholder: "Enter your full name", required: true },
            email: { label: "Email Address", placeholder: "Enter your email address", required: true },
            phone: { label: "Phone Number", placeholder: "Enter your mobile number", required: true },
            message: { label: "Message", placeholder: "Write your message here", required: true }
        },
        privacyPolicy: "You agree to our privacy policy.",
        submitButton: "Send Message"
    }
};
