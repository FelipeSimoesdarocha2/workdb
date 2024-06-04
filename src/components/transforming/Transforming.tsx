// Styles
import * as S from './Transforming.styles';

// i18n
import useTranslations from 'i18n';

const Transforming = () => {
    const t = useTranslations();

    const paragraph =
        'A Engenharia de Dados tornou-se um pilar fundamental para empresas que buscam não apenas sobreviver, mas prosperar na economia digital. Sua aplicação estratégica permite a transformação de dados brutos em informações acionáveis, fornecendo a base para análises avançadas, inteligência artificial e tomada de decisão orientada por dados.';
    const paragraph_two =
        'Na WorkDB, nossa equipe de especialistas altamente qualificada e certificada nas principais tecnologias do mundo, está pronta para ajudá-lo a implementar soluções de Engenharia de Dados que irão alavancar sua operação e fornecer vantagens competitivas sustentáveis.    ';

    return (
        <S.Component>
            <S.Container>
                <S.Title>Transformando Informações em Ativos Estratégicos</S.Title>
                <S.Content>
                    <S.Typography>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph.replace(/(fundamental|prosperar|análises avançadas, inteligência artificial|decisão orientada)/g, '<strong>$1</strong>'),
                            }}
                        />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph_two.replace(
                                    /(WorkDB|qualificada|certificada|Engenharia de Dados|alavancar|competitivas sustentáveis.)/g,
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

export default Transforming;
