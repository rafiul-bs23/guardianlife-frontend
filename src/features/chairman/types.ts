export interface ChairmanInfo {
    name: string;
    designation: string;
    phone: string;
    email: string;
    image_url: string;
}

export interface ChairmanMessageData {
    title: string;
    paragraphs: string[];
    chairman: ChairmanInfo;
}
