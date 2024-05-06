// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// Styles
import * as S from './Itens.styles';

// Models
import { MenuItemProps } from './models';

// i18n
import useTranslations from 'i18n';

const Itens = ({ name, data, push, keye, menuItemKey }: MenuItemProps) => {
    const t = useTranslations();
    const { asPath } = useRouter();

    return (
        <S.Component className={`${keye === menuItemKey ? 'active' : ''}`}>
            <Link href={push} draggable={false}>
                {t(name)}
            </Link>
            <S.Content id="sub_menu">
                {data.map((item, index) => (
                    <div key={index} className={'item' + ' ' + `${asPath === item.value ? 'active' : ''}`}>
                        <Link href={item.value} draggable={false}>
                            {t(item.name)}
                        </Link>
                    </div>
                ))}
            </S.Content>
        </S.Component>
    );
};

export default Itens;
