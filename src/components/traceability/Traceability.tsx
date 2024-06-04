// Styles
import * as S from './Traceability.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { traceability } from './Traceability.constants';

const Traceability = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Title>Rastreabilidade e Conformidade</S.Title>
                <S.Content>
                    {traceability.map((item, index) => (
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

export default Traceability;
