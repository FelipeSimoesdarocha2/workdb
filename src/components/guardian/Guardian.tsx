// Next
import Image from 'next/image';

// Assets
import guardian from 'assets/pages/solutions/guardian.webp';

// Styles
import * as S from './Guardian.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const Guardian = () => {
    const t = useTranslations();

    const paragraph = 'Garanta monitoramento contínuo e obtenha insights em tempo real. O Guardião oferece acompanhamento 24/7 através de um dashboard intuitivo.'

    return (
        <S.Component>
            <S.Container>
                <Image src={guardian} alt="guardian" />
                <S.Typography>
                    <h1>Guardião</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(contínuo|tempo real|dashboard intuitivo)/g, '<strong>$1</strong>'),
                        }}
                    />
                    <div className="action">
                        <ToLink href={'/solutions/guardian'} label={'saiba mais'} className="btn" />
                    </div>
                </S.Typography>
            </S.Container>
        </S.Component>
    );
};

export default Guardian;
