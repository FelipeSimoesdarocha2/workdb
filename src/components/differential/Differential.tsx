// Next
import Image from 'next/image';

// Styles
import * as S from './Differential.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { differential } from './Differential.constants';

const Differential = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <h1>Benefícios e Diferenciais</h1>
        <S.Itens>
          {differential.map((item, index) => (
            <S.Item key={index}>
              <S.Wrapper>
                <Image src={item.src} alt={item.title} draggable="false" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </S.Wrapper>
            </S.Item>
          ))}
        </S.Itens>
      </S.Container>
    </S.Component>
  );
};

export default Differential;
