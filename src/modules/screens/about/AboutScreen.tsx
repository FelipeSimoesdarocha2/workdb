// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import portrait from 'assets/pages/about/portrait.webp';

// Styles
import * as S from './About.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Characteristics } from 'components/characteristics';
import { Experience } from 'components/experience';
import { Foundation } from 'components/foundation';
import { ToLink } from 'components/link';
import { Partners } from 'components/partners';
import { Principles } from 'components/principles';

const AboutScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Hero>
        <S.Title>
          <h1>
            QUEM
            <br />
            <span>SOMOS</span>
          </h1>
        </S.Title>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_4340bbcd93f14d92b07da0b006fc5f43/1080p/mp4/file.mp4"
          />
        </div>
      </S.Hero>
      <Foundation />
      <Experience />
      <Characteristics />
      <Principles />
      <Partners />
      <S.Contact>
        <S.Container_Image id='img'>
          <div>
            <Image src={bg_hero} alt="banner_hero" draggable="false" />
            <Image src={portrait} alt="banner_hero" draggable="false" />
          </div>
        </S.Container_Image>
        <S.Content>
          <S.Typography>
            <h1>
              FICOU
              <span>INTERESSADO</span>
            </h1>
            <p>Junte-se a nós nessa jornada rumo aos melhores resultados para sua operação.</p>
          </S.Typography>
          <ToLink href={'/contact'} label={'fale conosco'} />
        </S.Content>
      </S.Contact>
    </S.Container>
  );
};

export default AboutScreen;
