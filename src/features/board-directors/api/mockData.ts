import type { HeaderData } from '../../about/types';
import type { BoardDirectorApiResponse } from '../types';

export const HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    background_image_url: "src/assets/images/headers/boardDirectors.png",
}

export const MOCK_BOARD_DIRECTOR_DATA: BoardDirectorApiResponse = {
    transaction_id: "IFKEACA6ECVIHN",
    status: true,
    data: [
        {
            id: "1",
            name: "MR. SAMUEL S CHOWDHURY",
            designation: "CHAIRMAN",
            image_url: "src/assets/images/boardDirectors/1.png"
        },
        {
            id: "2",
            name: "MR. SHIRAN HARSHA AMARASEKERA",
            designation: "DIRECTOR",
            image_url: "src/assets/images/boardDirectors/2.png"
        },
        {
            id: "3",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            image_url: "src/assets/images/boardDirectors/3.png"
        },
        {
            id: "4",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            image_url: "src/assets/images/boardDirectors/4.png"
        },
        {
            id: "5",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            image_url: "src/assets/images/boardDirectors/5.png"
        },
        {
            id: "6",
            name: "MR. SYED AKTHAR HASAN UDDIN",
            designation: "DIRECTOR",
            image_url: "src/assets/images/boardDirectors/6.png"
        }
    ]
};