// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import exit from 'assets/icons/exit.svg';

// Styles
import * as S from './CookieModal.styles';

// i18n
import { CookieModalProps } from './models';

// i18n
import useTranslations from 'i18n';

const CookieModal = ({ CloseModal }: CookieModalProps) => {
  const [showCookie, setShowCookie] = useState(false);

  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Title>Configurações avançadas de cookies</S.Title>
          <button onClick={CloseModal} className="exit">
            <Image src={exit} alt="exit" draggable="false" />
          </button>
        </S.Header>
        <S.Content></S.Content>
      </S.Container>
    </S.Component>
  );
};

export default CookieModal;
