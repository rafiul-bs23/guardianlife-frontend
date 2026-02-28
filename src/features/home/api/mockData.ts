import type { HeaderData } from "../../../shared/types/header";

import HomeBackgroundVideo from "../../../assets/video/home.mov";

export const MOCK_HOME_HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    description: undefined,// Beach sunset background
    background_video_url: HomeBackgroundVideo,
};
import AppPromotionImage from "../../../assets/images/home/AppPromotion/AppPromotion.png";
import partner1 from '../../../assets/images/home/PartnersBanks/partner1.jpg';
import partner2 from '../../../assets/images/home/PartnersBanks/partner2.jpg';
import partner3 from '../../../assets/images/home/PartnersBanks/partner3.jpg';

import image1 from '../../../assets/images/home/Solutions/solutions1.png';
import image2 from '../../../assets/images/home/Solutions/solutions2.png';
import image3 from '../../../assets/images/home/Solutions/solutions3.png';
import image4 from '../../../assets/images/home/Solutions/solutions4.png';
import bp1 from "../../../assets/images/partners/Qatar Airways.png";
import bp2 from "../../../assets/images/partners/Renata.png";
import bp3 from "../../../assets/images/partners/Robi Logo.png";
import bp4 from "../../../assets/images/partners/Aramex.png";
import bp5 from "../../../assets/images/partners/Haier.png";
import bp6 from "../../../assets/images/partners/Expeditors.png";
import bp7 from "../../../assets/images/partners/Bureau Veritas.png";
import bp8 from "../../../assets/images/partners/DBL Ceramic.png";
import bp9 from "../../../assets/images/partners/Optimizely.png";
import bp10 from "../../../assets/images/partners/Tesco.png";
import bp11 from "../../../assets/images/partners/Buro Bangladesh.png";
import bp12 from "../../../assets/images/partners/Cross World.jpg";
import bp13 from "../../../assets/images/partners/Dahua.jpg";
import bp14 from "../../../assets/images/partners/Fiber@Home.png";
import bp15 from "../../../assets/images/partners/France Embassy.png";
import bp16 from "../../../assets/images/partners/Grameen Telecom Trust.jpg";
import bp17 from "../../../assets/images/partners/Next ventures.png";
import bp18 from "../../../assets/images/partners/Perfetti Van.png";
import bp19 from "../../../assets/images/partners/Wagely.jpg";
import bp20 from "../../../assets/images/partners/Welthungerlife.png";
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
    { id: 1, name: "Qatar Airways", logo: bp1 },
    { id: 2, name: "Renata", logo: bp2 },
    { id: 3, name: "Robi", logo: bp3 },
    { id: 4, name: "Aramex", logo: bp4 },
    { id: 5, name: "Haier", logo: bp5 },
    { id: 6, name: "Expeditors", logo: bp6 },
    { id: 7, name: "Bureau Veritas", logo: bp7 },
    { id: 8, name: "DBL Ceramic", logo: bp8 },
    { id: 9, name: "Optimizely", logo: bp9 },
    { id: 10, name: "Tesco", logo: bp10 },
];

export const partners2: Partner[] = [
    { id: 11, name: "Buro Bangladesh", logo: bp11 },
    { id: 12, name: "Cross World", logo: bp12 },
    { id: 13, name: "Dahua", logo: bp13 },
    { id: 14, name: "Fiber@Home", logo: bp14 },
    { id: 15, name: "France Embassy", logo: bp15 },
    { id: 16, name: "Grameen Telecom Trust", logo: bp16 },
    { id: 17, name: "Next Ventures", logo: bp17 },
    { id: 18, name: "Perfetti Van", logo: bp18 },
    { id: 19, name: "Wagely", logo: bp19 },
    { id: 20, name: "Welthungerlife", logo: bp20 },
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
        { id: 1, name: 'City Bank', logo: partner1, link: '/banca/city-bank' },
        { id: 2, name: 'Dutch-Bangla Bank', logo: partner2, link: '/banca/dbbl' },
        { id: 3, name: 'MTB', logo: partner3, link: '/banca/mtb' },
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
