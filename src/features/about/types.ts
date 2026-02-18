export interface StatCard {
    value: string;
    label: string;
}

export interface WhoWeAreData {
    title: string;
    paragraphs: string[];
    image: string;
    stats: StatCard[];
}

export interface JourneyCard {
    title: string;
    description: string;
}

export interface OurJourneyData {
    title: string;
    description: string;
    image: string;
    cards: JourneyCard[];
}

export interface MissionVisionItem {
    title: string;
    description: string;
    points: string[];
}

export interface MissionVisionData {
    title: string;
    description: string;
    mission: MissionVisionItem;
    vision: MissionVisionItem;
    image: string;
}

export interface AchievementCard {
    title: string;
    subtitle: string;
}

export interface OurAchievementsData {
    title: string;
    description: string;
    achievements: AchievementCard[];
    image: string;
}

export interface Milestone {
    year: string;
    items: string[];
}

export interface MilestonesData {
    title: string;
    description: string;
    image: string;
    milestones: Milestone[];
}

export interface GovernancePoint {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface GovernanceTrustData {
    title: string;
    description: string;
    points: GovernancePoint[];
    image: string;
}

export interface AboutData {
    whoWeAre: WhoWeAreData;
    ourJourney: OurJourneyData;
    missionVision: MissionVisionData;
    ourAchievements: OurAchievementsData;
    milestones: MilestonesData;
    governanceTrust: GovernanceTrustData;
}

export type {
    TitleItem,
    HeaderMediaData as HeaderImageData,
    HeaderData,
    HeaderResponse
} from '../../shared/types/header';
