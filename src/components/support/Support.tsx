// Styles
import * as S from './Support.styles';

// i18n
import useTranslations from 'i18n';

const Support = () => {
    const t = useTranslations();

    const paragraph =
        'Na WorkDB, entendemos que uma infraestrutura de TI robusta e eficiente é o principal pilar de qualquer operação empresarial bem-sucedida. Nossa expertise abrange desde a virtualização de servidores até a otimização do bancos de dados, garantindo que sua empresa opere com máxima eficiência e segurança.';

    return (
        <S.Component>
            <S.Container>
                <S.Title>Sustentação e Otimização para o Ambiente Tecnológico</S.Title>
                <S.Content>
                    <S.Typography>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: paragraph.replace(
                                    /(WorkDB|robusta|eficiente|bem-sucedida|virtualização|bancos de dados|máxima eficiência e segurança)/g,
                                    '<strong>$1</strong>'
                                ),
                            }}
                        />
                    </S.Typography>
                </S.Content>
            </S.Container>
            <div id="image_container">
                <div className="bg" />
            </div>
        </S.Component>
    );
};

export default Support;
