// Styles
import * as S from './Experience.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { experience } from './Experience.constants';

const Experience = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Title>
          <h2>
            WORKDB em <span>NÚMEROS</span>
          </h2>
        </S.Title>
        <S.Itens>
          {experience.map((item, index) => (
            <S.Item key={index}>
              <div>
                <span>+</span>
                <h1>{item.title}</h1>
              </div>
              <p>{item.description}</p>
            </S.Item>
          ))}
        </S.Itens>
        <div className="line_top_left" />
        <div className="line_left" />
        <div className="line_top_right" />
        <div className="line_right" />
      </S.Container>
    </S.Component>
  );
};

export default Experience;
