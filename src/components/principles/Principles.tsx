// Styles
import * as S from './Principles.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { principles } from './Partners.constants';

const Principles = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Itens>
          {principles.map((item, index) => (
            <S.Item key={index}>
              <h1>{item.title}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(
                    /(escaláveis e seguras|eficiência operacional|cliente|global de tecnologia|inovadoras|eficientes|sucesso|clientes e parceiros)/g,
                    '<strong>$1</strong>'
                  ),
                }}
              />
            </S.Item>
          ))}
        </S.Itens>
      </S.Container>
      <div id="image_container">
        <div className="bg" />
      </div>
    </S.Component>
  );
};

export default Principles;
