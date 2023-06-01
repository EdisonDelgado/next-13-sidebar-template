export interface SideBarItem {
    label: string;
    icon?: unknown;
    href: string;
    childrens?: SideBarSubItem[];
}

export interface SideBarSubItem {
    label: string;
    href: string;
}
