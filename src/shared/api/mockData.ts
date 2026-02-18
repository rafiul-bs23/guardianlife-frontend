import type { AppDownloadData, CashlessNetworkData } from '../types';

export const sharedAppDownloadData: AppDownloadData = {
    title: "DOWNLOAD OUR APP",
    subtitle: "The Guardian Life app puts hassle-free coverage in your hands. Download now on Android & iOS to manage your insurance anytime, anywhere.",
    image: "src/assets/images/shared/Subtract.png",
    playStoreUrl: "https://play.google.com/store",
    appStoreUrl: "https://www.apple.com/app-store"
};

export const sharedCashlessNetworkData: CashlessNetworkData = {
    title: "Cashless Hospital Network",
    description: "Get Treatment At 100+ Network Hospitals Without Paying Upfront. Our Cashless Facility Ensures You Focus On Recovery, Not Paperwork.",
    stats: [
        {
            value: "100+",
            label: "Network Hospitals"
        },
        {
            value: "24/7",
            label: "Pre-Authorization"
        }
    ],
    stepsTitle: "How Cashless Works:",
    steps: [
        "Show Your Policy Card At Network Hospital",
        "Hospital Requests Pre-Authorization",
        "Get Treatment Without Payment"
    ],
    image: "src/assets/images/shared/cashlessHospital.png"
};

export const sharedCustomerStoriesData = {
    title: "CUSTOMER STORIES",
    subtitle: "Real stories from families who found peace of mind with Guardian Life.",
    videoThumbnail: "src/assets/shared/Subtract.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};
