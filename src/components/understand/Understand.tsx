// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import handsome_man from 'assets/pages/solutions/handsome_man.webp';

// Styles
import * as S from './Understand.styles';

// i18n
import useTranslations from 'i18n';

const Understand = () => {
    const t = useTranslations();

    const paragraph =
        'Em um mundo cada vez mais digital, a tecnologia é o diferencial competitivo que impulsiona a excelência operacional. Com uma equipe altamente qualificada,  detentora de certificações em diversas tecnologias e metodologias, a WorkDB se posiciona como um parceiro estratégico na transformação digital de sua empresa. Nossa missão é fornecer soluções que não apenas resolvam problemas imediatos, mas que também sejam escaláveis e sustentáveis a longo prazo.';
    const paragraph_two = 'A WorkDB oferece um portfólio abrangente de soluções em:';

    return (
        <S.Component>
            <S.Container>
                <S.Container_Image>
                    <Image src={bg_hero} alt="bg_hero" draggable="false" className="bg_hero" />
                    <Image src={handsome_man} alt="handsome_man" draggable="false" className="handsome_man" />
                </S.Container_Image>
                <S.Typography>
                    <h1>Entenda</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(
                                /(impulsiona a excelência operacional|WorkDB|estratégico|transformação digital|resolvam problemas imediatos|escaláveis|sustentáveis)/g,
                                '<strong>$1</strong>'
                            ),
                        }}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph_two.replace(/(WorkDB|abrangente )/g, '<strong>$1</strong>'),
                        }}
                    />
                </S.Typography>
            </S.Container>
        </S.Component>
    );
};

export default Understand;
