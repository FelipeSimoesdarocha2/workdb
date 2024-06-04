// Next
import Image from 'next/image';

// Assets
import handsome_man from 'assets/pages/guardian/handsome_man.webp';

// Styles
import * as S from './AboutGuardian.styles';

// i18n
import useTranslations from 'i18n';

const AboutGuardian = () => {
    const t = useTranslations();

    const paragraph =
        'O Guardião não é apenas uma ferramenta, mas uma solução completa que se adapta às necessidades específicas da sua operação. Com mais de 700 clientes atendidos, a WorkDB monitora e traz os melhores insights na palma da sua mão.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>
                        Por que devo escolher o <strong>GUARDIÃO</strong>?
                    </h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(
                                /(Guardião|solução completa|700 clientes atendidos|WorkDB|insights)/g,
                                '<strong>$1</strong>'
                            ),
                        }}
                    />
                    <h1>
                        Escolha o <strong>GUARDIÃO</strong> para <strong>sua empresa</strong>!
                    </h1>
                </S.Typography>
            </S.Container>
            <S.Container_Image>
                <Image src={handsome_man} alt="handsome_man" />
            </S.Container_Image>
        </S.Component>
    );
};

export default AboutGuardian;
