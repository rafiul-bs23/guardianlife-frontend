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
    description?: string | null;
    background_image_url?: string | null;
    background_video_url?: string | null;
    media?: HeaderMediaData | null;
}

export interface HeaderResponse {
    status: boolean;
    transaction_id: string;
    data: HeaderData;
}
