// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import banner_hero from 'assets/pages/guardian/banner_hero.webp';

// Styles
import * as S from './Monitoring.styles';

// i18n
import useTranslations from 'i18n';

const Monitoring = () => {
  const t = useTranslations();

  const paragraph =
    'O Guardião é uma plataforma de monitoramento contínuo com insights em tempo real, projetada para otimizar a saúde do seu ambiente tecnológico. Com funcionalidades que incluem visualização completa do seu stack, automação inteligente e relatórios mensais, o Guardião é parte integrante da família de soluções de TI da WorkDB. Ele pode ser integrado a uma ampla gama de bancos de dados, servidores e aplicações que compõem o seu ambiente.';

  return (
    <S.Component>
      <S.Container>
        <S.Title>Monitoramento Contínuo e Insights em Tempo Real</S.Title>
        <S.Content>
          <S.Typography>
            <p
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(
                  /(Guardião|tempo real|saúde|stack|inteligente|Guardião|WorkDB|bancos de dados|servidores e aplicações)/g,
                  '<strong>$1</strong>'
                ),
              }}
            />
          </S.Typography>
          <S.Container_Image>
            <Image src={bg_hero} alt="" />
            <Image src={banner_hero} alt="" />
          </S.Container_Image>
        </S.Content>
      </S.Container>
    </S.Component>
  );
};

export default Monitoring;
