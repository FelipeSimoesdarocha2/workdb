// Next
import { useRouter } from 'next/router';

// Styles
import * as S from './NotFound.styles';

// i18n
import useTranslations from 'i18n';

const NotFoundScreen = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <h1>{t('not_found.title')}</h1>
          <h2>{t('not_found.sub_title')}</h2>
          <p>{t('not_found.paragraph')}</p>
          <strong>{t('not_found.sub_paragraph')}</strong>
        </S.Typography>
        <S.Button onClick={() => router.push('/')}>
          <p>{t('not_found.action.label')}</p>
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundScreen;
