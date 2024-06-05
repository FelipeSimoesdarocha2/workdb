// Next
import Image from 'next/image';

// Assets
import data_engineering from 'assets/pages/solutions/data_engineering.webp';

// Styles
import * as S from './DataEngineering.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const DataEngineering = () => {
    const t = useTranslations();

    const paragraph =
        'Obtenha insights valiosos e dados relevantes. Desenvolvemos uma arquitetura de dados eficiente para você.';

    return (
        <S.Component>
            <S.Container>
                <Image src={data_engineering} alt="data_engineering" />
                <S.Typography>
                    <h1>Engenharia de Dados</h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/(valiosos|dados relevantes|eficiente)/g, '<strong>$1</strong>'),
                        }}
                    />
                    <div className="action">
                        <ToLink href={'/solutions/data-engineering'} label={'saiba mais'} className="btn" />
                    </div>
                </S.Typography>
            </S.Container>
        </S.Component>
    );
};

export default DataEngineering;
