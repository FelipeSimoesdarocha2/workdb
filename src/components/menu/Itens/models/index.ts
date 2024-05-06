export interface ItensProps {
    value: string;
    name?: string;
}

export type MenuItemProps = {
    menuItemKey?: string;
    push: string;
    name: string;
    keye?: string;
    data: ItensProps[];
};
