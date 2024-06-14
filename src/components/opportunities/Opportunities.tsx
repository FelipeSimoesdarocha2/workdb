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
        <S.Container_Image>
          <Image src={bg_hero} alt="bg_hero" draggable="false" />
          <Image src={opportunities} alt="opportunities" draggable="false" className='opportunities' />
          <ToLink href={'/contact'} label={'Entre em contato'} className='contact_mobile' />
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
          <ToLink href={'/contact'} label={'Entre em contato'} className='contact_desktop' />
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default Opportunities;
