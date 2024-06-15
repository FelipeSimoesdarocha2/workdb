// Styles
import * as S from './Trajectory.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { trajectory } from './Trajectory.constants';

const Trajectory = () => {
  const t = useTranslations();

  const paragraph =
    'Nós acreditamos que a integração de soluções digitais é a evolução natural dos negócios. Compartilhamos nossa visão de jornada em 06 estágios distintos:';

  return (
    <S.Component>
      <S.Container>
        <S.Typography>
          <h1>Uma trajetória abrangente em direção à nuvem</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/(evolução )/g, '<strong>$1</strong>'),
            }}
          />
        </S.Typography>
        <S.Content>
          {trajectory.map((item, index) => (
            <S.Card key={index}>
              <S.Col>
                <span>
                  <h2>{item.value}</h2>
                </span>
                <h1>{item.title}</h1>
              </S.Col>
              <p>{item.description}</p>
            </S.Card>
          ))}
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default Trajectory;
