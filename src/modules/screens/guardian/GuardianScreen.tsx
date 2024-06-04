// Styles
import * as S from './Guardian.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { AboutGuardian } from 'components/about_guardian';
import { Monitoring } from 'components/monitoring';
import { ServicesGuardian } from 'components/services_guardian';

const GuardianScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            CONHEÇA O<span>GUARDIÃO</span>
          </S.Title>
        </S.Hero>
        <div id="image_container">
          <div className="bg" />
        </div>
      </S.Content>
      <Monitoring />
      <ServicesGuardian />
      <AboutGuardian />
    </S.Container>
  );
};

export default GuardianScreen;
