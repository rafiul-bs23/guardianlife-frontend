import type { ContactData } from '../types';
import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "SECURE YOUR",
                "color": "#FFFFFF"
            },
            {
                "text": "FAMILY'S FUTURE,",
                "color": "#2E3192"
            },
            {
                "text": "PLAN YOUR RETIREMENT,",
                "color": "#FFFFFF"
            },
            {
                "text": "OR PROTECT YOUR HEALTH—",
                "color": "#FFFFFF"
            },
            {
                "text": "WE'VE GOT YOU COVERED.",
                "color": "#2E3192"
            }
        ],
        "description": undefined,
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};

export const mockContactData: ContactData = {
    header: {
        title: "FEEL FREE TO CONTACT US",
        description: "We value your feedback, questions, and concerns, and we're here to assist you every step of the way. Whether you need assistance, have inquiries about our products or services, or simply want to share your thoughts, reaching out to us is easy and convenient."
    },
    info: {
        visitUs: {
            title: "Visit Us",
            subtitle: "Come say hello at our office HQ",
            address: "Police Plaza Concord (13th Floor), Tower- 02, Plot # 02, Road # 144, Gulshan Avenue, Dhaka- 1212."
        },
        callUs: {
            title: "Call Us",
            subtitle: "Sunday to Thursday, 10 AM to 6 PM, except government holidays",
            phone1: "+880 9666716622",
            phone2: "16622 (24/7 Customer Care)"
        },
        chatWithUs: {
            title: "Chat with us",
            subtitle: "Our Friendly Team is here to help",
            email: "info@guardianlife.com.bd"
        },
        socialMedia: {
            title: "Social Media",
            links: {
                facebook: "#",
                linkedin: "#",
                instagram: "#",
                youtube: "#"
            }
        }
    }
};
