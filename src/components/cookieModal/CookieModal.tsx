// Next
import Image from 'next/image';

// Assets
import exit from 'assets/icons/exit.svg';

// Styles
import * as S from './CookieModal.styles';

// i18n
import { CookieModalProps } from './models';

// i18n
import useTranslations from 'i18n';

// Constants
import { cookieOptions } from './CookieModal.constants';

const CookieModal = ({ CloseModal }: CookieModalProps) => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Header>
          <S.Info>
            <S.Title>Configurações avançadas de cookies</S.Title>
            <S.Sub_Title>
              Esses cookies permitem funcionalidades essenciais, tais como segurança, verificação de identidade e
              gerenciamento de rede. Esses cookies não podem ser desativados.
            </S.Sub_Title>
          </S.Info>

          <button onClick={CloseModal} className="exit">
            <Image src={exit} alt="exit" draggable="false" />
          </button>
        </S.Header>
        <S.Content>
          {cookieOptions.map((item, index) => (
            <S.Item key={index}>
              <S.Typography>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </S.Typography>
            </S.Item>
          ))}
        </S.Content>
        <S.Footer>
          <button onClick={CloseModal} className="exit">
            <p>Salvar</p>
          </button>
        </S.Footer>
      </S.Container>
    </S.Component>
  );
};

export default CookieModal;
