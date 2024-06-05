// Next
import Image from 'next/image';

// Assets
import software_factory from 'assets/pages/solutions/software_factory.webp';

// Styles
import * as S from './SoftwareFactory.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const SoftwareFactory = () => {
    const t = useTranslations();

    const paragraph =
        'Implemente soluções precisas com um time de especialistas. Asseguramos entregas rápidas e qualificadas.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>Fábrica de Software</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(especialistas|rápidas|qualificadas)/g, '<strong>$1</strong>'),
                        }}
                    />
                    <div className="action">
                        <ToLink href={'/solutions/software-factory'} label={'saiba mais'} className="btn" />
                    </div>
                </S.Typography>
                <Image src={software_factory} alt="software_factory" />
            </S.Container>
        </S.Component>
    );
};

export default SoftwareFactory;
