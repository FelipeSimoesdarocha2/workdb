// Styles
import * as S from './Services.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { services } from './Services.constants';

const Services = () => {
    const t = useTranslations();

    return (
        <S.Component>
            <S.Container>
                <S.Title>Nossos Serviços Principais</S.Title>
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

export default Services;
