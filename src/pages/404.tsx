// Next
import { GetStaticPropsContext } from 'next';

const NotFound = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <p>Esta pagina não existe</p>
      <button onClick={handleBack}>
        <p>voltar</p>
      </button>
    </div>
  );
};

export default NotFound;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
