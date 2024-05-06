// Next
import { StaticImageData } from 'next/image';

// Assets
import cloud from 'assets/pages/home/cloud.png';
import data_engineering from 'assets/pages/home/data_engineering.png';
import guardian from 'assets/pages/home/guardian.png';
import infrastructure from 'assets/pages/home/infrastructure.png';
import software_factory from 'assets/pages/home/software_factory.png';

interface ContainerProps {
  title: string;
  sub_title: string;
  image: {
    alt: string;
    src: StaticImageData;
  };
  action: {
    url: string;
  };
  max_width: string;
  right?: string;
  top?: string;
  left?: string;
  topPng?: string;
  rightPng?: string;
  leftPng?: string;
}

const dataCarrousel: ContainerProps[] = [
  {
    title: 'Cloud',
    sub_title: 'Garanta a segurança e confiabilidade operacional de seus\ndados com padrões de excelência.',
    image: {
      src: cloud,
      alt: 'cloud',
    },
    action: {
      url: 'solutions/cloud',
    },
    max_width: '948px',
    right: '-20px',
    top: '-100px',
    topPng: '60px',
    rightPng: '0',
    leftPng: '0',
  },
  {
    title: 'Engenharia de Dados',
    sub_title:
      'Obtenha insights valiosos e dados relevantes. Desenvolvemos uma\narquitetura de dados eficiente para você.',
    image: {
      src: data_engineering,
      alt: 'data_engineering',
    },
    action: {
      url: '/solutions/data-engineering',
    },
    max_width: '898px',
    right: '0',
    top: '-90px',
    topPng: '147px',
    rightPng: '-42px',
  },
  {
    title: 'Fábrica de Software',
    sub_title:
      'Implemente soluções precisas com um time de especialistas.\nAsseguramos entregas rápidas e qualificadas.',
    image: {
      src: software_factory,
      alt: 'software_factory',
    },
    action: {
      url: '/solutions/software-factory',
    },
    max_width: '888px',
    right: '0',
    top: '-109px',
    topPng: '200px',
    rightPng: '-42px',
  },
  {
    title: 'Guardião',
    sub_title:
      'Garanta monitoramento contínuo e obtenha insights em tempo real.\nO Guardião oferece acompanhamento 24/7 através de um dashboard intuitivo.',
    image: {
      src: guardian,
      alt: 'guardian',
    },
    action: {
      url: '/solutions/guardian',
    },
    max_width: '838px',
    right: '0',
    left: '100px',
    top: '0',
    topPng: '40px',
    rightPng: '60px',
  },
  {
    title: 'Infraestrutura',
    sub_title: 'Estruture operações de TI ágeis, resilientes e escaláveis. Implantamos\nambientes on-premise ou cloud.',
    image: {
      src: infrastructure,
      alt: 'infrastructure',
    },
    action: {
      url: '/solutions/infrastructure',
    },
    max_width: '888px',
    left: '100px',
    top: '-100px',
    topPng: '220px',
    rightPng: '-100px',
  },
];

export { dataCarrousel };
