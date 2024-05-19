// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import banner_hero from 'assets/pages/cloud/banner_hero.webp';

// Styles
import * as S from './Solutions.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const Solutions = () => {
  const t = useTranslations();

  const paragraph =
    'Nossa missão é fornecer soluções abrangentes e personalizadas, projetadas para impulsionar transformações em todos os estágios de maturidade digital, desde as bases até o mais alto nível de sofisticação tecnológica.';

  return (
    <S.Component>
      <S.Container>
        <S.Content>
          <S.Typography>
            <h1>Possuímos expertise em soluções em nuvem</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(
                  /(soluções abrangentes|personalizadas|maturidade digital|tecnológica)/g,
                  '<strong>$1</strong>'
                ),
              }}
            />
          </S.Typography>
          <ToLink href={'/contact'} label={'FALE COM UM ESPECIALISTA MULTICLOUD'} className="action" />
        </S.Content>
        <S.Container_Image>
          <Image src={bg_hero} alt="" draggable="false" />
          <Image src={banner_hero} alt="" draggable="false" />
        </S.Container_Image>
      </S.Container>
    </S.Component>
  );
};

export default Solutions;
