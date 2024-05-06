// Next
import Image from 'next/image';

// Assets
import shadow from 'assets/pages/about/shadow.png';
import startup from 'assets/pages/joinUs/startup.webp';

// Styles
import * as S from './Startup.styles';

// i18n
import useTranslations from 'i18n';

const Startup = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Card>
          <div className="line" />
          <Image src={startup} alt="startup" />
          <div id="image_container">
            <Image src={shadow} alt="shadow" />
          </div>
        </S.Card>
        <S.History>
          <h1>AQUI NA WORKDB</h1>
          <p>
            Valorizamos nossos colaboradores como peças fundamentais do nosso sucesso. Com responsabilidade e energia,
            nossos profissionais atuam em projetos tecnológicos inovadores. Integrados ao ambiente tecnológico,
            assumimos desafios com entusiasmo, promovendo uma cultura de constante busca por conhecimento.
          </p>
          <p>
            Se você busca fazer parte de uma equipe dinâmica, respeitada e inovadora, seu lugar é aqui. Junte-se a nós e
            seja protagonista na evolução da tecnologia.
          </p>
        </S.History>
      </S.Container>
    </S.Component>
  );
};

export default Startup;
