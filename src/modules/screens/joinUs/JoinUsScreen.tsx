// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import banner_hero from 'assets/pages/joinUs/banner_hero.webp';

// Styles
import * as S from './JoinUs.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Differential } from 'components/differential';
import { Opportunities } from 'components/opportunities';
import { Startup } from 'components/startup';

const JoinUsScreen = () => {
  const t = useTranslations();

  const paragraph = 'Faça parte da WorkDB e seja um protagonista na transformação tecnológica ao nosso lado!';

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <h1>
            TRABALHE
            <span>CONOSCO</span>
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/(WorkDB|transformação|tecnológica)/g, '<strong>$1</strong>'),
            }}
          />
        </S.Typography>
        <S.Container_Image>
          <Image src={bg_hero} alt="bg_hero" draggable="false" />
          <Image src={banner_hero} alt="banner_hero" draggable="false" />
        </S.Container_Image>
        <div id="image_container">
          <div className="bg" />
        </div>
      </S.Content>
      <Startup />
      <Opportunities />
      <Differential />
    </S.Container>
  );
};

export default JoinUsScreen;
