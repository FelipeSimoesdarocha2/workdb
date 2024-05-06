// Next
import Image from 'next/image';

// Assets
import company from 'assets/pages/about/company.webp';
import shadow from 'assets/pages/about/shadow.png';

// Styles
import * as S from './Foundation.styles';

// i18n
import useTranslations from 'i18n';

const Foundation = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Card>
          <div className="line" />
          <Image src={company} alt="company" />
          <div id="image_container">
            <Image src={shadow} alt="shadow" />
          </div>
        </S.Card>
        <S.History>
          <p>
            Fundada em <span>2013</span> em <span>Blumenau/SC</span> e mais de <span>700 projetos</span> entregues,
            somos especializados em soluções de <span> Engenharia de Dados</span> e <span> Transformação Digital</span>{' '}
            , e nos dedicamos a transformar operações na “Era dos Dados”. Nossa expertise técnica e paixão por dados têm
            ajudado empresas a transformar essas informações em <span> oportunidades tangíveis</span> de{' '}
            <span>crescimento</span> , otimizando os ambientes de TI para entregas de soluções de{' '}
            <span>alta performance.</span>
          </p>
        </S.History>
      </S.Container>
    </S.Component>
  );
};

export default Foundation;
