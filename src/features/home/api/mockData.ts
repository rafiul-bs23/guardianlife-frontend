import image1 from '../../../assets/images/home/Solutions/solutions1.png';
import image2 from '../../../assets/images/home/Solutions/solutions2.png';
import image3 from '../../../assets/images/home/Solutions/solutions3.png';
import image4 from '../../../assets/images/home/Solutions/solutions4.png';
import BusinessPastner1 from "../../../assets/images/home/BusinessPartners/BusinessPartner1.png";

export type Partner = {
    id: number;
    name: string;
    logo: string;
};

export const solutions = [
    { id: 0, title: 'For You', image: image1 },
    { id: 1, title: 'For Your Family', image: image2 },
    { id: 2, title: 'Retirement', image: image3 },
    { id: 3, title: 'Islamic', image: image4 },
];

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
