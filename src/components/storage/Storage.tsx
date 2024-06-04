// Styles
import * as S from './Storage.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { storages } from './Storage.constants';

const Storage = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Title>Armazenamento e Gestão de Dados</S.Title>
                <S.Content>
                    {storages.map((item, index) => (
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

export default Storage;
