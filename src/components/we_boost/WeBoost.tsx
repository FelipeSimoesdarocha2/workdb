// Next
import Image from 'next/image';

// Assets
import data_dog from 'assets/pages/dataEngineering/data_dog.webp';
import elastic from 'assets/pages/dataEngineering/elastic.webp';
import open_searsh from 'assets/pages/dataEngineering/open_searsh.webp';
import shared from 'assets/pages/dataEngineering/shared.webp';

// Styles
import * as S from './WeBoost.styles';

// i18n
import useTranslations from 'i18n';

const WeBoost = () => {
    const t = useTranslations();

    const title = 'Nós impulsionamos a transformação, conectando a tecnologia para criar um mundo melhor.';
    const paragraph =
        'Se enfrentar desafios na transição para a nuvem ou na transformação do seu negócio com tecnologia é sua meta, estamos prontos com a experiência necessária para oferecer o suporte que você precisa!';

    return (
        <S.Component>
            <S.Container>
                <S.Content>
                    <S.Typography>
                        <div className="wrapper">
                            <h1
                                dangerouslySetInnerHTML={{
                                    __html: title.replace(/(impulsionamos|mundo melhor)/g, '<strong>$1</strong>'),
                                }}
                            />
                            <Image src={shared} alt="shared" draggable="false" />
                        </div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph.replace(
                                    /(desafios |transformação|experiência|necessária|você precisa)/g,
                                    '<strong>$1</strong>'
                                ),
                            }}
                        />
                    </S.Typography>
                    <Image src={shared} alt="shared" draggable="false" className="no_mobile" />
                </S.Content>
                <S.Content_Images>
                    <Image src={data_dog} alt="data_dog" draggable="false" />
                    <Image src={elastic} alt="elastic" draggable="false" />
                    <Image src={open_searsh} alt="open_searsh" draggable="false" />
                </S.Content_Images>
            </S.Container>
        </S.Component>
    );
};

export default WeBoost;
