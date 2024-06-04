// Styles
import * as S from './DataEngineering.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { AboutDataEngineering } from 'components/about_data_engineering';
import { Analysis } from 'components/analysis';
import { Innovate } from 'components/innovate';
import { Performance } from 'components/performance';
import { Storage } from 'components/storage';
import { TechSavvy } from 'components/techSavvy';
import { Traceability } from 'components/traceability';
import { Transforming } from 'components/transforming';

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
        <div id="image_container">
          <div className="bgs" />
        </div>
      </S.Content>
      <Transforming />
      <Performance />
      <AboutDataEngineering />
      <Analysis />
      <TechSavvy />
      <Storage />
      <Innovate />
      <Traceability />
    </S.Container>
  );
};

export default DataEngineeringScreen;
