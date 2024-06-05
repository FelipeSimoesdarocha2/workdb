// Next
import Image from 'next/image';

// Assets
import infrastructure from 'assets/pages/solutions/infrastructure.webp';

// Styles
import * as S from './Infrastructure.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const Infrastructure = () => {
    const t = useTranslations();

    const paragraph =
        'Estruture operações de TI ágeis, resilientes e escaláveis. Implantamos ambientes on-premise ou cloud.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>Infraestrutura</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(especialistas|rápidas|qualificadas)/g, '<strong>$1</strong>'),
                        }}
                    />
                    <div className="action">
                        <ToLink href={'/solutions/infrastructure'} label={'saiba mais'} className="btn" />
                    </div>
                </S.Typography>
                <Image src={infrastructure} alt="infrastructure" />
            </S.Container>
        </S.Component>
    );
};

export default Infrastructure;
