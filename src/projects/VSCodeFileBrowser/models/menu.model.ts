export interface MenuItem {
    id: string;
    name: string;
    isFolder: boolean;
    children: MenuItem[];
}