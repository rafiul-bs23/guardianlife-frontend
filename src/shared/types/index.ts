export interface AppDownloadData {
    title: string;
    subtitle: string;
    image: string;
}

export interface CashlessNetworkData {
    title: string;
    description: string;
    stats: {
        value: string;
        label: string;
    }[];
    stepsTitle: string;
    steps: string[];
    image: string;
}
