// Next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// React
import { useState, useEffect, useCallback } from 'react';

// Assets
import arrow_color from 'assets/icons/arrow_color.svg';

// Styles
import * as S from './Itens.styles';

// Models
import { MenuItemProps } from './models';

// i18n
import useTranslations from 'i18n';

const Itens = ({ name, data, push, keye, menuItemKey }: MenuItemProps) => {
    const t = useTranslations();
    const { asPath } = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 560 ?? false);
    }, [setIsMobile]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.Component className={`${keye === menuItemKey ? 'active' : ''}`}>
            {isMobile ? (
                <button onClick={handleToggle} className={'openBtn' + ' ' + `${isOpen ? 'open' : 'close'}`}>
                    <span />
                    <p>{t(name)}</p>
                    <Image src={arrow_color} alt="arrow" />
                </button>
            ) : (
                <Link href={push || ''} draggable={false}>
                    {t(name)}
                </Link>
            )}
            {(!isMobile || isOpen) && (
                <S.Content id="sub_menu" className={`${keye === menuItemKey ? 'active' : ''}`}>
                    {data.map((item, index) => (
                        <div key={index} className={'item' + ' ' + `${asPath === item.value ? 'active' : ''}`}>
                            <Link href={item.value} draggable={false}>
                                {t(item.name)}
                            </Link>
                        </div>
                    ))}
                </S.Content>
            )}
        </S.Component>
    );
};

export default Itens;
