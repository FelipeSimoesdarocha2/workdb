// Next
import Image from 'next/image';

// Assets
import local from 'assets/pages/contact/local.png';
import map from 'assets/pages/contact/map.webp';

// Styles
import * as S from './Contact.styles';

// Formik
import { FormikProvider } from 'formik';

// Components
import { Input } from 'components/input';
import { Textarea } from 'components/textarea';

// Hook
import { useContact } from './useContact';

const ContactScreen = () => {
  const { t, formik, loading, disabled, onSubmit } = useContact();

  return (
    <S.Container>
      <S.Content>
        <S.Outer>
          <S.HyperText>
            <h2>ENTRE EM</h2>
            <h1>CONTATO</h1>
          </S.HyperText>
          <S.SubTitle>
            <h1>
              Fale conosco através do <text>formulário</text> ou via <text>Whatsapp</text> no canto inferior direito.
            </h1>
          </S.SubTitle>
        </S.Outer>
        <S.Form>
          <FormikProvider value={formik}>
            <S.Values>
              <Input
                id="name"
                key="name"
                type="text"
                title="Nome"
                placeholder=""
                required={true}
                data-testid="name"
                autocomplete="name"
                value={formik.values.name}
                onBlur={formik.handleBlur('name')}
                onChange={formik.handleChange('name')}
              />
              <Input
                id="phone"
                key="phone"
                type="tel"
                title="Telefone"
                placeholder=""
                data-testid="phone"
                autocomplete="phone"
                value={formik.values.phone}
                onBlur={formik.handleBlur('phone')}
                onChange={formik.handleChange('phone')}
              />
              <Input
                id="email"
                key="email"
                type="text"
                title="Email"
                placeholder=""
                required={true}
                data-testid="email"
                autocomplete="email"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChange={formik.handleChange('email')}
              />
              <Input
                id="company"
                key="company"
                type="text"
                title="Empresa"
                placeholder=""
                data-testid="company"
                autocomplete="company"
                value={formik.values.company}
                onBlur={formik.handleBlur('company')}
                onChange={formik.handleChange('company')}
              />
              <Textarea
                id="mensage"
                key="mensage"
                title="Mensagem"
                placeholder=""
                data-testid="mensage"
                autocomplete="mensage"
                value={formik.values.mensage}
                onBlur={formik.handleBlur('mensage')}
                onChange={formik.handleChange('mensage')}
              />
            </S.Values>
            <S.Action>
              <S.Button onClick={onSubmit} disabled={disabled}>
                {loading ? (
                  <p>carregando</p>
                ) : (
                  <>
                    <p>Enviar</p>
                  </>
                )}
              </S.Button>
            </S.Action>
          </FormikProvider>
        </S.Form>
      </S.Content>
      <S.Local>
        <S.Wrapper>
          <S.Typography>
            <S.Inner>
              <Image src={local} alt="local" draggable={false} />
              <S.Title>
                <h2>ONDE</h2>
                <h1>ESTAMOS</h1>
              </S.Title>
            </S.Inner>
            <S.Paragraph>
              <span>
                <h2>Conheça nossos</h2>
                <h1>escritórios.</h1>
              </span>
              <span>
                <h2>Estamos por</h2>
                <h1>toda parte!</h1>
              </span>
            </S.Paragraph>
          </S.Typography>
          <Image src={map} alt="map" draggable={false} priority />
        </S.Wrapper>
        <S.Maps>
          <S.Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7116.016832497116!2d-49.087639!3d-26.903228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1ece369f1ec5%3A0x8c82f6412dc8dded!2sWorkDB%20Data%20Business!5e0!3m2!1spt-BR!2sbr!4v1714343834262!5m2!1spt-BR!2sbr"
              width="327"
              height="237"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <h1>BRASIL</h1>
          </S.Map>
          <S.Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7526.785560227049!2d-99.171535!3d19.395428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff7230ae326f%3A0xbbecdbc52efcb342!2sAv.%20Insurgentes%20Sur%20674-PISO%204%20INT.%20A%2C%20Col%20del%20Valle%20Nte%2C%20Benito%20Ju%C3%A1rez%2C%2003103%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1spt-BR!2sbr!4v1714343847976!5m2!1spt-BR!2sbr"
              width="327"
              height="237"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1>MÉXICO</h1>
          </S.Map>
          <S.Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2513.643592758503!2d6.944694!3d50.948804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf250a41e2633f%3A0x5095c0dea6c05148!2sIm%20Mediapark%205%2C%2050670%20K%C3%B6ln%2C%20Alemanha!5e0!3m2!1spt-BR!2sbr!4v1714343867536!5m2!1spt-BR!2sbr"
              width="327"
              height="237"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1>ALEMANHA</h1>
          </S.Map>
        </S.Maps>
      </S.Local>
    </S.Container>
  );
};

export default ContactScreen;
