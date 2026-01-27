export interface menuItemTypes {
  icon: React.ReactNode;
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

export interface DashboardStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  color: string
  description: string;
  unit: string;
}

export type ColorKey = 'primary' | 'warning' | 'success' | 'info' | 'error';