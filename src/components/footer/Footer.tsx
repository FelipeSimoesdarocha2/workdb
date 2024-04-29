// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import instagram from 'assets/components/instagram.png';
import linkedin from 'assets/components/linkedin.webp';
import logo from 'assets/components/logo.png';
import youtube from 'assets/components/youtube.png';

// Styles
import * as S from './Footer.styles';

const Footer = () => {
    return (
        <S.Component>
            <S.Content>
                <S.Wrraper>
                    <S.Social>
                        <Link title="ir para pagina inicial" href="/" draggable="false">
                            <Image src={logo} alt="logo" draggable={'false'} priority />
                        </Link>
                        <S.Network>
                            <Link
                                title="linkedin"
                                target="_blank"
                                draggable="false"
                                href="https://br.linkedin.com/company/workdbdatabusiness"
                            >
                                <Image src={linkedin} alt="logo" draggable={'false'} />
                            </Link>
                            <Link
                                title="instagram"
                                target="_blank"
                                draggable="false"
                                href="https://www.instagram.com/workdbdatabusiness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                            >
                                <Image src={instagram} alt="logo" draggable={'false'} />
                            </Link>
                            <Link
                                title="youtube"
                                target="_blank"
                                draggable="false"
                                href="https://www.youtube.com/@workdbdatabusiness6213/featured"
                            >
                                <Image src={youtube} alt="logo" draggable={'false'} />
                            </Link>
                        </S.Network>
                    </S.Social>
                    <S.Pages>
                        <S.Col>
                            <p>Página Inicial</p>
                            <p> Quem Somos</p>
                            <p>Gestão de Pessoas</p>
                            <p>Contato</p>
                            <p>Cloud</p>
                        </S.Col>
                        <S.Col>
                            <p>Engenharia de Dados</p>
                            <p>Fábrica de Software</p>
                            <p>Guardião</p>
                            <p>Infraestrutura</p>
                        </S.Col>
                    </S.Pages>
                </S.Wrraper>
            </S.Content>
        </S.Component>
    );
};

export default Footer;
