// Next
import Image from 'next/image';
import Link from 'next/link';

// React
import { useRef, useState, useEffect, Fragment } from 'react';

// Assets
import bg_hero from 'assets/components/bg_hero.png';
import next_prev from 'assets/icons/next_prev.svg';
import share from 'assets/icons/share.svg';
import banner_hero from 'assets/pages/home/banner_hero.png';

// Styles
import * as S from './Home.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Companys } from 'components/companys';

// Constants
import { dataCarrousel } from './Home.constants';

const HomeScreen = () => {
  const t = useTranslations();

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [functionCalled, setFunctionCalled] = useState<boolean>(false);

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex - 1 + dataCarrousel.length) % dataCarrousel.length);
    setFunctionCalled(true);
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex + 1) % dataCarrousel.length);
    setFunctionCalled(true);
  };

  const selectItem = (index: number) => {
    setCurrentSlideIndex(index);
    setFunctionCalled(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (functionCalled && carouselRef.current) {
            const children = carouselRef.current.children as HTMLCollectionOf<HTMLElement>;
            children[currentSlideIndex]?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'start',
            });
            setFunctionCalled(false);
          }
        }
      });
    }, options);

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      observer.observe(carouselElement);
    }

    return () => {
      if (carouselElement) {
        observer.unobserve(carouselElement);
      }
    };
  }, [currentSlideIndex, functionCalled]);

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <S.Title>
            <h1>
              OTIMIZE,
              <br />
              ACELERE,
              <br />
              ALCANCE!
            </h1>
          </S.Title>
          <S.Sub_Title>
            <h1>
              Talentos e parcerias para <span>elevar</span> sua <span>TI</span> e <br /> <span>impulsionar</span> seu
              <span>ROI.</span>
            </h1>
          </S.Sub_Title>
          <S.Action>
            <Link href={'/contact'} draggable="false">
              Fale com um consultor
            </Link>
          </S.Action>
        </S.Hero>
        <S.Container_Image>
          <Image src={bg_hero} alt="banner_hero" draggable="false" />
          <Image src={banner_hero} alt="banner_hero" priority objectFit="cover" draggable="false" />
        </S.Container_Image>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_03c50f8fe4a34cc297a984e483a282ef/1080p/mp4/file.mp4"
          />
        </div>
      </S.Content>
      <S.Solutions>
        <S.Gradient>
          <S.Title_Gradient>
            <h2>CONHEÇA NOSSAS</h2>
            <h1>SOLUÇÕES</h1>
            <S.Container_Share>
              <Image src={share} alt="share" draggable="false" />
            </S.Container_Share>
          </S.Title_Gradient>
        </S.Gradient>
        <S.Carrousel_Container>
          <S.Carousel>
            <S.Absolute_Btn_Left>
              <S.Btn onClick={prevSlide}>
                <Image src={next_prev} alt="prev" draggable="false" />
              </S.Btn>
            </S.Absolute_Btn_Left>
            <S.Carrousel_Inner
              ref={carouselRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {dataCarrousel.map((item, index) => (
                <S.Carrousel_Content
                  key={index}
                  style={{ display: currentSlideIndex === index ? '' : 'none' }}
                  width={item.max_width}
                  className={
                    currentSlideIndex === index
                      ? '' // Classe padrão para o slide atual
                      : currentSlideIndex > index
                        ? 'prev'
                        : 'next'
                  }
                >
                  <S.Wrapper>
                    <S.Typography_Carrousel>
                      <h1>{item.title}</h1>
                      <p>
                        {`${item.sub_title}`.split('\n').map((line, index, arr) => (
                          <Fragment key={index}>
                            {line}
                            {index < arr.length - 1 && <br />}
                          </Fragment>
                        ))}
                      </p>
                    </S.Typography_Carrousel>
                    <S.Button>
                      <Link href={item.action.url} draggable="false">
                        Saiba mais
                      </Link>
                    </S.Button>
                  </S.Wrapper>
                  <S.Container_Banner
                    right={item?.right}
                    left={item?.left}
                    top={item?.top}
                    topPng={item?.topPng}
                    rightPng={item?.rightPng}
                    leftPng={item?.leftPng}
                  >
                    <div>
                      <Image src={item.image.src} alt={item.image.alt} draggable="false" />
                      <Image src={bg_hero} alt="bg_hero" draggable="false" />
                    </div>
                  </S.Container_Banner>
                </S.Carrousel_Content>
              ))}
            </S.Carrousel_Inner>

            <S.Control>
              <ol>
                {dataCarrousel.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => selectItem(index)}
                    className={currentSlideIndex === index ? 'active' : ''}
                  />
                ))}
              </ol>
            </S.Control>
            <S.Absolute_Btn>
              <S.Btn onClick={nextSlide}>
                <Image src={next_prev} alt="next" draggable="false" />
              </S.Btn>
            </S.Absolute_Btn>
          </S.Carousel>
        </S.Carrousel_Container>
      </S.Solutions>
      <S.Contact_Intro>
        <S.Inner>
          <S.Typography_Contact>
            <h1>
              Conheça o <span>GUARDIÃO</span>,a ferramenta exclusiva de monitoramento.
            </h1>
          </S.Typography_Contact>
          <S.List>
            <S.Item>
              <p>Mopnitoramento técnico do seu ambiente 24h, 7 dias por semana.</p>
            </S.Item>
            <S.Item>
              <p>Com o foco na saúde do seu ambiente (Banco de dados, servidores e aplicações).</p>
            </S.Item>
            <S.Item>
              <p>Informação através de dashboard em tempo real e relatórios mensais.</p>
            </S.Item>
            <S.Item>
              <p>Mais de 400 ambientes já monitorados pela ferramenta.</p>
            </S.Item>
          </S.List>
          <div className="row">
            <S.Action_Contact>
              <Link href={'/contact'} draggable="false">
                Agende um teste
              </Link>
            </S.Action_Contact>
          </div>
        </S.Inner>
      </S.Contact_Intro>
      <Companys />
    </S.Container>
  );
};

export default HomeScreen;
