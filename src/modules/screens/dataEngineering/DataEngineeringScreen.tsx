// Styles
import * as S from './DataEngineering.styles';

// i18n
import useTranslations from 'i18n';

const DataEngineeringScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            ENGENHARIA DE
            <span>DADOS</span>
          </S.Title>
        </S.Hero>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_edf7139cd7854e50a67e824e22586d1c/1080p/mp4/file.mp4"
          />
        </div>
      </S.Content>
    </S.Container>
  );
};

export default DataEngineeringScreen;
