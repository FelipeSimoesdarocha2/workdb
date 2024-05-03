// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import logo from 'assets/components/logo.png';
import whatsapp from 'assets/components/whatsapp.png';
import workdatacloud from 'assets/components/workdatacloud.png';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from './models';

// Components
import { Cookie } from 'components/cookie';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Internationalization } from 'components/internationalization';
import { Menu } from 'components/menu';

// Hook
import { useLayout } from './useLayout';

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const { t, isMenu, isMidle, isMobile, sub_menus, handleOpenMenu } = useLayout();

  const isOpenMenu = (keys: string[]) => {
    return keys.includes(selectedKey ?? '');
  };

  return (
    <S.Container>
      <Header>
        <Link title="ir para pagina inicial" href="/" draggable="false">
          <Image src={logo} alt="logo" draggable="false" />
        </Link>
        <Menu>
          <Menu.ItemGroup>
            <Menu.Item menuItemKey="1" push="/about" name={t('menu.about')} keye={selectedKey} />
            <Menu.Item menuItemKey="2" push="/solutions" name={t('menu.solutions')} keye={selectedKey} />
            <Menu.Item menuItemKey="8" push="/join-us" name={t('menu.join_us')} keye={selectedKey} />
            <Menu.Item menuItemKey="9" push="/contact" name={t('menu.contact')} keye={selectedKey} />
          </Menu.ItemGroup>
        </Menu>
        <S.Actions>
          <Link href="https://www.workdatacloud.com" title="abrir link" draggable="false" target="_blank">
            <Image src={workdatacloud} alt="workdatacloud" draggable="false" />
          </Link>
          <Internationalization />
        </S.Actions>
      </Header>
      <S.Content>{children}</S.Content>
      <Footer />
      <Cookie />
      <Link
        title="entrar em contato via whatsapp"
        className="whatsapp"
        target="_blank"
        draggable="false"
        href="https://wa.me/5547999536024?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+site+WorkDB.+Queria+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+prestados+pela+WorkDB."
      >
        <Image src={whatsapp} alt="workdatacloud" draggable="false" />
      </Link>
    </S.Container>
  );
};

export default Layout;
