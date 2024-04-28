// Styles
import * as S from './Header.styles';

// Models
import { SiderProps } from './models';

const Header = ({ children }: SiderProps) => {
    return (
        <S.Component>
            <S.Content>{children}</S.Content>
        </S.Component>
    );
};

export default Header;
