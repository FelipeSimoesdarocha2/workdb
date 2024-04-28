// Models
import { MenuProps } from './models';

// Components
import { Item } from './item';
import { ItemGroup } from './itemGroup';

const Menu = ({ children }: MenuProps) => {
  return <>{children}</>;
};

type CompoundedComponent = typeof Menu & {
  Item: typeof Item;
  ItemGroup: typeof ItemGroup;
};

const CompoundedMenu: CompoundedComponent = Object.assign(Menu, { Item, ItemGroup });
export default CompoundedMenu;
