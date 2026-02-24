export interface TitleItem {
    text: string;
    color: string;
}

export interface HeaderMediaData {
    type: 'image' | 'video';
    url: string;
}

export interface HeaderData {
    badge?: string | null;
    title: TitleItem[];
    description?: string;
    background_image_url?: string;
    media?: HeaderMediaData;
}

export interface HeaderResponse {
    status: boolean;
    transaction_id: string;
    data: HeaderData;
}
