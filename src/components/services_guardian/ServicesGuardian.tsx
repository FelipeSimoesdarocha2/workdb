// Styles
import * as S from './ServicesGuardian.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

// Constants
import { services } from './ServicesGuardian.constants';

const ServicesGuardian = () => {
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
                                            /(ininterrupto |críticos instantaneamente|análises detalhadas|seu ambiente|400 ambientes monitorados)/g,
                                            '<strong>$1</strong>'
                                        ),
                                    }}
                                />
                            </S.Typography>
                        </S.Card>
                    ))}
                </S.Content>
                <ToLink href={'/contact'} label={'fale conosco'} className='btn' />
            </S.Container>
            <div id="image_container">
                <div className="bg" />
            </div>
        </S.Component>
    );
};

export default ServicesGuardian;
