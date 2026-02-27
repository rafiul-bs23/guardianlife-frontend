export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface LogoGridProps {
  partners: Partner[];
  rowHeight: number | null;
}

export interface LogoCardProps {
  logo: string;
  name: string;
}