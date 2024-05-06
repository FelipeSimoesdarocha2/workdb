// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import opportunities from 'assets/pages/joinUs/opportunities.webp';

// Styles
import * as S from './Opportunities.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const Opportunities = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Container_Image id="img">
          <div>
            <Image src={bg_hero} alt="banner_hero" draggable="false" />
            <Image src={opportunities} alt="banner_hero" draggable="false" />
          </div>
        </S.Container_Image>
        <S.Content>
          <S.Title>
            <h1>
              Veja as oportunidades disponíveis aqui na <span> WorkDB</span>!
            </h1>
          </S.Title>
          <S.Typography>
            <p>
              Não encontrou nenhuma vaga? Envie seu currículo para
              <Link href={'mailto:recrutamento@workdb.com.br'} draggable="false">
                recrutamento@workdb.com.br
              </Link>
              ou se cadastre em nosso banco de talentos.
            </p>
            <p>Sua oportunidade pode estar mais próxima do que você imagina!</p>
          </S.Typography>
          <ToLink href={'/contact'} label={'Entre em contato'} />
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default Opportunities;
