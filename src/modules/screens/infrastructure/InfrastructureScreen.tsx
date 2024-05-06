// Styles
import * as S from './Infrastructure.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Support } from 'components/support';

const InfrastructureScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            CONHEÇA NOSSA
            <span>INFRAESTRUTURA</span>
          </S.Title>
        </S.Hero>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_10feacdced1f4e468ddef7d53e6004fc/1080p/mp4/file.mp4"
          />
        </div>
        <div id="image_container">
          <div className="bg" />
        </div>
      </S.Content>
      <Support />
    </S.Container>
  );
};

export default InfrastructureScreen;
