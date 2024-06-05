// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import banner_hero from 'assets/pages/solutions/banner_hero.webp';

// Styles
import * as S from './Solutions.styles';

// i18n
import useTranslations from 'i18n';

import { Cloud } from 'components/cloud';
import { DataEngineering } from 'components/dataEngineering';
import { Guardian } from 'components/guardian';
import { Infrastructure } from 'components/infrastructure';
import { ToLink } from 'components/link';
import { SoftwareFactory } from 'components/software_factory';
import { Understand } from 'components/understand';

const SolutionsScreen = () => {
  const t = useTranslations();

  const title = 'Conheça nossas SOLUÇÕES ';
  const paragraph = 'Criamos seu Software Personalizado do zero, de acordo com as necessidades da sua empresa!';

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <h1
            dangerouslySetInnerHTML={{
              __html: title.replace(/(SOLUÇÕES)/g, '<strong>$1</strong>'),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(
                /(Software Personalizado|necessidades da sua empresa!)/g,
                '<strong>$1</strong>'
              ),
            }}
          />
          <ToLink href={'/contact'} label={'SOLICITE UM ORÇAMENTO'} className="btn" />
        </S.Typography>
        <S.Container_Image>
          <div className="wrapper_btn">
            <ToLink href={'/contact'} label={'SOLICITE UM ORÇAMENTO'} className="btn" />
          </div>
          <Image src={bg_hero} alt="bg_hero" draggable="false" className="bg_hero" />
          <Image src={banner_hero} alt="banner_hero" draggable="false" className="banner_hero" />
        </S.Container_Image>
      </S.Content>
      <Understand />
      <Cloud />
      <DataEngineering />
      <SoftwareFactory />
      <Guardian />
      <Infrastructure />
    </S.Container>
  );
};

export default SolutionsScreen;
