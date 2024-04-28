// Next
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import logo from 'assets/components/logo.png';
import workdatacloud from 'assets/components/workdatacloud.png';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from './models';

// Components
import { Header } from 'components/header';
import { Internationalization } from 'components/internationalization';
import { Menu } from 'components/menu';

// Hook
import { useLayout } from './useLayout';

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const { t, router, asPath, isMenu, isMidle, isMobile, sub_menus, handleOpenMenu, linkAccess } = useLayout();

  const handleMenuClick = (path: Url) => {
    if (path !== asPath) {
      router.push(path);
    }
  };

  const isOpenMenu = (keys: string[]) => {
    return keys.includes(selectedKey ?? '');
  };

  return (
    <S.Container>
      <Header>
        <Link title="ir para pagina inicial" href={'/'}>
          <Image src={logo} alt="logo" draggable={'false'} />
        </Link>
        <Menu>
          <Menu.ItemGroup>
            <Menu.Item
              menuItemKey="1"
              name={`${t('Quem somos')}`}
              defaultSelectedKeys={selectedKey}
              onClick={() => handleMenuClick('/about')}
            />
            <Menu.Item
              menuItemKey="2"
              name={`${t('Soluções')}`}
              defaultSelectedKeys={selectedKey}
              onClick={() => handleMenuClick('/solutions')}
            />
            <Menu.Item
              menuItemKey="8"
              name={`${t('Trabalhe Conosco')}`}
              defaultSelectedKeys={selectedKey}
              onClick={() => handleMenuClick('/join-us')}
            />
            <Menu.Item
              menuItemKey="9"
              name={`${t('Contato')}`}
              defaultSelectedKeys={selectedKey}
              onClick={() => handleMenuClick('/contact')}
            />
          </Menu.ItemGroup>
        </Menu>
        <S.Actions>
          <Link href={'https://www.workdatacloud.com'} title="Abrir link" passHref>
            <Image src={workdatacloud} alt="workdatacloud" draggable={'false'} />
          </Link>
          <Internationalization />
        </S.Actions>
      </Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
