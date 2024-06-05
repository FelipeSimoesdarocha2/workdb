// Next
import Image from 'next/image';

// Assets
import cloud from 'assets/pages/solutions/cloud.webp';

// Styles
import * as S from './Cloud.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const Cloud = () => {
    const t = useTranslations();

    const paragraph =
        'Aprimore sua operação com nossa expertise em serviços de criação, migração, gestão e otimização na nuvem.';

    return (
        <S.Component>
            <S.Container>
                <S.Typography>
                    <h1>Cloud</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(expertise|criação|migração|gestão)/g, '<strong>$1</strong>'),
                        }}
                    />
                    <div className="action">
                        <ToLink href={'/solutions/cloud'} label={'saiba mais'} className="btn" />
                    </div>
                </S.Typography>
                <Image src={cloud} alt="cloud" />
            </S.Container>
        </S.Component>
    );
};

export default Cloud;
