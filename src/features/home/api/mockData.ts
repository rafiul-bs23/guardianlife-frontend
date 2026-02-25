import type { HeaderData } from "../../../shared/types/header";

export const MOCK_HOME_HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    description: undefined,
    background_image_url: "src/assets/images/headers/home.png", // Beach sunset background
};
import AppPromotionImage from "../../../assets/images/home/AppPromotion/AppPromotion.png";
import partner1 from '../../../assets/images/home/PartnersBanks/partner1.jpg';
import partner2 from '../../../assets/images/home/PartnersBanks/partner2.jpg';
import partner3 from '../../../assets/images/home/PartnersBanks/partner3.jpg';

import image1 from '../../../assets/images/home/Solutions/solutions1.png';
import image2 from '../../../assets/images/home/Solutions/solutions2.png';
import image3 from '../../../assets/images/home/Solutions/solutions3.png';
import image4 from '../../../assets/images/home/Solutions/solutions4.png';
import BusinessPastner1 from "../../../assets/images/home/BusinessPartners/BusinessPartner1.png";
import guideYouImage from "../../../assets/images/home/guide-you.png";

export type Partner = {
    id: number;
    name: string;
    logo: string;
};

export const MOCK_OUR_SOLUTIONS_DATA = {
    title: "OUR SOLUTIONS",
    heading: [
        { text: "SECURE YOUR ", color: "#333333" },
        { text: "FAMILY'S FUTURE", color: "#f97316" },
        { text: ", ", color: "#333333", lineBreak: true },
        { text: "PLAN YOUR RETIREMENT, OR ", color: "#333333", lineBreak: true },
        { text: "PROTECT YOUR HEALTH—", color: "#333333" },
        { text: "WE'VE ", color: "#f97316", lineBreak: true },
        { text: "GOT YOU COVERED.", color: "#f97316" }
    ],
    solutions: [
        { id: 0, title: 'For You', image: image1 },
        { id: 1, title: 'For Your Family', image: image2 },
        { id: 2, title: 'Retirement', image: image3 },
        { id: 3, title: 'Islamic', image: image4 },
    ]
};

export const partners: Partner[] = [
    { id: 1, name: "Shanta", logo: BusinessPastner1 },
    { id: 2, name: "The Palace", logo: BusinessPastner1 },
    { id: 3, name: "BRAC", logo: BusinessPastner1 },
    { id: 4, name: "ICMAB", logo: BusinessPastner1 },
    { id: 5, name: "Meridian", logo: BusinessPastner1 },
    { id: 6, name: "BRAC", logo: BusinessPastner1 },
    { id: 7, name: "Shanta", logo: BusinessPastner1 },
    { id: 8, name: "BRAC", logo: BusinessPastner1 },
    { id: 9, name: "Meridian", logo: BusinessPastner1 },
    { id: 10, name: "Meridian2", logo: BusinessPastner1 },
];

export const MOCK_PARTNER_BANKS_DATA = {
    title: "OUR PARTNERS BANK",
    heading: [
        { text: "DROP BY A ", color: "#1f2937" },
        { text: "PARTNER BANK", color: "#f97316" },
        { text: " OR HOP ONLINE TO ", color: "#1f2937" },
        { text: "EXPLORE AND GRAB", color: "#f97316" },
        { text: " YOUR ", color: "#1f2937" },
        { text: "GUARDIAN LIFE INSURANCE", color: "#f97316" },
        { text: " PLAN—SIMPLE AND TAILORED FOR YOU.", color: "#1f2937" }
    ],
    partners: [
        { id: 1, name: 'City Bank', logo: partner1, link: '#' },
        { id: 2, name: 'Dutch-Bangla Bank', logo: partner2, link: '#' },
        { id: 3, name: 'MTB', logo: partner3, link: '#' },
    ]
};

export const MOCK_APP_PROMOTION_DATA = {
    title: "OUR AMAZING NEW APP",
    heading: [
        { text: "SEAMLESS INSURANCE AT YOUR FINGERTIPS", color: "#f97316" }
    ],
    description: "THE GUARDIAN LIFE APP PUTS HASSLE-FREE COVERAGE IN YOUR HANDS.\nDOWNLOAD NOW ON ANDROID & IOS TO MANAGE YOUR INSURANCE ANYTIME, ANYWHERE.",
    buttons: [
        { text: "Google Play", action: "google_play" },
        { text: "App Store", action: "app_store" }
    ],
    image: AppPromotionImage
};

export const MOCK_GUIDE_YOU_DATA = {
    title: "May i guide you",
    description: [
        { text: "Let our ", color: "#464646" },
        { text: "AI Assistant", color: "#f97316" },
        { text: " help you ", color: "#464646", lineBreak: true },
        { text: "find the ", color: "#464646" },
        { text: "best policy", color: "#f97316" },
        { text: " — just ", color: "#464646", lineBreak: true },
        { text: "answer a few ", color: "#464646" },
        { text: "quick questions!", color: "#f97316" }
    ],
    image: guideYouImage,
    buttonText: "AI ASSISTANT"
};
