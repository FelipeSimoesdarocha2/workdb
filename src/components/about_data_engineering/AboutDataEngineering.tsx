// Next
import Image from 'next/image';

// Assets
import handsome_man from 'assets/pages/dataEngineering/handsome_man.webp';

// Styles
import * as S from './AboutDataEngineering.styles';

// i18n
import useTranslations from 'i18n';

const AboutDataEngineering = () => {
    const t = useTranslations();

    const paragraph =
        'Num ambiente empresarial dinâmico, a eficácia organizacional e a facilidade de acesso às ferramentas adequadas podem ser determinantes. A WorkDB atua como seu aliado nesse processo, aprimorando sua rotina e impulsionando a produtividade a níveis inéditos.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>
                        Ferramentas <strong>versáteis adaptáveis</strong> às necessidades da sua empresa,
                        <strong> OTIMIZANDO A EFICÊNCIA OPERACIONAL.</strong>
                    </h1>

                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(
                                /(dinâmico|WorkDB|seu aliado|impulsionando|produtividade|inéditos)/g,
                                '<strong>$1</strong>'
                            ),
                        }}
                    />
                </S.Typography>
            </S.Container>
            <S.Container_Image>
                <Image src={handsome_man} alt="handsome_man" />
            </S.Container_Image>
        </S.Component>
    );
};

export default AboutDataEngineering;
