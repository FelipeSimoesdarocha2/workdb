export interface ItensProps {
  value: string;
  name?: string;
}

export interface MenuMobileProps {
  isActive: boolean;
  sub_menus: ItensProps[];
  selectedKey?: string;
}
