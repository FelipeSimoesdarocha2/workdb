// React
import { useState, useEffect, useCallback } from 'react';

// Styles
import * as S from './Download.styles';

// i18n
import useTranslations from 'i18n';

import { ToLink } from 'components/link';

const Download = () => {
    const t = useTranslations();

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 560 ?? false);
    }, [setIsMobile]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <S.Container>
            <S.Content>
                <S.Inner>
                    <S.Typography>
                        <h1>Transfira de forma segura e eficiente sistemas críticos para a computação em nuvem</h1>
                        <p>Assegure a segurança e confiabilidade operacional de seus dados através de padrões elevados.</p>
                    </S.Typography>
                    <div className="action">
                        <ToLink
                            href={'/solutions/data-engineering'}
                            label={
                                !isMobile ? ' Descubra os benefícios ao migrar para a computação em nuvem' : 'Descubra os benefícios'
                            }
                            className="btn"
                        />
                    </div>
                </S.Inner>
                <S.List>
                    <S.Item>
                        <p>Garantia de backup e segurança.</p>
                    </S.Item>
                    <S.Item>
                        <p>Elimine os custos de manutenção de hardware.</p>
                    </S.Item>
                    <S.Item>
                        <p>Aumente a escala de forma imediata.</p>
                    </S.Item>
                    <S.Item>
                        <p>Pague somente pelos recursos utilizados.</p>
                    </S.Item>
                    <S.Item>
                        <p>Inclui licenças de banco de dados (BD) e sistema operacional (SO).</p>
                    </S.Item>
                    <S.Item>
                        <p>Economize até 80% nos custos totais de propriedade (TCO). .</p>
                    </S.Item>
                    <S.Item>
                        <p>Consolide suas informações em um único sistema.</p>
                    </S.Item>
                </S.List>
            </S.Content>
            <div id="image_container">
                <div className="bg" />
            </div>
        </S.Container>
    );
};

export default Download;
