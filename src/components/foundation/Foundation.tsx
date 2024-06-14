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

  const paragraph =
    'Fundada em 2013 em Blumenau/SC e mais de 700 projetos entregues, somos especializados em soluções de Engenharia de Dados e Transformação Digital , e nos dedicamos a transformar operações na “Era dos Dados”. Nossa expertise técnica e paixão por dados têm ajudado empresas a transformar essas informações em oportunidades tangíveis de crescimento , otimizando os ambientes de TI para entregas de soluções de alta performance.';

  return (
    <S.Component>
      <S.Container>
        <S.Card>
          <div className="line" />
          <Image src={company} alt="company" draggable="false" className='company' />
          <div id="image_container">
            <Image src={shadow} alt="shadow" draggable="false" />
          </div>
        </S.Card>
        <S.History>
          <p
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(
                /(2013|Blumenau|SC|700 projetos|Engenharia|Engenharia de Dados|Transformação Digital|oportunidades tangíveis|crescimento|alta performance)/g,
                '<strong>$1</strong>'
              ),
            }}
          />
        </S.History>
      </S.Container>
    </S.Component>
  );
};

export default Foundation;
