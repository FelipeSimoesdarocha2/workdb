// Styles
import * as S from './Guardian.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Monitoring } from 'components/monitoring';

const GuardianScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            CONHEÇA O
            <span>GUARDIÃO</span>
          </S.Title>
        </S.Hero>
        <div id="image_container">
          <div className="bg" />
        </div>
      </S.Content>
      <Monitoring />
    </S.Container>
  );
};

export default GuardianScreen;
