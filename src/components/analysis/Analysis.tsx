// Styles
import * as S from './Analysis.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { analysis } from './Analysis.constants';

const Analysis = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Title>Análise de Dados e Inteligência de Negócios</S.Title>
                <S.Content>
                    {analysis.map((item, index) => (
                        <S.Card key={index}>
                            <S.Typography>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </S.Typography>
                        </S.Card>
                    ))}
                </S.Content>
            </S.Container>
            <div id="image_container">
                <div className="bg" />
            </div>
        </S.Component>
    );
};

export default Analysis;
