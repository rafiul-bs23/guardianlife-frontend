
export interface ContentItem {
    title: string;
    description: string;
}

export interface QuickProductSection {
    content: ContentItem[];
}

export interface CardItem {
    title: string;
    description: string;
    image?: string;
}

export interface PlanBenefitsSection {
    description: string;
    cards: CardItem[];
    points: ContentItem[];
}

export interface DocumentItem {
    type: 'file' | string;
    title: string;
    url: string;
}

export interface ProductDocumentsSection {
    content: DocumentItem[];
}

export interface VideoItem {
    title: string;
    videoUrl: string;
}

export interface LearnMoreSection {
    content: VideoItem[];
}
