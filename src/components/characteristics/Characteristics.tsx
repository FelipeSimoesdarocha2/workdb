// Next
import Image from 'next/image';

// Styles
import * as S from './Characteristics.styles';

// i18n
import useTranslations from 'i18n';

// Constants
import { characteristics } from './Characteristics.constants';

const Characteristics = () => {
  const t = useTranslations();

  return (
    <S.Component>
      <S.Container>
        <S.Content>
          {characteristics.map((item, index) => (
            <S.Item key={index}>
              <S.Typography>
                <h1>
                  {item.title} <span> {item.sub_title}</span>
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description.replace(
                      /(Blumenau|SC|Ciudad de Mexico|México|Colonia|Alemanha|WorkDB|Brasil|segurança dos dados|LGPD)/g,
                      '<strong>$1</strong>'
                    ),
                  }}
                />
              </S.Typography>
              <S.Flag>
                {item.image.map((image, idx) => (
                  <Image key={idx} src={image.src} alt={image.alt} draggable="false" />
                ))}
              </S.Flag>
            </S.Item>
          ))}
        </S.Content>
        <div id="video_container">
          <div className="bg" />
          <video
            loop
            muted
            autoPlay
            src="https://video.wixstatic.com/video/11062b_3de8fc4100e6414ab42592cd0d6fe4cb/1080p/mp4/file.mp4"
          />
        </div>
      </S.Container>
    </S.Component>
  );
};

export default Characteristics;
