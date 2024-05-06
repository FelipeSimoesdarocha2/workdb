// Styles
import * as S from './SoftwareFactory.styles';

// i18n
import useTranslations from 'i18n';

const SoftwareFactoryScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            FÁBRICA DE
            <span>SOFTWARE</span>
          </S.Title>
        </S.Hero>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_ed216ba09d284b8282a5720ffe3c5701/1080p/mp4/file.mp4"
          />
        </div>
      </S.Content>
    </S.Container>
  );
};

export default SoftwareFactoryScreen;
