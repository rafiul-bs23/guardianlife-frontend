export interface MenuItem {
    label: string;
    path?: string;
    children?: MenuItem[];
    icon?: string; // Optional icon name from lucide-react if needed
    visible?: boolean;
}
