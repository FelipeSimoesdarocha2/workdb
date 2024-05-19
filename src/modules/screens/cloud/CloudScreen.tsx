// Next
import Image from 'next/image';
import Link from 'next/link';

// Styles
import * as S from './Cloud.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Solutions } from 'components/solutions';

const CloudScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>CLOUD</S.Title>
        </S.Hero>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_cca29298dbe547f4983e127aba1c1966/1080p/mp4/file.mp4"
          />
        </div>
      </S.Content>
      <Solutions />

      {/* <S.Contact_Intro>
        <S.Inner>
          <S.Typography_Contact>
            <h1>Transfira de forma segura e eficiente sistemas críticos para a computação em nuvem</h1>
            <p>Assegure a segurança e confiabilidade operacional de seus dados através de padrões elevados.</p>
          </S.Typography_Contact>
          <S.Action_Contact>
            <Link href={'/solutions/data-engineering'} draggable="false">
              Descubra os benefícios ao migrar para a computação em nuvem{' '}
            </Link>
          </S.Action_Contact>
        </S.Inner>
        <S.List>
          <S.Item>
            <p>Garantia de backup e segurança.</p>
          </S.Item>
          <S.Item>
            <p>Elimine os custos de manutenção de hardware.</p>
          </S.Item>
          <S.Item>
            <p>Aumente a escala de forma imediata.</p>
          </S.Item>
          <S.Item>
            <p>Pague somente pelos recursos utilizados.</p>
          </S.Item>
          <S.Item>
            <p>Inclui licenças de banco de dados (BD) e sistema operacional (SO).</p>
          </S.Item>
          <S.Item>
            <p>Economize até 80% nos custos totais de propriedade (TCO). .</p>
          </S.Item>
          <S.Item>
            <p>Consolide suas informações em um único sistema.</p>
          </S.Item>
        </S.List>
      </S.Contact_Intro> */}
    </S.Container>
  );
};

export default CloudScreen;
