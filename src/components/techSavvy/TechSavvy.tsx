// Next
import Image from 'next/image';

// Assets
import handsome_man from 'assets/pages/dataEngineering/isolated_gear.webp';

// Styles
import * as S from './TechSavvy.styles';

// i18n
import useTranslations from 'i18n';

const TechSavvy = () => {
    const t = useTranslations();

    const paragraph =
        'Nossa equipe altamente qualificada adota as últimas tendências e ferramentas tecnológicas. Com proficiência em várias linguagens, frameworks e plataformas, estamos comprometidos em fornecer soluções inovadoras e orientar você nas decisões cruciais durante o desenvolvimento do seu produto. Conte conosco para criar o seu produto com tecnologia de ponta. Juntos, alcançaremos resultados excepcionais!';

    return (
        <S.Component>
            <S.Container>
                <Image src={handsome_man} alt="handsome_man" />
                <S.Typography>
                    <h1>
                        Estamos por dentro das <strong>TECNOLOGIAS</strong>
                    </h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(
                                /(altamente qualificada|linguagens|frameworks e plataformas|seu produto|excepcionais)/g,
                                '<strong>$1</strong>'
                            ),
                        }}
                    />
                </S.Typography>
            </S.Container>
        </S.Component>
    );
};

export default TechSavvy;
