// Next
import Image from 'next/image';

// Styles
import * as S from './Partners.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { partners } from './Partners.constants';

const Partners = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Typography>
          <h1>
            PARCEIROS <br />
            <span>CERTIFICADOS</span>
          </h1>
        </S.Typography>
        <S.Content>
          <S.Itens>
            {partners.map((item, index) => (
              <S.Item key={index}>
                <S.Container_Image>
                  <Image src={item.image.src} alt={item.image.alt} />
                </S.Container_Image>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description.replace(
                      /(AWS|escaláveis|seguros|Segurança|Tecnologia em Nuvem|todas as linguagens de programação|Elastic|tempo real|Engenharia de Dados|Azure e Microsoft 365|colaboração)/g,
                      '<strong>$1</strong>'
                    ),
                  }}
                />
              </S.Item>
            ))}
          </S.Itens>
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default Partners;
