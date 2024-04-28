// Styles
import * as S from './Item.styles';

// Models
import { MenuItemProps } from './models';

const Item = ({ name, menuItemKey, defaultSelectedKeys, onClick }: MenuItemProps) => {
    return (
        <S.Component onClick={onClick} className={`${defaultSelectedKeys === menuItemKey ? 'active' : null}`}>
            <p>{name}</p>
        </S.Component>
    );
};

export default Item;
