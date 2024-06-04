// Next
import Image from 'next/image';

// Assets
import innovate from 'assets/pages/dataEngineering/innovate.webp';

// Styles
import * as S from './Innovate.styles';

// i18n
import useTranslations from 'i18n';

const Innovate = () => {
    const t = useTranslations();

    const paragraph =
        'Transforme seu caminho com soluções digitais ágeis e eficazes, impulsionando a inovação em cada passo.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>
                        Inove com
                        <strong> soluções digitais </strong>
                        ágeis e eficientes
                    </h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(ágeis|eficazes|inovação)/g, '<strong>$1</strong>'),
                        }}
                    />
                </S.Typography>
            </S.Container>
            <S.Container_Image>
                <Image src={innovate} alt="innovate" />
            </S.Container_Image>
        </S.Component>
    );
};

export default Innovate;
