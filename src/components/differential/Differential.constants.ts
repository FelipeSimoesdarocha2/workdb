// Assests
import agreements from 'assets/pages/joinUs/agreements.webp';
import day_off from 'assets/pages/joinUs/day_off.webp';
import flexibility from 'assets/pages/joinUs/flexibility.webp';
import happy_hour from 'assets/pages/joinUs/happy_hour.webp';
import recommendation from 'assets/pages/joinUs/recommendation.webp';
import structure from 'assets/pages/joinUs/structure.webp';

// Models
import { DifferentialProps } from './models';

const differential: DifferentialProps[] = [
    {
        title: 'Convênios Especiais',
        description: 'Plano odontológico, restaurantes, ambientes de eventos, lazer e educação.',
        src: agreements,
    },
    {
        title: 'Flexibilidade de Horário',
        description: 'Horários alinhados com seu líder, presencial ou remoto.',
        src: flexibility,
    },
    {
        title: 'Estrutura da Sede',
        description:
            'Ambiente moderno com área de descanso equipada com videogame para momentos de descontração e interação entre o time.',
        src: structure,
    },
    {
        title: 'Day Off',
        description: 'Um dia de folga especial no mês do seu aniversário.',
        src: day_off,
    },
    {
        title: 'Indicação Premiada',
        description: 'Reconhecimento por indicar novos profissionais.',
        src: recommendation,
    },
    {
        title: 'Happy Hour',
        description: 'Momentos descontraídos para se conectar, relaxar e comemorar conquistas.',
        src: happy_hour,
    },
];

export { differential };
