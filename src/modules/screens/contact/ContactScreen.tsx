// Next
import Image from 'next/image';

// Assets
import local from 'assets/pages/contact/local.png';
import map from 'assets/pages/contact/map.webp';

// Styles
import * as S from './Contact.styles';

// i18n
import useTranslations from 'i18n';

const ContactScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Local>
        <S.Wrapper>
          <S.Typography>
            <S.Inner>
              <Image src={local} alt="local" draggable={false} />
              <S.Title>
                <h2>onde</h2>
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
          <Image src={map} alt="map" draggable={false} />
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
