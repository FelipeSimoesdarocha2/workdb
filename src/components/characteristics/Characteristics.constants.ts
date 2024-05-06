// Assets
import security from 'assets/icons/security.svg';
import alemanha from 'assets/pages/about/alemanha.webp';
import brazil from 'assets/pages/about/brazil.webp';
import mexico from 'assets/pages/about/mexico.webp';

// Models
import { CharacteristicsProps } from './models';

const characteristics: CharacteristicsProps[] = [
    {
        title: 'PRESENÇA',
        sub_title: 'GLOBAL',
        description:
            'Nossa operação está localizada em Blumenau/SC, Ciudad de Mexico/México e Colonia/Alemanha. Em pontos geograficamente estratégicos, a WorkDB se consolida no mercado internacional como uma das principais empresas do Brasil, quando se fala de Dados',
        image: [
            {
                src: brazil,
                alt: 'aws',
            },
            {
                src: mexico,
                alt: 'mexico',
            },
            {
                src: alemanha,
                alt: 'alemanha',
            },
        ],
    },
    {
        title: 'SEGURANÇA DE',
        sub_title: 'DADOS',
        description:
            'Priorizamos a segurança dos dados, com total conformidade com a LGPD e outras normas globais, porque entendemos o qual valioso este quesito é para nossos clientes.',
        image: [
            {
                src: security,
                alt: 'security',
            },
        ],
    },
];

export { characteristics };
