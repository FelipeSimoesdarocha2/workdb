// Styles
import * as S from './MainServices.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { services } from './MainServices.constants';

const MainServices = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Content>
                    {services.map((item, index) => (
                        <S.Card key={index}>
                            <S.Typography>
                                <h1>{item.title}</h1>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.description.replace(
                                            /(virtualização|computação|nuvem|AWS|Azure|WorkDataCloud|eficientes|seguras|Hardware|Software|sistemas|aplicações|infraestrutura de TI)/g,
                                            '<strong>$1</strong>'
                                        ),
                                    }}
                                />
                            </S.Typography>
                            <ul>
                                {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem.name}</li>
                                ))}
                            </ul>
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

export default MainServices;
