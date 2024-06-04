// Styles
import * as S from './Development.styles';

// i18n
import useTranslations from 'i18n';

const Development = () => {
    const t = useTranslations();

    const paragraph =
        'Na WorkDB, uma de nossas especialidades é fornecer soluções com código que se integram perfeitamente aos seus processos empresariais. Nossa abordagem flexível permite a criação de aplicações que fazem parte de um ecossistema tecnológico mais amplo ou mesmo aplicativos standalone.';
    const paragraph_two =
        'Entregamos soluções em qualquer linguagem de programação e para qualquer plataforma. Nossa equipe possui mais de 80 certificações das principais tecnologias do mundo. Esse nível de expertise nos permite oferecer soluções não apenas inovadoras, mas também confiáveis e seguras.';

    return (
        <S.Component>
            <S.Container>
                <S.Title>Desenvolvimento de Software sob medida para potencializar seu negócio.</S.Title>
                <S.Content>
                    <S.Typography>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph.replace(/(WorkDB|perfeitamente|ecossistema|tecnológico)/g, '<strong>$1</strong>'),
                            }}
                        />

                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph_two.replace(
                                    /(qualquer linguagem de programação|80 certificações|principais tecnologias|confiáveis e seguras)/g,
                                    '<strong>$1</strong>'
                                ),
                            }}
                        />
                    </S.Typography>
                </S.Content>
            </S.Container>
        </S.Component>
    );
};

export default Development;
