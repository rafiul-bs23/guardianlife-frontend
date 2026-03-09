export interface FeatureItem {
    image: string;
    title: string;
    description: string;
}

export interface FeaturesSection {
    title: string;
    subtitle: string;
    items: FeatureItem[];
}

export interface ClaimDocument {
    file_name: string;
    pdf_download_link: string;
}

export interface ClaimCategory {
    name: string;
    documents: ClaimDocument[];
}

export interface ClaimDocumentsData {
    category: ClaimCategory[];
}

export interface TimelineItem {
    label: string;
    date: string;
    is_completed: boolean;
}

export interface ClaimStatus {
    tracking_title: string;
    tracking_subtitle: string;
    timeline: TimelineItem[];
}

export interface CustomerStoriesData {
    title: string;
    subtitle: string;
    video_thumbnail: string;
    video_url: string;
}

export interface ClaimData {
    features_section: FeaturesSection;
    claim_status: ClaimStatus;
    customer_stories: CustomerStoriesData;
}
