// Assets
import aws from 'assets/partners/aws.webp';
import elastic from 'assets/partners/elastic.webp';
import microsoft from 'assets/partners/microsoft.webp';
import oracle from 'assets/partners/oracle.webp';

// Models
import { PartnersProps } from './models';

const partners: PartnersProps[] = [
    {
        image: {
            src: aws,
            alt: 'aws',
        },
        description:
            'As soluções em nuvem da AWS nos permitem oferecer serviços escaláveis e seguros, fortalecendo nossa competência em Segurança e Tecnologia em Nuvem.',
    },
    {
        image: {
            src: oracle,
            alt: 'oracle',
        },
        description:
            'Com o formato de terceirização de colaboradores, disponibilizamos recursos em todas as linguagens de programação para construir ou dar continuidade em projetos estabelecidos pelos clientes.',
    },
    {
        image: {
            src: elastic,
            alt: 'elastic',
        },
        description:
            'Utilizamos a tecnologia Elastic para fornecer soluções avançadas de pesquisa e análise de dados em tempo real, elevando a eficácia dos nossos serviços em Engenharia de Dados.',
    },
    {
        image: {
            src: microsoft,
            alt: 'microsoft',
        },
        description:
            'Com soluções como Azure e Microsoft 365, Microsoft é notável na promoção de eficiência e colaboração empresarial.',
    },
];

export { partners };
