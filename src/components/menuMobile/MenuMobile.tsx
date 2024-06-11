// Styles
import * as S from './MenuMobile.styles';

// Models
import { MenuMobileProps } from './models';

// i18n
import useTranslations from 'i18n';

// Components
import { Internationalization } from 'components/internationalization';
import Menu from 'components/menu/Menu';

const MenuMobile = ({ sub_menus, isActive, selectedKey }: MenuMobileProps) => {
  const t = useTranslations();

  return (
    <S.Container className={`menu-content ${isActive ? 'open' : ''} ${isActive ? '' : 'close'}`}>
      <S.Content>
        <Internationalization />
        <S.Menus>
          <Menu.Item menuItemKey="0" push="/" name={t('menu.home')} keye={selectedKey} />
          <Menu.Item menuItemKey="1" push="/about" name={t('menu.about')} keye={selectedKey} />
          <Menu.Itens
            menuItemKey="2"
            push="/solutions"
            name={'menu.solutions'}
            keye={selectedKey}
            data={sub_menus}
          />
          <Menu.Item menuItemKey="8" push="/join-us" name={t('menu.join_us')} keye={selectedKey} />
          <Menu.Item menuItemKey="9" push="/contact" name={t('menu.contact')} keye={selectedKey} />
        </S.Menus>
      </S.Content>
    </S.Container>
  );
};

export default MenuMobile;
