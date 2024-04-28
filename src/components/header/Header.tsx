// Styles
import * as S from './Header.styles';

// Models
import { SiderProps } from './models';

const Header = ({ children }: SiderProps) => {
    return <S.Component>{children}</S.Component>;
};

export default Header;
