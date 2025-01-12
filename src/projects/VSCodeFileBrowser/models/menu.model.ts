export interface MenuItem {
    id: string;
    name: string;
    icon: string;
    children: MenuItem[] | null;
}