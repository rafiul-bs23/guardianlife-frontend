import type { DirectorsData, DirectorApiResponse } from '../types';
import type { HeaderData } from '../../../shared/types/header';

export const HEADER_DATA: HeaderData = {
    badge: null,
    title: [
        {
            text: "MEET OUR",
            color: "#FFFFFF"
        },
        {
            text: "GUARDIANS",
            color: "#EB6925"
        }
    ],
    description: undefined,
    background_image_url: "https://t3.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg",
    media: {
        type: "image",
        url: "https://t3.ftcdn.net/jpg/04/12/00/82/1000_F_412008272_JbmChYI2x40ck61qcTNW43uIdDNNCR0M.jpg"
    }
};

export const mockDirectorsData: DirectorsData = {
    directors: [
        {
            id: "1",
            name: "MR. SAMUEL S CHOWDHURY",
            designation: "CHAIRMAN",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/1.png"
        },
        {
            id: "2",
            name: "MR. SHIRAN HARSHA AMARASEKERA",
            designation: "DIRECTOR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/2.png"
        },
        {
            id: "3",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/3.png"
        },

        {
            id: "4",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/4.png"
        },
        {
            id: "5",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/5.png"
        },
        {
            id: "6",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image_url: "src/assets/images/boardDirectors/6.png"
        }
    ]
};

export const MOCK_DIRECTORS_DATA: DirectorApiResponse = {
    transaction_id: "IFKEACA6ECVIHN",
    status: true,
    data: mockDirectorsData.directors
};
