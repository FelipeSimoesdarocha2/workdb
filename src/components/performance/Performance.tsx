// Styles
import * as S from './Performance.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { performance } from './Performance.constants';

const Performance = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Title>Monitoramento e Desempenho</S.Title>
                <S.Content>
                    {performance.map((item, index) => (
                        <S.Card key={index}>
                            <S.Typography>
                                <h1>{item.title}</h1>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.description.replace(/(virtualioftware|)/g, '<strong>$1</strong>'),
                                    }}
                                />
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

export default Performance;
