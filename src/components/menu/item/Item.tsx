// Next
import Link from 'next/link';

// Styles
import * as S from './Item.styles';

// Models
import { MenuItemProps } from './models';

const Item = ({ name, push, keye, menuItemKey }: MenuItemProps) => {
    return (
        <S.Component className={`${keye === menuItemKey ? 'active' : null}`}>
            <Link href={push} draggable={false}>
                {name}
            </Link>
        </S.Component>
    );
};

export default Item;
