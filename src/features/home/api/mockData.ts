import type { HeaderData } from "../../../shared/types/header";

export const MOCK_HOME_HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    description: undefined,// Beach sunset background
    background_video_url: "assets/video/home.mov",
};

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
        { id: 0, title: 'For You', image: "assets/images/home/Solutions/solutions1.png" },
        { id: 1, title: 'For Your Family', image: "assets/images/home/Solutions/solutions2.png" },
        { id: 2, title: 'Retirement', image: "assets/images/home/Solutions/solutions3.png" },
        { id: 3, title: 'Islamic', image: "assets/images/home/Solutions/solutions4.png" },
    ]
};

export const partners: Partner[] = [
    { id: 1, name: "Qatar Airways", logo: "assets/images/partners/Qatar Airways.png" },
    { id: 2, name: "Renata", logo: "assets/images/partners/Renata.png" },
    { id: 3, name: "Robi", logo: "assets/images/partners/Robi Logo.png" },
    { id: 4, name: "Aramex", logo: "assets/images/partners/Aramex.png" },
    { id: 5, name: "Haier", logo: "assets/images/partners/Haier.png" },
    { id: 6, name: "Expeditors", logo: "assets/images/partners/Expeditors.png" },
    { id: 7, name: "Bureau Veritas", logo: "assets/images/partners/Bureau Veritas.png" },
    { id: 8, name: "DBL Ceramic", logo: "assets/images/partners/DBL Ceramic.png" },
    { id: 9, name: "Optimizely", logo: "assets/images/partners/Optimizely.png" },
    { id: 10, name: "Tesco", logo: "assets/images/partners/Tesco.png" },
];

export const partners2: Partner[] = [
    { id: 11, name: "Buro Bangladesh", logo: "assets/images/partners/Buro Bangladesh.png" },
    { id: 12, name: "Cross World", logo: "assets/images/partners/Cross World.jpg" },
    { id: 13, name: "Dahua", logo: "assets/images/partners/Dahua.jpg" },
    { id: 14, name: "Fiber@Home", logo: "assets/images/partners/Fiber@Home.png" },
    { id: 15, name: "France Embassy", logo: "assets/images/partners/France Embassy.png" },
    { id: 16, name: "Grameen Telecom Trust", logo: "assets/images/partners/Grameen Telecom Trust.jpg" },
    { id: 17, name: "Next Ventures", logo: "assets/images/partners/Next ventures.png" },
    { id: 18, name: "Perfetti Van", logo: "assets/images/partners/Perfetti Van.png" },
    { id: 19, name: "Wagely", logo: "assets/images/partners/Wagely.jpg" },
    { id: 20, name: "Welthungerlife", logo: "assets/images/partners/Welthungerlife.png" },
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
        { id: 1, name: 'City Bank', logo: "assets/images/home/PartnersBanks/partner1.jpg", link: '/banca/city-bank' },
        { id: 2, name: 'Dutch-Bangla Bank', logo: "assets/images/home/PartnersBanks/partner2.jpg", link: '/banca/dbbl' },
        { id: 3, name: 'MTB', logo: "assets/images/home/PartnersBanks/partner3.jpg", link: '/banca/mtb' },
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
    image: "assets/images/home/AppPromotion/AppPromotion.png"
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
    image: "assets/images/home/guide-you.png",
    buttonText: "AI ASSISTANT"
};
