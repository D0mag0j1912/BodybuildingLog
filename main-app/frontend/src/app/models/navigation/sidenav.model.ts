
export interface SidenavElements {
    condition: boolean;
    lines: string;
    icon: {
        slot: string;
        name: string;
        color: string;
    };
    text: string;
    //TODO: Insert click
    routerLink?: string;
    routerDirection?: string;
}
