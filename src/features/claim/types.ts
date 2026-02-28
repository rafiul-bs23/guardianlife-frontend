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
    fileName: string;
    pdfDownloadLink: string;
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
    isCompleted: boolean;
}

export interface ClaimStatus {
    trackingTitle: string;
    trackingSubtitle: string;
    timeline: TimelineItem[];
}

export interface CustomerStoriesData {
    title: string;
    subtitle: string;
    videoThumbnail: string;
    videoUrl: string;
}

export interface ClaimData {
    featuresSection: FeaturesSection;
    claimStatus: ClaimStatus;
    customerStories: CustomerStoriesData;
}
