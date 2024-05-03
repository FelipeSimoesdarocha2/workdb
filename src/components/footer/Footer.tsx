// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import chat from 'assets/components/chat.png';
import logo from 'assets/components/logo.png';
import instagram from 'assets/icons/instagram.svg';
import linkedin from 'assets/icons/linkedin.svg';
import youtube from 'assets/icons/youtube.svg';

// Styles
import * as S from './Footer.styles';

// i18n
import useTranslation from 'i18n';

const Footer = () => {
    const t = useTranslation();

    return (
        <S.Component>
            <S.Content>
                <S.Wrraper>
                    <S.Social>
                        <Link title="ir para pagina inicial" href="/" draggable="false">
                            <Image src={logo} alt="logo" draggable="false" priority />
                        </Link>
                        <S.Network>
                            <Link
                                title="linkedin"
                                target="_blank"
                                draggable="false"
                                href="https://br.linkedin.com/company/workdbdatabusiness"
                            >
                                <Image src={linkedin} alt="logo" draggable="false" />
                            </Link>
                            <Link
                                title="instagram"
                                target="_blank"
                                draggable="false"
                                href="https://www.instagram.com/workdbdatabusiness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                            >
                                <Image src={instagram} alt="logo" draggable="false" />
                            </Link>
                            <Link
                                title="youtube"
                                target="_blank"
                                draggable="false"
                                href="https://www.youtube.com/@workdbdatabusiness6213/featured"
                            >
                                <Image src={youtube} alt="logo" draggable="false" />
                            </Link>
                        </S.Network>
                    </S.Social>
                    <S.Pages>
                        <S.Col>
                            <Link href="/" title={`${t('accessibility.go')}` + ' ' + `${t('menu.home')}`} draggable="false">
                                <p>{t('menu.home')}</p>
                            </Link>
                            <Link href="/about" title={`${t('accessibility.go')}` + ' ' + `${t('menu.about')}`} draggable="false">
                                <p>{t('menu.about')}</p>
                            </Link>
                            <Link
                                href="/join-us"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.people_management')}`}
                                draggable="false"
                            >
                                <p>{t('menu.people_management')}</p>
                            </Link>
                            <Link href="/contact" title={`${t('accessibility.go')}` + ' ' + `${t('menu.contact')}`} draggable="false">
                                <p>{t('menu.contact')}</p>
                            </Link>
                            <Link
                                href="/solutions/cloud"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.cloud')}`}
                                draggable="false"
                            >
                                <p>{t('menu.cloud')}</p>
                            </Link>
                        </S.Col>
                        <S.Col>
                            <Link
                                href="/solutions/data-engineering"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.data_engineering')}`}
                                draggable="false"
                            >
                                <p>{t('menu.data_engineering')}</p>
                            </Link>
                            <Link
                                href="/solutions/software-factory"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.software_factory')}`}
                                draggable="false"
                            >
                                <p>{t('menu.software_factory')}</p>
                            </Link>
                            <Link
                                href="/solutions/guardian"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.guardian')}`}
                                draggable="false"
                            >
                                <p>{t('menu.guardian')}</p>
                            </Link>
                            <Link
                                href="/solutions/infrastructure"
                                title={`${t('accessibility.go')}` + ' ' + `${t('menu.infrastructure')}`}
                                draggable="false"
                            >
                                <p>{t('menu.infrastructure')}</p>
                            </Link>
                        </S.Col>
                    </S.Pages>
                </S.Wrraper>
                <S.About>
                    <S.Row>
                        <S.Typography>
                            <S.Title>
                                <h2>{t('footer.speak')}</h2>
                                <h1>{t('footer.with_us')}</h1>
                            </S.Title>
                            <Image src={chat} alt="chat" draggable="false" />
                        </S.Typography>
                        <S.Action>
                            <Link href={'/contact'} draggable="false">
                                {t('footer.talk_specialist')}
                            </Link>
                        </S.Action>
                    </S.Row>
                    <S.Local>
                        <Link
                            title={`${t('accessibility.go')}` + ' ' + `${t('menu.cloud')}`}
                            draggable="false"
                            href="/solutions/cloud"
                        >
                            <p>{t('footer.offices')}:</p>
                        </Link>
                        <S.Links>
                            <Link
                                title="Brasil"
                                target="_blank"
                                draggable="false"
                                href="https://www.google.com/maps/place/WorkDB+Data+Business/@-26.903228,-49.087639,16z/data=!4m6!3m5!1s0x94df1ece369f1ec5:0x8c82f6412dc8dded!8m2!3d-26.9032281!4d-49.0876395!16s%2Fg%2F1q64d1zd6?hl=pt-BR&entry=ttu"
                            >
                                {t('country.brazil')}
                            </Link>
                            <span>|</span>
                            <Link
                                title="Alemanha"
                                target="_blank"
                                draggable="false"
                                href="https://www.google.com/maps/place/Im+Mediapark+5,+50670+K%C3%B6ln,+Alemanha/@50.948804,6.944694,17z/data=!4m6!3m5!1s0x47bf250a41e2633f:0x5095c0dea6c05148!8m2!3d50.9488039!4d6.9446938!16s%2Fg%2F11cs72v9rb?hl=pt-BR&entry=ttu"
                            >
                                {t('country.germany')}
                            </Link>
                            <span>|</span>
                            <Link
                                title="México"
                                target="_blank"
                                draggable="false"
                                href="https://www.google.com/maps/place/Av.+Insurgentes+Sur+674-PISO+4+INT.+A,+Col+del+Valle+Nte,+Benito+Ju%C3%A1rez,+03103+Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.395428,-99.171535,16z/data=!4m5!3m4!1s0x85d1ff7230ae326f:0xbbecdbc52efcb342!8m2!3d19.3954284!4d-99.1715354?hl=pt-BR&entry=ttu"
                            >
                                {t('country.mexico')}
                            </Link>
                        </S.Links>
                        <Link
                            title={`${t('accessibility.go')}` + ' ' + `${t('menu.data_engineering')}`}
                            draggable="false"
                            href="/privacy-policy"
                        >
                            <p>{t('menu.privacy_policy')}</p>
                        </Link>
                    </S.Local>
                </S.About>
            </S.Content>
        </S.Component>
    );
};

export default Footer;
