// Next
import Image from 'next/image';

// React
import { useEffect, useState } from 'react';

// Assets
import next from 'assets/icons/next.svg';
import presentation from 'assets/icons/presentation.svg';

// Styles
import * as S from './Companys.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { companys } from './Companys.constants';

const Companys = () => {
  const t = useTranslations();

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? companys.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => {
      const newIndex = prevIndex === companys.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <S.Container>
      <S.Content>
        <Image src={presentation} width={39} alt="presentation" draggable="false" />
        <h1>NOSSAS CERTIFICAÇÕES</h1>
        <Image src={presentation} width={39} alt="presentation" draggable="false" />
      </S.Content>
      <S.Carrousel onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='wrapper'>
          <button aria-label="Anterior" onClick={prevSlide}>
            <Image src={next} alt="next" />
          </button>
          <S.Itens>
            {companys.map((innerArray, outerIndex) => (
              <S.Itens key={outerIndex} style={{ display: currentSlideIndex === outerIndex ? '' : 'none' }}>
                {innerArray.map((company, innerIndex) => (
                  <S.Item key={innerIndex}>
                    <Image src={company.src} alt={company.alt} />
                  </S.Item>
                ))}
              </S.Itens>
            ))}
          </S.Itens>
          <button aria-label="Próximo" onClick={nextSlide}>
            <Image src={next} alt="next" />
          </button>
        </div>
      </S.Carrousel>
    </S.Container>
  );
};

export default Companys;
